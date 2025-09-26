import { 
  users, 
  threats, 
  files, 
  complianceReports, 
  incidents, 
  auditLogs,
  threatNotifications,
  packages,
  userSubscriptions,
  customComplianceFrameworks,
  customComplianceControls,
  subscribers,
  confirmationCodes,
  // HIPAA Compliance tables
  hipaaSecurityOfficers,
  hipaaPolicies,
  hipaaTraining,
  hipaaTrainingRecords,
  hipaaBusinessAssociates,
  hipaaWorkstationSecurity,
  hipaaMediaControls,
  hipaaFacilityAccess,
  hipaaSecureAuditLogs,
  hipaaEmergencyAccess,
  hipaaBreachIncidents,
  hipaaRiskAssessments,
  hipaaTimeBasedAccess,
  hipaaAccessRequests,
  hipaaEncryptionKeys,
  // Catalog system imports
  catalogCategories,
  bomComponents,
  catalogProducts,
  productBom,
  catalogServices,
  catalogSolutions,
  solutionComponents,
  pricingHistory,
  competitiveAnalysis,
  type User, 
  type InsertUser,
  type Threat,
  type InsertThreat,
  type File,
  type InsertFile,
  type ComplianceReport,
  type Incident,
  type InsertIncident,
  type AuditLog,
  type ThreatNotification,
  type InsertThreatNotification,
  type Package,
  type InsertPackage,
  type UserSubscription,
  type InsertUserSubscription,
  type CustomComplianceFramework,
  type InsertCustomComplianceFramework,
  type CustomComplianceControl,
  type InsertCustomComplianceControl,
  type Subscriber,
  type InsertSubscriber,
  type UpsertUser,
  type EchoSession,
  type InsertEchoSession,
  type EchoVisualization,
  type InsertEchoVisualization,
  type EchoInteraction,
  type InsertEchoInteraction,
  type EchoThreatModel,
  type InsertEchoThreatModel,
  type EchoAnalytics,
  type InsertEchoAnalytics,
  type SurgeDrone,
  type InsertSurgeDrone,
  type SurgeSwarmMission,
  type InsertSurgeSwarmMission,
  type SurgeDeployment,
  type InsertSurgeDeployment,
  type SurgeCoordination,
  type InsertSurgeCoordination,
  type SurgeAnalytics,
  type InsertSurgeAnalytics,
  // Public Health imports
  type PublicHealthIncident,
  type InsertPublicHealthIncident,
  type DiseaseSurveillance,
  type InsertDiseaseSurveillance,
  type ContactTracing,
  type InsertContactTracing,
  type HealthFacility,
  type InsertHealthFacility,
  type PublicHealthAlert,
  type InsertPublicHealthAlert,
  type EpidemiologicalData,
  type InsertEpidemiologicalData,
  // HIPAA Compliance types
  type HipaaSecurityOfficer,
  type InsertHipaaSecurityOfficer,
  type HipaaPolicy,
  type InsertHipaaPolicy,
  type HipaaTraining,
  type InsertHipaaTraining,
  type HipaaTrainingRecord,
  type InsertHipaaTrainingRecord,
  type HipaaBusinessAssociate,
  type InsertHipaaBusinessAssociate,
  type HipaaWorkstationSecurity,
  type InsertHipaaWorkstationSecurity,
  type HipaaMediaControl,
  type InsertHipaaMediaControl,
  type HipaaFacilityAccess,
  type InsertHipaaFacilityAccess,
  type HipaaSecureAuditLog,
  type InsertHipaaSecureAuditLog,
  type HipaaEmergencyAccess,
  type InsertHipaaEmergencyAccess,
  type HipaaBreachIncident,
  type InsertHipaaBreachIncident,
  type HipaaRiskAssessment,
  type InsertHipaaRiskAssessment,
  type HipaaTimeBasedAccess,
  type InsertHipaaTimeBasedAccess,
  type HipaaAccessRequest,
  type InsertHipaaAccessRequest,
  type HipaaEncryptionKey,
  type InsertHipaaEncryptionKey,
  // Catalog system types
  type CatalogCategory,
  type InsertCatalogCategory,
  type BomComponent,
  type InsertBomComponent,
  type CatalogProduct,
  type InsertCatalogProduct,
  type ProductBom,
  type InsertProductBom,
  type CatalogService,
  type InsertCatalogService,
  type CatalogSolution,
  type InsertCatalogSolution,
  type SolutionComponent,
  type InsertSolutionComponent,
  type PricingHistory,
  type InsertPricingHistory,
  type CompetitiveAnalysis,
  type InsertCompetitiveAnalysis
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<User>): Promise<User>;
  upsertUser(user: UpsertUser): Promise<User>;
  getUsers(): Promise<User[]>;
  
  // Package operations
  getPackages(): Promise<Package[]>;
  getPackage(id: string): Promise<Package | undefined>;
  createPackage(pkg: InsertPackage): Promise<Package>;
  updatePackage(id: string, updates: Partial<Package>): Promise<Package>;
  getPackagesByCategory(category: string): Promise<Package[]>;
  
  // User Subscription operations
  getUserSubscriptions(userId: string): Promise<UserSubscription[]>;
  getUserSubscription(userId: string, packageId: string): Promise<UserSubscription | undefined>;
  createUserSubscription(subscription: InsertUserSubscription): Promise<UserSubscription>;
  updateUserSubscription(id: string, updates: Partial<UserSubscription>): Promise<UserSubscription>;
  getUserActiveSubscriptions(userId: string): Promise<UserSubscription[]>;
  
  // Access Control operations
  checkUserAccess(userId: string, feature: string): Promise<boolean>;
  getUserAccessLevel(userId: string): Promise<string>;
  
  // Cypher AI operations
  getCypherSettings(): Promise<{ enabled: boolean; dailyReports: boolean; issueAlerts: boolean }>;
  updateCypherSettings(settings: { enabled?: boolean; dailyReports?: boolean; issueAlerts?: boolean }): Promise<void>;
  getCypherReports(limit?: number): Promise<any[]>;
  createCypherReport(report: any): Promise<any>;
  
  // Threat operations
  getThreats(): Promise<Threat[]>;
  createThreat(threat: InsertThreat): Promise<Threat>;
  updateThreat(id: string, updates: Partial<Threat>): Promise<Threat>;
  getThreatStats(): Promise<{ total: number; critical: number; resolved: number }>;
  
  // File operations
  getFiles(userId?: string): Promise<File[]>;
  createFile(file: InsertFile): Promise<File>;
  deleteFile(id: string): Promise<void>;
  
  // Compliance operations
  getComplianceReports(): Promise<ComplianceReport[]>;
  
  // Incident operations
  getIncidents(): Promise<Incident[]>;
  createIncident(incident: InsertIncident): Promise<Incident>;
  updateIncident(id: string, updates: Partial<Incident>): Promise<Incident>;
  
  // Audit operations
  createAuditLog(log: Omit<AuditLog, 'id' | 'timestamp'>): Promise<AuditLog>;
  
  // Threat Notification operations
  getThreatNotifications(userId?: string): Promise<ThreatNotification[]>;
  createThreatNotification(notification: InsertThreatNotification): Promise<ThreatNotification>;
  markNotificationAsRead(id: string): Promise<ThreatNotification>;
  acknowledgeNotification(id: string): Promise<ThreatNotification>;
  deleteNotification(id: string): Promise<void>;

  // Custom Compliance Framework operations (Enterprise Feature)
  getCustomComplianceFrameworks(organizationId: string): Promise<CustomComplianceFramework[]>;
  getCustomComplianceFramework(frameworkId: string): Promise<CustomComplianceFramework | undefined>;
  createCustomComplianceFramework(framework: InsertCustomComplianceFramework): Promise<CustomComplianceFramework>;
  updateCustomComplianceFramework(frameworkId: string, updates: Partial<CustomComplianceFramework>): Promise<CustomComplianceFramework>;
  deleteCustomComplianceFramework(frameworkId: string): Promise<void>;

  // Custom Compliance Control operations (Enterprise Feature)  
  getCustomComplianceControls(frameworkId: string): Promise<CustomComplianceControl[]>;
  getCustomComplianceControl(id: string): Promise<CustomComplianceControl | undefined>;
  createCustomComplianceControl(control: InsertCustomComplianceControl): Promise<CustomComplianceControl>;
  updateCustomComplianceControl(id: string, updates: Partial<CustomComplianceControl>): Promise<CustomComplianceControl>;
  deleteCustomComplianceControl(id: string): Promise<void>;

  // Subscriber operations
  getSubscribers(): Promise<Subscriber[]>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  updateSubscriberDownload(email: string, resourceId: string): Promise<void>;

  // Confirmation code operations
  createConfirmationCode(data: any): Promise<any>;
  verifyConfirmationCode(email: string, code: string): Promise<any | undefined>;

  // ===== ECHO Operations =====
  
  // ECHO Session operations
  getEchoSessions(userId?: string): Promise<EchoSession[]>;
  getEchoSession(sessionId: string): Promise<EchoSession | undefined>;
  createEchoSession(session: InsertEchoSession): Promise<EchoSession>;
  updateEchoSession(sessionId: string, updates: Partial<EchoSession>): Promise<EchoSession>;
  deleteEchoSession(sessionId: string): Promise<void>;
  
  // ECHO Visualization operations  
  getEchoVisualizations(userId?: string): Promise<EchoVisualization[]>;
  getEchoVisualization(visualizationId: string): Promise<EchoVisualization | undefined>;
  createEchoVisualization(visualization: InsertEchoVisualization): Promise<EchoVisualization>;
  updateEchoVisualization(visualizationId: string, updates: Partial<EchoVisualization>): Promise<EchoVisualization>;
  deleteEchoVisualization(visualizationId: string): Promise<void>;
  
  // ECHO Interaction operations
  getEchoInteractions(sessionId?: string): Promise<EchoInteraction[]>;
  getEchoInteraction(interactionId: string): Promise<EchoInteraction | undefined>;
  createEchoInteraction(interaction: InsertEchoInteraction): Promise<EchoInteraction>;
  updateEchoInteraction(interactionId: string, updates: Partial<EchoInteraction>): Promise<EchoInteraction>;
  deleteEchoInteraction(interactionId: string): Promise<void>;
  
  // ECHO Threat Model operations
  getEchoThreatModels(threatId?: string): Promise<EchoThreatModel[]>;
  getEchoThreatModel(modelId: string): Promise<EchoThreatModel | undefined>;
  createEchoThreatModel(threatModel: InsertEchoThreatModel): Promise<EchoThreatModel>;
  updateEchoThreatModel(modelId: string, updates: Partial<EchoThreatModel>): Promise<EchoThreatModel>;
  deleteEchoThreatModel(modelId: string): Promise<void>;
  
  // ECHO Analytics operations
  getEchoAnalytics(sessionId?: string, userId?: string): Promise<EchoAnalytics[]>;
  getEchoAnalytic(analyticId: string): Promise<EchoAnalytics | undefined>;
  createEchoAnalytic(analytic: InsertEchoAnalytics): Promise<EchoAnalytics>;
  updateEchoAnalytic(analyticId: string, updates: Partial<EchoAnalytics>): Promise<EchoAnalytics>;
  deleteEchoAnalytic(analyticId: string): Promise<void>;

  // ===== SURGE (Strategic Unified Response & Guardian Engine) Operations =====
  
  // SURGE Drone operations
  getSurgeDrones(organizationId?: string): Promise<SurgeDrone[]>;
  getSurgeDrone(droneId: string): Promise<SurgeDrone | undefined>;
  createSurgeDrone(drone: InsertSurgeDrone): Promise<SurgeDrone>;
  updateSurgeDrone(droneId: string, updates: Partial<SurgeDrone>): Promise<SurgeDrone>;
  deleteSurgeDrone(droneId: string): Promise<void>;
  getSurgeDronesByStatus(status: string, organizationId?: string): Promise<SurgeDrone[]>;
  getSurgeDronesBySwarmRole(role: string, organizationId?: string): Promise<SurgeDrone[]>;
  
  // SURGE Swarm Mission operations
  getSurgeSwarmMissions(organizationId?: string, status?: string): Promise<SurgeSwarmMission[]>;
  getSurgeSwarmMission(missionId: string): Promise<SurgeSwarmMission | undefined>;
  createSurgeSwarmMission(mission: InsertSurgeSwarmMission): Promise<SurgeSwarmMission>;
  updateSurgeSwarmMission(missionId: string, updates: Partial<SurgeSwarmMission>): Promise<SurgeSwarmMission>;
  deleteSurgeSwarmMission(missionId: string): Promise<void>;
  getActiveSurgeSwarmMissions(organizationId?: string): Promise<SurgeSwarmMission[]>;
  
  // SURGE Deployment operations
  getSurgeDeployments(organizationId?: string, status?: string): Promise<SurgeDeployment[]>;
  getSurgeDeployment(deploymentId: string): Promise<SurgeDeployment | undefined>;
  createSurgeDeployment(deployment: InsertSurgeDeployment): Promise<SurgeDeployment>;
  updateSurgeDeployment(deploymentId: string, updates: Partial<SurgeDeployment>): Promise<SurgeDeployment>;
  deleteSurgeDeployment(deploymentId: string): Promise<void>;
  getSurgeDeploymentsByDrone(droneId: string): Promise<SurgeDeployment[]>;
  getSurgeDeploymentsByMission(missionId: string): Promise<SurgeDeployment[]>;
  getActiveSurgeDeployments(organizationId?: string): Promise<SurgeDeployment[]>;
  
  // SURGE Coordination operations
  getSurgeCoordinations(organizationId?: string): Promise<SurgeCoordination[]>;
  getSurgeCoordination(coordinationId: string): Promise<SurgeCoordination | undefined>;
  createSurgeCoordination(coordination: InsertSurgeCoordination): Promise<SurgeCoordination>;
  updateSurgeCoordination(coordinationId: string, updates: Partial<SurgeCoordination>): Promise<SurgeCoordination>;
  deleteSurgeCoordination(coordinationId: string): Promise<void>;
  getSurgeCoordinationsByEvent(eventType: string, organizationId?: string): Promise<SurgeCoordination[]>;
  getSurgeCoordinationsBySwarm(swarmId: string): Promise<SurgeCoordination[]>;
  
  // SURGE Analytics operations
  getSurgeAnalytics(organizationId?: string, analyticsType?: string): Promise<SurgeAnalytics[]>;
  getSurgeAnalytic(analyticId: string): Promise<SurgeAnalytics | undefined>;
  createSurgeAnalytic(analytic: InsertSurgeAnalytics): Promise<SurgeAnalytics>;
  updateSurgeAnalytic(analyticId: string, updates: Partial<SurgeAnalytics>): Promise<SurgeAnalytics>;
  deleteSurgeAnalytic(analyticId: string): Promise<void>;
  getSurgeAnalyticsByCategory(category: string, organizationId?: string): Promise<SurgeAnalytics[]>;
  getSurgeAnalyticsByDateRange(startDate: Date, endDate: Date, organizationId?: string): Promise<SurgeAnalytics[]>;

  // ===== PUBLIC HEALTH OPERATIONS =====
  
  // Public Health Incidents operations
  getPublicHealthIncidents(filters?: { status?: string; severity?: string; region?: string; startDate?: Date; endDate?: Date }): Promise<PublicHealthIncident[]>;
  getPublicHealthIncident(id: string): Promise<PublicHealthIncident | undefined>;
  createPublicHealthIncident(incident: InsertPublicHealthIncident): Promise<PublicHealthIncident>;
  updatePublicHealthIncident(id: string, updates: Partial<PublicHealthIncident>): Promise<PublicHealthIncident>;
  deletePublicHealthIncident(id: string): Promise<void>;
  escalateIncidentToCDC(id: string, escalationData: any): Promise<PublicHealthIncident>;
  
  // Disease Surveillance operations
  getDiseaseSurveillanceRecords(filters?: { diseaseType?: string; status?: string; startDate?: Date; endDate?: Date }): Promise<DiseaseSurveillance[]>;
  getDiseaseSurveillanceRecord(id: string): Promise<DiseaseSurveillance | undefined>;
  createDiseaseSurveillanceRecord(surveillance: InsertDiseaseSurveillance): Promise<DiseaseSurveillance>;
  updateDiseaseSurveillanceRecord(id: string, updates: Partial<DiseaseSurveillance>): Promise<DiseaseSurveillance>;
  deleteDiseaseSurveillanceRecord(id: string): Promise<void>;
  getSurveillanceByDiseaseType(diseaseType: string): Promise<DiseaseSurveillance[]>;
  getDiseaseTrends(filters?: { diseaseType?: string; timeRange?: { start: Date; end: Date } }): Promise<any[]>;
  
  // Contact Tracing operations
  getContactTracingRecords(filters?: { incidentId?: string; status?: string; contactType?: string }): Promise<ContactTracing[]>;
  getContactTracingRecord(id: string): Promise<ContactTracing | undefined>;
  createContactTracingRecord(contact: InsertContactTracing): Promise<ContactTracing>;
  updateContactTracingRecord(id: string, updates: Partial<ContactTracing>): Promise<ContactTracing>;
  deleteContactTracingRecord(id: string): Promise<void>;
  notifyContact(id: string, notificationData: any): Promise<boolean>;
  getExposedContactsByIncident(incidentId: string): Promise<ContactTracing[]>;
  
  // ===== ENHANCED CONTACT TRACING SYSTEM OPERATIONS =====
  
  // Contact Tracing Location History operations
  getLocationHistory(filters?: { userId?: string; deviceId?: string; startDate?: Date; endDate?: Date; consentGiven?: boolean }): Promise<ContactTracingLocationHistory[]>;
  getLocationHistoryRecord(id: string): Promise<ContactTracingLocationHistory | undefined>;
  createLocationHistoryRecord(location: InsertContactTracingLocationHistory): Promise<ContactTracingLocationHistory>;
  updateLocationHistoryRecord(id: string, updates: Partial<ContactTracingLocationHistory>): Promise<ContactTracingLocationHistory>;
  deleteLocationHistoryRecord(id: string): Promise<void>;
  getLocationHistoryByDevice(deviceId: string, timeRange?: { start: Date; end: Date }): Promise<ContactTracingLocationHistory[]>;
  getLocationHistoryByUser(userId: string, timeRange?: { start: Date; end: Date }): Promise<ContactTracingLocationHistory[]>;
  cleanupExpiredLocationHistory(beforeDate?: Date): Promise<number>; // Returns number of records deleted
  anonymizeLocationHistory(beforeDate: Date): Promise<number>; // Returns number of records anonymized
  getLocationsByGeofence(latitude: number, longitude: number, radiusMeters: number, timeRange?: { start: Date; end: Date }): Promise<ContactTracingLocationHistory[]>;
  
  // Contact Proximity Detection operations
  getProximityDetections(filters?: { riskLevel?: string; detectionMethod?: string; startDate?: Date; endDate?: Date }): Promise<ContactProximityDetection[]>;
  getProximityDetection(id: string): Promise<ContactProximityDetection | undefined>;
  createProximityDetection(detection: InsertContactProximityDetection): Promise<ContactProximityDetection>;
  updateProximityDetection(id: string, updates: Partial<ContactProximityDetection>): Promise<ContactProximityDetection>;
  deleteProximityDetection(id: string): Promise<void>;
  getProximityDetectionsByDevice(deviceId: string, timeRange?: { start: Date; end: Date }): Promise<ContactProximityDetection[]>;
  getProximityDetectionsByUser(userId: string, timeRange?: { start: Date; end: Date }): Promise<ContactProximityDetection[]>;
  getProximityDetectionsByRisk(riskLevel: string, limit?: number): Promise<ContactProximityDetection[]>;
  processProximityAlgorithm(algorithmVersion: string, timeRange: { start: Date; end: Date }): Promise<ContactProximityDetection[]>;
  validateProximityDetection(id: string, validatedBy: string, validationStatus: string): Promise<ContactProximityDetection>;
  
  // Contact Tracing Notification Templates operations
  getNotificationTemplates(filters?: { templateCategory?: string; riskLevel?: string; templateType?: string; isActive?: boolean }): Promise<ContactTracingNotificationTemplate[]>;
  getNotificationTemplate(id: string): Promise<ContactTracingNotificationTemplate | undefined>;
  getNotificationTemplateByTemplateId(templateId: string): Promise<ContactTracingNotificationTemplate | undefined>;
  createNotificationTemplate(template: InsertContactTracingNotificationTemplate): Promise<ContactTracingNotificationTemplate>;
  updateNotificationTemplate(id: string, updates: Partial<ContactTracingNotificationTemplate>): Promise<ContactTracingNotificationTemplate>;
  deleteNotificationTemplate(id: string): Promise<void>;
  getTemplatesByAudience(targetAudience: string, languageCode?: string): Promise<ContactTracingNotificationTemplate[]>;
  getTemplatesByRiskLevel(riskLevel: string, templateType?: string): Promise<ContactTracingNotificationTemplate[]>;
  approveNotificationTemplate(id: string, approvedBy: string): Promise<ContactTracingNotificationTemplate>;
  incrementTemplateUsage(templateId: string): Promise<void>;
  
  // Contact Tracing Notification Logs operations
  getNotificationLogs(filters?: { recipientId?: string; deliveryStatus?: string; notificationType?: string; startDate?: Date; endDate?: Date }): Promise<ContactTracingNotificationLog[]>;
  getNotificationLog(id: string): Promise<ContactTracingNotificationLog | undefined>;
  createNotificationLog(log: InsertContactTracingNotificationLog): Promise<ContactTracingNotificationLog>;
  updateNotificationLog(id: string, updates: Partial<ContactTracingNotificationLog>): Promise<ContactTracingNotificationLog>;
  deleteNotificationLog(id: string): Promise<void>;
  getNotificationLogsByRecipient(recipientId: string, timeRange?: { start: Date; end: Date }): Promise<ContactTracingNotificationLog[]>;
  getNotificationLogsByTemplate(templateId: string, timeRange?: { start: Date; end: Date }): Promise<ContactTracingNotificationLog[]>;
  getFailedNotifications(retryEligible?: boolean): Promise<ContactTracingNotificationLog[]>;
  markNotificationDelivered(notificationId: string, deliveredTimestamp: Date, externalResponse?: any): Promise<ContactTracingNotificationLog>;
  markNotificationFailed(notificationId: string, errorCode: string, errorMessage: string): Promise<ContactTracingNotificationLog>;
  recordNotificationEngagement(notificationId: string, engagementType: string, timestamp: Date): Promise<ContactTracingNotificationLog>;
  escalateNotification(notificationId: string, escalatedTo: string, escalationReason: string): Promise<ContactTracingNotificationLog>;
  
  // Contact Tracing Privacy Consent operations
  getPrivacyConsents(filters?: { userId?: string; consentStatus?: string; consentType?: string; startDate?: Date; endDate?: Date }): Promise<ContactTracingPrivacyConsent[]>;
  getPrivacyConsent(id: string): Promise<ContactTracingPrivacyConsent | undefined>;
  getPrivacyConsentByUser(userId: string): Promise<ContactTracingPrivacyConsent | undefined>;
  getPrivacyConsentByDevice(deviceId: string): Promise<ContactTracingPrivacyConsent | undefined>;
  createPrivacyConsent(consent: InsertContactTracingPrivacyConsent): Promise<ContactTracingPrivacyConsent>;
  updatePrivacyConsent(id: string, updates: Partial<ContactTracingPrivacyConsent>): Promise<ContactTracingPrivacyConsent>;
  deletePrivacyConsent(id: string): Promise<void>;
  withdrawConsent(userId: string, withdrawalReason: string, withdrawalMethod: string): Promise<ContactTracingPrivacyConsent>;
  verifyConsent(id: string, verifiedBy: string): Promise<ContactTracingPrivacyConsent>;
  getConsentsByExpiry(beforeDate: Date): Promise<ContactTracingPrivacyConsent[]>;
  recordDataSubjectRequest(userId: string, requestType: string, requestData: any): Promise<ContactTracingPrivacyConsent>;
  getMinorConsents(parentGuardianId?: string): Promise<ContactTracingPrivacyConsent[]>;
  
  // ===== DATA RETENTION AND PRIVACY MANAGEMENT OPERATIONS =====
  
  // Enhanced data retention operations for compliance
  cleanupExpiredContactTracingRecords?(beforeDate: Date): Promise<number>;
  cleanupExpiredProximityDetections?(beforeDate: Date): Promise<number>;
  cleanupExpiredNotificationLogs?(beforeDate: Date): Promise<number>;
  
  // Consent withdrawal data deletion operations
  deleteUserLocationHistory?(userId: string): Promise<number>;
  deleteUserContactTracingRecords?(userId: string): Promise<number>;
  deleteUserNotifications?(userId: string): Promise<number>;
  deleteUserProximityDetections?(userId: string): Promise<number>;
  markConsentWithdrawn?(userId: string, withdrawalReason: string): Promise<void>;
  
  // Compliance monitoring and reporting operations
  getOverdueLocationHistoryRecords?(retentionDays: number): Promise<number>;
  getOverdueContactTracingRecords?(retentionDays: number): Promise<number>;
  getRecentConsentWithdrawals?(days: number): Promise<number>;
  
  // Contact Tracing Advanced Analytics operations
  getContactTracingMetrics(timeRange: { start: Date; end: Date }, filters?: any): Promise<any>;
  generateContactTracingReport(reportType: string, parameters: any): Promise<any>;
  getExposureRiskAnalysis(userId: string, timeRange?: { start: Date; end: Date }): Promise<any>;
  getContactNetworkAnalysis(indexCaseId: string, degreeOfSeparation?: number): Promise<any>;
  getLocationClusterAnalysis(timeRange: { start: Date; end: Date }, radiusMeters?: number): Promise<any>;
  getNotificationEffectivenessMetrics(campaignId?: string, timeRange?: { start: Date; end: Date }): Promise<any>;
  getPrivacyComplianceReport(timeRange: { start: Date; end: Date }): Promise<any>;
  
  // Health Facilities operations
  getHealthFacilities(filters?: { facilityType?: string; status?: string; region?: string }): Promise<HealthFacility[]>;
  getHealthFacility(id: string): Promise<HealthFacility | undefined>;
  createHealthFacility(facility: InsertHealthFacility): Promise<HealthFacility>;
  updateHealthFacility(id: string, updates: Partial<HealthFacility>): Promise<HealthFacility>;
  deleteHealthFacility(id: string): Promise<void>;
  getRegionalCapacityOverview(region?: string): Promise<any>;
  activateEmergencyProtocols(id: string, protocols: any): Promise<HealthFacility>;
  
  // Public Health Alerts operations
  getPublicHealthAlerts(filters?: { alertType?: string; severity?: string; status?: string }): Promise<PublicHealthAlert[]>;
  getPublicHealthAlert(id: string): Promise<PublicHealthAlert | undefined>;
  createPublicHealthAlert(alert: InsertPublicHealthAlert): Promise<PublicHealthAlert>;
  updatePublicHealthAlert(id: string, updates: Partial<PublicHealthAlert>): Promise<PublicHealthAlert>;
  deletePublicHealthAlert(id: string): Promise<void>;
  broadcastAlert(id: string, channels: string[]): Promise<boolean>;
  
  // Epidemiological Data operations
  getEpidemiologicalData(filters?: { dataType?: string; diseaseCode?: string; geographicScope?: string; startDate?: Date; endDate?: Date }): Promise<EpidemiologicalData[]>;
  getEpidemiologicalDataRecord(id: string): Promise<EpidemiologicalData | undefined>;
  createEpidemiologicalData(data: InsertEpidemiologicalData): Promise<EpidemiologicalData>;
  updateEpidemiologicalData(id: string, updates: Partial<EpidemiologicalData>): Promise<EpidemiologicalData>;
  deleteEpidemiologicalData(id: string): Promise<void>;
  generateStatisticalReports(filters?: any): Promise<any[]>;
  getMMWRData(week: number, year: number): Promise<EpidemiologicalData[]>;
  getPopulationHealthTrends(filters?: any): Promise<any[]>;
  generateCDCReport(filters?: any): Promise<any>;

  // ===== HIPAA COMPLIANCE OPERATIONS =====
  
  // HIPAA Security Officer operations
  getSecurityOfficers(organizationId: string): Promise<HipaaSecurityOfficer[]>;
  getSecurityOfficer(id: string): Promise<HipaaSecurityOfficer | undefined>;
  createSecurityOfficer(officer: InsertHipaaSecurityOfficer): Promise<HipaaSecurityOfficer>;
  updateSecurityOfficer(id: string, updates: Partial<HipaaSecurityOfficer>): Promise<HipaaSecurityOfficer>;
  deleteSecurityOfficer(id: string): Promise<void>;
  getActiveSecurityOfficers(organizationId: string): Promise<HipaaSecurityOfficer[]>;
  findActiveSecurityOfficer(organizationId: string, officerType: string, designation?: string): Promise<HipaaSecurityOfficer | undefined>;
  
  // HIPAA Policy operations  
  getHipaaPolicies(organizationId: string, status?: string): Promise<HipaaPolicy[]>;
  getHipaaPolicyById(policyId: string): Promise<HipaaPolicy | undefined>;
  createHipaaPolicy(policy: InsertHipaaPolicy): Promise<HipaaPolicy>;
  updateHipaaPolicy(policyId: string, updates: Partial<HipaaPolicy>): Promise<HipaaPolicy>;
  deleteHipaaPolicy(policyId: string): Promise<void>;
  getNextPolicySequence(organizationId: string, category: string): Promise<number>;
  
  // HIPAA Training operations
  getHipaaTrainings(organizationId: string, status?: string): Promise<HipaaTraining[]>;
  getHipaaTrainingById(trainingId: string): Promise<HipaaTraining | undefined>;
  createHipaaTraining(training: InsertHipaaTraining): Promise<HipaaTraining>;
  updateHipaaTraining(id: string, updates: Partial<HipaaTraining>): Promise<HipaaTraining>;
  deleteHipaaTraining(id: string): Promise<void>;
  getNextTrainingSequence(organizationId: string, trainingType: string): Promise<number>;
  
  // HIPAA Training Record operations
  getTrainingRecords(organizationId: string, userId?: string, status?: string): Promise<HipaaTrainingRecord[]>;
  getTrainingRecord(id: string): Promise<HipaaTrainingRecord | undefined>;
  createTrainingRecord(record: InsertHipaaTrainingRecord): Promise<HipaaTrainingRecord>;
  updateTrainingRecord(id: string, updates: Partial<HipaaTrainingRecord>): Promise<HipaaTrainingRecord>;
  deleteTrainingRecord(id: string): Promise<void>;
  bulkCreateTrainingRecords(records: InsertHipaaTrainingRecord[]): Promise<HipaaTrainingRecord[]>;
  getTrainingComplianceStats(organizationId: string): Promise<{
    totalUsers: number;
    compliantUsers: number;
    overdueUsers: number;
    upcomingDeadlines: any[];
  }>;
  
  // HIPAA Business Associate operations
  getBusinessAssociates(organizationId: string, status?: string): Promise<HipaaBusinessAssociate[]>;
  getBusinessAssociateById(baId: string): Promise<HipaaBusinessAssociate | undefined>;
  createBusinessAssociate(ba: InsertHipaaBusinessAssociate): Promise<HipaaBusinessAssociate>;
  updateBusinessAssociate(baId: string, updates: Partial<HipaaBusinessAssociate>): Promise<HipaaBusinessAssociate>;
  deleteBusinessAssociate(baId: string): Promise<void>;
  getNextBASequence(organizationId: string): Promise<number>;
  
  // HIPAA Workstation Security operations
  getWorkstationSecurity(organizationId: string, status?: string): Promise<HipaaWorkstationSecurity[]>;
  getWorkstationSecurityById(id: string): Promise<HipaaWorkstationSecurity | undefined>;
  createWorkstationSecurity(workstation: InsertHipaaWorkstationSecurity): Promise<HipaaWorkstationSecurity>;
  updateWorkstationSecurity(id: string, updates: Partial<HipaaWorkstationSecurity>): Promise<HipaaWorkstationSecurity>;
  deleteWorkstationSecurity(id: string): Promise<void>;
  
  // HIPAA Media Controls operations
  getMediaControls(organizationId: string, status?: string): Promise<HipaaMediaControl[]>;
  getMediaControlById(id: string): Promise<HipaaMediaControl | undefined>;
  createMediaControl(media: InsertHipaaMediaControl): Promise<HipaaMediaControl>;
  updateMediaControl(id: string, updates: Partial<HipaaMediaControl>): Promise<HipaaMediaControl>;
  deleteMediaControl(id: string): Promise<void>;
  
  // HIPAA Facility Access operations
  getFacilityAccess(organizationId: string, status?: string): Promise<HipaaFacilityAccess[]>;
  getFacilityAccessById(id: string): Promise<HipaaFacilityAccess | undefined>;
  createFacilityAccess(facility: InsertHipaaFacilityAccess): Promise<HipaaFacilityAccess>;
  updateFacilityAccess(id: string, updates: Partial<HipaaFacilityAccess>): Promise<HipaaFacilityAccess>;
  deleteFacilityAccess(id: string): Promise<void>;
  
  // HIPAA Secure Audit Log operations
  getSecureAuditLogs(organizationId: string, filters?: { userId?: string; action?: string; resource?: string; startDate?: Date; endDate?: Date }): Promise<HipaaSecureAuditLog[]>;
  getSecureAuditLog(id: string): Promise<HipaaSecureAuditLog | undefined>;
  createSecureAuditLog(auditLog: InsertHipaaSecureAuditLog): Promise<HipaaSecureAuditLog>;
  verifyAuditLogIntegrity(chainHash: string): Promise<boolean>;
  
  // HIPAA Emergency Access operations
  getEmergencyAccess(organizationId: string, status?: string): Promise<HipaaEmergencyAccess[]>;
  getEmergencyAccessById(id: string): Promise<HipaaEmergencyAccess | undefined>;
  createEmergencyAccess(access: InsertHipaaEmergencyAccess): Promise<HipaaEmergencyAccess>;
  updateEmergencyAccess(id: string, updates: Partial<HipaaEmergencyAccess>): Promise<HipaaEmergencyAccess>;
  deleteEmergencyAccess(id: string): Promise<void>;
  
  // HIPAA Breach Incident operations
  getBreachIncidents(organizationId: string, status?: string): Promise<HipaaBreachIncident[]>;
  getBreachIncidentById(id: string): Promise<HipaaBreachIncident | undefined>;
  createBreachIncident(incident: InsertHipaaBreachIncident): Promise<HipaaBreachIncident>;
  updateBreachIncident(id: string, updates: Partial<HipaaBreachIncident>): Promise<HipaaBreachIncident>;
  deleteBreachIncident(id: string): Promise<void>;
  
  // HIPAA Risk Assessment operations
  getRiskAssessments(organizationId: string, status?: string): Promise<HipaaRiskAssessment[]>;
  getRiskAssessmentById(id: string): Promise<HipaaRiskAssessment | undefined>;
  createRiskAssessment(assessment: InsertHipaaRiskAssessment): Promise<HipaaRiskAssessment>;
  updateRiskAssessment(id: string, updates: Partial<HipaaRiskAssessment>): Promise<HipaaRiskAssessment>;
  deleteRiskAssessment(id: string): Promise<void>;
  
  // HIPAA Time-based Access operations
  getTimeBasedAccess(organizationId: string, userId?: string): Promise<HipaaTimeBasedAccess[]>;
  getTimeBasedAccessById(id: string): Promise<HipaaTimeBasedAccess | undefined>;
  createTimeBasedAccess(access: InsertHipaaTimeBasedAccess): Promise<HipaaTimeBasedAccess>;
  updateTimeBasedAccess(id: string, updates: Partial<HipaaTimeBasedAccess>): Promise<HipaaTimeBasedAccess>;
  deleteTimeBasedAccess(id: string): Promise<void>;
  
  // HIPAA Access Request operations
  getAccessRequests(organizationId: string, status?: string): Promise<HipaaAccessRequest[]>;
  getAccessRequestById(id: string): Promise<HipaaAccessRequest | undefined>;
  createAccessRequest(request: InsertHipaaAccessRequest): Promise<HipaaAccessRequest>;
  updateAccessRequest(id: string, updates: Partial<HipaaAccessRequest>): Promise<HipaaAccessRequest>;
  deleteAccessRequest(id: string): Promise<void>;
  
  // HIPAA Encryption Key operations
  getEncryptionKeys(organizationId: string, status?: string): Promise<HipaaEncryptionKey[]>;
  getEncryptionKeyById(id: string): Promise<HipaaEncryptionKey | undefined>;
  createEncryptionKey(key: InsertHipaaEncryptionKey): Promise<HipaaEncryptionKey>;
  updateEncryptionKey(id: string, updates: Partial<HipaaEncryptionKey>): Promise<HipaaEncryptionKey>;
  deleteEncryptionKey(id: string): Promise<void>;

  // ===== CATALOG SYSTEM OPERATIONS =====
  
  // Catalog Category operations
  getCatalogCategories(categoryType?: string): Promise<CatalogCategory[]>;
  getCatalogCategory(id: string): Promise<CatalogCategory | undefined>;
  createCatalogCategory(category: InsertCatalogCategory): Promise<CatalogCategory>;
  updateCatalogCategory(id: string, updates: Partial<CatalogCategory>): Promise<CatalogCategory>;
  deleteCatalogCategory(id: string): Promise<void>;
  
  // BOM Component operations  
  getBomComponents(): Promise<BomComponent[]>;
  getBomComponent(id: string): Promise<BomComponent | undefined>;
  createBomComponent(component: InsertBomComponent): Promise<BomComponent>;
  updateBomComponent(id: string, updates: Partial<BomComponent>): Promise<BomComponent>;
  deleteBomComponent(id: string): Promise<void>;
  getBomComponentsByType(componentType: string): Promise<BomComponent[]>;
  
  // Catalog Product operations
  getCatalogProducts(categoryId?: string): Promise<CatalogProduct[]>;
  getCatalogProduct(id: string): Promise<CatalogProduct | undefined>;
  getCatalogProductByCode(productCode: string): Promise<CatalogProduct | undefined>;
  createCatalogProduct(product: InsertCatalogProduct): Promise<CatalogProduct>;
  updateCatalogProduct(id: string, updates: Partial<CatalogProduct>): Promise<CatalogProduct>;
  deleteCatalogProduct(id: string): Promise<void>;
  getProductsWithBom(): Promise<(CatalogProduct & { bom: (ProductBom & { component: BomComponent })[] })[]>;
  
  // Product BOM operations
  getProductBom(productId: string): Promise<(ProductBom & { component: BomComponent })[]>;
  addProductBomComponent(productBom: InsertProductBom): Promise<ProductBom>;
  updateProductBomComponent(id: string, updates: Partial<ProductBom>): Promise<ProductBom>;
  removeProductBomComponent(id: string): Promise<void>;
  
  // Catalog Service operations
  getCatalogServices(categoryId?: string): Promise<CatalogService[]>;
  getCatalogService(id: string): Promise<CatalogService | undefined>;
  getCatalogServiceByCode(serviceCode: string): Promise<CatalogService | undefined>;
  createCatalogService(service: InsertCatalogService): Promise<CatalogService>;
  updateCatalogService(id: string, updates: Partial<CatalogService>): Promise<CatalogService>;
  deleteCatalogService(id: string): Promise<void>;
  getServicesByType(serviceType: string): Promise<CatalogService[]>;
  
  // Catalog Solution operations
  getCatalogSolutions(categoryId?: string): Promise<CatalogSolution[]>;
  getCatalogSolution(id: string): Promise<CatalogSolution | undefined>;
  getCatalogSolutionByCode(solutionCode: string): Promise<CatalogSolution | undefined>;
  createCatalogSolution(solution: InsertCatalogSolution): Promise<CatalogSolution>;
  updateCatalogSolution(id: string, updates: Partial<CatalogSolution>): Promise<CatalogSolution>;
  deleteCatalogSolution(id: string): Promise<void>;
  getSolutionsWithComponents(): Promise<(CatalogSolution & { components: SolutionComponent[] })[]>;
  
  // Solution Component operations
  getSolutionComponents(solutionId: string): Promise<SolutionComponent[]>;
  addSolutionComponent(component: InsertSolutionComponent): Promise<SolutionComponent>;
  updateSolutionComponent(id: string, updates: Partial<SolutionComponent>): Promise<SolutionComponent>;
  removeSolutionComponent(id: string): Promise<void>;
  
  // Pricing History operations
  getPricingHistory(entityType: string, entityId: string): Promise<PricingHistory[]>;
  createPricingHistoryEntry(entry: InsertPricingHistory): Promise<PricingHistory>;
  
  // Competitive Analysis operations
  getCompetitiveAnalysis(): Promise<CompetitiveAnalysis[]>;
  getCompetitiveAnalysisForProduct(productName: string): Promise<CompetitiveAnalysis[]>;
  createCompetitiveAnalysis(analysis: InsertCompetitiveAnalysis): Promise<CompetitiveAnalysis>;
  updateCompetitiveAnalysis(id: string, updates: Partial<CompetitiveAnalysis>): Promise<CompetitiveAnalysis>;
  deleteCompetitiveAnalysis(id: string): Promise<void>;
  
  // Catalog Analytics and Reporting
  getCatalogMetrics(): Promise<{
    totalProducts: number;
    totalServices: number;
    totalSolutions: number;
    averageProductMargin: number;
    averageServiceMargin: number;
    totalCatalogValue: number;
  }>;
  
  getCatalogReport(reportType: 'pricing' | 'margins' | 'competitive' | 'bom'): Promise<any>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private threats: Map<string, Threat> = new Map();
  private files: Map<string, File> = new Map();
  private complianceReports: Map<string, ComplianceReport> = new Map();
  private incidents: Map<string, Incident> = new Map();
  private auditLogs: Map<string, AuditLog> = new Map();
  private threatNotifications: Map<string, ThreatNotification> = new Map();
  private packages: Map<string, Package> = new Map();
  private userSubscriptions: Map<string, UserSubscription> = new Map();
  private customComplianceFrameworks: Map<string, CustomComplianceFramework> = new Map();
  private customComplianceControls: Map<string, CustomComplianceControl> = new Map();
  private subscribers: Map<string, Subscriber> = new Map();
  private confirmationCodes: Map<string, any> = new Map();
  private cypherSettings = { enabled: true, dailyReports: true, issueAlerts: true };
  private cypherReports: Map<string, any> = new Map();
  
  // ECHO Storage Maps
  private cypherhumSessions: Map<string, CypherhumSession> = new Map();
  private cypherhumVisualizations: Map<string, CypherhumVisualization> = new Map();
  private cypherhumInteractions: Map<string, CypherhumInteraction> = new Map();
  private cypherhumThreatModels: Map<string, CypherhumThreatModel> = new Map();
  private cypherhumAnalytics: Map<string, CypherhumAnalytics> = new Map();

  // SURGE Storage Maps
  private surgeDrones: Map<string, SurgeDrone> = new Map();
  private surgeSwarmMissions: Map<string, SurgeSwarmMission> = new Map();
  private surgeDeployments: Map<string, SurgeDeployment> = new Map();
  private surgeCoordinations: Map<string, SurgeCoordination> = new Map();
  private surgeAnalytics: Map<string, SurgeAnalytics> = new Map();

  // HIPAA Storage Maps
  private hipaaWorkstationSecurity: Map<string, HipaaWorkstationSecurity> = new Map();
  private hipaaMediaControls: Map<string, HipaaMediaControl> = new Map();
  private hipaaFacilityAccess: Map<string, HipaaFacilityAccess> = new Map();

  // Catalog System Storage Maps
  private catalogCategories: Map<string, CatalogCategory> = new Map();
  private bomComponents: Map<string, BomComponent> = new Map();
  private catalogProducts: Map<string, CatalogProduct> = new Map();
  private productBom: Map<string, ProductBom> = new Map();
  private catalogServices: Map<string, CatalogService> = new Map();
  private catalogSolutions: Map<string, CatalogSolution> = new Map();
  private solutionComponents: Map<string, SolutionComponent> = new Map();
  private pricingHistory: Map<string, PricingHistory> = new Map();
  private competitiveAnalysis: Map<string, CompetitiveAnalysis> = new Map();

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    // Initialize with sample admin user
    const adminUser: User = {
      id: "admin-1",
      email: "admin@cybersecure.ai",
      passwordHash: null,
      firstName: "Alex",
      lastName: "Morgan",
      role: "admin",
      organization: "CyberSecured AI",
      profileImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      isActive: true,
      lastLogin: new Date(),
      mfaEnabled: true,
      mfaMethod: "biometric",
      biometricEnabled: true,
      digitalKeyEnabled: false,
      totpEnabled: false,
      hardwareKeyEnabled: false,
      totpSecret: null,
      totpBackupCodes: null,
      planType: "cyber_cloud_enterprise",
      onboardingCompleted: true,
      securityPolicyAccepted: true,
      dataPolicyAccepted: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.set(adminUser.id, adminUser);

    // Initialize compliance reports
    const complianceData: ComplianceReport[] = [
      {
        id: "comp-1",
        framework: "FERPA",
        score: 98,
        status: "compliant",
        lastAssessment: new Date(),
        findings: { studentDataProtected: true, accessControlsValid: true },
        recommendations: "Continue monitoring student data access",
      },
      {
        id: "comp-2",
        framework: "FISMA",
        score: 96,
        status: "compliant",
        lastAssessment: new Date(),
        findings: { federalStandardsMet: true, securityControlsActive: true },
        recommendations: "Review security controls quarterly",
      },
      {
        id: "comp-3",
        framework: "CIPA",
        score: 89,
        status: "in_progress",
        lastAssessment: new Date(),
        findings: { internetFiltering: true, safetyMeasures: false },
        recommendations: "Implement additional internet safety measures",
      },
    ];
    complianceData.forEach(report => this.complianceReports.set(report.id, report));

    // Initialize comprehensive CyberSecure packages
    const packageData: Package[] = [
      // Cloud Security Packages
      {
        id: "pkg-cloud-essential",
        name: "Cyber-Cloud Essential",
        category: "cloud_security",
        tier: "essential",
        targetAudience: "Small K-12 schools, small municipal offices",
        priceRangeMin: 15000,
        priceRangeMax: 30000,
        billingCycle: "annual",
        maxUsers: 50,
        maxEndpoints: 500,
        coverageAreaSqFt: null,
        features: ["AI-powered threat detection", "Automated incident response", "FERPA/CIPA compliance", "24/7 monitoring", "Basic user management"],
        components: ["CyberSecured AI Core Platform (limited users)", "Basic automated incident response", "Standard threat detection", "Essential compliance automation", "Cloud security monitoring"],
        implementationPeriod: "3-month",
        supportLevel: "standard",
        isActive: true,
        createdAt: new Date()
      },
      {
        id: "pkg-cloud-advanced",
        name: "Cyber-Cloud Advanced",
        category: "cloud_security",
        tier: "advanced",
        targetAudience: "Mid-sized school districts, colleges, city governments",
        priceRangeMin: 30000,
        priceRangeMax: 60000,
        billingCycle: "annual",
        maxUsers: 200,
        maxEndpoints: 1500,
        coverageAreaSqFt: null,
        features: ["Machine learning threat detection", "Predictive risk analysis", "Advanced incident response", "Multi-framework compliance", "Enhanced monitoring dashboard"],
        components: ["CyberSecured AI Core Platform", "Advanced automated incident response", "AI-powered threat detection", "Predictive risk analysis", "Comprehensive compliance automation", "24/7 cloud security monitoring"],
        implementationPeriod: "4-month",
        supportLevel: "standard",
        isActive: true,
        createdAt: new Date()
      },
      {
        id: "pkg-cloud-enterprise",
        name: "Cyber-Cloud Enterprise",
        category: "cloud_security",
        tier: "enterprise",
        targetAudience: "Large universities, state education departments, federal agencies",
        priceRangeMin: 60000,
        priceRangeMax: 150000,
        billingCycle: "annual",
        maxUsers: null,
        maxEndpoints: null,
        coverageAreaSqFt: null,
        features: ["Unlimited user access", "Custom ML models", "Enterprise integrations", "Premium support", "Advanced analytics"],
        components: ["CyberSecured AI Core Platform (unlimited users)", "Enterprise automated incident response", "Advanced threat detection with ML", "Custom predictive risk models", "Comprehensive compliance frameworks", "24/7 premium monitoring", "Custom integration framework"],
        implementationPeriod: "6-month",
        supportLevel: "premium",
        isActive: true,
        createdAt: new Date()
      },
      // K-12 Pilot Programs
      {
        id: "pkg-k12-small",
        name: "K-12 Pilot Small",
        category: "k12_pilot",
        tier: "small",
        targetAudience: "Small K-12 schools looking to evaluate AI-powered security",
        priceRangeMin: 5000,
        priceRangeMax: 10000,
        billingCycle: "monthly",
        maxUsers: 15,
        maxEndpoints: 300,
        coverageAreaSqFt: 5000,
        features: ["CIPA-compliant filtering", "FERPA compliance", "Student data protection", "Basic threat detection", "Hardware included"],
        components: ["CyberSecured AI Core Platform (15 admin users)", "Basic threat detection for up to 300 endpoints", "CIPA-compliant web filtering", "FERPA compliance framework", "Student data protection", "Secure network cabinet with basic hardware", "3-month implementation and support"],
        implementationPeriod: "3-month",
        supportLevel: "standard",
        isActive: true,
        createdAt: new Date()
      },
      {
        id: "pkg-k12-medium",
        name: "K-12 Pilot Medium",
        category: "k12_pilot",
        tier: "medium",
        targetAudience: "Medium K-12 schools looking to evaluate AI-powered security",
        priceRangeMin: 8000,
        priceRangeMax: 15000,
        billingCycle: "monthly",
        maxUsers: 25,
        maxEndpoints: 500,
        coverageAreaSqFt: 15000,
        features: ["CIPA-compliant filtering", "FERPA compliance", "Student data protection", "Basic threat detection", "Hardware included"],
        components: ["CyberSecured AI Core Platform (25 admin users)", "Basic threat detection for up to 500 endpoints", "CIPA-compliant web filtering", "FERPA compliance framework", "Student data protection", "Secure network cabinet with basic hardware", "3-month implementation and support"],
        implementationPeriod: "3-month",
        supportLevel: "standard",
        isActive: true,
        createdAt: new Date()
      },
      {
        id: "pkg-k12-large",
        name: "K-12 Pilot Large",
        category: "k12_pilot",
        tier: "large",
        targetAudience: "Large K-12 schools looking to evaluate AI-powered security",
        priceRangeMin: 12000,
        priceRangeMax: 20000,
        billingCycle: "monthly",
        maxUsers: 40,
        maxEndpoints: 800,
        coverageAreaSqFt: 30000,
        features: ["CIPA-compliant filtering", "FERPA compliance", "Student data protection", "Basic threat detection", "Multiple hardware cabinets"],
        components: ["CyberSecured AI Core Platform (40 admin users)", "Basic threat detection for up to 800 endpoints", "CIPA-compliant web filtering", "FERPA compliance framework", "Student data protection", "Multiple secure network cabinets with basic hardware", "3-month implementation and support"],
        implementationPeriod: "3-month",
        supportLevel: "standard",
        isActive: true,
        createdAt: new Date()
      },
      // Hardware Security Packages
      {
        id: "pkg-hardware-essential",
        name: "Hardware Essential",
        category: "hardware",
        tier: "essential",
        targetAudience: "Small educational institutions, small government offices",
        priceRangeMin: 8000,
        priceRangeMax: 14500,
        billingCycle: "one_time",
        maxUsers: null,
        maxEndpoints: null,
        coverageAreaSqFt: null,
        features: ["Structured cabling", "Basic network cabinet", "Access control infrastructure", "Professional installation"],
        components: ["Cat6A Structured Cabling System", "Basic Network Cabinet with Lock", "Patch Panels and Cable Management", "Entry-level Access Control Infrastructure"],
        implementationPeriod: "2-month",
        supportLevel: "basic",
        isActive: true,
        createdAt: new Date()
      },
      {
        id: "pkg-hardware-advanced",
        name: "Hardware Advanced",
        category: "hardware",
        tier: "advanced",
        targetAudience: "Mid-sized institutions, city government facilities",
        priceRangeMin: 35000,
        priceRangeMax: 55000,
        billingCycle: "one_time",
        maxUsers: null,
        maxEndpoints: null,
        coverageAreaSqFt: null,
        features: ["Shielded cabling system", "Electronic locks", "Security cameras", "Environmental monitoring"],
        components: ["Cat6A Shielded Cabling System", "Fiber Optic Backbone", "Advanced Network Cabinets with Electronic Locks", "Security Camera Infrastructure", "Intermediate Access Control System", "Environmental Monitoring for Server Rooms"],
        implementationPeriod: "4-month",
        supportLevel: "standard",
        isActive: true,
        createdAt: new Date()
      },
      {
        id: "pkg-hardware-enterprise",
        name: "Hardware Enterprise",
        category: "hardware",
        tier: "enterprise",
        targetAudience: "Large campuses, government complexes",
        priceRangeMin: 90000,
        priceRangeMax: 155000,
        billingCycle: "one_time",
        maxUsers: null,
        maxEndpoints: null,
        coverageAreaSqFt: null,
        features: ["Campus-wide infrastructure", "Biometric access", "Comprehensive monitoring", "Tamper-evident solutions"],
        components: ["Campus-wide Cat6A Shielded Cabling System", "Redundant Fiber Optic Backbone", "High-Security Network Cabinets with Biometric Access", "Comprehensive Security Camera Infrastructure", "Advanced Access Control System", "Complete Environmental Monitoring Solution", "Tamper-Evident Cabling Solutions", "Network Segmentation Infrastructure"],
        implementationPeriod: "6-month",
        supportLevel: "premium",
        isActive: true,
        createdAt: new Date()
      }
    ];
    packageData.forEach(pkg => this.packages.set(pkg.id, pkg));

    // Create admin user subscription to enterprise package
    const adminSubscription: UserSubscription = {
      id: "sub-admin-1",
      userId: "admin-1",
      packageId: "pkg-cloud-enterprise",
      status: "active",
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
      autoRenew: true,
      customFeatures: { "unlimited_users": true, "custom_integrations": true },
      contractValue: 100000,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.userSubscriptions.set(adminSubscription.id, adminSubscription);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser,
      id,
      role: insertUser.role ?? "user",
      firstName: insertUser.firstName ?? null,
      lastName: insertUser.lastName ?? null,
      organization: insertUser.organization ?? null,
      profileImageUrl: insertUser.profileImageUrl ?? null,
      isActive: insertUser.isActive ?? true,
      lastLogin: insertUser.lastLogin ?? null,
      mfaEnabled: insertUser.mfaEnabled ?? false,
      mfaMethod: insertUser.mfaMethod ?? "none",
      biometricEnabled: insertUser.biometricEnabled ?? false,
      digitalKeyEnabled: insertUser.digitalKeyEnabled ?? false,
      totpEnabled: insertUser.totpEnabled ?? false,
      hardwareKeyEnabled: insertUser.hardwareKeyEnabled ?? false,
      totpSecret: insertUser.totpSecret ?? null,
      totpBackupCodes: insertUser.totpBackupCodes ?? null,
      planType: insertUser.planType ?? "cyber_cloud_enterprise",
      onboardingCompleted: insertUser.onboardingCompleted ?? false,
      securityPolicyAccepted: insertUser.securityPolicyAccepted ?? false,
      dataPolicyAccepted: insertUser.dataPolicyAccepted ?? false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const user = this.users.get(id);
    if (!user) throw new Error("User not found");
    
    const updatedUser = { ...user, ...updates, updatedAt: new Date() };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    // Check if user exists by email
    const existingUser = Array.from(this.users.values()).find(u => u.email === userData.email);
    
    if (existingUser) {
      // Update existing user
      const updatedUser = { ...existingUser, ...userData, updatedAt: new Date() };
      this.users.set(existingUser.id, updatedUser);
      return updatedUser;
    } else {
      // Create new user
      const newUser: User = {
        id: userData.id || `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        email: userData.email!,
        passwordHash: userData.passwordHash || null,
        firstName: userData.firstName || null,
        lastName: userData.lastName || null,
        role: userData.role || 'user',
        organization: userData.organization || null,
        profileImageUrl: userData.profileImageUrl || null,
        isActive: userData.isActive ?? true,
        lastLogin: userData.lastLogin || null,
        mfaEnabled: userData.mfaEnabled ?? false,
        mfaMethod: userData.mfaMethod || 'none',
        biometricEnabled: userData.biometricEnabled ?? false,
        digitalKeyEnabled: userData.digitalKeyEnabled ?? false,
        totpEnabled: userData.totpEnabled ?? false,
        hardwareKeyEnabled: userData.hardwareKeyEnabled ?? false,
        totpSecret: userData.totpSecret || null,
        totpBackupCodes: userData.totpBackupCodes || null,
        planType: userData.planType || 'standard',
        onboardingCompleted: userData.onboardingCompleted ?? false,
        securityPolicyAccepted: userData.securityPolicyAccepted ?? false,
        dataPolicyAccepted: userData.dataPolicyAccepted ?? false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.users.set(newUser.id, newUser);
      return newUser;
    }
  }

  async getUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  async getThreats(): Promise<Threat[]> {
    return Array.from(this.threats.values());
  }

  async createThreat(insertThreat: InsertThreat): Promise<Threat> {
    const id = randomUUID();
    const threat: Threat = {
      ...insertThreat,
      id,
      status: insertThreat.status ?? "active",
      source: insertThreat.source ?? null,
      description: insertThreat.description ?? null,
      metadata: insertThreat.metadata ?? null,
      detectedAt: new Date(),
      resolvedAt: null,
    };
    this.threats.set(id, threat);
    return threat;
  }

  async updateThreat(id: string, updates: Partial<Threat>): Promise<Threat> {
    const threat = this.threats.get(id);
    if (!threat) throw new Error("Threat not found");
    
    const updatedThreat = { ...threat, ...updates };
    this.threats.set(id, updatedThreat);
    return updatedThreat;
  }

  async getThreatStats(): Promise<{ total: number; critical: number; resolved: number }> {
    const threats = Array.from(this.threats.values());
    return {
      total: threats.length,
      critical: threats.filter(t => t.severity === "critical").length,
      resolved: threats.filter(t => t.status === "resolved").length,
    };
  }

  async getFiles(userId?: string): Promise<File[]> {
    const files = Array.from(this.files.values());
    return userId ? files.filter(f => f.uploadedBy === userId) : files;
  }

  async createFile(insertFile: InsertFile): Promise<File> {
    const id = randomUUID();
    const file: File = {
      ...insertFile,
      id,
      encryptionStatus: insertFile.encryptionStatus ?? "encrypted",
      accessLevel: insertFile.accessLevel ?? "private",
      checksum: insertFile.checksum ?? null,
      uploadedAt: new Date(),
    };
    this.files.set(id, file);
    return file;
  }

  async deleteFile(id: string): Promise<void> {
    this.files.delete(id);
  }

  async getComplianceReports(): Promise<ComplianceReport[]> {
    return Array.from(this.complianceReports.values());
  }

  async getIncidents(): Promise<Incident[]> {
    return Array.from(this.incidents.values());
  }

  async createIncident(insertIncident: InsertIncident): Promise<Incident> {
    const id = randomUUID();
    const incident: Incident = {
      ...insertIncident,
      id,
      status: insertIncident.status ?? "open",
      description: insertIncident.description ?? null,
      assignedTo: insertIncident.assignedTo ?? null,
      reportedBy: insertIncident.reportedBy ?? null,
      metadata: insertIncident.metadata ?? null,
      reportedAt: new Date(),
      resolvedAt: null,
    };
    this.incidents.set(id, incident);
    return incident;
  }

  async updateIncident(id: string, updates: Partial<Incident>): Promise<Incident> {
    const incident = this.incidents.get(id);
    if (!incident) throw new Error("Incident not found");
    
    const updatedIncident = { ...incident, ...updates };
    this.incidents.set(id, updatedIncident);
    return updatedIncident;
  }

  async createAuditLog(logData: Omit<AuditLog, 'id' | 'timestamp'>): Promise<AuditLog> {
    const id = randomUUID();
    const auditLog: AuditLog = {
      ...logData,
      id,
      timestamp: new Date(),
    };
    this.auditLogs.set(id, auditLog);
    return auditLog;
  }

  // Threat Notification operations
  async getThreatNotifications(userId?: string): Promise<ThreatNotification[]> {
    const notifications = Array.from(this.threatNotifications.values());
    if (userId) {
      return notifications.filter(n => n.userId === userId);
    }
    return notifications;
  }

  async createThreatNotification(insertNotification: InsertThreatNotification): Promise<ThreatNotification> {
    const id = randomUUID();
    const notification: ThreatNotification = {
      ...insertNotification,
      id,
      isRead: insertNotification.isRead ?? false,
      isAcknowledged: insertNotification.isAcknowledged ?? false,
      actionRequired: insertNotification.actionRequired ?? false,
      priority: insertNotification.priority ?? 3,
      metadata: insertNotification.metadata ?? null,
      createdAt: new Date(),
      acknowledgedAt: null,
      expiresAt: insertNotification.expiresAt ?? null,
      userId: insertNotification.userId ?? null,
    };
    this.threatNotifications.set(id, notification);
    
    // Auto-create sample notifications when the first one is created
    if (this.threatNotifications.size === 1) {
      this.createSampleNotifications();
    }
    
    return notification;
  }

  async markNotificationAsRead(id: string): Promise<ThreatNotification> {
    const notification = this.threatNotifications.get(id);
    if (!notification) throw new Error("Notification not found");
    
    const updatedNotification = { ...notification, isRead: true };
    this.threatNotifications.set(id, updatedNotification);
    return updatedNotification;
  }

  async acknowledgeNotification(id: string): Promise<ThreatNotification> {
    const notification = this.threatNotifications.get(id);
    if (!notification) throw new Error("Notification not found");
    
    const updatedNotification = {
      ...notification,
      isAcknowledged: true,
      acknowledgedAt: new Date()
    };
    this.threatNotifications.set(id, updatedNotification);
    return updatedNotification;
  }

  async deleteNotification(id: string): Promise<void> {
    this.threatNotifications.delete(id);
  }

  // Custom Compliance Framework operations (Enterprise Feature)
  async getCustomComplianceFrameworks(organizationId: string): Promise<CustomComplianceFramework[]> {
    return Array.from(this.customComplianceFrameworks.values())
      .filter(framework => framework.organizationId === organizationId);
  }

  async getCustomComplianceFramework(frameworkId: string): Promise<CustomComplianceFramework | undefined> {
    return this.customComplianceFrameworks.get(frameworkId);
  }

  async createCustomComplianceFramework(insertFramework: InsertCustomComplianceFramework): Promise<CustomComplianceFramework> {
    const id = randomUUID();
    const framework: CustomComplianceFramework = {
      ...insertFramework,
      id,
      isActive: insertFramework.isActive ?? true,
      version: insertFramework.version ?? "1.0",
      sector: insertFramework.sector ?? "custom",
      description: insertFramework.description ?? null,
      lastModifiedBy: insertFramework.lastModifiedBy ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.customComplianceFrameworks.set(framework.frameworkId, framework);
    return framework;
  }

  async updateCustomComplianceFramework(frameworkId: string, updates: Partial<CustomComplianceFramework>): Promise<CustomComplianceFramework> {
    const framework = this.customComplianceFrameworks.get(frameworkId);
    if (!framework) throw new Error("Custom compliance framework not found");

    const updatedFramework = { 
      ...framework, 
      ...updates, 
      updatedAt: new Date()
    };
    this.customComplianceFrameworks.set(frameworkId, updatedFramework);
    return updatedFramework;
  }

  async deleteCustomComplianceFramework(frameworkId: string): Promise<void> {
    // Also delete associated controls
    const controls = Array.from(this.customComplianceControls.values())
      .filter(control => control.frameworkId === frameworkId);
    controls.forEach(control => this.customComplianceControls.delete(control.id));
    
    this.customComplianceFrameworks.delete(frameworkId);
  }

  // Custom Compliance Control operations (Enterprise Feature)
  async getCustomComplianceControls(frameworkId: string): Promise<CustomComplianceControl[]> {
    return Array.from(this.customComplianceControls.values())
      .filter(control => control.frameworkId === frameworkId);
  }

  async getCustomComplianceControl(id: string): Promise<CustomComplianceControl | undefined> {
    return this.customComplianceControls.get(id);
  }

  async createCustomComplianceControl(insertControl: InsertCustomComplianceControl): Promise<CustomComplianceControl> {
    const id = randomUUID();
    const control: CustomComplianceControl = {
      ...insertControl,
      id,
      isActive: insertControl.isActive ?? true,
      category: insertControl.category ?? "custom",
      priority: insertControl.priority ?? "medium",
      implementation: insertControl.implementation ?? "manual",
      requiredEvidence: insertControl.requiredEvidence ?? [],
      testMethods: insertControl.testMethods ?? [],
      complianceStatement: insertControl.complianceStatement ?? null,
      implementationGuidance: insertControl.implementationGuidance ?? null,
      assessmentCriteria: insertControl.assessmentCriteria ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.customComplianceControls.set(id, control);
    return control;
  }

  async updateCustomComplianceControl(id: string, updates: Partial<CustomComplianceControl>): Promise<CustomComplianceControl> {
    const control = this.customComplianceControls.get(id);
    if (!control) throw new Error("Custom compliance control not found");

    const updatedControl = { 
      ...control, 
      ...updates, 
      updatedAt: new Date()
    };
    this.customComplianceControls.set(id, updatedControl);
    return updatedControl;
  }

  async deleteCustomComplianceControl(id: string): Promise<void> {
    this.customComplianceControls.delete(id);
  }

  // Package operations
  async getPackages(): Promise<Package[]> {
    return Array.from(this.packages.values());
  }

  async getPackage(id: string): Promise<Package | undefined> {
    return this.packages.get(id);
  }

  async createPackage(insertPackage: InsertPackage): Promise<Package> {
    const id = randomUUID();
    const pkg: Package = {
      ...insertPackage,
      id,
      billingCycle: insertPackage.billingCycle ?? "annual",
      supportLevel: insertPackage.supportLevel ?? "standard",
      isActive: insertPackage.isActive ?? true,
      createdAt: new Date(),
      maxUsers: insertPackage.maxUsers ?? null,
      maxEndpoints: insertPackage.maxEndpoints ?? null,
      coverageAreaSqFt: insertPackage.coverageAreaSqFt ?? null,
      implementationPeriod: insertPackage.implementationPeriod ?? null
    };
    this.packages.set(id, pkg);
    return pkg;
  }

  async updatePackage(id: string, updates: Partial<Package>): Promise<Package> {
    const pkg = this.packages.get(id);
    if (!pkg) throw new Error("Package not found");
    
    const updatedPackage = { ...pkg, ...updates };
    this.packages.set(id, updatedPackage);
    return updatedPackage;
  }

  async getPackagesByCategory(category: string): Promise<Package[]> {
    return Array.from(this.packages.values()).filter(pkg => pkg.category === category);
  }

  // User Subscription operations
  async getUserSubscriptions(userId: string): Promise<UserSubscription[]> {
    return Array.from(this.userSubscriptions.values()).filter(sub => sub.userId === userId);
  }

  async getUserSubscription(userId: string, packageId: string): Promise<UserSubscription | undefined> {
    return Array.from(this.userSubscriptions.values())
      .find(sub => sub.userId === userId && sub.packageId === packageId);
  }

  async createUserSubscription(insertSubscription: InsertUserSubscription): Promise<UserSubscription> {
    const id = randomUUID();
    const subscription: UserSubscription = {
      ...insertSubscription,
      id,
      startDate: insertSubscription.startDate ?? new Date(),
      status: insertSubscription.status ?? "active",
      autoRenew: insertSubscription.autoRenew ?? true,
      customFeatures: insertSubscription.customFeatures ?? null,
      contractValue: insertSubscription.contractValue ?? null,
      endDate: insertSubscription.endDate ?? null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.userSubscriptions.set(id, subscription);
    return subscription;
  }

  async updateUserSubscription(id: string, updates: Partial<UserSubscription>): Promise<UserSubscription> {
    const subscription = this.userSubscriptions.get(id);
    if (!subscription) throw new Error("User subscription not found");
    
    const updatedSubscription = { ...subscription, ...updates, updatedAt: new Date() };
    this.userSubscriptions.set(id, updatedSubscription);
    return updatedSubscription;
  }

  async getUserActiveSubscriptions(userId: string): Promise<UserSubscription[]> {
    return Array.from(this.userSubscriptions.values())
      .filter(sub => sub.userId === userId && sub.status === "active");
  }

  // Access Control operations
  async checkUserAccess(userId: string, feature: string): Promise<boolean> {
    const user = await this.getUser(userId);
    if (!user) return false;

    // Admin users have full access
    if (user.role === "admin") return true;

    // Get user's active subscriptions
    const activeSubscriptions = await this.getUserActiveSubscriptions(userId);
    if (activeSubscriptions.length === 0) return false;

    // Check access based on subscription package features
    for (const subscription of activeSubscriptions) {
      const pkg = await this.getPackage(subscription.packageId);
      if (!pkg) continue;

      // Define feature access matrix based on package tiers
      const accessMatrix = this.getAccessMatrix(pkg.category, pkg.tier, feature);
      if (accessMatrix) return true;
    }

    return false;
  }

  async getUserAccessLevel(userId: string): Promise<string> {
    const user = await this.getUser(userId);
    if (!user) return "none";

    // Admin users have enterprise access
    if (user.role === "admin") return "enterprise";

    // Get highest tier from active subscriptions
    const activeSubscriptions = await this.getUserActiveSubscriptions(userId);
    if (activeSubscriptions.length === 0) return "standard";

    let highestTier = "standard";
    for (const subscription of activeSubscriptions) {
      const pkg = await this.getPackage(subscription.packageId);
      if (!pkg) continue;

      // Determine access level based on package tier
      if (pkg.tier === "enterprise" || pkg.category === "cloud_security") {
        highestTier = "enterprise";
      } else if (pkg.tier === "advanced" && highestTier !== "enterprise") {
        highestTier = "advanced";
      } else if (pkg.tier === "large" && !["enterprise", "advanced"].includes(highestTier)) {
        highestTier = "advanced";
      }
    }

    return highestTier;
  }

  private getAccessMatrix(category: string, tier: string, feature: string): boolean {
    // Define comprehensive access matrix for different features
    const accessRules: Record<string, Record<string, string[]>> = {
      cloud_security: {
        essential: ["basic_monitoring", "standard_compliance", "threat_detection"],
        advanced: ["basic_monitoring", "standard_compliance", "threat_detection", "predictive_analysis", "advanced_incidents"],
        enterprise: ["basic_monitoring", "standard_compliance", "threat_detection", "predictive_analysis", "advanced_incidents", "custom_integrations", "unlimited_users", "premium_support"]
      },
      k12_pilot: {
        small: ["basic_monitoring", "ferpa_compliance", "cipa_filtering", "student_protection"],
        medium: ["basic_monitoring", "ferpa_compliance", "cipa_filtering", "student_protection", "enhanced_filtering"],
        large: ["basic_monitoring", "ferpa_compliance", "cipa_filtering", "student_protection", "enhanced_filtering", "multi_campus"]
      },
      higher_ed_pilot: {
        small: ["basic_monitoring", "research_protection", "advanced_threats", "department_access"],
        medium: ["basic_monitoring", "research_protection", "advanced_threats", "department_access", "enhanced_monitoring"],
        large: ["basic_monitoring", "research_protection", "advanced_threats", "department_access", "enhanced_monitoring", "campus_wide"]
      },
      hardware: {
        essential: ["basic_infrastructure", "access_control"],
        advanced: ["basic_infrastructure", "access_control", "security_cameras", "environmental_monitoring"],
        enterprise: ["basic_infrastructure", "access_control", "security_cameras", "environmental_monitoring", "biometric_access", "campus_wide_infrastructure"]
      }
    };

    const categoryRules = accessRules[category];
    if (!categoryRules) return false;

    const tierFeatures = categoryRules[tier];
    if (!tierFeatures) return false;

    return tierFeatures.includes(feature);
  }

  private createSampleNotifications() {
    const sampleNotifications = [
      {
        id: "notif-1",
        threatId: "threat-1",
        userId: null,
        title: "Critical Ransomware Activity Detected",
        message: "BlackCat ransomware variant detected attempting file encryption on File Server (192.168.2.12). Immediate containment initiated.",
        severity: "critical",
        category: "malware",
        isRead: false,
        isAcknowledged: false,
        actionRequired: true,
        priority: 1,
        metadata: { sourceIp: "192.168.2.12", targetFiles: 2847 },
        createdAt: new Date(Date.now() - 5 * 60 * 1000),
        acknowledgedAt: null,
        expiresAt: null
      },
      {
        id: "notif-2",
        threatId: "threat-2", 
        userId: null,
        title: "Data Exfiltration Attempt Blocked",
        message: "Unusual outbound data transfer of 2.4GB to unknown IP address 45.227.x.x (Russia) has been blocked by AI detection system.",
        severity: "high",
        category: "breach",
        isRead: false,
        isAcknowledged: false,
        actionRequired: true,
        priority: 2,
        metadata: { dataSize: "2.4GB", destinationCountry: "Russia" },
        createdAt: new Date(Date.now() - 14 * 60 * 1000),
        acknowledgedAt: null,
        expiresAt: null
      },
      {
        id: "notif-3",
        threatId: "threat-3",
        userId: null,
        title: "Multiple Failed Authentication Attempts",
        message: "Detected 47 failed login attempts on admin portal from multiple Chinese IP addresses. Account lockout policies activated.",
        severity: "medium",
        category: "anomaly",
        isRead: true,
        isAcknowledged: false,
        actionRequired: false,
        priority: 3,
        metadata: { attempts: 47, sourceCountry: "China" },
        createdAt: new Date(Date.now() - 35 * 60 * 1000),
        acknowledgedAt: null,
        expiresAt: null
      },
      {
        id: "notif-4",
        threatId: "threat-4",
        userId: null,
        title: "Phishing Email Campaign Detected",
        message: "AI-powered email security identified and quarantined 23 phishing emails targeting faculty accounts. All recipients notified.",
        severity: "medium",
        category: "phishing",
        isRead: false,
        isAcknowledged: true,
        actionRequired: false,
        priority: 3,
        metadata: { emailsBlocked: 23, targetGroup: "faculty" },
        createdAt: new Date(Date.now() - 62 * 60 * 1000),
        acknowledgedAt: new Date(Date.now() - 45 * 60 * 1000),
        expiresAt: null
      },
      {
        id: "notif-5",
        threatId: "threat-5",
        userId: null,
        title: "System Update Security Patch Applied",
        message: "Critical security patch KB5034441 successfully applied to all Windows servers. System reboot completed without issues.",
        severity: "low",
        category: "system",
        isRead: true,
        isAcknowledged: true,
        actionRequired: false,
        priority: 4,
        metadata: { patchId: "KB5034441", serversUpdated: 12 },
        createdAt: new Date(Date.now() - 120 * 60 * 1000),
        acknowledgedAt: new Date(Date.now() - 100 * 60 * 1000),
        expiresAt: null
      }
    ];

    sampleNotifications.forEach(notification => {
      this.threatNotifications.set(notification.id, notification as ThreatNotification);
    });
    
    // Initialize sample Cypher reports
    this.initializeCypherReports();
  }

  private initializeCypherReports() {
    const sampleReports = [
      {
        id: "cypher-daily-1",
        type: "daily",
        title: "Daily Security Summary",
        message: "System health is optimal. Processed 2,847 security events with 0 critical threats. All compliance frameworks are green. System uptime: 99.94%.",
        severity: "low",
        timestamp: new Date().toISOString(),
        data: { eventsProcessed: 2847, criticalThreats: 0, uptime: "99.94%" }
      },
      {
        id: "cypher-issue-1",
        type: "issue",
        title: "Suspicious Network Activity",
        message: "Detected unusual outbound traffic patterns from 3 workstations. Recommended immediate network analysis and user verification.",
        severity: "medium",
        timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
        data: { affectedWorkstations: 3, trafficVolume: "2.4GB" }
      }
    ];
    
    sampleReports.forEach(report => {
      this.cypherReports.set(report.id, report);
    });
  }

  // Cypher AI operations
  async getCypherSettings(): Promise<{ enabled: boolean; dailyReports: boolean; issueAlerts: boolean }> {
    return this.cypherSettings;
  }

  async updateCypherSettings(settings: { enabled?: boolean; dailyReports?: boolean; issueAlerts?: boolean }): Promise<void> {
    this.cypherSettings = { ...this.cypherSettings, ...settings };
  }

  async getCypherReports(limit = 10): Promise<any[]> {
    const reports = Array.from(this.cypherReports.values());
    return reports
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }

  async createCypherReport(report: any): Promise<any> {
    const newReport = {
      ...report,
      id: report.id || randomUUID(),
      timestamp: report.timestamp || new Date().toISOString()
    };
    this.cypherReports.set(newReport.id, newReport);
    return newReport;
  }

  // Subscriber operations
  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const subscriber: Subscriber = {
      id: randomUUID(),
      createdAt: new Date(),
      lastDownloadAt: null,
      ...insertSubscriber
    };
    this.subscribers.set(subscriber.id, subscriber);
    return subscriber;
  }

  async updateSubscriberDownload(email: string, resourceId: string): Promise<void> {
    const subscriber = Array.from(this.subscribers.values()).find(s => s.email === email);
    if (subscriber) {
      const currentResources = Array.isArray(subscriber.downloadedResources) 
        ? subscriber.downloadedResources 
        : [];
      
      const updatedSubscriber = {
        ...subscriber,
        downloadedResources: [...currentResources, resourceId],
        lastDownloadAt: new Date()
      };
      this.subscribers.set(subscriber.id, updatedSubscriber);
    }
  }

  // Confirmation code operations
  async createConfirmationCode(data: any): Promise<any> {
    const confirmationCode = {
      id: randomUUID(),
      ...data,
      createdAt: new Date()
    };
    this.confirmationCodes.set(confirmationCode.id, confirmationCode);
    return confirmationCode;
  }

  async verifyConfirmationCode(email: string, code: string): Promise<any | undefined> {
    const confirmationCode = Array.from(this.confirmationCodes.values()).find(
      c => c.email === email && c.code === code && !c.verified && new Date() < c.expiresAt
    );
    
    if (confirmationCode) {
      // Mark as verified
      confirmationCode.verified = true;
      this.confirmationCodes.set(confirmationCode.id, confirmationCode);
      return confirmationCode;
    }
    
    return undefined;
  }

  // ===== ECHO Storage Implementations =====
  
  // ECHO Session operations
  async getCypherhumSessions(userId?: string): Promise<CypherhumSession[]> {
    const sessions = Array.from(this.cypherhumSessions.values());
    return userId ? sessions.filter(s => s.userId === userId) : sessions;
  }

  async getCypherhumSession(sessionId: string): Promise<CypherhumSession | undefined> {
    return this.cypherhumSessions.get(sessionId);
  }

  async createCypherhumSession(insertSession: InsertCypherhumSession): Promise<CypherhumSession> {
    const id = randomUUID();
    const session: CypherhumSession = {
      ...insertSession,
      id,
      status: insertSession.status ?? "active",
      startTime: insertSession.startTime ?? new Date(),
      endTime: null,
      duration: insertSession.duration ?? 0,
      threatsVisualized: insertSession.threatsVisualized ?? 0,
      aiInteractions: insertSession.aiInteractions ?? 0,
      visualizationPresetId: insertSession.visualizationPresetId ?? null,
      sessionData: insertSession.sessionData ?? {},
      performanceMetrics: insertSession.performanceMetrics ?? {},
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.cypherhumSessions.set(id, session);
    return session;
  }

  async updateCypherhumSession(sessionId: string, updates: Partial<CypherhumSession>): Promise<CypherhumSession> {
    const session = this.cypherhumSessions.get(sessionId);
    if (!session) throw new Error("ECHO session not found");
    
    const updatedSession = { ...session, ...updates, updatedAt: new Date() };
    this.cypherhumSessions.set(sessionId, updatedSession);
    return updatedSession;
  }

  async deleteCypherhumSession(sessionId: string): Promise<void> {
    this.cypherhumSessions.delete(sessionId);
  }

  // ECHO Visualization operations  
  async getCypherhumVisualizations(userId?: string): Promise<CypherhumVisualization[]> {
    const visualizations = Array.from(this.cypherhumVisualizations.values());
    if (userId) {
      return visualizations.filter(v => v.createdBy === userId || v.isPublic === true);
    }
    return visualizations.filter(v => v.isPublic === true);
  }

  async getCypherhumVisualization(visualizationId: string): Promise<CypherhumVisualization | undefined> {
    return this.cypherhumVisualizations.get(visualizationId);
  }

  async createCypherhumVisualization(insertVisualization: InsertCypherhumVisualization): Promise<CypherhumVisualization> {
    const id = randomUUID();
    const visualization: CypherhumVisualization = {
      ...insertVisualization,
      id,
      isDefault: insertVisualization.isDefault ?? false,
      isPublic: insertVisualization.isPublic ?? false,
      usageCount: insertVisualization.usageCount ?? 0,
      rating: insertVisualization.rating ?? 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.cypherhumVisualizations.set(id, visualization);
    return visualization;
  }

  async updateCypherhumVisualization(visualizationId: string, updates: Partial<CypherhumVisualization>): Promise<CypherhumVisualization> {
    const visualization = this.cypherhumVisualizations.get(visualizationId);
    if (!visualization) throw new Error("ECHO visualization not found");
    
    const updatedVisualization = { ...visualization, ...updates, updatedAt: new Date() };
    this.cypherhumVisualizations.set(visualizationId, updatedVisualization);
    return updatedVisualization;
  }

  async deleteCypherhumVisualization(visualizationId: string): Promise<void> {
    this.cypherhumVisualizations.delete(visualizationId);
  }

  // ECHO Interaction operations
  async getCypherhumInteractions(sessionId?: string): Promise<CypherhumInteraction[]> {
    const interactions = Array.from(this.cypherhumInteractions.values());
    return sessionId ? interactions.filter(i => i.sessionId === sessionId) : interactions;
  }

  async getCypherhumInteraction(interactionId: string): Promise<CypherhumInteraction | undefined> {
    return this.cypherhumInteractions.get(interactionId);
  }

  async createCypherhumInteraction(insertInteraction: InsertCypherhumInteraction): Promise<CypherhumInteraction> {
    const id = randomUUID();
    const interaction: CypherhumInteraction = {
      ...insertInteraction,
      id,
      responseType: insertInteraction.responseType ?? "acknowledgment",
      processingTime: insertInteraction.processingTime ?? 0,
      confidenceScore: insertInteraction.confidenceScore ?? null,
      contextData: insertInteraction.contextData ?? null,
      threeDManipulation: insertInteraction.threeDManipulation ?? null,
      visualizationImpact: insertInteraction.visualizationImpact ?? null,
      userFeedback: insertInteraction.userFeedback ?? null,
      timestamp: new Date()
    };
    this.cypherhumInteractions.set(id, interaction);
    return interaction;
  }

  async updateCypherhumInteraction(interactionId: string, updates: Partial<CypherhumInteraction>): Promise<CypherhumInteraction> {
    const interaction = this.cypherhumInteractions.get(interactionId);
    if (!interaction) throw new Error("ECHO interaction not found");
    
    const updatedInteraction = { ...interaction, ...updates };
    this.cypherhumInteractions.set(interactionId, updatedInteraction);
    return updatedInteraction;
  }

  async deleteCypherhumInteraction(interactionId: string): Promise<void> {
    this.cypherhumInteractions.delete(interactionId);
  }

  // ECHO Threat Model operations
  async getCypherhumThreatModels(threatId?: string): Promise<CypherhumThreatModel[]> {
    const models = Array.from(this.cypherhumThreatModels.values());
    return threatId ? models.filter(m => m.threatId === threatId) : models;
  }

  async getCypherhumThreatModel(modelId: string): Promise<CypherhumThreatModel | undefined> {
    return this.cypherhumThreatModels.get(modelId);
  }

  async createCypherhumThreatModel(insertModel: InsertCypherhumThreatModel): Promise<CypherhumThreatModel> {
    const id = randomUUID();
    const model: CypherhumThreatModel = {
      ...insertModel,
      id,
      geometryData: insertModel.geometryData ?? {},
      materialProperties: insertModel.materialProperties ?? {},
      animationData: insertModel.animationData ?? {},
      interactionBehavior: insertModel.interactionBehavior ?? {},
      severity3DMapping: insertModel.severity3DMapping ?? {},
      realTimeProperties: insertModel.realTimeProperties ?? {},
      renderingOptimization: insertModel.renderingOptimization ?? {},
      aiEnhancement: insertModel.aiEnhancement ?? {},
      spatialPosition: insertModel.spatialPosition ?? [0, 0, 0],
      scale: insertModel.scale ?? [1, 1, 1],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.cypherhumThreatModels.set(id, model);
    return model;
  }

  async updateCypherhumThreatModel(modelId: string, updates: Partial<CypherhumThreatModel>): Promise<CypherhumThreatModel> {
    const model = this.cypherhumThreatModels.get(modelId);
    if (!model) throw new Error("ECHO threat model not found");
    
    const updatedModel = { ...model, ...updates, updatedAt: new Date() };
    this.cypherhumThreatModels.set(modelId, updatedModel);
    return updatedModel;
  }

  async deleteCypherhumThreatModel(modelId: string): Promise<void> {
    this.cypherhumThreatModels.delete(modelId);
  }

  // ECHO Analytics operations
  async getCypherhumAnalytics(sessionId?: string, userId?: string): Promise<CypherhumAnalytics[]> {
    const analytics = Array.from(this.cypherhumAnalytics.values());
    let filtered = analytics;
    
    if (sessionId) {
      filtered = filtered.filter(a => a.sessionId === sessionId);
    }
    if (userId) {
      filtered = filtered.filter(a => a.userId === userId);
    }
    
    return filtered;
  }

  async getCypherhumAnalytic(analyticId: string): Promise<CypherhumAnalytics | undefined> {
    return this.cypherhumAnalytics.get(analyticId);
  }

  async createCypherhumAnalytic(insertAnalytic: InsertCypherhumAnalytics): Promise<CypherhumAnalytics> {
    const id = randomUUID();
    const analytic: CypherhumAnalytics = {
      ...insertAnalytic,
      id,
      sessionId: insertAnalytic.sessionId ?? null,
      metricValue: insertAnalytic.metricValue ?? 0,
      contextData: insertAnalytic.contextData ?? null,
      aggregationPeriod: insertAnalytic.aggregationPeriod ?? "instant",
      timestamp: new Date()
    };
    this.cypherhumAnalytics.set(id, analytic);
    return analytic;
  }

  async updateCypherhumAnalytic(analyticId: string, updates: Partial<CypherhumAnalytics>): Promise<CypherhumAnalytics> {
    const analytic = this.cypherhumAnalytics.get(analyticId);
    if (!analytic) throw new Error("ECHO analytic not found");
    
    const updatedAnalytic = { ...analytic, ...updates };
    this.cypherhumAnalytics.set(analyticId, updatedAnalytic);
    return updatedAnalytic;
  }

  async deleteCypherhumAnalytic(analyticId: string): Promise<void> {
    this.cypherhumAnalytics.delete(analyticId);
  }

  // ===== SURGE (Strategic Unified Response & Guardian Engine) Operations =====
  
  // SURGE Drone operations
  async getAcdsDrones(organizationId?: string): Promise<AcdsDrone[]> {
    const drones = Array.from(this.surgeDrones.values());
    return organizationId ? drones.filter(d => d.organizationId === organizationId) : drones;
  }

  async getAcdsDrone(droneId: string): Promise<AcdsDrone | undefined> {
    return Array.from(this.surgeDrones.values()).find(d => d.droneId === droneId);
  }

  async createAcdsDrone(insertDrone: InsertAcdsDrone): Promise<AcdsDrone> {
    const id = randomUUID();
    const drone: AcdsDrone = {
      ...insertDrone,
      id,
      currentLatitude: insertDrone.currentLatitude ?? null,
      currentLongitude: insertDrone.currentLongitude ?? null,
      currentAltitude: insertDrone.currentAltitude ?? null,
      assignedMissionId: insertDrone.assignedMissionId ?? null,
      operatorId: insertDrone.operatorId ?? null,
      emergencyContactProtocol: insertDrone.emergencyContactProtocol ?? {},
      lastLocationUpdate: insertDrone.lastLocationUpdate ?? new Date(),
      lastStatusUpdate: insertDrone.lastStatusUpdate ?? new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.surgeDrones.set(id, drone);
    return drone;
  }

  async updateAcdsDrone(droneId: string, updates: Partial<AcdsDrone>): Promise<AcdsDrone> {
    const drone = Array.from(this.surgeDrones.values()).find(d => d.droneId === droneId);
    if (!drone) throw new Error("SURGE drone not found");
    
    const updatedDrone = { ...drone, ...updates, updatedAt: new Date() };
    this.surgeDrones.set(drone.id, updatedDrone);
    return updatedDrone;
  }

  async deleteAcdsDrone(droneId: string): Promise<void> {
    const drone = Array.from(this.surgeDrones.values()).find(d => d.droneId === droneId);
    if (drone) {
      this.surgeDrones.delete(drone.id);
    }
  }

  async getAcdsDronesByStatus(status: string, organizationId?: string): Promise<AcdsDrone[]> {
    const drones = await this.getAcdsDrones(organizationId);
    return drones.filter(d => d.currentStatus === status);
  }

  async getAcdsDronesBySwarmRole(role: string, organizationId?: string): Promise<AcdsDrone[]> {
    const drones = await this.getAcdsDrones(organizationId);
    return drones.filter(d => d.swarmRole === role);
  }
  
  // SURGE Swarm Mission operations
  async getAcdsSwarmMissions(organizationId?: string, status?: string): Promise<AcdsSwarmMission[]> {
    const missions = Array.from(this.surgeSwarmMissions.values());
    let filtered = organizationId ? missions.filter(m => m.organizationId === organizationId) : missions;
    return status ? filtered.filter(m => m.status === status) : filtered;
  }

  async getAcdsSwarmMission(missionId: string): Promise<AcdsSwarmMission | undefined> {
    return this.surgeSwarmMissions.get(missionId);
  }

  async createAcdsSwarmMission(insertMission: InsertAcdsSwarmMission): Promise<AcdsSwarmMission> {
    const id = randomUUID();
    const mission: AcdsSwarmMission = {
      ...insertMission,
      id,
      threatContext: insertMission.threatContext ?? null,
      actualDuration: insertMission.actualDuration ?? null,
      swarmConfiguration: insertMission.swarmConfiguration ?? {},
      riskAssessment: insertMission.riskAssessment ?? {},
      weatherConditions: insertMission.weatherConditions ?? {},
      airspaceRestrictions: insertMission.airspaceRestrictions ?? [],
      dataCollectionRequirements: insertMission.dataCollectionRequirements ?? [],
      emergencyProcedures: insertMission.emergencyProcedures ?? {},
      pulseIntegration: insertMission.pulseIntegration ?? {},
      plannedStartTime: insertMission.plannedStartTime ?? null,
      actualStartTime: insertMission.actualStartTime ?? null,
      plannedEndTime: insertMission.plannedEndTime ?? null,
      actualEndTime: insertMission.actualEndTime ?? null,
      complianceRequirements: insertMission.complianceRequirements ?? [],
      resultsData: insertMission.resultsData ?? null,
      performanceMetrics: insertMission.performanceMetrics ?? null,
      lessonsLearned: insertMission.lessonsLearned ?? null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.surgeSwarmMissions.set(id, mission);
    return mission;
  }

  async updateAcdsSwarmMission(missionId: string, updates: Partial<AcdsSwarmMission>): Promise<AcdsSwarmMission> {
    const mission = this.surgeSwarmMissions.get(missionId);
    if (!mission) throw new Error("SURGE swarm mission not found");
    
    const updatedMission = { ...mission, ...updates, updatedAt: new Date() };
    this.surgeSwarmMissions.set(missionId, updatedMission);
    return updatedMission;
  }

  async deleteAcdsSwarmMission(missionId: string): Promise<void> {
    this.surgeSwarmMissions.delete(missionId);
  }

  async getActiveAcdsSwarmMissions(organizationId?: string): Promise<AcdsSwarmMission[]> {
    return this.getAcdsSwarmMissions(organizationId, 'active');
  }
  
  // SURGE Deployment operations
  async getAcdsDeployments(organizationId?: string, status?: string): Promise<AcdsDeployment[]> {
    const deployments = Array.from(this.surgeDeployments.values());
    let filtered = organizationId ? deployments.filter(d => d.organizationId === organizationId) : deployments;
    return status ? filtered.filter(d => d.deploymentStatus === status) : filtered;
  }

  async getAcdsDeployment(deploymentId: string): Promise<AcdsDeployment | undefined> {
    return Array.from(this.surgeDeployments.values()).find(d => d.deploymentId === deploymentId);
  }

  async createAcdsDeployment(insertDeployment: InsertAcdsDeployment): Promise<AcdsDeployment> {
    const id = randomUUID();
    const deployment: AcdsDeployment = {
      ...insertDeployment,
      id,
      missionId: insertDeployment.missionId ?? null,
      currentLatitude: insertDeployment.currentLatitude ?? null,
      currentLongitude: insertDeployment.currentLongitude ?? null,
      currentAltitude: insertDeployment.currentAltitude ?? null,
      flightPath: insertDeployment.flightPath ?? [],
      formationPosition: insertDeployment.formationPosition ?? {},
      speedKmh: insertDeployment.speedKmh ?? 0,
      heading: insertDeployment.heading ?? 0,
      batteryConsumption: insertDeployment.batteryConsumption ?? 0,
      estimatedRemainingTime: insertDeployment.estimatedRemainingTime ?? null,
      sensorReadings: insertDeployment.sensorReadings ?? {},
      threatDetections: insertDeployment.threatDetections ?? [],
      communicationLog: insertDeployment.communicationLog ?? [],
      coordinationCommands: insertDeployment.coordinationCommands ?? [],
      autonomousDecisions: insertDeployment.autonomousDecisions ?? [],
      pulseResponses: insertDeployment.pulseResponses ?? [],
      environmentalFactors: insertDeployment.environmentalFactors ?? {},
      riskLevelCurrent: insertDeployment.riskLevelCurrent ?? 'low',
      emergencyProceduresActive: insertDeployment.emergencyProceduresActive ?? false,
      returnToBaseInitiated: insertDeployment.returnToBaseInitiated ?? false,
      missionObjectiveStatus: insertDeployment.missionObjectiveStatus ?? {},
      dataCollected: insertDeployment.dataCollected ?? {},
      anomaliesDetected: insertDeployment.anomaliesDetected ?? [],
      networkConnectivity: insertDeployment.networkConnectivity ?? 'stable',
      lastHeartbeat: insertDeployment.lastHeartbeat ?? new Date(),
      estimatedCompletionTime: insertDeployment.estimatedCompletionTime ?? null,
      actualCompletionTime: insertDeployment.actualCompletionTime ?? null,
      operatorOverride: insertDeployment.operatorOverride ?? false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.surgeDeployments.set(id, deployment);
    return deployment;
  }

  async updateAcdsDeployment(deploymentId: string, updates: Partial<AcdsDeployment>): Promise<AcdsDeployment> {
    const deployment = Array.from(this.surgeDeployments.values()).find(d => d.deploymentId === deploymentId);
    if (!deployment) throw new Error("SURGE deployment not found");
    
    const updatedDeployment = { ...deployment, ...updates, updatedAt: new Date() };
    this.surgeDeployments.set(deployment.id, updatedDeployment);
    return updatedDeployment;
  }

  async deleteAcdsDeployment(deploymentId: string): Promise<void> {
    const deployment = Array.from(this.surgeDeployments.values()).find(d => d.deploymentId === deploymentId);
    if (deployment) {
      this.surgeDeployments.delete(deployment.id);
    }
  }

  async getAcdsDeploymentsByDrone(droneId: string): Promise<AcdsDeployment[]> {
    const deployments = Array.from(this.surgeDeployments.values());
    return deployments.filter(d => d.droneId === droneId);
  }

  async getAcdsDeploymentsByMission(missionId: string): Promise<AcdsDeployment[]> {
    const deployments = Array.from(this.surgeDeployments.values());
    return deployments.filter(d => d.missionId === missionId);
  }

  async getActiveAcdsDeployments(organizationId?: string): Promise<AcdsDeployment[]> {
    return this.getAcdsDeployments(organizationId, 'active');
  }
  
  // SURGE Coordination operations
  async getAcdsCoordinations(organizationId?: string): Promise<AcdsCoordination[]> {
    const coordinations = Array.from(this.surgeCoordinations.values());
    return organizationId ? coordinations.filter(c => c.organizationId === organizationId) : coordinations;
  }

  async getAcdsCoordination(coordinationId: string): Promise<AcdsCoordination | undefined> {
    return Array.from(this.surgeCoordinations.values()).find(c => c.coordinationEventId === coordinationId);
  }

  async createAcdsCoordination(insertCoordination: InsertAcdsCoordination): Promise<AcdsCoordination> {
    const id = randomUUID();
    const coordination: AcdsCoordination = {
      ...insertCoordination,
      id,
      swarmId: insertCoordination.swarmId ?? `swarm-${insertCoordination.organizationId}`,
      participatingDrones: insertCoordination.participatingDrones ?? [],
      inputData: insertCoordination.inputData ?? {},
      coordinationDecision: insertCoordination.coordinationDecision ?? {},
      implementationStartTime: insertCoordination.implementationStartTime ?? null,
      implementationEndTime: insertCoordination.implementationEndTime ?? null,
      implementationResults: insertCoordination.implementationResults ?? null,
      geneticAlgorithmGeneration: insertCoordination.geneticAlgorithmGeneration ?? null,
      geneticAlgorithmFitness: insertCoordination.geneticAlgorithmFitness ?? null,
      pulseRecommendation: insertCoordination.pulseRecommendation ?? null,
      performanceMetrics: insertCoordination.performanceMetrics ?? null,
      lessonsLearned: insertCoordination.lessonsLearned ?? null
    };
    this.surgeCoordinations.set(id, coordination);
    return coordination;
  }

  async updateAcdsCoordination(coordinationId: string, updates: Partial<AcdsCoordination>): Promise<AcdsCoordination> {
    const coordination = Array.from(this.surgeCoordinations.values()).find(c => c.coordinationEventId === coordinationId);
    if (!coordination) throw new Error("SURGE coordination not found");
    
    const updatedCoordination = { ...coordination, ...updates };
    this.surgeCoordinations.set(coordination.id, updatedCoordination);
    return updatedCoordination;
  }

  async deleteAcdsCoordination(coordinationId: string): Promise<void> {
    const coordination = Array.from(this.surgeCoordinations.values()).find(c => c.coordinationEventId === coordinationId);
    if (coordination) {
      this.surgeCoordinations.delete(coordination.id);
    }
  }

  async getAcdsCoordinationsByEvent(eventType: string, organizationId?: string): Promise<AcdsCoordination[]> {
    const coordinations = await this.getAcdsCoordinations(organizationId);
    return coordinations.filter(c => c.eventType === eventType);
  }

  async getAcdsCoordinationsBySwarm(swarmId: string): Promise<AcdsCoordination[]> {
    const coordinations = Array.from(this.surgeCoordinations.values());
    return coordinations.filter(c => c.swarmId === swarmId);
  }
  
  // SURGE Analytics operations
  async getAcdsAnalytics(organizationId?: string, analyticsType?: string): Promise<AcdsAnalytics[]> {
    const analytics = Array.from(this.surgeAnalytics.values());
    let filtered = organizationId ? analytics.filter(a => a.organizationId === organizationId) : analytics;
    return analyticsType ? filtered.filter(a => a.analyticsType === analyticsType) : filtered;
  }

  async getAcdsAnalytic(analyticId: string): Promise<AcdsAnalytics | undefined> {
    return this.surgeAnalytics.get(analyticId);
  }

  async createAcdsAnalytic(insertAnalytic: InsertAcdsAnalytics): Promise<AcdsAnalytics> {
    const id = randomUUID();
    const analytic: AcdsAnalytics = {
      ...insertAnalytic,
      id,
      aggregationPeriod: insertAnalytic.aggregationPeriod ?? 'real_time',
      metricData: insertAnalytic.metricData ?? null,
      complianceFramework: insertAnalytic.complianceFramework ?? null,
      complianceScore: insertAnalytic.complianceScore ?? null,
      benchmarkComparison: insertAnalytic.benchmarkComparison ?? null,
      trendAnalysis: insertAnalytic.trendAnalysis ?? null,
      predictiveInsights: insertAnalytic.predictiveInsights ?? null,
      alertThresholds: insertAnalytic.alertThresholds ?? null,
      dataSource: insertAnalytic.dataSource ?? 'surge_service',
      validationStatus: insertAnalytic.validationStatus ?? 'pending',
      dataQualityScore: insertAnalytic.dataQualityScore ?? null,
      correlationFactors: insertAnalytic.correlationFactors ?? null,
      timestamp: new Date()
    };
    this.surgeAnalytics.set(id, analytic);
    return analytic;
  }

  async updateAcdsAnalytic(analyticId: string, updates: Partial<AcdsAnalytics>): Promise<AcdsAnalytics> {
    const analytic = this.surgeAnalytics.get(analyticId);
    if (!analytic) throw new Error("SURGE analytic not found");
    
    const updatedAnalytic = { ...analytic, ...updates };
    this.surgeAnalytics.set(analyticId, updatedAnalytic);
    return updatedAnalytic;
  }

  async deleteAcdsAnalytic(analyticId: string): Promise<void> {
    this.surgeAnalytics.delete(analyticId);
  }

  async getAcdsAnalyticsByCategory(category: string, organizationId?: string): Promise<AcdsAnalytics[]> {
    const analytics = await this.getAcdsAnalytics(organizationId);
    return analytics.filter(a => a.metricCategory === category);
  }

  async getAcdsAnalyticsByDateRange(startDate: Date, endDate: Date, organizationId?: string): Promise<AcdsAnalytics[]> {
    const analytics = await this.getAcdsAnalytics(organizationId);
    return analytics.filter(a => a.timestamp >= startDate && a.timestamp <= endDate);
  }

  // ===== HIPAA WORKSTATION SECURITY OPERATIONS =====
  
  async getWorkstationSecurity(organizationId: string, status?: string): Promise<HipaaWorkstationSecurity[]> {
    const workstations = Array.from(this.hipaaWorkstationSecurity.values());
    let filtered = workstations.filter(w => w.organizationId === organizationId);
    return status ? filtered.filter(w => w.status === status) : filtered;
  }

  async getWorkstationSecurityById(id: string): Promise<HipaaWorkstationSecurity | undefined> {
    return this.hipaaWorkstationSecurity.get(id);
  }

  async createWorkstationSecurity(workstation: InsertHipaaWorkstationSecurity): Promise<HipaaWorkstationSecurity> {
    const id = randomUUID();
    const newWorkstation: HipaaWorkstationSecurity = {
      ...workstation,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.hipaaWorkstationSecurity.set(id, newWorkstation);
    return newWorkstation;
  }

  async updateWorkstationSecurity(id: string, updates: Partial<HipaaWorkstationSecurity>): Promise<HipaaWorkstationSecurity> {
    const workstation = this.hipaaWorkstationSecurity.get(id);
    if (!workstation) throw new Error("HIPAA workstation security record not found");
    
    const updatedWorkstation = { ...workstation, ...updates, updatedAt: new Date() };
    this.hipaaWorkstationSecurity.set(id, updatedWorkstation);
    return updatedWorkstation;
  }

  async deleteWorkstationSecurity(id: string): Promise<void> {
    this.hipaaWorkstationSecurity.delete(id);
  }

  // ===== HIPAA MEDIA CONTROLS OPERATIONS =====

  async getMediaControls(organizationId: string, status?: string): Promise<HipaaMediaControl[]> {
    const mediaControls = Array.from(this.hipaaMediaControls.values());
    let filtered = mediaControls.filter(m => m.organizationId === organizationId);
    return status ? filtered.filter(m => m.status === status) : filtered;
  }

  async getMediaControlById(id: string): Promise<HipaaMediaControl | undefined> {
    return this.hipaaMediaControls.get(id);
  }

  async createMediaControl(media: InsertHipaaMediaControl): Promise<HipaaMediaControl> {
    const id = randomUUID();
    const newMedia: HipaaMediaControl = {
      ...media,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.hipaaMediaControls.set(id, newMedia);
    return newMedia;
  }

  async updateMediaControl(id: string, updates: Partial<HipaaMediaControl>): Promise<HipaaMediaControl> {
    const media = this.hipaaMediaControls.get(id);
    if (!media) throw new Error("HIPAA media control record not found");
    
    const updatedMedia = { ...media, ...updates, updatedAt: new Date() };
    this.hipaaMediaControls.set(id, updatedMedia);
    return updatedMedia;
  }

  async deleteMediaControl(id: string): Promise<void> {
    this.hipaaMediaControls.delete(id);
  }

  // ===== HIPAA FACILITY ACCESS OPERATIONS =====

  async getFacilityAccess(organizationId: string, status?: string): Promise<HipaaFacilityAccess[]> {
    const facilityAccess = Array.from(this.hipaaFacilityAccess.values());
    let filtered = facilityAccess.filter(f => f.organizationId === organizationId);
    return status ? filtered.filter(f => f.status === status) : filtered;
  }

  async getFacilityAccessById(id: string): Promise<HipaaFacilityAccess | undefined> {
    return this.hipaaFacilityAccess.get(id);
  }

  async createFacilityAccess(facility: InsertHipaaFacilityAccess): Promise<HipaaFacilityAccess> {
    const id = randomUUID();
    const newFacility: HipaaFacilityAccess = {
      ...facility,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.hipaaFacilityAccess.set(id, newFacility);
    return newFacility;
  }

  async updateFacilityAccess(id: string, updates: Partial<HipaaFacilityAccess>): Promise<HipaaFacilityAccess> {
    const facility = this.hipaaFacilityAccess.get(id);
    if (!facility) throw new Error("HIPAA facility access record not found");
    
    const updatedFacility = { ...facility, ...updates, updatedAt: new Date() };
    this.hipaaFacilityAccess.set(id, updatedFacility);
    return updatedFacility;
  }

  async deleteFacilityAccess(id: string): Promise<void> {
    this.hipaaFacilityAccess.delete(id);
  }

  // ===== CATALOG SYSTEM OPERATIONS =====
  
  // Catalog Category operations
  async getCatalogCategories(categoryType?: string): Promise<CatalogCategory[]> {
    const categories = Array.from(this.catalogCategories.values());
    return categoryType ? categories.filter(c => c.categoryType === categoryType) : categories;
  }

  async getCatalogCategory(id: string): Promise<CatalogCategory | undefined> {
    return this.catalogCategories.get(id);
  }

  async createCatalogCategory(category: InsertCatalogCategory): Promise<CatalogCategory> {
    const id = randomUUID();
    const newCategory: CatalogCategory = {
      ...category,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.catalogCategories.set(id, newCategory);
    return newCategory;
  }

  async updateCatalogCategory(id: string, updates: Partial<CatalogCategory>): Promise<CatalogCategory> {
    const category = this.catalogCategories.get(id);
    if (!category) throw new Error("Catalog category not found");
    const updated = { ...category, ...updates, updatedAt: new Date() };
    this.catalogCategories.set(id, updated);
    return updated;
  }

  async deleteCatalogCategory(id: string): Promise<void> {
    this.catalogCategories.delete(id);
  }

  // BOM Component operations
  async getBomComponents(): Promise<BomComponent[]> {
    return Array.from(this.bomComponents.values());
  }

  async getBomComponent(id: string): Promise<BomComponent | undefined> {
    return this.bomComponents.get(id);
  }

  async createBomComponent(component: InsertBomComponent): Promise<BomComponent> {
    const id = randomUUID();
    const newComponent: BomComponent = {
      ...component,
      id,
      isActive: component.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.bomComponents.set(id, newComponent);
    return newComponent;
  }

  async updateBomComponent(id: string, updates: Partial<BomComponent>): Promise<BomComponent> {
    const component = this.bomComponents.get(id);
    if (!component) throw new Error("BOM component not found");
    const updated = { ...component, ...updates, updatedAt: new Date() };
    this.bomComponents.set(id, updated);
    return updated;
  }

  async deleteBomComponent(id: string): Promise<void> {
    this.bomComponents.delete(id);
  }

  async getBomComponentsByType(componentType: string): Promise<BomComponent[]> {
    return Array.from(this.bomComponents.values()).filter(c => c.componentType === componentType);
  }

  // Catalog Product operations
  async getCatalogProducts(categoryId?: string): Promise<CatalogProduct[]> {
    const products = Array.from(this.catalogProducts.values());
    return categoryId ? products.filter(p => p.categoryId === categoryId) : products;
  }

  async getCatalogProduct(id: string): Promise<CatalogProduct | undefined> {
    return this.catalogProducts.get(id);
  }

  async getCatalogProductByCode(productCode: string): Promise<CatalogProduct | undefined> {
    return Array.from(this.catalogProducts.values()).find(p => p.productCode === productCode);
  }

  async createCatalogProduct(product: InsertCatalogProduct): Promise<CatalogProduct> {
    const id = randomUUID();
    const newProduct: CatalogProduct = {
      ...product,
      id,
      isActive: product.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.catalogProducts.set(id, newProduct);
    return newProduct;
  }

  async updateCatalogProduct(id: string, updates: Partial<CatalogProduct>): Promise<CatalogProduct> {
    const product = this.catalogProducts.get(id);
    if (!product) throw new Error("Catalog product not found");
    const updated = { ...product, ...updates, updatedAt: new Date() };
    this.catalogProducts.set(id, updated);
    return updated;
  }

  async deleteCatalogProduct(id: string): Promise<void> {
    this.catalogProducts.delete(id);
  }

  async getProductsWithBom(): Promise<(CatalogProduct & { bom: (ProductBom & { component: BomComponent })[] })[]> {
    const products = Array.from(this.catalogProducts.values());
    return products.map(product => ({
      ...product,
      bom: Array.from(this.productBom.values())
        .filter(bom => bom.productId === product.id)
        .map(bom => ({
          ...bom,
          component: this.bomComponents.get(bom.componentId)!
        }))
    }));
  }

  // Product BOM operations  
  async getProductBom(productId: string): Promise<(ProductBom & { component: BomComponent })[]> {
    return Array.from(this.productBom.values())
      .filter(bom => bom.productId === productId)
      .map(bom => ({
        ...bom,
        component: this.bomComponents.get(bom.componentId)!
      }));
  }

  async addProductBomComponent(productBom: InsertProductBom): Promise<ProductBom> {
    const id = randomUUID();
    const newBom: ProductBom = { ...productBom, id };
    this.productBom.set(id, newBom);
    return newBom;
  }

  async updateProductBomComponent(id: string, updates: Partial<ProductBom>): Promise<ProductBom> {
    const bom = this.productBom.get(id);
    if (!bom) throw new Error("Product BOM not found");
    const updated = { ...bom, ...updates };
    this.productBom.set(id, updated);
    return updated;
  }

  async removeProductBomComponent(id: string): Promise<void> {
    this.productBom.delete(id);
  }

  // Catalog Service operations
  async getCatalogServices(categoryId?: string): Promise<CatalogService[]> {
    const services = Array.from(this.catalogServices.values());
    return categoryId ? services.filter(s => s.categoryId === categoryId) : services;
  }

  async getCatalogService(id: string): Promise<CatalogService | undefined> {
    return this.catalogServices.get(id);
  }

  async getCatalogServiceByCode(serviceCode: string): Promise<CatalogService | undefined> {
    return Array.from(this.catalogServices.values()).find(s => s.serviceCode === serviceCode);
  }

  async createCatalogService(service: InsertCatalogService): Promise<CatalogService> {
    const id = randomUUID();
    const newService: CatalogService = {
      ...service,
      id,
      isActive: service.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.catalogServices.set(id, newService);
    return newService;
  }

  async updateCatalogService(id: string, updates: Partial<CatalogService>): Promise<CatalogService> {
    const service = this.catalogServices.get(id);
    if (!service) throw new Error("Catalog service not found");
    const updated = { ...service, ...updates, updatedAt: new Date() };
    this.catalogServices.set(id, updated);
    return updated;
  }

  async deleteCatalogService(id: string): Promise<void> {
    this.catalogServices.delete(id);
  }

  async getServicesByType(serviceType: string): Promise<CatalogService[]> {
    return Array.from(this.catalogServices.values()).filter(s => s.serviceType === serviceType);
  }

  // Catalog Solution operations
  async getCatalogSolutions(categoryId?: string): Promise<CatalogSolution[]> {
    const solutions = Array.from(this.catalogSolutions.values());
    return categoryId ? solutions.filter(s => s.categoryId === categoryId) : solutions;
  }

  async getCatalogSolution(id: string): Promise<CatalogSolution | undefined> {
    return this.catalogSolutions.get(id);
  }

  async getCatalogSolutionByCode(solutionCode: string): Promise<CatalogSolution | undefined> {
    return Array.from(this.catalogSolutions.values()).find(s => s.solutionCode === solutionCode);
  }

  async createCatalogSolution(solution: InsertCatalogSolution): Promise<CatalogSolution> {
    const id = randomUUID();
    const newSolution: CatalogSolution = {
      ...solution,
      id,
      isActive: solution.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.catalogSolutions.set(id, newSolution);
    return newSolution;
  }

  async updateCatalogSolution(id: string, updates: Partial<CatalogSolution>): Promise<CatalogSolution> {
    const solution = this.catalogSolutions.get(id);
    if (!solution) throw new Error("Catalog solution not found");
    const updated = { ...solution, ...updates, updatedAt: new Date() };
    this.catalogSolutions.set(id, updated);
    return updated;
  }

  async deleteCatalogSolution(id: string): Promise<void> {
    this.catalogSolutions.delete(id);
  }

  async getSolutionsWithComponents(): Promise<(CatalogSolution & { components: SolutionComponent[] })[]> {
    const solutions = Array.from(this.catalogSolutions.values());
    return solutions.map(solution => ({
      ...solution,
      components: Array.from(this.solutionComponents.values()).filter(c => c.solutionId === solution.id)
    }));
  }

  // Solution Component operations
  async getSolutionComponents(solutionId: string): Promise<SolutionComponent[]> {
    return Array.from(this.solutionComponents.values()).filter(c => c.solutionId === solutionId);
  }

  async addSolutionComponent(component: InsertSolutionComponent): Promise<SolutionComponent> {
    const id = randomUUID();
    const newComponent: SolutionComponent = { ...component, id };
    this.solutionComponents.set(id, newComponent);
    return newComponent;
  }

  async updateSolutionComponent(id: string, updates: Partial<SolutionComponent>): Promise<SolutionComponent> {
    const component = this.solutionComponents.get(id);
    if (!component) throw new Error("Solution component not found");
    const updated = { ...component, ...updates };
    this.solutionComponents.set(id, updated);
    return updated;
  }

  async removeSolutionComponent(id: string): Promise<void> {
    this.solutionComponents.delete(id);
  }

  // Pricing History operations
  async getPricingHistory(entityType: string, entityId: string): Promise<PricingHistory[]> {
    return Array.from(this.pricingHistory.values())
      .filter(p => p.entityType === entityType && p.entityId === entityId);
  }

  async createPricingHistoryEntry(entry: InsertPricingHistory): Promise<PricingHistory> {
    const id = randomUUID();
    const newEntry: PricingHistory = {
      ...entry,
      id,
      effectiveDate: entry.effectiveDate || new Date(),
      createdAt: new Date()
    };
    this.pricingHistory.set(id, newEntry);
    return newEntry;
  }

  // Competitive Analysis operations
  async getCompetitiveAnalysis(): Promise<CompetitiveAnalysis[]> {
    return Array.from(this.competitiveAnalysis.values());
  }

  async getCompetitiveAnalysisForProduct(productName: string): Promise<CompetitiveAnalysis[]> {
    return Array.from(this.competitiveAnalysis.values()).filter(c => c.productName === productName);
  }

  async createCompetitiveAnalysis(analysis: InsertCompetitiveAnalysis): Promise<CompetitiveAnalysis> {
    const id = randomUUID();
    const newAnalysis: CompetitiveAnalysis = {
      ...analysis,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.competitiveAnalysis.set(id, newAnalysis);
    return newAnalysis;
  }

  async updateCompetitiveAnalysis(id: string, updates: Partial<CompetitiveAnalysis>): Promise<CompetitiveAnalysis> {
    const analysis = this.competitiveAnalysis.get(id);
    if (!analysis) throw new Error("Competitive analysis not found");
    const updated = { ...analysis, ...updates, updatedAt: new Date() };
    this.competitiveAnalysis.set(id, updated);
    return updated;
  }

  async deleteCompetitiveAnalysis(id: string): Promise<void> {
    this.competitiveAnalysis.delete(id);
  }

  // Catalog Analytics and Reporting
  async getCatalogMetrics(): Promise<{
    totalProducts: number;
    totalServices: number;
    totalSolutions: number;
    averageProductMargin: number;
    averageServiceMargin: number;
    totalCatalogValue: number;
  }> {
    const products = Array.from(this.catalogProducts.values());
    const services = Array.from(this.catalogServices.values());
    const solutions = Array.from(this.catalogSolutions.values());

    const productMargins = products.map(p => 
      ((p.commercialSellPrice - p.totalCostPrice) / p.commercialSellPrice) * 100
    );
    const serviceMargins = services.map(s => 
      ((s.commercialSellPrice - s.deliveryCost) / s.commercialSellPrice) * 100
    );

    return {
      totalProducts: products.length,
      totalServices: services.length,
      totalSolutions: solutions.length,
      averageProductMargin: productMargins.reduce((a, b) => a + b, 0) / productMargins.length || 0,
      averageServiceMargin: serviceMargins.reduce((a, b) => a + b, 0) / serviceMargins.length || 0,
      totalCatalogValue: products.reduce((sum, p) => sum + p.commercialSellPrice, 0) +
                        services.reduce((sum, s) => sum + s.commercialSellPrice, 0) +
                        solutions.reduce((sum, s) => sum + s.commercialSellPrice, 0)
    };
  }

  async getCatalogReport(reportType: 'pricing' | 'margins' | 'competitive' | 'bom'): Promise<any> {
    switch (reportType) {
      case 'pricing':
        return {
          products: Array.from(this.catalogProducts.values()),
          services: Array.from(this.catalogServices.values()),
          solutions: Array.from(this.catalogSolutions.values())
        };
      case 'margins':
        return await this.getCatalogMetrics();
      case 'competitive':
        return Array.from(this.competitiveAnalysis.values());
      case 'bom':
        return await this.getProductsWithBom();
      default:
        return {};
    }
  }
}

// Import database storage for HIPAA compliance
import { DbStorage } from "./db-storage";
import { isDatabaseAvailable } from "./db";

// Use database storage for HIPAA compliance or fallback to MemStorage for development
export const storage = isDatabaseAvailable() 
  ? new DbStorage() 
  : new MemStorage();
