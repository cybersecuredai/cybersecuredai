import type { Request, Response } from 'express';
import type { AuthenticatedRequest } from './auth';
import { z } from 'zod';

// CDC Format Compliance Schemas

// MMWR (Morbidity and Mortality Weekly Report) Format Schema
const MMWRDataSchema = z.object({
  mmwrWeek: z.number().min(1).max(53),
  mmwrYear: z.number().min(2000).max(2030),
  reportingArea: z.string().min(1),
  diseaseCondition: z.string().min(1),
  currentWeekCount: z.number().min(0),
  previousYearSameWeek: z.number().min(0),
  cumulativeYearToDate: z.number().min(0),
  cumulativePreviousYear: z.number().min(0),
  flagged: z.boolean().optional(),
  dataQuality: z.enum(['complete', 'incomplete', 'provisional']).default('complete')
});

// NNDSS (National Notifiable Diseases Surveillance System) Format Schema
const NNDSSDataSchema = z.object({
  caseId: z.string().regex(/^NNDSS-\d{4}-\d{6}$/), // Format: NNDSS-YYYY-XXXXXX
  conditionCode: z.string().min(1), // CDC condition code
  conditionName: z.string().min(1),
  reportingJurisdiction: z.string().length(2), // State/territory code
  eventDate: z.string().datetime(),
  reportDate: z.string().datetime(),
  ageGroup: z.enum(['<1', '1-4', '5-14', '15-24', '25-34', '35-44', '45-54', '55-64', '65-74', '75-84', '85+']),
  sex: z.enum(['M', 'F', 'U']), // Male, Female, Unknown
  race: z.array(z.string()).optional(),
  ethnicity: z.enum(['Hispanic', 'Non-Hispanic', 'Unknown']).optional(),
  county: z.string().optional(),
  state: z.string().length(2),
  country: z.string().length(3).default('USA'),
  imported: z.boolean().default(false),
  outbreak: z.boolean().default(false),
  labData: z.object({
    specimenType: z.string().optional(),
    testResult: z.enum(['Positive', 'Negative', 'Indeterminate', 'Not Done']).optional(),
    labName: z.string().optional()
  }).optional(),
  notes: z.string().optional()
});

// NEDSS (National Electronic Disease Surveillance System) Format Schema  
const NEDSSDataSchema = z.object({
  investigationId: z.string().regex(/^NEDSS-\d{4}-\d{8}$/), // Format: NEDSS-YYYY-XXXXXXXX
  phcId: z.string().optional(), // Public Health Case ID
  conditionCode: z.string().min(1),
  investigationStatus: z.enum(['Open', 'Closed', 'Pending', 'Discarded']),
  caseStatus: z.enum(['Confirmed', 'Probable', 'Suspect', 'Not a Case']),
  reportingSource: z.enum(['Laboratory', 'Healthcare Provider', 'Other']),
  jurisdictionCode: z.string().length(2),
  eventDate: z.string().datetime(),
  diagnosisDate: z.string().datetime().optional(),
  onsetDate: z.string().datetime().optional(),
  reportDate: z.string().datetime(),
  investigationStartDate: z.string().datetime().optional(),
  investigatorName: z.string().optional(),
  
  // Patient Demographics (PHI - will be redacted based on access level)
  patientId: z.string().optional(),
  birthDate: z.string().date().optional(),
  age: z.number().min(0).max(150).optional(),
  ageType: z.enum(['Years', 'Months', 'Days']).optional(),
  sex: z.enum(['M', 'F', 'U']),
  race: z.array(z.string()).optional(),
  ethnicity: z.enum(['Hispanic', 'Non-Hispanic', 'Unknown']).optional(),
  
  // Location Information
  residenceAddress: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    county: z.string().optional(),
    state: z.string().length(2),
    zipCode: z.string().optional(),
    country: z.string().length(3).default('USA')
  }).optional(),
  
  // Clinical Information
  hospitalized: z.boolean().optional(),
  hospitalizationDate: z.string().date().optional(),
  died: z.boolean().default(false),
  deathDate: z.string().date().optional(),
  
  // Laboratory Data
  laboratoryData: z.array(z.object({
    specimenId: z.string(),
    specimenType: z.string(),
    collectionDate: z.string().date(),
    testType: z.string(),
    result: z.string(),
    labName: z.string().optional(),
    labAddress: z.string().optional()
  })).optional(),
  
  // Contact Information
  contactInvestigation: z.boolean().default(false),
  contactCount: z.number().min(0).optional(),
  
  // Risk Factors
  riskFactors: z.array(z.string()).optional(),
  
  // Additional Notes
  investigationNotes: z.string().optional(),
  publicHealthActions: z.array(z.string()).optional()
});

// HAN (Health Alert Network) Format Schema
const HANAlertSchema = z.object({
  hanId: z.string().regex(/^HAN-\d{8}-\d{4}$/), // Format: HAN-YYYYMMDD-XXXX
  messageType: z.enum(['Health Alert', 'Health Advisory', 'Health Update', 'Info Service']),
  priority: z.enum(['High', 'Medium', 'Low', 'Emergency']),
  subject: z.string().min(1).max(100),
  summary: z.string().min(1).max(500),
  messageBody: z.string().min(1),
  
  // Audience and Distribution
  audience: z.array(z.enum([
    'Public Health Professionals',
    'Healthcare Providers', 
    'Laboratory Professionals',
    'Emergency Management',
    'General Public',
    'Media',
    'Government Officials'
  ])),
  distributionList: z.array(z.string()).optional(),
  
  // Timing Information
  issueDate: z.string().datetime(),
  expirationDate: z.string().datetime().optional(),
  urgency: z.enum(['Immediate', 'Expected', 'Future', 'Past']),
  
  // Authority and Source
  issuingAgency: z.string().min(1),
  authorityLevel: z.enum(['Federal', 'State', 'Local', 'Tribal']),
  contactPerson: z.string().optional(),
  contactPhone: z.string().optional(),
  contactEmail: z.string().email().optional(),
  
  // Content Details
  disease: z.string().optional(),
  location: z.object({
    geographic: z.array(z.string()).optional(),
    facilityType: z.array(z.string()).optional()
  }).optional(),
  
  // Actions and Recommendations
  recommendedActions: z.array(z.string()).optional(),
  reportingInstructions: z.string().optional(),
  
  // Attachments and References
  attachments: z.array(z.object({
    filename: z.string(),
    fileSize: z.number(),
    contentType: z.string()
  })).optional(),
  references: z.array(z.string()).optional(),
  
  // Status and Versioning
  messageStatus: z.enum(['Draft', 'Active', 'Cancelled', 'Superseded']),
  version: z.string().default('1.0'),
  supersedes: z.string().optional(), // Previous HAN ID if this supersedes another alert
  
  // CDC Validation
  cdcReviewRequired: z.boolean().default(false),
  cdcApprovalStatus: z.enum(['Pending', 'Approved', 'Rejected', 'Not Required']).default('Not Required')
});

/**
 * CDC Format Adapter Functions
 */

/**
 * Convert epidemiological data to MMWR format
 */
export function convertToMMWRFormat(epidData: any): any {
  try {
    const mmwrData = {
      mmwrWeek: getMMWRWeek(new Date(epidData.reportDate || epidData.timestamp)),
      mmwrYear: new Date(epidData.reportDate || epidData.timestamp).getFullYear(),
      reportingArea: epidData.geographicScope || epidData.jurisdiction || 'Unknown',
      diseaseCondition: epidData.diseaseCode || epidData.diseaseName || 'Unknown',
      currentWeekCount: epidData.caseCount || 1,
      previousYearSameWeek: epidData.historicalComparison?.previousYearSameWeek || 0,
      cumulativeYearToDate: epidData.cumulativeCount || epidData.caseCount || 1,
      cumulativePreviousYear: epidData.historicalComparison?.cumulativePreviousYear || 0,
      flagged: epidData.severity === 'critical' || epidData.severity === 'high',
      dataQuality: epidData.dataQuality || 'complete'
    };
    
    return MMWRDataSchema.parse(mmwrData);
  } catch (error) {
    throw new Error(`MMWR format conversion failed: ${error.message}`);
  }
}

/**
 * Convert public health incident to NNDSS format
 */
export function convertToNNDSSFormat(incident: any, patientData?: any): any {
  try {
    const nndssData = {
      caseId: generateNNDSSCaseId(incident.incidentId),
      conditionCode: incident.diseaseType || 'UNKNOWN',
      conditionName: incident.title || incident.description?.substring(0, 50) || 'Unknown Condition',
      reportingJurisdiction: incident.jurisdiction || incident.region?.substring(0, 2) || 'US',
      eventDate: incident.detectedAt || incident.createdAt,
      reportDate: incident.reportedAt || incident.createdAt,
      ageGroup: patientData?.ageGroup || categorizeAge(patientData?.age),
      sex: patientData?.sex || 'U',
      race: patientData?.race ? [patientData.race] : undefined,
      ethnicity: patientData?.ethnicity || 'Unknown',
      county: incident.county,
      state: incident.state || incident.region?.substring(0, 2) || 'US',
      country: 'USA',
      imported: incident.imported || false,
      outbreak: incident.incidentType === 'disease_outbreak',
      labData: incident.laboratoryData ? {
        specimenType: incident.laboratoryData.specimenType,
        testResult: incident.laboratoryData.result,
        labName: incident.laboratoryData.labName
      } : undefined,
      notes: incident.notes || incident.description
    };
    
    return NNDSSDataSchema.parse(nndssData);
  } catch (error) {
    throw new Error(`NNDSS format conversion failed: ${error.message}`);
  }
}

/**
 * Convert disease surveillance data to NEDSS format
 */
export function convertToNEDSSFormat(surveillance: any, investigationData?: any): any {
  try {
    const nedssData = {
      investigationId: generateNEDSSInvestigationId(surveillance.surveillanceId),
      phcId: surveillance.publicHealthCaseId,
      conditionCode: surveillance.diseaseCode,
      investigationStatus: surveillance.status === 'active' ? 'Open' : 'Closed',
      caseStatus: surveillance.caseClassification || 'Suspect',
      reportingSource: surveillance.reportingSource || 'Healthcare Provider',
      jurisdictionCode: surveillance.jurisdiction || 'US',
      eventDate: surveillance.onsetDate || surveillance.createdAt,
      diagnosisDate: surveillance.diagnosisDate,
      onsetDate: surveillance.onsetDate,
      reportDate: surveillance.reportDate || surveillance.createdAt,
      investigationStartDate: surveillance.investigationStartDate,
      investigatorName: surveillance.investigatorName,
      
      // Patient Demographics (will be redacted by PHI middleware)
      patientId: surveillance.patientId,
      birthDate: surveillance.patientBirthDate,
      age: surveillance.patientAge,
      ageType: 'Years',
      sex: surveillance.patientSex || 'U',
      race: surveillance.patientRace ? [surveillance.patientRace] : undefined,
      ethnicity: surveillance.patientEthnicity,
      
      // Location
      residenceAddress: surveillance.patientAddress ? {
        street: surveillance.patientAddress.street,
        city: surveillance.patientAddress.city,
        county: surveillance.patientAddress.county,
        state: surveillance.patientAddress.state,
        zipCode: surveillance.patientAddress.zipCode,
        country: 'USA'
      } : undefined,
      
      // Clinical Information
      hospitalized: surveillance.hospitalized,
      hospitalizationDate: surveillance.hospitalizationDate,
      died: surveillance.died || false,
      deathDate: surveillance.deathDate,
      
      // Laboratory Data
      laboratoryData: surveillance.laboratoryData ? [{
        specimenId: surveillance.laboratoryData.specimenId || 'UNKNOWN',
        specimenType: surveillance.laboratoryData.specimenType || 'Unknown',
        collectionDate: surveillance.laboratoryData.collectionDate || surveillance.createdAt,
        testType: surveillance.laboratoryData.testType || 'Unknown',
        result: surveillance.laboratoryData.result || 'Unknown',
        labName: surveillance.laboratoryData.labName,
        labAddress: surveillance.laboratoryData.labAddress
      }] : undefined,
      
      // Contact Investigation
      contactInvestigation: surveillance.contactTracingActive || false,
      contactCount: surveillance.averageContactsPerCase,
      
      // Risk Factors
      riskFactors: surveillance.riskFactors ? Array.isArray(surveillance.riskFactors) ? surveillance.riskFactors : [surveillance.riskFactors] : undefined,
      
      // Notes
      investigationNotes: surveillance.investigationNotes || surveillance.notes,
      publicHealthActions: surveillance.publicHealthActions ? Array.isArray(surveillance.publicHealthActions) ? surveillance.publicHealthActions : [surveillance.publicHealthActions] : undefined
    };
    
    return NEDSSDataSchema.parse(nedssData);
  } catch (error) {
    throw new Error(`NEDSS format conversion failed: ${error.message}`);
  }
}

/**
 * Convert public health alert to HAN format
 */
export function convertToHANFormat(alert: any): any {
  try {
    const hanData = {
      hanId: generateHANId(alert.alertId),
      messageType: mapAlertTypeToHAN(alert.alertType),
      priority: mapSeverityToHANPriority(alert.severity),
      subject: alert.title || alert.alertTitle,
      summary: alert.summary || alert.description?.substring(0, 500) || 'Public Health Alert',
      messageBody: alert.description || alert.message || 'Please refer to attached documentation.',
      
      audience: mapAudienceToHAN(alert.targetAudience) || ['Public Health Professionals'],
      distributionList: alert.distributionChannels,
      
      issueDate: alert.issuedAt || alert.createdAt,
      expirationDate: alert.expiresAt,
      urgency: mapSeverityToUrgency(alert.severity),
      
      issuingAgency: alert.issuingAgency || 'Local Public Health Department',
      authorityLevel: alert.authorityLevel || 'Local',
      contactPerson: alert.contactPerson,
      contactPhone: alert.contactPhone,
      contactEmail: alert.contactEmail,
      
      disease: alert.diseaseCondition || alert.relatedDisease,
      location: {
        geographic: alert.geographicScope ? [alert.geographicScope] : undefined,
        facilityType: alert.facilityTypes
      },
      
      recommendedActions: alert.recommendedActions ? Array.isArray(alert.recommendedActions) ? alert.recommendedActions : [alert.recommendedActions] : undefined,
      reportingInstructions: alert.reportingInstructions,
      
      attachments: alert.attachments,
      references: alert.references,
      
      messageStatus: alert.status === 'active' ? 'Active' : mapStatusToHAN(alert.status),
      version: alert.version || '1.0',
      supersedes: alert.supersedes,
      
      cdcReviewRequired: alert.severity === 'critical' || alert.alertType === 'emergency',
      cdcApprovalStatus: alert.cdcApprovalStatus || 'Not Required'
    };
    
    return HANAlertSchema.parse(hanData);
  } catch (error) {
    throw new Error(`HAN format conversion failed: ${error.message}`);
  }
}

// Helper Functions

function getMMWRWeek(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return Math.min(53, Math.max(1, Math.ceil((dayOfYear + startOfYear.getDay()) / 7)));
}

function generateNNDSSCaseId(incidentId: string): string {
  const year = new Date().getFullYear();
  const randomSuffix = Math.random().toString().substring(2, 8);
  return `NNDSS-${year}-${randomSuffix}`;
}

function generateNEDSSInvestigationId(surveillanceId: string): string {
  const year = new Date().getFullYear();
  const randomSuffix = Math.random().toString().substring(2, 10);
  return `NEDSS-${year}-${randomSuffix}`;
}

function generateHANId(alertId: string): string {
  const today = new Date();
  const dateStr = today.toISOString().substring(0, 10).replace(/-/g, '');
  const randomSuffix = Math.random().toString().substring(2, 6);
  return `HAN-${dateStr}-${randomSuffix}`;
}

function categorizeAge(age?: number): string {
  if (!age) return '<1';
  if (age < 1) return '<1';
  if (age <= 4) return '1-4';
  if (age <= 14) return '5-14';
  if (age <= 24) return '15-24';
  if (age <= 34) return '25-34';
  if (age <= 44) return '35-44';
  if (age <= 54) return '45-54';
  if (age <= 64) return '55-64';
  if (age <= 74) return '65-74';
  if (age <= 84) return '75-84';
  return '85+';
}

function mapAlertTypeToHAN(alertType: string): string {
  const mapping: Record<string, string> = {
    'emergency': 'Health Alert',
    'outbreak': 'Health Alert', 
    'advisory': 'Health Advisory',
    'update': 'Health Update',
    'information': 'Info Service'
  };
  return mapping[alertType?.toLowerCase()] || 'Health Alert';
}

function mapSeverityToHANPriority(severity: string): string {
  const mapping: Record<string, string> = {
    'critical': 'Emergency',
    'high': 'High',
    'medium': 'Medium',
    'low': 'Low'
  };
  return mapping[severity?.toLowerCase()] || 'Medium';
}

function mapSeverityToUrgency(severity: string): string {
  const mapping: Record<string, string> = {
    'critical': 'Immediate',
    'high': 'Expected',
    'medium': 'Future',
    'low': 'Future'
  };
  return mapping[severity?.toLowerCase()] || 'Future';
}

function mapAudienceToHAN(audience?: string[]): string[] {
  if (!audience) return ['Public Health Professionals'];
  
  const mapping: Record<string, string> = {
    'healthcare': 'Healthcare Providers',
    'public_health': 'Public Health Professionals',
    'laboratory': 'Laboratory Professionals',
    'emergency': 'Emergency Management',
    'public': 'General Public',
    'media': 'Media',
    'government': 'Government Officials'
  };
  
  return audience.map(a => mapping[a.toLowerCase()] || 'Public Health Professionals');
}

function mapStatusToHAN(status: string): string {
  const mapping: Record<string, string> = {
    'draft': 'Draft',
    'active': 'Active',
    'cancelled': 'Cancelled',
    'superseded': 'Superseded',
    'expired': 'Cancelled'
  };
  return mapping[status?.toLowerCase()] || 'Active';
}

// Export schemas for validation
export { MMWRDataSchema, NNDSSDataSchema, NEDSSDataSchema, HANAlertSchema };