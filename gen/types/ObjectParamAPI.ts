import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Accessor } from '../models/Accessor';
import { AccessorData } from '../models/AccessorData';
import { AccessorModel } from '../models/AccessorModel';
import { AccessorSparse } from '../models/AccessorSparse';
import { AccessorSparseIndices } from '../models/AccessorSparseIndices';
import { AccessorSparseValues } from '../models/AccessorSparseValues';
import { Address } from '../models/Address';
import { Animation } from '../models/Animation';
import { AnimationChannel } from '../models/AnimationChannel';
import { AnimationChannelTarget } from '../models/AnimationChannelTarget';
import { AnimationSampler } from '../models/AnimationSampler';
import { ApiResponse } from '../models/ApiResponse';
import { ApiResponseContent } from '../models/ApiResponseContent';
import { Asset } from '../models/Asset';
import { BTAPIApplicationExtensionInfo } from '../models/BTAPIApplicationExtensionInfo';
import { BTAPIApplicationSummaryInfo } from '../models/BTAPIApplicationSummaryInfo';
import { BTAPIWorkflowableType } from '../models/BTAPIWorkflowableType';
import { BTAclEntryInfo } from '../models/BTAclEntryInfo';
import { BTAclInfo } from '../models/BTAclInfo';
import { BTActiveSheetMetalFilter2944 } from '../models/BTActiveSheetMetalFilter2944';
import { BTActiveWorkflowInfo } from '../models/BTActiveWorkflowInfo';
import { BTAddressInfo } from '../models/BTAddressInfo';
import { BTAliasEntryInfo } from '../models/BTAliasEntryInfo';
import { BTAliasEntryParams } from '../models/BTAliasEntryParams';
import { BTAliasInfo } from '../models/BTAliasInfo';
import { BTAliasParams } from '../models/BTAliasParams';
import { BTAllowEdgePointFilter2371 } from '../models/BTAllowEdgePointFilter2371';
import { BTAllowFlattenedGeometryFilter2140 } from '../models/BTAllowFlattenedGeometryFilter2140';
import { BTAllowMeshGeometryFilter1026 } from '../models/BTAllowMeshGeometryFilter1026';
import { BTAllowedMateTypeFilter1511 } from '../models/BTAllowedMateTypeFilter1511';
import { BTAndFilter110 } from '../models/BTAndFilter110';
import { BTAngularDimensionDisplayData320 } from '../models/BTAngularDimensionDisplayData320';
import { BTApiConfiguration } from '../models/BTApiConfiguration';
import { BTApiTable2300 } from '../models/BTApiTable2300';
import { BTApiTableColumn3141 } from '../models/BTApiTableColumn3141';
import { BTApiTableList1223 } from '../models/BTApiTableList1223';
import { BTApiTableRow2915 } from '../models/BTApiTableRow2915';
import { BTApiVersion } from '../models/BTApiVersion';
import { BTAppAssociativeDataArrayInfo } from '../models/BTAppAssociativeDataArrayInfo';
import { BTAppElementBasicInfo } from '../models/BTAppElementBasicInfo';
import { BTAppElementBulkCreateInfo } from '../models/BTAppElementBulkCreateInfo';
import { BTAppElementBulkCreateParams } from '../models/BTAppElementBulkCreateParams';
import { BTAppElementChangeParams } from '../models/BTAppElementChangeParams';
import { BTAppElementCommitTransactionParams } from '../models/BTAppElementCommitTransactionParams';
import { BTAppElementContentDeltaInfo } from '../models/BTAppElementContentDeltaInfo';
import { BTAppElementContentEntryInfo } from '../models/BTAppElementContentEntryInfo';
import { BTAppElementContentInfo } from '../models/BTAppElementContentInfo';
import { BTAppElementErrorCode } from '../models/BTAppElementErrorCode';
import { BTAppElementHistoryEntryInfo } from '../models/BTAppElementHistoryEntryInfo';
import { BTAppElementHistoryInfo } from '../models/BTAppElementHistoryInfo';
import { BTAppElementIdsInfo } from '../models/BTAppElementIdsInfo';
import { BTAppElementModifyInfo } from '../models/BTAppElementModifyInfo';
import { BTAppElementParams } from '../models/BTAppElementParams';
import { BTAppElementParamsArrayBTCopyViewAssociativeDataParams } from '../models/BTAppElementParamsArrayBTCopyViewAssociativeDataParams';
import { BTAppElementReferenceInfo } from '../models/BTAppElementReferenceInfo';
import { BTAppElementReferenceParams } from '../models/BTAppElementReferenceParams';
import { BTAppElementReferenceResolveInfo } from '../models/BTAppElementReferenceResolveInfo';
import { BTAppElementReferencesResolveInfo } from '../models/BTAppElementReferencesResolveInfo';
import { BTAppElementStartTransactionParams } from '../models/BTAppElementStartTransactionParams';
import { BTAppElementTransactionsInfo } from '../models/BTAppElementTransactionsInfo';
import { BTAppElementUpdateParams } from '../models/BTAppElementUpdateParams';
import { BTAppModificationRequestInfo } from '../models/BTAppModificationRequestInfo';
import { BTAppModificationRequestState } from '../models/BTAppModificationRequestState';
import { BTAppearanceOverride2517 } from '../models/BTAppearanceOverride2517';
import { BTApplicationElementThumbnailParams } from '../models/BTApplicationElementThumbnailParams';
import { BTApplicationElementThumbnailParamsArray } from '../models/BTApplicationElementThumbnailParamsArray';
import { BTApplicationSettingsType } from '../models/BTApplicationSettingsType';
import { BTApplicationTargetInfo } from '../models/BTApplicationTargetInfo';
import { BTArcLengthDimensionDisplayData1018 } from '../models/BTArcLengthDimensionDisplayData1018';
import { BTAssemblyDefinitionInfo } from '../models/BTAssemblyDefinitionInfo';
import { BTAssemblyFeatureDataInfo } from '../models/BTAssemblyFeatureDataInfo';
import { BTAssemblyFeatureInfo } from '../models/BTAssemblyFeatureInfo';
import { BTAssemblyFeatureListResponse1174 } from '../models/BTAssemblyFeatureListResponse1174';
import { BTAssemblyInsertTransformedInstancesResponse } from '../models/BTAssemblyInsertTransformedInstancesResponse';
import { BTAssemblyInstance947 } from '../models/BTAssemblyInstance947';
import { BTAssemblyInstanceDefinitionParams } from '../models/BTAssemblyInstanceDefinitionParams';
import { BTAssemblyInstanceInfo } from '../models/BTAssemblyInstanceInfo';
import { BTAssemblyInstanceOccurrenceInfo } from '../models/BTAssemblyInstanceOccurrenceInfo';
import { BTAssemblyInstanceStatus } from '../models/BTAssemblyInstanceStatus';
import { BTAssemblyInstanceType } from '../models/BTAssemblyInstanceType';
import { BTAssemblyMateConnectorInfo } from '../models/BTAssemblyMateConnectorInfo';
import { BTAssemblyModificationParams } from '../models/BTAssemblyModificationParams';
import { BTAssemblyOccurrenceInfo } from '../models/BTAssemblyOccurrenceInfo';
import { BTAssemblyPartBodyType } from '../models/BTAssemblyPartBodyType';
import { BTAssemblyPartInfo } from '../models/BTAssemblyPartInfo';
import { BTAssemblyPattern1974 } from '../models/BTAssemblyPattern1974';
import { BTAssemblyPatternInfo } from '../models/BTAssemblyPatternInfo';
import { BTAssemblyPsFeatureInfo } from '../models/BTAssemblyPsFeatureInfo';
import { BTAssemblyReferencesDisplayData1562 } from '../models/BTAssemblyReferencesDisplayData1562';
import { BTAssemblyReplicate2774 } from '../models/BTAssemblyReplicate2774';
import { BTAssemblySimulation2246 } from '../models/BTAssemblySimulation2246';
import { BTAssemblySimulationData978 } from '../models/BTAssemblySimulationData978';
import { BTAssemblySimulationStructuralLoadsTable3867 } from '../models/BTAssemblySimulationStructuralLoadsTable3867';
import { BTAssemblySimulationTable3236 } from '../models/BTAssemblySimulationTable3236';
import { BTAssemblyTransformDefinitionParams } from '../models/BTAssemblyTransformDefinitionParams';
import { BTAssemblyTransformedInstancesDefinitionParams } from '../models/BTAssemblyTransformedInstancesDefinitionParams';
import { BTAssociativeDataInfo } from '../models/BTAssociativeDataInfo';
import { BTBExportModelParams } from '../models/BTBExportModelParams';
import { BTBSMatrix386 } from '../models/BTBSMatrix386';
import { BTBaseEntityAppearanceEntry3607 } from '../models/BTBaseEntityAppearanceEntry3607';
import { BTBaseEntityAppearanceSettings1391 } from '../models/BTBaseEntityAppearanceSettings1391';
import { BTBaseEntityData33 } from '../models/BTBaseEntityData33';
import { BTBaseInfo } from '../models/BTBaseInfo';
import { BTBasePartColorCycle2614 } from '../models/BTBasePartColorCycle2614';
import { BTBaseSMJointTableRowMetadata2232 } from '../models/BTBaseSMJointTableRowMetadata2232';
import { BTBillOfMaterialsElementInfo } from '../models/BTBillOfMaterialsElementInfo';
import { BTBillOfMaterialsHeaderInfo } from '../models/BTBillOfMaterialsHeaderInfo';
import { BTBillOfMaterialsInfo } from '../models/BTBillOfMaterialsInfo';
import { BTBillOfMaterialsItemSourceInfo } from '../models/BTBillOfMaterialsItemSourceInfo';
import { BTBillOfMaterialsObjectWithPropertiesInfo } from '../models/BTBillOfMaterialsObjectWithPropertiesInfo';
import { BTBillOfMaterialsRowInfo } from '../models/BTBillOfMaterialsRowInfo';
import { BTBillOfMaterialsSourceInfo } from '../models/BTBillOfMaterialsSourceInfo';
import { BTBillOfMaterialsTable1073 } from '../models/BTBillOfMaterialsTable1073';
import { BTBillOfMaterialsTableRow1425 } from '../models/BTBillOfMaterialsTableRow1425';
import { BTBillOfMaterialsTableRowMetadata1300 } from '../models/BTBillOfMaterialsTableRowMetadata1300';
import { BTBillOfMaterialsUniqueItemId2029 } from '../models/BTBillOfMaterialsUniqueItemId2029';
import { BTBillingPlanInfo } from '../models/BTBillingPlanInfo';
import { BTBodyEntity26 } from '../models/BTBodyEntity26';
import { BTBodyTypeFilter112 } from '../models/BTBodyTypeFilter112';
import { BTBoundingBox1052 } from '../models/BTBoundingBox1052';
import { BTBoundingBoxInfo } from '../models/BTBoundingBoxInfo';
import { BTCacheDataPath191 } from '../models/BTCacheDataPath191';
import { BTCardInfo } from '../models/BTCardInfo';
import { BTCategoryParam } from '../models/BTCategoryParam';
import { BTCategoryPropertyConfigInfo } from '../models/BTCategoryPropertyConfigInfo';
import { BTCategoryPropertyInfo } from '../models/BTCategoryPropertyInfo';
import { BTCenterlineDimensionDisplayData1798 } from '../models/BTCenterlineDimensionDisplayData1798';
import { BTCircleDescription1145 } from '../models/BTCircleDescription1145';
import { BTClassroomInfo } from '../models/BTClassroomInfo';
import { BTClonedInstance2505 } from '../models/BTClonedInstance2505';
import { BTClosedConstituentPartData2911 } from '../models/BTClosedConstituentPartData2911';
import { BTClosedCurveFilter1206 } from '../models/BTClosedCurveFilter1206';
import { BTCloudStorageAccountInfo } from '../models/BTCloudStorageAccountInfo';
import { BTCloudStorageObjectInfo } from '../models/BTCloudStorageObjectInfo';
import { BTColorInfo } from '../models/BTColorInfo';
import { BTCommentAttachmentInfo } from '../models/BTCommentAttachmentInfo';
import { BTCommentInfo } from '../models/BTCommentInfo';
import { BTCommentParams } from '../models/BTCommentParams';
import { BTCommonUnitInfo } from '../models/BTCommonUnitInfo';
import { BTCommonUnitsInfo } from '../models/BTCommonUnitsInfo';
import { BTCompanyInfo } from '../models/BTCompanyInfo';
import { BTCompanySummaryInfo } from '../models/BTCompanySummaryInfo';
import { BTCompanyUserInfo } from '../models/BTCompanyUserInfo';
import { BTCompanyUserParams } from '../models/BTCompanyUserParams';
import { BTCompanyUserSummaryAdminInfo } from '../models/BTCompanyUserSummaryAdminInfo';
import { BTCompanyUserSummaryInfo } from '../models/BTCompanyUserSummaryInfo';
import { BTComputedAssemblyPropertyAggregationOperator } from '../models/BTComputedAssemblyPropertyAggregationOperator';
import { BTComputedAssemblyPropertyConfig } from '../models/BTComputedAssemblyPropertyConfig';
import { BTComputedAssemblyPropertyErrorPolicy } from '../models/BTComputedAssemblyPropertyErrorPolicy';
import { BTComputedConfigurationInputSpec2525 } from '../models/BTComputedConfigurationInputSpec2525';
import { BTComputedPartPropertyConfig } from '../models/BTComputedPartPropertyConfig';
import { BTComputedPartPropertySpec1746 } from '../models/BTComputedPartPropertySpec1746';
import { BTConeDescription860 } from '../models/BTConeDescription860';
import { BTConfigurationInfo } from '../models/BTConfigurationInfo';
import { BTConfigurationParams } from '../models/BTConfigurationParams';
import { BTConfigurationResponse2019 } from '../models/BTConfigurationResponse2019';
import { BTConfigurationUpdateCall2933 } from '../models/BTConfigurationUpdateCall2933';
import { BTConfiguredDimensionColumnInfo2168 } from '../models/BTConfiguredDimensionColumnInfo2168';
import { BTConfiguredFeatureColumnInfo1014 } from '../models/BTConfiguredFeatureColumnInfo1014';
import { BTConfiguredParameterColumnInfo2900 } from '../models/BTConfiguredParameterColumnInfo2900';
import { BTConfiguredPartProperties2645 } from '../models/BTConfiguredPartProperties2645';
import { BTConfiguredPartPropertiesTable2740 } from '../models/BTConfiguredPartPropertiesTable2740';
import { BTConfiguredSuppressionColumnInfo2498 } from '../models/BTConfiguredSuppressionColumnInfo2498';
import { BTConfiguredValuesColumnInfo1025 } from '../models/BTConfiguredValuesColumnInfo1025';
import { BTConstructionObjectFilter113 } from '../models/BTConstructionObjectFilter113';
import { BTConstructionPlaneEntity27 } from '../models/BTConstructionPlaneEntity27';
import { BTCoordinateSystem387 } from '../models/BTCoordinateSystem387';
import { BTCopyDocumentInfo } from '../models/BTCopyDocumentInfo';
import { BTCopyDocumentParams } from '../models/BTCopyDocumentParams';
import { BTCopyElementParams } from '../models/BTCopyElementParams';
import { BTCopyViewAssociativeDataParams } from '../models/BTCopyViewAssociativeDataParams';
import { BTCountDimensionDisplayData1778 } from '../models/BTCountDimensionDisplayData1778';
import { BTCurveDescription1583 } from '../models/BTCurveDescription1583';
import { BTCurveGeometry114 } from '../models/BTCurveGeometry114';
import { BTCurveGeometryCircle115 } from '../models/BTCurveGeometryCircle115';
import { BTCurveGeometryConic2284 } from '../models/BTCurveGeometryConic2284';
import { BTCurveGeometryControlPointSpline2197 } from '../models/BTCurveGeometryControlPointSpline2197';
import { BTCurveGeometryEllipse1189 } from '../models/BTCurveGeometryEllipse1189';
import { BTCurveGeometryInterpolatedSpline116 } from '../models/BTCurveGeometryInterpolatedSpline116';
import { BTCurveGeometryLine117 } from '../models/BTCurveGeometryLine117';
import { BTCurveGeometrySpline118 } from '../models/BTCurveGeometrySpline118';
import { BTCurveLengthDimensionDisplayData322 } from '../models/BTCurveLengthDimensionDisplayData322';
import { BTCylinderDescription686 } from '../models/BTCylinderDescription686';
import { BTCylindricalImageMapping1640 } from '../models/BTCylindricalImageMapping1640';
import { BTDebugGeometry2059 } from '../models/BTDebugGeometry2059';
import { BTDecal2404 } from '../models/BTDecal2404';
import { BTDefaultFeatures119 } from '../models/BTDefaultFeatures119';
import { BTDefaultUnitInfo } from '../models/BTDefaultUnitInfo';
import { BTDefaultUnitsInfo } from '../models/BTDefaultUnitsInfo';
import { BTDeviceLoginSecretInfo } from '../models/BTDeviceLoginSecretInfo';
import { BTDiffInfo } from '../models/BTDiffInfo';
import { BTDiffInfoCollectionType } from '../models/BTDiffInfoCollectionType';
import { BTDiffJsonResponse2725 } from '../models/BTDiffJsonResponse2725';
import { BTDiffJsonResponse2725Patch } from '../models/BTDiffJsonResponse2725Patch';
import { BTDimensionDisplayData323 } from '../models/BTDimensionDisplayData323';
import { BTDiscount } from '../models/BTDiscount';
import { BTDiscountInfo } from '../models/BTDiscountInfo';
import { BTDiscountOwnerIdPlanId } from '../models/BTDiscountOwnerIdPlanId';
import { BTDocumentElementCreationDescriptor } from '../models/BTDocumentElementCreationDescriptor';
import { BTDocumentElementInfo } from '../models/BTDocumentElementInfo';
import { BTDocumentElementProcessingInfo } from '../models/BTDocumentElementProcessingInfo';
import { BTDocumentHistoryInfo } from '../models/BTDocumentHistoryInfo';
import { BTDocumentInfo } from '../models/BTDocumentInfo';
import { BTDocumentLabelInfo } from '../models/BTDocumentLabelInfo';
import { BTDocumentMergeInfo } from '../models/BTDocumentMergeInfo';
import { BTDocumentMessageBody } from '../models/BTDocumentMessageBody';
import { BTDocumentOpenEventParams } from '../models/BTDocumentOpenEventParams';
import { BTDocumentParams } from '../models/BTDocumentParams';
import { BTDocumentProcessingInfo } from '../models/BTDocumentProcessingInfo';
import { BTDocumentSearchHitInfo } from '../models/BTDocumentSearchHitInfo';
import { BTDocumentSearchParams } from '../models/BTDocumentSearchParams';
import { BTDocumentSelectorInfo } from '../models/BTDocumentSelectorInfo';
import { BTDocumentSelectorParametersInfo } from '../models/BTDocumentSelectorParametersInfo';
import { BTDocumentSummaryInfo } from '../models/BTDocumentSummaryInfo';
import { BTDocumentSummarySearchInfo } from '../models/BTDocumentSummarySearchInfo';
import { BTDocumentVersionElementIds1897 } from '../models/BTDocumentVersionElementIds1897';
import { BTDocumentWithVersionAndElementId } from '../models/BTDocumentWithVersionAndElementId';
import { BTDocumentWithVersionId } from '../models/BTDocumentWithVersionId';
import { BTDomainSpecificMetadata961 } from '../models/BTDomainSpecificMetadata961';
import { BTDrawingHiddenLineOption } from '../models/BTDrawingHiddenLineOption';
import { BTDrawingModificationParams } from '../models/BTDrawingModificationParams';
import { BTDrawingParams } from '../models/BTDrawingParams';
import { BTESResultsFilter } from '../models/BTESResultsFilter';
import { BTESVersionWorkspaceChoice } from '../models/BTESVersionWorkspaceChoice';
import { BTEdgeTopologyFilter122 } from '../models/BTEdgeTopologyFilter122';
import { BTEditingLogic2350 } from '../models/BTEditingLogic2350';
import { BTElementDisplayData326 } from '../models/BTElementDisplayData326';
import { BTElementLibraryPurpose3353 } from '../models/BTElementLibraryPurpose3353';
import { BTElementLibraryReferenceData3133 } from '../models/BTElementLibraryReferenceData3133';
import { BTElementLibrarySummaryInfo } from '../models/BTElementLibrarySummaryInfo';
import { BTElementLocationParams } from '../models/BTElementLocationParams';
import { BTElementMergeInfo } from '../models/BTElementMergeInfo';
import { BTElementReference725 } from '../models/BTElementReference725';
import { BTElementTransaction } from '../models/BTElementTransaction';
import { BTEllipseDescription866 } from '../models/BTEllipseDescription866';
import { BTEllipseDiameterDimensionDisplayData1301 } from '../models/BTEllipseDiameterDimensionDisplayData1301';
import { BTEncodedConfigurationInfo } from '../models/BTEncodedConfigurationInfo';
import { BTEntityDegenerateEdge1129 } from '../models/BTEntityDegenerateEdge1129';
import { BTEntityDeletion24 } from '../models/BTEntityDeletion24';
import { BTEntityEdge30 } from '../models/BTEntityEdge30';
import { BTEntityFace31 } from '../models/BTEntityFace31';
import { BTEntityGeometry35 } from '../models/BTEntityGeometry35';
import { BTEntityPoint29 } from '../models/BTEntityPoint29';
import { BTEntityTypeFilter124 } from '../models/BTEntityTypeFilter124';
import { BTEventParams } from '../models/BTEventParams';
import { BTExplosion2754 } from '../models/BTExplosion2754';
import { BTExplosionStepFeature3008 } from '../models/BTExplosionStepFeature3008';
import { BTExportBodyProperties3559 } from '../models/BTExportBodyProperties3559';
import { BTExportModelArcEdgeGeometry1257 } from '../models/BTExportModelArcEdgeGeometry1257';
import { BTExportModelBodiesResponse734 } from '../models/BTExportModelBodiesResponse734';
import { BTExportModelBody1272 } from '../models/BTExportModelBody1272';
import { BTExportModelCoedge1342 } from '../models/BTExportModelCoedge1342';
import { BTExportModelEdge1782 } from '../models/BTExportModelEdge1782';
import { BTExportModelEdgeGeometry1125 } from '../models/BTExportModelEdgeGeometry1125';
import { BTExportModelFace1363 } from '../models/BTExportModelFace1363';
import { BTExportModelLoop1182 } from '../models/BTExportModelLoop1182';
import { BTExportModelProperties3216 } from '../models/BTExportModelProperties3216';
import { BTExportModelVertex858 } from '../models/BTExportModelVertex858';
import { BTExportRuleHardcodedPropertyInfo } from '../models/BTExportRuleHardcodedPropertyInfo';
import { BTExportRuleValidOptionsInfo } from '../models/BTExportRuleValidOptionsInfo';
import { BTExportTessellatedBody3398 } from '../models/BTExportTessellatedBody3398';
import { BTExportTessellatedEdgesBody890 } from '../models/BTExportTessellatedEdgesBody890';
import { BTExportTessellatedEdgesEdge1364 } from '../models/BTExportTessellatedEdgesEdge1364';
import { BTExportTessellatedEdgesResponse327 } from '../models/BTExportTessellatedEdgesResponse327';
import { BTExportTessellatedFacesBody1321 } from '../models/BTExportTessellatedFacesBody1321';
import { BTExportTessellatedFacesFace1192 } from '../models/BTExportTessellatedFacesFace1192';
import { BTExportTessellatedFacesFacet1417 } from '../models/BTExportTessellatedFacesFacet1417';
import { BTExportTessellatedFacesResponse898 } from '../models/BTExportTessellatedFacesResponse898';
import { BTExternalElementReferenceInfo } from '../models/BTExternalElementReferenceInfo';
import { BTExternalReference1936 } from '../models/BTExternalReference1936';
import { BTFSTable953 } from '../models/BTFSTable953';
import { BTFSTableColumnInfo623 } from '../models/BTFSTableColumnInfo623';
import { BTFSTableRowMetadata2262 } from '../models/BTFSTableRowMetadata2262';
import { BTFSValue1888 } from '../models/BTFSValue1888';
import { BTFSValueArray1499 } from '../models/BTFSValueArray1499';
import { BTFSValueBoolean1195 } from '../models/BTFSValueBoolean1195';
import { BTFSValueMap2062 } from '../models/BTFSValueMap2062';
import { BTFSValueMapEntry2077 } from '../models/BTFSValueMapEntry2077';
import { BTFSValueNumber772 } from '../models/BTFSValueNumber772';
import { BTFSValueOther1124 } from '../models/BTFSValueOther1124';
import { BTFSValueString1422 } from '../models/BTFSValueString1422';
import { BTFSValueTooBig1247 } from '../models/BTFSValueTooBig1247';
import { BTFSValueUndefined2003 } from '../models/BTFSValueUndefined2003';
import { BTFSValueWithUnits1817 } from '../models/BTFSValueWithUnits1817';
import { BTFeatureApiBase1430 } from '../models/BTFeatureApiBase1430';
import { BTFeatureDefinitionCall1406 } from '../models/BTFeatureDefinitionCall1406';
import { BTFeatureDefinitionResponse1617 } from '../models/BTFeatureDefinitionResponse1617';
import { BTFeatureEntity34 } from '../models/BTFeatureEntity34';
import { BTFeatureFilter127 } from '../models/BTFeatureFilter127';
import { BTFeatureListResponse2457 } from '../models/BTFeatureListResponse2457';
import { BTFeatureOccurrenceData775 } from '../models/BTFeatureOccurrenceData775';
import { BTFeatureScriptEvalCall2377 } from '../models/BTFeatureScriptEvalCall2377';
import { BTFeatureScriptEvalResponse1859 } from '../models/BTFeatureScriptEvalResponse1859';
import { BTFeatureSpec129 } from '../models/BTFeatureSpec129';
import { BTFeatureSpecsResponse664 } from '../models/BTFeatureSpecsResponse664';
import { BTFeatureState1688 } from '../models/BTFeatureState1688';
import { BTFeatureStudioContents2239 } from '../models/BTFeatureStudioContents2239';
import { BTFeatureTypeFilter962 } from '../models/BTFeatureTypeFilter962';
import { BTFlatSheetMetalFilter3018 } from '../models/BTFlatSheetMetalFilter3018';
import { BTFolderInfo } from '../models/BTFolderInfo';
import { BTFolderStateInfo } from '../models/BTFolderStateInfo';
import { BTForeignDataResponse1070 } from '../models/BTForeignDataResponse1070';
import { BTFullElementId756 } from '../models/BTFullElementId756';
import { BTFullElementIdAndPartId643 } from '../models/BTFullElementIdAndPartId643';
import { BTFullElementIdWithDocument1729 } from '../models/BTFullElementIdWithDocument1729';
import { BTGeneratedGraphicsAppearance4159 } from '../models/BTGeneratedGraphicsAppearance4159';
import { BTGeometryFilter130 } from '../models/BTGeometryFilter130';
import { BTGeometryMateDisplayData1050 } from '../models/BTGeometryMateDisplayData1050';
import { BTGetJsonPaths1697 } from '../models/BTGetJsonPaths1697';
import { BTGetJsonPathsResponse1544 } from '../models/BTGetJsonPathsResponse1544';
import { BTGetJsonResponse2137 } from '../models/BTGetJsonResponse2137';
import { BTGetJsonResponse2137Tree } from '../models/BTGetJsonResponse2137Tree';
import { BTGlobalTreeMagicNodeInfo } from '../models/BTGlobalTreeMagicNodeInfo';
import { BTGlobalTreeNodeInfo } from '../models/BTGlobalTreeNodeInfo';
import { BTGlobalTreeNodeListResponse } from '../models/BTGlobalTreeNodeListResponse';
import { BTGlobalTreeNodeListResponseBTTeamInfo } from '../models/BTGlobalTreeNodeListResponseBTTeamInfo';
import { BTGlobalTreeNodesInfo } from '../models/BTGlobalTreeNodesInfo';
import { BTGraphicsAppearance1152 } from '../models/BTGraphicsAppearance1152';
import { BTGraphicsSectionPlaneData1429 } from '../models/BTGraphicsSectionPlaneData1429';
import { BTGraphicsSectionViewStateData4379 } from '../models/BTGraphicsSectionViewStateData4379';
import { BTIdTranslationInfo } from '../models/BTIdTranslationInfo';
import { BTIdTranslationParams } from '../models/BTIdTranslationParams';
import { BTIdTranslationResultInfo } from '../models/BTIdTranslationResultInfo';
import { BTIdentityInfo } from '../models/BTIdentityInfo';
import { BTImageFilter853 } from '../models/BTImageFilter853';
import { BTImageMapping3821 } from '../models/BTImageMapping3821';
import { BTImmutableByteArray } from '../models/BTImmutableByteArray';
import { BTImmutableDoubleArray } from '../models/BTImmutableDoubleArray';
import { BTImmutableFloatArray } from '../models/BTImmutableFloatArray';
import { BTImmutableIntArray } from '../models/BTImmutableIntArray';
import { BTImport } from '../models/BTImport';
import { BTIndividualTableProperties3760 } from '../models/BTIndividualTableProperties3760';
import { BTInheritedAclInfo } from '../models/BTInheritedAclInfo';
import { BTInnerArrayParameterLocation2368 } from '../models/BTInnerArrayParameterLocation2368';
import { BTInnerDerivedParameterLocation591 } from '../models/BTInnerDerivedParameterLocation591';
import { BTInnerParameterLocation1715 } from '../models/BTInnerParameterLocation1715';
import { BTInsertableInfo } from '../models/BTInsertableInfo';
import { BTInsertablesListResponse } from '../models/BTInsertablesListResponse';
import { BTInstance642 } from '../models/BTInstance642';
import { BTInstanceBase2263 } from '../models/BTInstanceBase2263';
import { BTInstanceControlNode750 } from '../models/BTInstanceControlNode750';
import { BTInstanceFolder3627 } from '../models/BTInstanceFolder3627';
import { BTInstanceStandardContentData2081 } from '../models/BTInstanceStandardContentData2081';
import { BTJEdit3734 } from '../models/BTJEdit3734';
import { BTJEditChange2636 } from '../models/BTJEditChange2636';
import { BTJEditChange2636AllOfValue } from '../models/BTJEditChange2636AllOfValue';
import { BTJEditDelete1992 } from '../models/BTJEditDelete1992';
import { BTJEditInsert2523 } from '../models/BTJEditInsert2523';
import { BTJEditList2707 } from '../models/BTJEditList2707';
import { BTJEditMove3245 } from '../models/BTJEditMove3245';
import { BTJPath3073 } from '../models/BTJPath3073';
import { BTJPathElement2297 } from '../models/BTJPathElement2297';
import { BTJPathIndex1871 } from '../models/BTJPathIndex1871';
import { BTJPathKey3221 } from '../models/BTJPathKey3221';
import { BTJsonMatch2290 } from '../models/BTJsonMatch2290';
import { BTKeyMouseValuesInfo } from '../models/BTKeyMouseValuesInfo';
import { BTLazilyParsedFeatureScript } from '../models/BTLazilyParsedFeatureScript';
import { BTLegacySearchHit } from '../models/BTLegacySearchHit';
import { BTLineDescription1559 } from '../models/BTLineDescription1559';
import { BTLinearDimensionDisplayData330 } from '../models/BTLinearDimensionDisplayData330';
import { BTLinkToLatestDocumentInfo } from '../models/BTLinkToLatestDocumentInfo';
import { BTLinkToLatestDocumentParams } from '../models/BTLinkToLatestDocumentParams';
import { BTListResponseBTAliasEntryInfo } from '../models/BTListResponseBTAliasEntryInfo';
import { BTListResponseBTAliasInfo } from '../models/BTListResponseBTAliasInfo';
import { BTListResponseBTCategoryPropertyInfo } from '../models/BTListResponseBTCategoryPropertyInfo';
import { BTListResponseBTCommentInfo } from '../models/BTListResponseBTCommentInfo';
import { BTListResponseBTCompanyInfo } from '../models/BTListResponseBTCompanyInfo';
import { BTListResponseBTInsertableInfo } from '../models/BTListResponseBTInsertableInfo';
import { BTListResponseBTObjectWorkflowInfo } from '../models/BTListResponseBTObjectWorkflowInfo';
import { BTListResponseBTPurchaseInfo } from '../models/BTListResponseBTPurchaseInfo';
import { BTListResponseBTRevisionInfo } from '../models/BTListResponseBTRevisionInfo';
import { BTListResponseBTTeamMemberInfo } from '../models/BTListResponseBTTeamMemberInfo';
import { BTListResponseBTTranslationRequestInfo } from '../models/BTListResponseBTTranslationRequestInfo';
import { BTListResponseBTWebhookInfo } from '../models/BTListResponseBTWebhookInfo';
import { BTListResponseBTWorkflowObserverOptionInfo } from '../models/BTListResponseBTWorkflowObserverOptionInfo';
import { BTLoadDisplayData837 } from '../models/BTLoadDisplayData837';
import { BTLocationInfo226 } from '../models/BTLocationInfo226';
import { BTLoginParams } from '../models/BTLoginParams';
import { BTMArrayParameterItem1843 } from '../models/BTMArrayParameterItem1843';
import { BTMAssemblyFeature12218 } from '../models/BTMAssemblyFeature12218';
import { BTMAssemblyFeature21022 } from '../models/BTMAssemblyFeature21022';
import { BTMAssemblyFeature887 } from '../models/BTMAssemblyFeature887';
import { BTMAssemblyFeatureFolder2543 } from '../models/BTMAssemblyFeatureFolder2543';
import { BTMAssemblyPatternFeature2241 } from '../models/BTMAssemblyPatternFeature2241';
import { BTMAssemblyReplicateFeature1351 } from '../models/BTMAssemblyReplicateFeature1351';
import { BTMConfigurationData1560 } from '../models/BTMConfigurationData1560';
import { BTMConfigurationParameter819 } from '../models/BTMConfigurationParameter819';
import { BTMConfigurationParameterBoolean2550 } from '../models/BTMConfigurationParameterBoolean2550';
import { BTMConfigurationParameterEnum105 } from '../models/BTMConfigurationParameterEnum105';
import { BTMConfigurationParameterQuantity1826 } from '../models/BTMConfigurationParameterQuantity1826';
import { BTMConfigurationParameterString872 } from '../models/BTMConfigurationParameterString872';
import { BTMConfiguredValue1341 } from '../models/BTMConfiguredValue1341';
import { BTMConfiguredValueByBoolean1501 } from '../models/BTMConfiguredValueByBoolean1501';
import { BTMConfiguredValueByEnum1923 } from '../models/BTMConfiguredValueByEnum1923';
import { BTMDatabaseParameter2229 } from '../models/BTMDatabaseParameter2229';
import { BTMEnumOption592 } from '../models/BTMEnumOption592';
import { BTMFeature134 } from '../models/BTMFeature134';
import { BTMFeatureInvalid1031 } from '../models/BTMFeatureInvalid1031';
import { BTMFeatureQueryWithOccurrence157 } from '../models/BTMFeatureQueryWithOccurrence157';
import { BTMFolder3208 } from '../models/BTMFolder3208';
import { BTMGenerativeDesignFeature3195 } from '../models/BTMGenerativeDesignFeature3195';
import { BTMGeometryMate1260 } from '../models/BTMGeometryMate1260';
import { BTMImport136 } from '../models/BTMImport136';
import { BTMInContextQuery2254 } from '../models/BTMInContextQuery2254';
import { BTMIndividualCoEdgeQuery1332 } from '../models/BTMIndividualCoEdgeQuery1332';
import { BTMIndividualCreatedByQuery137 } from '../models/BTMIndividualCreatedByQuery137';
import { BTMIndividualOccurrenceQuery626 } from '../models/BTMIndividualOccurrenceQuery626';
import { BTMIndividualQuery138 } from '../models/BTMIndividualQuery138';
import { BTMIndividualQueryBase139 } from '../models/BTMIndividualQueryBase139';
import { BTMIndividualQueryWithOccurrence811 } from '../models/BTMIndividualQueryWithOccurrence811';
import { BTMIndividualQueryWithOccurrenceBase904 } from '../models/BTMIndividualQueryWithOccurrenceBase904';
import { BTMIndividualSketchRegionQuery140 } from '../models/BTMIndividualSketchRegionQuery140';
import { BTMIndividualSketchUniqueVerticesQuery1472 } from '../models/BTMIndividualSketchUniqueVerticesQuery1472';
import { BTMInferenceQueryWithOccurrence1083 } from '../models/BTMInferenceQueryWithOccurrence1083';
import { BTMLoad3538 } from '../models/BTMLoad3538';
import { BTMMate64 } from '../models/BTMMate64';
import { BTMMateConnector66 } from '../models/BTMMateConnector66';
import { BTMMateGroup65 } from '../models/BTMMateGroup65';
import { BTMMateRelation1412 } from '../models/BTMMateRelation1412';
import { BTMMeshPointQuery1183 } from '../models/BTMMeshPointQuery1183';
import { BTMModel141 } from '../models/BTMModel141';
import { BTMNode19 } from '../models/BTMNode19';
import { BTMNodeInvalid1772 } from '../models/BTMNodeInvalid1772';
import { BTMNonGeometricItem1864 } from '../models/BTMNonGeometricItem1864';
import { BTMParameter1 } from '../models/BTMParameter1';
import { BTMParameterAppearance627 } from '../models/BTMParameterAppearance627';
import { BTMParameterArray2025 } from '../models/BTMParameterArray2025';
import { BTMParameterBlobReference1679 } from '../models/BTMParameterBlobReference1679';
import { BTMParameterBoolean144 } from '../models/BTMParameterBoolean144';
import { BTMParameterConfigured2222 } from '../models/BTMParameterConfigured2222';
import { BTMParameterDerived864 } from '../models/BTMParameterDerived864';
import { BTMParameterEnum145 } from '../models/BTMParameterEnum145';
import { BTMParameterFeatureList1749 } from '../models/BTMParameterFeatureList1749';
import { BTMParameterForeignId146 } from '../models/BTMParameterForeignId146';
import { BTMParameterInvalid1664 } from '../models/BTMParameterInvalid1664';
import { BTMParameterLookupTablePath1419 } from '../models/BTMParameterLookupTablePath1419';
import { BTMParameterMaterial1388 } from '../models/BTMParameterMaterial1388';
import { BTMParameterMultiEnum3411 } from '../models/BTMParameterMultiEnum3411';
import { BTMParameterNullableQuantity807 } from '../models/BTMParameterNullableQuantity807';
import { BTMParameterProgress3232 } from '../models/BTMParameterProgress3232';
import { BTMParameterQuantity147 } from '../models/BTMParameterQuantity147';
import { BTMParameterQueryList148 } from '../models/BTMParameterQueryList148';
import { BTMParameterQueryWithOccurrenceList67 } from '../models/BTMParameterQueryWithOccurrenceList67';
import { BTMParameterReference2434 } from '../models/BTMParameterReference2434';
import { BTMParameterReferenceAssembly938 } from '../models/BTMParameterReferenceAssembly938';
import { BTMParameterReferenceBlob3281 } from '../models/BTMParameterReferenceBlob3281';
import { BTMParameterReferenceCADImport2016 } from '../models/BTMParameterReferenceCADImport2016';
import { BTMParameterReferenceImage2014 } from '../models/BTMParameterReferenceImage2014';
import { BTMParameterReferenceJSON790 } from '../models/BTMParameterReferenceJSON790';
import { BTMParameterReferencePartStudio3302 } from '../models/BTMParameterReferencePartStudio3302';
import { BTMParameterReferenceTable917 } from '../models/BTMParameterReferenceTable917';
import { BTMParameterReferenceVariableStudio3550 } from '../models/BTMParameterReferenceVariableStudio3550';
import { BTMParameterReferenceWithConfiguration3028 } from '../models/BTMParameterReferenceWithConfiguration3028';
import { BTMParameterString149 } from '../models/BTMParameterString149';
import { BTMParameterStringWithTolerances4286 } from '../models/BTMParameterStringWithTolerances4286';
import { BTMParametricPartStudioFeature3883 } from '../models/BTMParametricPartStudioFeature3883';
import { BTMPartStudioMateConnectorQuery1324 } from '../models/BTMPartStudioMateConnectorQuery1324';
import { BTMReadOnlyParameter3800 } from '../models/BTMReadOnlyParameter3800';
import { BTMRecordMetrics1169 } from '../models/BTMRecordMetrics1169';
import { BTMRollback150 } from '../models/BTMRollback150';
import { BTMSketch151 } from '../models/BTMSketch151';
import { BTMSketchCompositeEntity893 } from '../models/BTMSketchCompositeEntity893';
import { BTMSketchConstraint2 } from '../models/BTMSketchConstraint2';
import { BTMSketchCurve4 } from '../models/BTMSketchCurve4';
import { BTMSketchCurveSegment155 } from '../models/BTMSketchCurveSegment155';
import { BTMSketchEntity3 } from '../models/BTMSketchEntity3';
import { BTMSketchGeomEntity5 } from '../models/BTMSketchGeomEntity5';
import { BTMSketchImageEntity763 } from '../models/BTMSketchImageEntity763';
import { BTMSketchInvalid1601 } from '../models/BTMSketchInvalid1601';
import { BTMSketchPoint158 } from '../models/BTMSketchPoint158';
import { BTMSketchTextEntity1761 } from '../models/BTMSketchTextEntity1761';
import { BTMSuppressionState1924 } from '../models/BTMSuppressionState1924';
import { BTMSuppressionStateConfigured2598 } from '../models/BTMSuppressionStateConfigured2598';
import { BTMUnitsDefault160 } from '../models/BTMUnitsDefault160';
import { BTMUserCode161 } from '../models/BTMUserCode161';
import { BTMVariableStudioReference2764 } from '../models/BTMVariableStudioReference2764';
import { BTMassPropertiesBulkInfo } from '../models/BTMassPropertiesBulkInfo';
import { BTMassPropertiesInfo } from '../models/BTMassPropertiesInfo';
import { BTMateConnectorCSInfo } from '../models/BTMateConnectorCSInfo';
import { BTMateConnectorDisplayData94 } from '../models/BTMateConnectorDisplayData94';
import { BTMateConnectorEntity28 } from '../models/BTMateConnectorEntity28';
import { BTMateConnectorFilter163 } from '../models/BTMateConnectorFilter163';
import { BTMateDisplayData1358 } from '../models/BTMateDisplayData1358';
import { BTMateFilter162 } from '../models/BTMateFilter162';
import { BTMateGroupDisplayData1990 } from '../models/BTMateGroupDisplayData1990';
import { BTMateOccurrenceData1671 } from '../models/BTMateOccurrenceData1671';
import { BTMaterialLibraryMetadataInfo } from '../models/BTMaterialLibraryMetadataInfo';
import { BTMaterialLibrarySettingsInfo } from '../models/BTMaterialLibrarySettingsInfo';
import { BTMatrix3x3340 } from '../models/BTMatrix3x3340';
import { BTMergePreviewInfo } from '../models/BTMergePreviewInfo';
import { BTMergeStrategy } from '../models/BTMergeStrategy';
import { BTMetadataCategorySummaryInfo } from '../models/BTMetadataCategorySummaryInfo';
import { BTMetadataElementInfo } from '../models/BTMetadataElementInfo';
import { BTMetadataEnumValue } from '../models/BTMetadataEnumValue';
import { BTMetadataEnumValueInfo } from '../models/BTMetadataEnumValueInfo';
import { BTMetadataObjectInfo } from '../models/BTMetadataObjectInfo';
import { BTMetadataObjectListInfoBTMetadataElementInfo } from '../models/BTMetadataObjectListInfoBTMetadataElementInfo';
import { BTMetadataObjectListInfoBTMetadataPartInfo } from '../models/BTMetadataObjectListInfoBTMetadataPartInfo';
import { BTMetadataObjectType } from '../models/BTMetadataObjectType';
import { BTMetadataPartInfo } from '../models/BTMetadataPartInfo';
import { BTMetadataPropertyInfo } from '../models/BTMetadataPropertyInfo';
import { BTMetadataPropertyUiHintsInfo } from '../models/BTMetadataPropertyUiHintsInfo';
import { BTMetadataPropertyUpdateParams } from '../models/BTMetadataPropertyUpdateParams';
import { BTMetadataPropertyValidatorInfo } from '../models/BTMetadataPropertyValidatorInfo';
import { BTMetadataStateType } from '../models/BTMetadataStateType';
import { BTMetadataValueType } from '../models/BTMetadataValueType';
import { BTMicroversionId366 } from '../models/BTMicroversionId366';
import { BTMicroversionIdAndConfiguration2338 } from '../models/BTMicroversionIdAndConfiguration2338';
import { BTMicroversionIdAndConfigurationInterval2364 } from '../models/BTMicroversionIdAndConfigurationInterval2364';
import { BTMicroversionIdInterval367 } from '../models/BTMicroversionIdInterval367';
import { BTMicroversionInfo } from '../models/BTMicroversionInfo';
import { BTModelElementParams } from '../models/BTModelElementParams';
import { BTModelFormatFullInfo } from '../models/BTModelFormatFullInfo';
import { BTModelFormatInfo } from '../models/BTModelFormatInfo';
import { BTModelProperties1258 } from '../models/BTModelProperties1258';
import { BTModifiableEntityOnlyFilter1593 } from '../models/BTModifiableEntityOnlyFilter1593';
import { BTMoveElementInfo } from '../models/BTMoveElementInfo';
import { BTMoveElementParams } from '../models/BTMoveElementParams';
import { BTNameValuePair } from '../models/BTNameValuePair';
import { BTNamedPositionValuesColumnInfo816 } from '../models/BTNamedPositionValuesColumnInfo816';
import { BTNamedViewInfo } from '../models/BTNamedViewInfo';
import { BTNamedViewsInfo } from '../models/BTNamedViewsInfo';
import { BTNextPartNumber } from '../models/BTNextPartNumber';
import { BTNextPartNumberParam } from '../models/BTNextPartNumberParam';
import { BTNextPartNumbersParam } from '../models/BTNextPartNumbersParam';
import { BTNodeReference21 } from '../models/BTNodeReference21';
import { BTNonAlignedBoundingBox4180 } from '../models/BTNonAlignedBoundingBox4180';
import { BTNotFilter165 } from '../models/BTNotFilter165';
import { BTNotice227 } from '../models/BTNotice227';
import { BTNullableQuantityRange1340 } from '../models/BTNullableQuantityRange1340';
import { BTObjectId } from '../models/BTObjectId';
import { BTObjectWorkflowInfo } from '../models/BTObjectWorkflowInfo';
import { BTOccurrence74 } from '../models/BTOccurrence74';
import { BTOccurrenceData75 } from '../models/BTOccurrenceData75';
import { BTOccurrenceDisplayData95 } from '../models/BTOccurrenceDisplayData95';
import { BTOccurrenceFilter166 } from '../models/BTOccurrenceFilter166';
import { BTOccurrenceWithFullPartIds1464 } from '../models/BTOccurrenceWithFullPartIds1464';
import { BTOldPermission } from '../models/BTOldPermission';
import { BTOneConfigurationPartProperties1661 } from '../models/BTOneConfigurationPartProperties1661';
import { BTOnePartProperties230 } from '../models/BTOnePartProperties230';
import { BTOrFilter167 } from '../models/BTOrFilter167';
import { BTOriginDisplayData934 } from '../models/BTOriginDisplayData934';
import { BTOriginEntity935 } from '../models/BTOriginEntity935';
import { BTOtherDocumentSelectorParametersInfo } from '../models/BTOtherDocumentSelectorParametersInfo';
import { BTOwnerInfo } from '../models/BTOwnerInfo';
import { BTPAnnotation231 } from '../models/BTPAnnotation231';
import { BTPArgumentDeclaration232 } from '../models/BTPArgumentDeclaration232';
import { BTPBuiltinIdentifier233 } from '../models/BTPBuiltinIdentifier233';
import { BTPConversionFunction1362 } from '../models/BTPConversionFunction1362';
import { BTPExpression9 } from '../models/BTPExpression9';
import { BTPExpressionAccess237 } from '../models/BTPExpressionAccess237';
import { BTPExpressionAs238 } from '../models/BTPExpressionAs238';
import { BTPExpressionBuiltinCall239 } from '../models/BTPExpressionBuiltinCall239';
import { BTPExpressionCall240 } from '../models/BTPExpressionCall240';
import { BTPExpressionFunction1325 } from '../models/BTPExpressionFunction1325';
import { BTPExpressionGroup241 } from '../models/BTPExpressionGroup241';
import { BTPExpressionIs242 } from '../models/BTPExpressionIs242';
import { BTPExpressionNew243 } from '../models/BTPExpressionNew243';
import { BTPExpressionOperator244 } from '../models/BTPExpressionOperator244';
import { BTPExpressionSwitch2632 } from '../models/BTPExpressionSwitch2632';
import { BTPExpressionTry1271 } from '../models/BTPExpressionTry1271';
import { BTPExpressionVarReference245 } from '../models/BTPExpressionVarReference245';
import { BTPFunctionDeclaration246 } from '../models/BTPFunctionDeclaration246';
import { BTPFunctionOrPredicateDeclaration247 } from '../models/BTPFunctionOrPredicateDeclaration247';
import { BTPIdentifier8 } from '../models/BTPIdentifier8';
import { BTPLValue249 } from '../models/BTPLValue249';
import { BTPLValueAccess250 } from '../models/BTPLValueAccess250';
import { BTPLValueBoxDereference251 } from '../models/BTPLValueBoxDereference251';
import { BTPLValueVarReference252 } from '../models/BTPLValueVarReference252';
import { BTPLiteral253 } from '../models/BTPLiteral253';
import { BTPLiteralArray254 } from '../models/BTPLiteralArray254';
import { BTPLiteralBoolean255 } from '../models/BTPLiteralBoolean255';
import { BTPLiteralMap256 } from '../models/BTPLiteralMap256';
import { BTPLiteralMapEntry257 } from '../models/BTPLiteralMapEntry257';
import { BTPLiteralNumber258 } from '../models/BTPLiteralNumber258';
import { BTPLiteralString259 } from '../models/BTPLiteralString259';
import { BTPLiteralUndefined260 } from '../models/BTPLiteralUndefined260';
import { BTPModule234 } from '../models/BTPModule234';
import { BTPModuleId235 } from '../models/BTPModuleId235';
import { BTPName261 } from '../models/BTPName261';
import { BTPNode7 } from '../models/BTPNode7';
import { BTPOperatorDeclaration264 } from '../models/BTPOperatorDeclaration264';
import { BTPPredicateDeclaration265 } from '../models/BTPPredicateDeclaration265';
import { BTPProcedureDeclarationBase266 } from '../models/BTPProcedureDeclarationBase266';
import { BTPPropertyAccessor23 } from '../models/BTPPropertyAccessor23';
import { BTPSOIdentity2741 } from '../models/BTPSOIdentity2741';
import { BTPSpace10 } from '../models/BTPSpace10';
import { BTPStatement269 } from '../models/BTPStatement269';
import { BTPStatementAssignment270 } from '../models/BTPStatementAssignment270';
import { BTPStatementBlock271 } from '../models/BTPStatementBlock271';
import { BTPStatementBreak272 } from '../models/BTPStatementBreak272';
import { BTPStatementCompressedQuery1237 } from '../models/BTPStatementCompressedQuery1237';
import { BTPStatementConstantDeclaration273 } from '../models/BTPStatementConstantDeclaration273';
import { BTPStatementContinue274 } from '../models/BTPStatementContinue274';
import { BTPStatementExpression275 } from '../models/BTPStatementExpression275';
import { BTPStatementIf276 } from '../models/BTPStatementIf276';
import { BTPStatementLoop277 } from '../models/BTPStatementLoop277';
import { BTPStatementLoopFor3278 } from '../models/BTPStatementLoopFor3278';
import { BTPStatementLoopForIn279 } from '../models/BTPStatementLoopForIn279';
import { BTPStatementLoopWhile280 } from '../models/BTPStatementLoopWhile280';
import { BTPStatementReturn281 } from '../models/BTPStatementReturn281';
import { BTPStatementThrow1080 } from '../models/BTPStatementThrow1080';
import { BTPStatementTry1523 } from '../models/BTPStatementTry1523';
import { BTPStatementVarDeclaration282 } from '../models/BTPStatementVarDeclaration282';
import { BTPTopLevelConstantDeclaration283 } from '../models/BTPTopLevelConstantDeclaration283';
import { BTPTopLevelEnumDeclaration284 } from '../models/BTPTopLevelEnumDeclaration284';
import { BTPTopLevelImport285 } from '../models/BTPTopLevelImport285';
import { BTPTopLevelNode286 } from '../models/BTPTopLevelNode286';
import { BTPTopLevelTypeDeclaration287 } from '../models/BTPTopLevelTypeDeclaration287';
import { BTPTopLevelUserTypeDeclaration288 } from '../models/BTPTopLevelUserTypeDeclaration288';
import { BTPTypeName290 } from '../models/BTPTypeName290';
import { BTPTypeNameStandard291 } from '../models/BTPTypeNameStandard291';
import { BTPTypeNameUser292 } from '../models/BTPTypeNameUser292';
import { BTParameterExpressionErrorInfo2037 } from '../models/BTParameterExpressionErrorInfo2037';
import { BTParameterGroupSpec3469 } from '../models/BTParameterGroupSpec3469';
import { BTParameterLookupTableEntry1667 } from '../models/BTParameterLookupTableEntry1667';
import { BTParameterLookupTableListEntry1916 } from '../models/BTParameterLookupTableListEntry1916';
import { BTParameterSpec6 } from '../models/BTParameterSpec6';
import { BTParameterSpecAppearance1740 } from '../models/BTParameterSpecAppearance1740';
import { BTParameterSpecArray2600 } from '../models/BTParameterSpecArray2600';
import { BTParameterSpecBoolean170 } from '../models/BTParameterSpecBoolean170';
import { BTParameterSpecCategories4083 } from '../models/BTParameterSpecCategories4083';
import { BTParameterSpecDatabase1071 } from '../models/BTParameterSpecDatabase1071';
import { BTParameterSpecDerived736 } from '../models/BTParameterSpecDerived736';
import { BTParameterSpecEnum171 } from '../models/BTParameterSpecEnum171';
import { BTParameterSpecFeatureList703 } from '../models/BTParameterSpecFeatureList703';
import { BTParameterSpecForeignId172 } from '../models/BTParameterSpecForeignId172';
import { BTParameterSpecLookupTablePath761 } from '../models/BTParameterSpecLookupTablePath761';
import { BTParameterSpecMaterial2700 } from '../models/BTParameterSpecMaterial2700';
import { BTParameterSpecMultiEnum3118 } from '../models/BTParameterSpecMultiEnum3118';
import { BTParameterSpecNullableQuantity715 } from '../models/BTParameterSpecNullableQuantity715';
import { BTParameterSpecProgress3078 } from '../models/BTParameterSpecProgress3078';
import { BTParameterSpecQuantity173 } from '../models/BTParameterSpecQuantity173';
import { BTParameterSpecQuery174 } from '../models/BTParameterSpecQuery174';
import { BTParameterSpecReference2789 } from '../models/BTParameterSpecReference2789';
import { BTParameterSpecReferenceAssembly2821 } from '../models/BTParameterSpecReferenceAssembly2821';
import { BTParameterSpecReferenceBlob1367 } from '../models/BTParameterSpecReferenceBlob1367';
import { BTParameterSpecReferenceCADImport1792 } from '../models/BTParameterSpecReferenceCADImport1792';
import { BTParameterSpecReferenceImage1722 } from '../models/BTParameterSpecReferenceImage1722';
import { BTParameterSpecReferenceJSON1816 } from '../models/BTParameterSpecReferenceJSON1816';
import { BTParameterSpecReferencePartStudio1256 } from '../models/BTParameterSpecReferencePartStudio1256';
import { BTParameterSpecReferenceTable1520 } from '../models/BTParameterSpecReferenceTable1520';
import { BTParameterSpecReferenceWithConfiguration2950 } from '../models/BTParameterSpecReferenceWithConfiguration2950';
import { BTParameterSpecString175 } from '../models/BTParameterSpecString175';
import { BTParameterSpecStringWithTolerances2535 } from '../models/BTParameterSpecStringWithTolerances2535';
import { BTParameterVisibilityAlwaysHidden176 } from '../models/BTParameterVisibilityAlwaysHidden176';
import { BTParameterVisibilityCondition177 } from '../models/BTParameterVisibilityCondition177';
import { BTParameterVisibilityLogical178 } from '../models/BTParameterVisibilityLogical178';
import { BTParameterVisibilityOnEqual180 } from '../models/BTParameterVisibilityOnEqual180';
import { BTParameterVisibilityOnMateDOFType2114 } from '../models/BTParameterVisibilityOnMateDOFType2114';
import { BTParametricInstance2641 } from '../models/BTParametricInstance2641';
import { BTParametricOutputInstance2288 } from '../models/BTParametricOutputInstance2288';
import { BTParametricPartStudioChildInstance3696 } from '../models/BTParametricPartStudioChildInstance3696';
import { BTParametricPartStudioInstance4374 } from '../models/BTParametricPartStudioInstance4374';
import { BTPartAppearanceInfo } from '../models/BTPartAppearanceInfo';
import { BTPartCustomProperties1338 } from '../models/BTPartCustomProperties1338';
import { BTPartData16 } from '../models/BTPartData16';
import { BTPartDisplayData17 } from '../models/BTPartDisplayData17';
import { BTPartInstance81 } from '../models/BTPartInstance81';
import { BTPartMaterial1445 } from '../models/BTPartMaterial1445';
import { BTPartMaterialInfo } from '../models/BTPartMaterialInfo';
import { BTPartMaterialProperty1453 } from '../models/BTPartMaterialProperty1453';
import { BTPartMaterialPropertyInfo } from '../models/BTPartMaterialPropertyInfo';
import { BTPartMetadataInfo } from '../models/BTPartMetadataInfo';
import { BTPartMetadataSource2895 } from '../models/BTPartMetadataSource2895';
import { BTPartProperties293 } from '../models/BTPartProperties293';
import { BTPartStudioDisplayData346 } from '../models/BTPartStudioDisplayData346';
import { BTPartStudioDisplayDataBase2751 } from '../models/BTPartStudioDisplayDataBase2751';
import { BTPartStudioDisplayDataReference4360 } from '../models/BTPartStudioDisplayDataReference4360';
import { BTPartWithConfiguredProperties2163 } from '../models/BTPartWithConfiguredProperties2163';
import { BTPlanSubscriberInfo } from '../models/BTPlanSubscriberInfo';
import { BTPlanarImageMapping4398 } from '../models/BTPlanarImageMapping4398';
import { BTPlaneDescription692 } from '../models/BTPlaneDescription692';
import { BTPlaneOrientationFilter1700 } from '../models/BTPlaneOrientationFilter1700';
import { BTPointEntity1439 } from '../models/BTPointEntity1439';
import { BTPrivacyConsentInfo } from '../models/BTPrivacyConsentInfo';
import { BTProjectInfo } from '../models/BTProjectInfo';
import { BTPropertiesTableTemplateInfo } from '../models/BTPropertiesTableTemplateInfo';
import { BTPropertiesTableTemplateParams } from '../models/BTPropertiesTableTemplateParams';
import { BTPropertiesTableTemplateType } from '../models/BTPropertiesTableTemplateType';
import { BTPropertyTableColumnInfo2161 } from '../models/BTPropertyTableColumnInfo2161';
import { BTPropertyUpdateInfo } from '../models/BTPropertyUpdateInfo';
import { BTPropertyValueParam } from '../models/BTPropertyValueParam';
import { BTPublicationInfo } from '../models/BTPublicationInfo';
import { BTPublishedWorkflowId } from '../models/BTPublishedWorkflowId';
import { BTPublishedWorkflowInfo } from '../models/BTPublishedWorkflowInfo';
import { BTPurchaseInfo } from '../models/BTPurchaseInfo';
import { BTPurchaseUserParams } from '../models/BTPurchaseUserParams';
import { BTQuantityRange181 } from '../models/BTQuantityRange181';
import { BTQueryFilter183 } from '../models/BTQueryFilter183';
import { BTRadialDimensionDisplayData348 } from '../models/BTRadialDimensionDisplayData348';
import { BTRbacPermissionSchemeInfo } from '../models/BTRbacPermissionSchemeInfo';
import { BTRbacRoleInfo } from '../models/BTRbacRoleInfo';
import { BTReadOnlyParameterSpec1889 } from '../models/BTReadOnlyParameterSpec1889';
import { BTReferenceCustomData1551 } from '../models/BTReferenceCustomData1551';
import { BTReleaseCommentListInfo } from '../models/BTReleaseCommentListInfo';
import { BTReleaseItemErrorInfo } from '../models/BTReleaseItemErrorInfo';
import { BTReleaseItemMessageBody } from '../models/BTReleaseItemMessageBody';
import { BTReleasePackageInfo } from '../models/BTReleasePackageInfo';
import { BTReleasePackageItemInfo } from '../models/BTReleasePackageItemInfo';
import { BTReleasePackageItemParams } from '../models/BTReleasePackageItemParams';
import { BTReleasePackageParams } from '../models/BTReleasePackageParams';
import { BTResourceOwnerInfo } from '../models/BTResourceOwnerInfo';
import { BTRestUserRole } from '../models/BTRestUserRole';
import { BTRestoreFromHistoryInfo } from '../models/BTRestoreFromHistoryInfo';
import { BTRevertUnchangedElementParams } from '../models/BTRevertUnchangedElementParams';
import { BTRevertUnchangedParams } from '../models/BTRevertUnchangedParams';
import { BTRevisionApproverInfo } from '../models/BTRevisionApproverInfo';
import { BTRevisionCustomData2090 } from '../models/BTRevisionCustomData2090';
import { BTRevisionInfo } from '../models/BTRevisionInfo';
import { BTRevisionListResponse } from '../models/BTRevisionListResponse';
import { BTRevisionMessageBody } from '../models/BTRevisionMessageBody';
import { BTRhoDimensionDisplayData2892 } from '../models/BTRhoDimensionDisplayData2892';
import { BTRole } from '../models/BTRole';
import { BTRootAssemblyDisplayData96 } from '../models/BTRootAssemblyDisplayData96';
import { BTRootAssemblyInfo } from '../models/BTRootAssemblyInfo';
import { BTRootDiffInfo } from '../models/BTRootDiffInfo';
import { BTSMBendTableRowMetadata1705 } from '../models/BTSMBendTableRowMetadata1705';
import { BTSMDefinitionEntityTypeFilter1651 } from '../models/BTSMDefinitionEntityTypeFilter1651';
import { BTSMOtherJointTableRowMetadata2640 } from '../models/BTSMOtherJointTableRowMetadata2640';
import { BTSMSpecificMetadata1315 } from '../models/BTSMSpecificMetadata1315';
import { BTSearchEntityType } from '../models/BTSearchEntityType';
import { BTSectionGeometryFilter4161 } from '../models/BTSectionGeometryFilter4161';
import { BTSectionPlaneInfo } from '../models/BTSectionPlaneInfo';
import { BTSelectItemViewStateInfo } from '../models/BTSelectItemViewStateInfo';
import { BTSessionCredentialInfo } from '../models/BTSessionCredentialInfo';
import { BTSetFeatureRollbackCall1899 } from '../models/BTSetFeatureRollbackCall1899';
import { BTSetFeatureRollbackResponse1042 } from '../models/BTSetFeatureRollbackResponse1042';
import { BTSettingInfo } from '../models/BTSettingInfo';
import { BTSettingParam } from '../models/BTSettingParam';
import { BTShadedViewsInfo } from '../models/BTShadedViewsInfo';
import { BTShareEntryParams } from '../models/BTShareEntryParams';
import { BTShareParams } from '../models/BTShareParams';
import { BTSimplePropertyInfo } from '../models/BTSimplePropertyInfo';
import { BTSimulationFace2147 } from '../models/BTSimulationFace2147';
import { BTSimulationInstance3093 } from '../models/BTSimulationInstance3093';
import { BTSimulationTableColumnInfo1785 } from '../models/BTSimulationTableColumnInfo1785';
import { BTSingleAssemblyReferenceDisplayData1557 } from '../models/BTSingleAssemblyReferenceDisplayData1557';
import { BTSingleReferenceDisplayData1943 } from '../models/BTSingleReferenceDisplayData1943';
import { BTSketchArcDisplayData349 } from '../models/BTSketchArcDisplayData349';
import { BTSketchCircleDisplayData350 } from '../models/BTSketchCircleDisplayData350';
import { BTSketchCompositeEntityDisplayData1093 } from '../models/BTSketchCompositeEntityDisplayData1093';
import { BTSketchConicDisplayData1085 } from '../models/BTSketchConicDisplayData1085';
import { BTSketchEllipseDisplayData712 } from '../models/BTSketchEllipseDisplayData712';
import { BTSketchEllipticalArcDisplayData892 } from '../models/BTSketchEllipticalArcDisplayData892';
import { BTSketchEntity25 } from '../models/BTSketchEntity25';
import { BTSketchEntityDisplayData354 } from '../models/BTSketchEntityDisplayData354';
import { BTSketchImageDisplayData1379 } from '../models/BTSketchImageDisplayData1379';
import { BTSketchLineDisplayData357 } from '../models/BTSketchLineDisplayData357';
import { BTSketchObjectFilter184 } from '../models/BTSketchObjectFilter184';
import { BTSketchPointDisplayData358 } from '../models/BTSketchPointDisplayData358';
import { BTSketchSolveStatusFilter3657 } from '../models/BTSketchSolveStatusFilter3657';
import { BTSketchSplineDisplayData359 } from '../models/BTSketchSplineDisplayData359';
import { BTSketchTextDisplayData1707 } from '../models/BTSketchTextDisplayData1707';
import { BTSphereDescription1263 } from '../models/BTSphereDescription1263';
import { BTSplineControlPolygonFilter1130 } from '../models/BTSplineControlPolygonFilter1130';
import { BTSplineDescription2118 } from '../models/BTSplineDescription2118';
import { BTSplineHandleFilter2971 } from '../models/BTSplineHandleFilter2971';
import { BTSpunDescription657 } from '../models/BTSpunDescription657';
import { BTStringFormatBlockPattern1755 } from '../models/BTStringFormatBlockPattern1755';
import { BTStringFormatCondition683 } from '../models/BTStringFormatCondition683';
import { BTStringFormatMatchPattern2446 } from '../models/BTStringFormatMatchPattern2446';
import { BTStringMaximumLengthPattern2593 } from '../models/BTStringMaximumLengthPattern2593';
import { BTStringMinimumLengthPattern895 } from '../models/BTStringMinimumLengthPattern895';
import { BTStringNodeWrapper4224 } from '../models/BTStringNodeWrapper4224';
import { BTSubAssemblyInfo } from '../models/BTSubAssemblyInfo';
import { BTSubstituteApproverInfo } from '../models/BTSubstituteApproverInfo';
import { BTSurfaceDescription1564 } from '../models/BTSurfaceDescription1564';
import { BTSweepDescription1473 } from '../models/BTSweepDescription1473';
import { BTSyncAppElementParams } from '../models/BTSyncAppElementParams';
import { BTSystemPartColorCycle1580 } from '../models/BTSystemPartColorCycle1580';
import { BTTable1825 } from '../models/BTTable1825';
import { BTTableAssemblyCrossHighlightData2675 } from '../models/BTTableAssemblyCrossHighlightData2675';
import { BTTableAssemblyCrossHighlightDataItem2659 } from '../models/BTTableAssemblyCrossHighlightDataItem2659';
import { BTTableBaseCrossHighlightData2609 } from '../models/BTTableBaseCrossHighlightData2609';
import { BTTableBaseRowMetadata3181 } from '../models/BTTableBaseRowMetadata3181';
import { BTTableCell1114 } from '../models/BTTableCell1114';
import { BTTableCellParameter2399 } from '../models/BTTableCellParameter2399';
import { BTTableCellParameterWithValue2122 } from '../models/BTTableCellParameterWithValue2122';
import { BTTableCellPropertyParameter2983 } from '../models/BTTableCellPropertyParameter2983';
import { BTTableColumnInfo1222 } from '../models/BTTableColumnInfo1222';
import { BTTableColumnSpec1967 } from '../models/BTTableColumnSpec1967';
import { BTTableCrossHighlightData1753 } from '../models/BTTableCrossHighlightData1753';
import { BTTableResponse1546 } from '../models/BTTableResponse1546';
import { BTTableRow1054 } from '../models/BTTableRow1054';
import { BTTableSortOrder4371 } from '../models/BTTableSortOrder4371';
import { BTTableSpec915 } from '../models/BTTableSpec915';
import { BTTableTestCellDouble2509 } from '../models/BTTableTestCellDouble2509';
import { BTTableTestCellString2112 } from '../models/BTTableTestCellString2112';
import { BTTeamInfo } from '../models/BTTeamInfo';
import { BTTeamMemberInfo } from '../models/BTTeamMemberInfo';
import { BTTeamSummaryInfo } from '../models/BTTeamSummaryInfo';
import { BTTessellatedGeometry2576 } from '../models/BTTessellatedGeometry2576';
import { BTTessellationProperties927 } from '../models/BTTessellationProperties927';
import { BTTextObjectFilter1515 } from '../models/BTTextObjectFilter1515';
import { BTTextStrokeFilter461 } from '../models/BTTextStrokeFilter461';
import { BTThumbnailInfo } from '../models/BTThumbnailInfo';
import { BTThumbnailSizeInfo } from '../models/BTThumbnailSizeInfo';
import { BTToleranceString3274 } from '../models/BTToleranceString3274';
import { BTTorusDescription1834 } from '../models/BTTorusDescription1834';
import { BTTransitionType } from '../models/BTTransitionType';
import { BTTranslateFormatParams } from '../models/BTTranslateFormatParams';
import { BTTranslationRequestInfo } from '../models/BTTranslationRequestInfo';
import { BTTranslationRequestState } from '../models/BTTranslationRequestState';
import { BTTreeEdit13 } from '../models/BTTreeEdit13';
import { BTTreeNode20 } from '../models/BTTreeNode20';
import { BTTrialInfo } from '../models/BTTrialInfo';
import { BTUiFeatureStudioChecksum2438 } from '../models/BTUiFeatureStudioChecksum2438';
import { BTUiSelection1185 } from '../models/BTUiSelection1185';
import { BTUnchangedElementInfo } from '../models/BTUnchangedElementInfo';
import { BTUnchangedReferenceInfo } from '../models/BTUnchangedReferenceInfo';
import { BTUniqueDocumentItemParams } from '../models/BTUniqueDocumentItemParams';
import { BTUnitInfo } from '../models/BTUnitInfo';
import { BTUnitsMaximumDisplayPrecisionInfo } from '../models/BTUnitsMaximumDisplayPrecisionInfo';
import { BTUpdateFeaturesCall1748 } from '../models/BTUpdateFeaturesCall1748';
import { BTUpdateFeaturesResponse1333 } from '../models/BTUpdateFeaturesResponse1333';
import { BTUpdateMeshUnitsParams } from '../models/BTUpdateMeshUnitsParams';
import { BTUpdateReferenceParams } from '../models/BTUpdateReferenceParams';
import { BTUpdateReleasePackageParams } from '../models/BTUpdateReleasePackageParams';
import { BTUserAdminInfo } from '../models/BTUserAdminInfo';
import { BTUserAdminSummaryInfo } from '../models/BTUserAdminSummaryInfo';
import { BTUserAppMessageBody } from '../models/BTUserAppMessageBody';
import { BTUserAppSettingsInfo } from '../models/BTUserAppSettingsInfo';
import { BTUserAppSettingsParams } from '../models/BTUserAppSettingsParams';
import { BTUserBasicSummaryInfo } from '../models/BTUserBasicSummaryInfo';
import { BTUserDetailSummaryInfo } from '../models/BTUserDetailSummaryInfo';
import { BTUserInfo } from '../models/BTUserInfo';
import { BTUserMetricsInfo } from '../models/BTUserMetricsInfo';
import { BTUserOAuth2SummaryInfo } from '../models/BTUserOAuth2SummaryInfo';
import { BTUserSettingsInfo } from '../models/BTUserSettingsInfo';
import { BTUserState } from '../models/BTUserState';
import { BTUserSummaryInfo } from '../models/BTUserSummaryInfo';
import { BTValueAndUse4696 } from '../models/BTValueAndUse4696';
import { BTVariableInfo } from '../models/BTVariableInfo';
import { BTVariableParams } from '../models/BTVariableParams';
import { BTVariableStudioReferenceInfo } from '../models/BTVariableStudioReferenceInfo';
import { BTVariableStudioReferenceListInfo } from '../models/BTVariableStudioReferenceListInfo';
import { BTVariableStudioScopeInfo } from '../models/BTVariableStudioScopeInfo';
import { BTVariableTableInfo } from '../models/BTVariableTableInfo';
import { BTVariableTableRowMetadata3912 } from '../models/BTVariableTableRowMetadata3912';
import { BTVector2d1812 } from '../models/BTVector2d1812';
import { BTVector3d389 } from '../models/BTVector3d389';
import { BTVersionInfo } from '../models/BTVersionInfo';
import { BTVersionOrWorkspaceMergeInfo } from '../models/BTVersionOrWorkspaceMergeInfo';
import { BTVersionOrWorkspaceParams } from '../models/BTVersionOrWorkspaceParams';
import { BTViewDataInfo } from '../models/BTViewDataInfo';
import { BTViewDataParams } from '../models/BTViewDataParams';
import { BTViewFeatureBaseInfo } from '../models/BTViewFeatureBaseInfo';
import { BTViewManipulationMouseKeyMappingInfo } from '../models/BTViewManipulationMouseKeyMappingInfo';
import { BTWebClientCapabilitiesParams } from '../models/BTWebClientCapabilitiesParams';
import { BTWebRendererPerformanceMeasurementParams } from '../models/BTWebRendererPerformanceMeasurementParams';
import { BTWebhookInfo } from '../models/BTWebhookInfo';
import { BTWebhookLifecycleMessageBody } from '../models/BTWebhookLifecycleMessageBody';
import { BTWebhookOptions } from '../models/BTWebhookOptions';
import { BTWebhookParams } from '../models/BTWebhookParams';
import { BTWorkflowActionInfo } from '../models/BTWorkflowActionInfo';
import { BTWorkflowAuditLogEntryInfo } from '../models/BTWorkflowAuditLogEntryInfo';
import { BTWorkflowAuditLogInfo } from '../models/BTWorkflowAuditLogInfo';
import { BTWorkflowMessageBody } from '../models/BTWorkflowMessageBody';
import { BTWorkflowObserverEntryType } from '../models/BTWorkflowObserverEntryType';
import { BTWorkflowObserverOptionInfo } from '../models/BTWorkflowObserverOptionInfo';
import { BTWorkflowObserverState } from '../models/BTWorkflowObserverState';
import { BTWorkflowPropertyInfo } from '../models/BTWorkflowPropertyInfo';
import { BTWorkflowSnapshotInfo } from '../models/BTWorkflowSnapshotInfo';
import { BTWorkflowStateInfo } from '../models/BTWorkflowStateInfo';
import { BTWorkflowableObjectObserver } from '../models/BTWorkflowableObjectObserver';
import { BTWorkspaceInfo } from '../models/BTWorkspaceInfo';
import { BTWorkspaceMessageBody } from '../models/BTWorkspaceMessageBody';
import { BTZipFileInfo } from '../models/BTZipFileInfo';
import { BlobItem } from '../models/BlobItem';
import { Buffer } from '../models/Buffer';
import { BufferModel } from '../models/BufferModel';
import { BufferModelBufferData } from '../models/BufferModelBufferData';
import { BufferView } from '../models/BufferView';
import { BufferViewModel } from '../models/BufferViewModel';
import { Callback } from '../models/Callback';
import { Camera } from '../models/Camera';
import { CameraOrthographic } from '../models/CameraOrthographic';
import { CameraPerspective } from '../models/CameraPerspective';
import { Card } from '../models/Card';
import { Category } from '../models/Category';
import { CompanyRole } from '../models/CompanyRole';
import { Components } from '../models/Components';
import { ConfigurationEntry } from '../models/ConfigurationEntry';
import { ConfigurationInfoEntry } from '../models/ConfigurationInfoEntry';
import { Contact } from '../models/Contact';
import { Coupon } from '../models/Coupon';
import { Customer } from '../models/Customer';
import { CustomerCardCollection } from '../models/CustomerCardCollection';
import { CustomerSubscriptionCollection } from '../models/CustomerSubscriptionCollection';
import { Discount } from '../models/Discount';
import { Discriminator } from '../models/Discriminator';
import { EditType } from '../models/EditType';
import { ElementType } from '../models/ElementType';
import { Encoding } from '../models/Encoding';
import { Entry } from '../models/Entry';
import { Example } from '../models/Example';
import { ExternalAccount } from '../models/ExternalAccount';
import { ExternalAccountCollection } from '../models/ExternalAccountCollection';
import { ExternalDocumentation } from '../models/ExternalDocumentation';
import { GBTAppElementAssociativeDataType } from '../models/GBTAppElementAssociativeDataType';
import { GBTAppElementReferenceType } from '../models/GBTAppElementReferenceType';
import { GBTAssemblyFeatureDisplayStatus } from '../models/GBTAssemblyFeatureDisplayStatus';
import { GBTAssemblySimulationType } from '../models/GBTAssemblySimulationType';
import { GBTBSFeatureVisibility } from '../models/GBTBSFeatureVisibility';
import { GBTBillOfMaterialsExclusionStatus } from '../models/GBTBillOfMaterialsExclusionStatus';
import { GBTBillOfMaterialsExpansionStatus } from '../models/GBTBillOfMaterialsExpansionStatus';
import { GBTBodyType } from '../models/GBTBodyType';
import { GBTComputeStatus } from '../models/GBTComputeStatus';
import { GBTConfigurationParameterType } from '../models/GBTConfigurationParameterType';
import { GBTConfiguredParentType } from '../models/GBTConfiguredParentType';
import { GBTConstraintType } from '../models/GBTConstraintType';
import { GBTCurveTypeEnum } from '../models/GBTCurveTypeEnum';
import { GBTDataItemFormat } from '../models/GBTDataItemFormat';
import { GBTDebugEntityColor } from '../models/GBTDebugEntityColor';
import { GBTDebugEntityStyle } from '../models/GBTDebugEntityStyle';
import { GBTDisplayDataUsage } from '../models/GBTDisplayDataUsage';
import { GBTEdgeTopology } from '../models/GBTEdgeTopology';
import { GBTEdgeType } from '../models/GBTEdgeType';
import { GBTElementBranchStatus } from '../models/GBTElementBranchStatus';
import { GBTElementType } from '../models/GBTElementType';
import { GBTEntityEdgeSmoothnessStatus } from '../models/GBTEntityEdgeSmoothnessStatus';
import { GBTEntityInferenceType } from '../models/GBTEntityInferenceType';
import { GBTEntityType } from '../models/GBTEntityType';
import { GBTErrorStringEnum } from '../models/GBTErrorStringEnum';
import { GBTFeatureFilterExclusion } from '../models/GBTFeatureFilterExclusion';
import { GBTFilterFlattenedGeometryOptions } from '../models/GBTFilterFlattenedGeometryOptions';
import { GBTGeometryType } from '../models/GBTGeometryType';
import { GBTInsertableType } from '../models/GBTInsertableType';
import { GBTLoadType } from '../models/GBTLoadType';
import { GBTMGeomStatus } from '../models/GBTMGeomStatus';
import { GBTMateType } from '../models/GBTMateType';
import { GBTMeshState } from '../models/GBTMeshState';
import { GBTMetadataOverrideStatusType } from '../models/GBTMetadataOverrideStatusType';
import { GBTMetadataSourceType } from '../models/GBTMetadataSourceType';
import { GBTNodeChange } from '../models/GBTNodeChange';
import { GBTNodeStatusType } from '../models/GBTNodeStatusType';
import { GBTNoticeLevel } from '../models/GBTNoticeLevel';
import { GBTNoticeType } from '../models/GBTNoticeType';
import { GBTPDefinitionType } from '../models/GBTPDefinitionType';
import { GBTPOperator } from '../models/GBTPOperator';
import { GBTPType } from '../models/GBTPType';
import { GBTParameterVisibilityLogicalOp } from '../models/GBTParameterVisibilityLogicalOp';
import { GBTPartColorCycleVersion } from '../models/GBTPartColorCycleVersion';
import { GBTPartStudioDisplayDataVersion } from '../models/GBTPartStudioDisplayDataVersion';
import { GBTPartStudioInstanceType } from '../models/GBTPartStudioInstanceType';
import { GBTPartStudioItemType } from '../models/GBTPartStudioItemType';
import { GBTPartVisibility } from '../models/GBTPartVisibility';
import { GBTPatternType } from '../models/GBTPatternType';
import { GBTPreProcessParasolidOption } from '../models/GBTPreProcessParasolidOption';
import { GBTQuantityType } from '../models/GBTQuantityType';
import { GBTRadiusDisplay } from '../models/GBTRadiusDisplay';
import { GBTSimulationContactBehavior } from '../models/GBTSimulationContactBehavior';
import { GBTSketchCurveType } from '../models/GBTSketchCurveType';
import { GBTSketchObjectType } from '../models/GBTSketchObjectType';
import { GBTSurfaceType } from '../models/GBTSurfaceType';
import { GBTSurfaceTypeEnum } from '../models/GBTSurfaceTypeEnum';
import { GBTTableColumnWidthUnits } from '../models/GBTTableColumnWidthUnits';
import { GBTTableTextAlignment } from '../models/GBTTableTextAlignment';
import { GBTTessellationSettingEnum } from '../models/GBTTessellationSettingEnum';
import { GBTUIHint } from '../models/GBTUIHint';
import { GBTUiSelectionType } from '../models/GBTUiSelectionType';
import { GBTValueUse } from '../models/GBTValueUse';
import { GBTVariableType } from '../models/GBTVariableType';
import { GlTF } from '../models/GlTF';
import { GlobalPermissionInfo } from '../models/GlobalPermissionInfo';
import { Header } from '../models/Header';
import { Image } from '../models/Image';
import { In } from '../models/In';
import { Info } from '../models/Info';
import { Interpolation } from '../models/Interpolation';
import { Item } from '../models/Item';
import { License } from '../models/License';
import { Link } from '../models/Link';
import { Material } from '../models/Material';
import { MaterialNormalTextureInfo } from '../models/MaterialNormalTextureInfo';
import { MaterialOcclusionTextureInfo } from '../models/MaterialOcclusionTextureInfo';
import { MaterialPbrMetallicRoughness } from '../models/MaterialPbrMetallicRoughness';
import { MediaType } from '../models/MediaType';
import { Mesh } from '../models/Mesh';
import { MeshPrimitive } from '../models/MeshPrimitive';
import { NextCharge } from '../models/NextCharge';
import { NextRecurringCharge } from '../models/NextRecurringCharge';
import { Node } from '../models/Node';
import { OAuthFlow } from '../models/OAuthFlow';
import { OAuthFlowScopes } from '../models/OAuthFlowScopes';
import { OAuthFlows } from '../models/OAuthFlows';
import { ObjectId } from '../models/ObjectId';
import { OpenAPI } from '../models/OpenAPI';
import { OpenAPIPaths } from '../models/OpenAPIPaths';
import { Operation } from '../models/Operation';
import { OperationResponses } from '../models/OperationResponses';
import { Parameter } from '../models/Parameter';
import { PathItem } from '../models/PathItem';
import { Plan } from '../models/Plan';
import { ProratedCharges } from '../models/ProratedCharges';
import { RequestBody } from '../models/RequestBody';
import { RequestOptions } from '../models/RequestOptions';
import { RoleMapEntry } from '../models/RoleMapEntry';
import { Sampler } from '../models/Sampler';
import { Scene } from '../models/Scene';
import { Schema } from '../models/Schema';
import { SchemaObject } from '../models/SchemaObject';
import { SecurityRequirement } from '../models/SecurityRequirement';
import { SecurityScheme } from '../models/SecurityScheme';
import { Server } from '../models/Server';
import { ServerVariable } from '../models/ServerVariable';
import { ServerVariables } from '../models/ServerVariables';
import { ShippingDetails } from '../models/ShippingDetails';
import { Skin } from '../models/Skin';
import { Status } from '../models/Status';
import { StyleEnum } from '../models/StyleEnum';
import { Subscription } from '../models/Subscription';
import { SubscriptionItem } from '../models/SubscriptionItem';
import { SubscriptionItemCollection } from '../models/SubscriptionItemCollection';
import { Tag } from '../models/Tag';
import { Texture } from '../models/Texture';
import { TextureInfo } from '../models/TextureInfo';
import { ThreeDSecure } from '../models/ThreeDSecure';
import { TransformGroup } from '../models/TransformGroup';
import { Type } from '../models/Type';
import { UpdateParams } from '../models/UpdateParams';
import { VersionAlias } from '../models/VersionAlias';
import { Versions } from '../models/Versions';
import { XML } from '../models/XML';

import { ObservableAPIApplicationApi } from "./ObservableAPI";
import { APIApplicationApiRequestFactory, APIApplicationApiResponseProcessor} from "../apis/APIApplicationApi";

export interface APIApplicationApiDeleteAppSettingsRequest {
    /**
     * 
     * @type string
     * @memberof APIApplicationApideleteAppSettings
     */
    uid: string
    /**
     * 
     * @type string
     * @memberof APIApplicationApideleteAppSettings
     */
    cid: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof APIApplicationApideleteAppSettings
     */
    key?: Array<string>
}

export interface APIApplicationApiDeleteCompanyAppSettingsRequest {
    /**
     * 
     * @type string
     * @memberof APIApplicationApideleteCompanyAppSettings
     */
    cpid: string
    /**
     * 
     * @type string
     * @memberof APIApplicationApideleteCompanyAppSettings
     */
    cid: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof APIApplicationApideleteCompanyAppSettings
     */
    key?: Array<string>
}

export interface APIApplicationApiGetApplicableExtensionsForClientRequest {
    /**
     * 
     * @type string
     * @memberof APIApplicationApigetApplicableExtensionsForClient
     */
    uid: string
    /**
     * 
     * @type string
     * @memberof APIApplicationApigetApplicableExtensionsForClient
     */
    cid: string
    /**
     * 
     * @type boolean
     * @memberof APIApplicationApigetApplicableExtensionsForClient
     */
    validPurchases?: boolean
}

export interface APIApplicationApiGetCompanyAppSettingsRequest {
    /**
     * 
     * @type string
     * @memberof APIApplicationApigetCompanyAppSettings
     */
    cpid: string
    /**
     * 
     * @type string
     * @memberof APIApplicationApigetCompanyAppSettings
     */
    cid: string
    /**
     * A document owned by the company. Read access to this document allows read access to its owning company\&#39;s settings.
     * @type string
     * @memberof APIApplicationApigetCompanyAppSettings
     */
    documentId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof APIApplicationApigetCompanyAppSettings
     */
    key?: Array<string>
}

export interface APIApplicationApiGetUserAppSettingsRequest {
    /**
     * 
     * @type string
     * @memberof APIApplicationApigetUserAppSettings
     */
    uid: string
    /**
     * 
     * @type string
     * @memberof APIApplicationApigetUserAppSettings
     */
    cid: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof APIApplicationApigetUserAppSettings
     */
    key?: Array<string>
}

export interface APIApplicationApiUpdateAppCompanySettingsRequest {
    /**
     * 
     * @type string
     * @memberof APIApplicationApiupdateAppCompanySettings
     */
    cpid: string
    /**
     * 
     * @type string
     * @memberof APIApplicationApiupdateAppCompanySettings
     */
    cid: string
    /**
     * 
     * @type BTUserAppSettingsParams
     * @memberof APIApplicationApiupdateAppCompanySettings
     */
    bTUserAppSettingsParams: BTUserAppSettingsParams
}

export interface APIApplicationApiUpdateAppSettingsRequest {
    /**
     * 
     * @type string
     * @memberof APIApplicationApiupdateAppSettings
     */
    uid: string
    /**
     * 
     * @type string
     * @memberof APIApplicationApiupdateAppSettings
     */
    cid: string
    /**
     * 
     * @type BTUserAppSettingsParams
     * @memberof APIApplicationApiupdateAppSettings
     */
    bTUserAppSettingsParams: BTUserAppSettingsParams
}

export class ObjectAPIApplicationApi {
    private api: ObservableAPIApplicationApi

    public constructor(configuration: Configuration, requestFactory?: APIApplicationApiRequestFactory, responseProcessor?: APIApplicationApiResponseProcessor) {
        this.api = new ObservableAPIApplicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a user\'s application preference settings.
     * @param param the request object
     */
    public deleteAppSettingsWithHttpInfo(param: APIApplicationApiDeleteAppSettingsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAppSettingsWithHttpInfo(param.uid, param.cid, param.key,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a user\'s application preference settings.
     * @param param the request object
     */
    public deleteAppSettings(param: APIApplicationApiDeleteAppSettingsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAppSettings(param.uid, param.cid, param.key,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a company\'s application preference settings.
     * @param param the request object
     */
    public deleteCompanyAppSettingsWithHttpInfo(param: APIApplicationApiDeleteCompanyAppSettingsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCompanyAppSettingsWithHttpInfo(param.cpid, param.cid, param.key,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a company\'s application preference settings.
     * @param param the request object
     */
    public deleteCompanyAppSettings(param: APIApplicationApiDeleteCompanyAppSettingsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCompanyAppSettings(param.cpid, param.cid, param.key,  options).toPromise();
    }

    /**
     * Get a list of the client extensions the specified user has granted/accepted terms for.
     * @param param the request object
     */
    public getApplicableExtensionsForClientWithHttpInfo(param: APIApplicationApiGetApplicableExtensionsForClientRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getApplicableExtensionsForClientWithHttpInfo(param.uid, param.cid, param.validPurchases,  options).toPromise();
    }

    /**
     * Get a list of the client extensions the specified user has granted/accepted terms for.
     * @param param the request object
     */
    public getApplicableExtensionsForClient(param: APIApplicationApiGetApplicableExtensionsForClientRequest, options?: Configuration): Promise<void> {
        return this.api.getApplicableExtensionsForClient(param.uid, param.cid, param.validPurchases,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get company-level preference settings for an application.
     * @param param the request object
     */
    public getCompanyAppSettingsWithHttpInfo(param: APIApplicationApiGetCompanyAppSettingsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCompanyAppSettingsWithHttpInfo(param.cpid, param.cid, param.documentId, param.key,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get company-level preference settings for an application.
     * @param param the request object
     */
    public getCompanyAppSettings(param: APIApplicationApiGetCompanyAppSettingsRequest, options?: Configuration): Promise<void> {
        return this.api.getCompanyAppSettings(param.cpid, param.cid, param.documentId, param.key,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get user-level preference settings for an application.
     * @param param the request object
     */
    public getUserAppSettingsWithHttpInfo(param: APIApplicationApiGetUserAppSettingsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getUserAppSettingsWithHttpInfo(param.uid, param.cid, param.key,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get user-level preference settings for an application.
     * @param param the request object
     */
    public getUserAppSettings(param: APIApplicationApiGetUserAppSettingsRequest, options?: Configuration): Promise<void> {
        return this.api.getUserAppSettings(param.uid, param.cid, param.key,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update company preference settings for an application.
     * @param param the request object
     */
    public updateAppCompanySettingsWithHttpInfo(param: APIApplicationApiUpdateAppCompanySettingsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateAppCompanySettingsWithHttpInfo(param.cpid, param.cid, param.bTUserAppSettingsParams,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update company preference settings for an application.
     * @param param the request object
     */
    public updateAppCompanySettings(param: APIApplicationApiUpdateAppCompanySettingsRequest, options?: Configuration): Promise<void> {
        return this.api.updateAppCompanySettings(param.cpid, param.cid, param.bTUserAppSettingsParams,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update a user\'s application preference settings.
     * @param param the request object
     */
    public updateAppSettingsWithHttpInfo(param: APIApplicationApiUpdateAppSettingsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateAppSettingsWithHttpInfo(param.uid, param.cid, param.bTUserAppSettingsParams,  options).toPromise();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update a user\'s application preference settings.
     * @param param the request object
     */
    public updateAppSettings(param: APIApplicationApiUpdateAppSettingsRequest, options?: Configuration): Promise<void> {
        return this.api.updateAppSettings(param.uid, param.cid, param.bTUserAppSettingsParams,  options).toPromise();
    }

}

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiCancelPurchaseNewRequest {
    /**
     * 
     * @type string
     * @memberof AccountApicancelPurchaseNew
     */
    aid: string
    /**
     * 
     * @type string
     * @memberof AccountApicancelPurchaseNew
     */
    pid: string
    /**
     * 
     * @type boolean
     * @memberof AccountApicancelPurchaseNew
     */
    cancelImmediately?: boolean
}

export interface AccountApiConsumePurchaseRequest {
    /**
     * 
     * @type string
     * @memberof AccountApiconsumePurchase
     */
    pid: string
    /**
     * 
     * @type BTPurchaseUserParams
     * @memberof AccountApiconsumePurchase
     */
    bTPurchaseUserParams?: BTPurchaseUserParams
}

export interface AccountApiGetPlanPurchasesRequest {
    /**
     * 
     * @type string
     * @memberof AccountApigetPlanPurchases
     */
    planId: string
    /**
     * 
     * @type number
     * @memberof AccountApigetPlanPurchases
     */
    offset?: number
    /**
     * 
     * @type number
     * @memberof AccountApigetPlanPurchases
     */
    limit?: number
}

export interface AccountApiGetPurchasesRequest {
    /**
     * 
     * @type boolean
     * @memberof AccountApigetPurchases
     */
    all?: boolean
    /**
     * 
     * @type boolean
     * @memberof AccountApigetPurchases
     */
    ownPurchaseOnly?: boolean
    /**
     * 
     * @type boolean
     * @memberof AccountApigetPurchases
     */
    includeGoDEnabledAppPurchases?: boolean
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel a recurring subscription for the specified account ID and purchase ID.
     * @param param the request object
     */
    public cancelPurchaseNewWithHttpInfo(param: AccountApiCancelPurchaseNewRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cancelPurchaseNewWithHttpInfo(param.aid, param.pid, param.cancelImmediately,  options).toPromise();
    }

    /**
     * Cancel a recurring subscription for the specified account ID and purchase ID.
     * @param param the request object
     */
    public cancelPurchaseNew(param: AccountApiCancelPurchaseNewRequest, options?: Configuration): Promise<void> {
        return this.api.cancelPurchaseNew(param.aid, param.pid, param.cancelImmediately,  options).toPromise();
    }

    /**
     * Mark a purchase as consumed by the current user.
     * @param param the request object
     */
    public consumePurchaseWithHttpInfo(param: AccountApiConsumePurchaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.consumePurchaseWithHttpInfo(param.pid, param.bTPurchaseUserParams,  options).toPromise();
    }

    /**
     * Mark a purchase as consumed by the current user.
     * @param param the request object
     */
    public consumePurchase(param: AccountApiConsumePurchaseRequest, options?: Configuration): Promise<void> {
        return this.api.consumePurchase(param.pid, param.bTPurchaseUserParams,  options).toPromise();
    }

    /**
     * Get a list of all app purchases made for the specified plan.
     * @param param the request object
     */
    public getPlanPurchasesWithHttpInfo(param: AccountApiGetPlanPurchasesRequest, options?: Configuration): Promise<HttpInfo<BTListResponseBTPurchaseInfo>> {
        return this.api.getPlanPurchasesWithHttpInfo(param.planId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Get a list of all app purchases made for the specified plan.
     * @param param the request object
     */
    public getPlanPurchases(param: AccountApiGetPlanPurchasesRequest, options?: Configuration): Promise<BTListResponseBTPurchaseInfo> {
        return this.api.getPlanPurchases(param.planId, param.offset, param.limit,  options).toPromise();
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get a list of all app purchases made by the current user.
     * @param param the request object
     */
    public getPurchasesWithHttpInfo(param: AccountApiGetPurchasesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPurchasesWithHttpInfo(param.all, param.ownPurchaseOnly, param.includeGoDEnabledAppPurchases,  options).toPromise();
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get a list of all app purchases made by the current user.
     * @param param the request object
     */
    public getPurchases(param: AccountApiGetPurchasesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getPurchases(param.all, param.ownPurchaseOnly, param.includeGoDEnabledAppPurchases,  options).toPromise();
    }

}

import { ObservableAliasApi } from "./ObservableAPI";
import { AliasApiRequestFactory, AliasApiResponseProcessor} from "../apis/AliasApi";

export interface AliasApiCreateAliasRequest {
    /**
     * 
     * @type BTAliasParams
     * @memberof AliasApicreateAlias
     */
    bTAliasParams: BTAliasParams
}

export interface AliasApiDeleteAliasRequest {
    /**
     * 
     * @type string
     * @memberof AliasApideleteAlias
     */
    aid: string
}

export interface AliasApiGetAliasRequest {
    /**
     * 
     * @type string
     * @memberof AliasApigetAlias
     */
    aid: string
}

export interface AliasApiGetAliasMembersRequest {
    /**
     * 
     * @type string
     * @memberof AliasApigetAliasMembers
     */
    aid: string
    /**
     * 
     * @type string
     * @memberof AliasApigetAliasMembers
     */
    prefix?: string
    /**
     * 
     * @type string
     * @memberof AliasApigetAliasMembers
     */
    sortColumn?: string
    /**
     * 
     * @type string
     * @memberof AliasApigetAliasMembers
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof AliasApigetAliasMembers
     */
    offset?: number
    /**
     * 
     * @type number
     * @memberof AliasApigetAliasMembers
     */
    limit?: number
}

export interface AliasApiGetAliasesInCompanyRequest {
    /**
     * 
     * @type string
     * @memberof AliasApigetAliasesInCompany
     */
    prefix?: string
    /**
     * 
     * @type string
     * @memberof AliasApigetAliasesInCompany
     */
    sortColumn?: string
    /**
     * 
     * @type string
     * @memberof AliasApigetAliasesInCompany
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof AliasApigetAliasesInCompany
     */
    offset?: number
    /**
     * 
     * @type number
     * @memberof AliasApigetAliasesInCompany
     */
    limit?: number
}

export interface AliasApiUpdateAliasRequest {
    /**
     * 
     * @type string
     * @memberof AliasApiupdateAlias
     */
    aid: string
    /**
     * 
     * @type BTAliasParams
     * @memberof AliasApiupdateAlias
     */
    bTAliasParams: BTAliasParams
}

export class ObjectAliasApi {
    private api: ObservableAliasApi

    public constructor(configuration: Configuration, requestFactory?: AliasApiRequestFactory, responseProcessor?: AliasApiResponseProcessor) {
        this.api = new ObservableAliasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Create an alias in your enterprise.
     * @param param the request object
     */
    public createAliasWithHttpInfo(param: AliasApiCreateAliasRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createAliasWithHttpInfo(param.bTAliasParams,  options).toPromise();
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Create an alias in your enterprise.
     * @param param the request object
     */
    public createAlias(param: AliasApiCreateAliasRequest, options?: Configuration): Promise<void> {
        return this.api.createAlias(param.bTAliasParams,  options).toPromise();
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Delete an alias from your enterprise.
     * @param param the request object
     */
    public deleteAliasWithHttpInfo(param: AliasApiDeleteAliasRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAliasWithHttpInfo(param.aid,  options).toPromise();
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Delete an alias from your enterprise.
     * @param param the request object
     */
    public deleteAlias(param: AliasApiDeleteAliasRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAlias(param.aid,  options).toPromise();
    }

    /**
     * Get the information for an alias ID.
     * Get an alias by ID.
     * @param param the request object
     */
    public getAliasWithHttpInfo(param: AliasApiGetAliasRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAliasWithHttpInfo(param.aid,  options).toPromise();
    }

    /**
     * Get the information for an alias ID.
     * Get an alias by ID.
     * @param param the request object
     */
    public getAlias(param: AliasApiGetAliasRequest, options?: Configuration): Promise<void> {
        return this.api.getAlias(param.aid,  options).toPromise();
    }

    /**
     * This is a search-like endpoint that returns a subset of the member list. Use `getAlias` to return all members every time it\'s called.
     * Get all users and teams assigned to an alias.
     * @param param the request object
     */
    public getAliasMembersWithHttpInfo(param: AliasApiGetAliasMembersRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAliasMembersWithHttpInfo(param.aid, param.prefix, param.sortColumn, param.sortOrder, param.offset, param.limit,  options).toPromise();
    }

    /**
     * This is a search-like endpoint that returns a subset of the member list. Use `getAlias` to return all members every time it\'s called.
     * Get all users and teams assigned to an alias.
     * @param param the request object
     */
    public getAliasMembers(param: AliasApiGetAliasMembersRequest, options?: Configuration): Promise<void> {
        return this.api.getAliasMembers(param.aid, param.prefix, param.sortColumn, param.sortOrder, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Get a list of all aliases that exist for your enterprise.
     * @param param the request object
     */
    public getAliasesInCompanyWithHttpInfo(param: AliasApiGetAliasesInCompanyRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAliasesInCompanyWithHttpInfo(param.prefix, param.sortColumn, param.sortOrder, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Get a list of all aliases that exist for your enterprise.
     * @param param the request object
     */
    public getAliasesInCompany(param: AliasApiGetAliasesInCompanyRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getAliasesInCompany(param.prefix, param.sortColumn, param.sortOrder, param.offset, param.limit,  options).toPromise();
    }

    /**
     * `Manage users and teams` global permission is required to call this API.  * Add new users in the `additions` array.  * Remove existing users in the `removals` array. Attempts to remove a user that does not exist in the Alias list will have no effect. * Replace the entire Alias list with the `entries` array.  * You can also update the alias\' `name` and `description`.  For example, given an Alias with members userA and userB:  * `additions: [userC]` results in [userA, userB, userC]  * `removals: [userB]` results in [userA]  * `entries: [userC, user D]` results in [userC, userD]
     * Add, remove, replace, or rename entries in an alias list.
     * @param param the request object
     */
    public updateAliasWithHttpInfo(param: AliasApiUpdateAliasRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateAliasWithHttpInfo(param.aid, param.bTAliasParams,  options).toPromise();
    }

    /**
     * `Manage users and teams` global permission is required to call this API.  * Add new users in the `additions` array.  * Remove existing users in the `removals` array. Attempts to remove a user that does not exist in the Alias list will have no effect. * Replace the entire Alias list with the `entries` array.  * You can also update the alias\' `name` and `description`.  For example, given an Alias with members userA and userB:  * `additions: [userC]` results in [userA, userB, userC]  * `removals: [userB]` results in [userA]  * `entries: [userC, user D]` results in [userC, userD]
     * Add, remove, replace, or rename entries in an alias list.
     * @param param the request object
     */
    public updateAlias(param: AliasApiUpdateAliasRequest, options?: Configuration): Promise<void> {
        return this.api.updateAlias(param.aid, param.bTAliasParams,  options).toPromise();
    }

}

import { ObservableAppAssociativeDataApi } from "./ObservableAPI";
import { AppAssociativeDataApiRequestFactory, AppAssociativeDataApiResponseProcessor} from "../apis/AppAssociativeDataApi";

export interface AppAssociativeDataApiCopyAssociativeDataRequest {
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApicopyAssociativeData
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApicopyAssociativeData
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApicopyAssociativeData
     */
    eid: string
    /**
     * 
     * @type BTAppElementParamsArrayBTCopyViewAssociativeDataParams
     * @memberof AppAssociativeDataApicopyAssociativeData
     */
    bTAppElementParamsArrayBTCopyViewAssociativeDataParams?: BTAppElementParamsArrayBTCopyViewAssociativeDataParams
}

export interface AppAssociativeDataApiDeleteAssociativeDataRequest {
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    parentChangeId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    associativeDataId?: Array<string>
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    elementId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    viewId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    microversionId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    documentMicroversion?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    deterministicId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    featureId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    entityId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApideleteAssociativeData
     */
    occurrenceId?: string
}

export interface AppAssociativeDataApiGetAssociativeDataRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    changeId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    associativeDataId?: Array<string>
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    elementId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    viewId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    microversionId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    documentMicroversion?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    deterministicId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    featureId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    entityId?: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    occurrenceId?: string
    /**
     * 
     * @type boolean
     * @memberof AppAssociativeDataApigetAssociativeData
     */
    returnIdTags?: boolean
}

export interface AppAssociativeDataApiPostAssociativeDataRequest {
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApipostAssociativeData
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApipostAssociativeData
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApipostAssociativeData
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApipostAssociativeData
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppAssociativeDataApipostAssociativeData
     */
    body: string
}

export class ObjectAppAssociativeDataApi {
    private api: ObservableAppAssociativeDataApi

    public constructor(configuration: Configuration, requestFactory?: AppAssociativeDataApiRequestFactory, responseProcessor?: AppAssociativeDataApiResponseProcessor) {
        this.api = new ObservableAppAssociativeDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Copy associative data from one view to another.
     * @param param the request object
     */
    public copyAssociativeDataWithHttpInfo(param: AppAssociativeDataApiCopyAssociativeDataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.copyAssociativeDataWithHttpInfo(param.did, param.wid, param.eid, param.bTAppElementParamsArrayBTCopyViewAssociativeDataParams,  options).toPromise();
    }

    /**
     * Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Copy associative data from one view to another.
     * @param param the request object
     */
    public copyAssociativeData(param: AppAssociativeDataApiCopyAssociativeDataRequest, options?: Configuration): Promise<void> {
        return this.api.copyAssociativeData(param.did, param.wid, param.eid, param.bTAppElementParamsArrayBTCopyViewAssociativeDataParams,  options).toPromise();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Delete the associative data from the specified app element.
     * @param param the request object
     */
    public deleteAssociativeDataWithHttpInfo(param: AppAssociativeDataApiDeleteAssociativeDataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAssociativeDataWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.transactionId, param.parentChangeId, param.associativeDataId, param.elementId, param.viewId, param.microversionId, param.documentMicroversion, param.deterministicId, param.featureId, param.entityId, param.occurrenceId,  options).toPromise();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Delete the associative data from the specified app element.
     * @param param the request object
     */
    public deleteAssociativeData(param: AppAssociativeDataApiDeleteAssociativeDataRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAssociativeData(param.did, param.eid, param.wvm, param.wvmid, param.transactionId, param.parentChangeId, param.associativeDataId, param.elementId, param.viewId, param.microversionId, param.documentMicroversion, param.deterministicId, param.featureId, param.entityId, param.occurrenceId,  options).toPromise();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Get the associative data for the specified app element.
     * @param param the request object
     */
    public getAssociativeDataWithHttpInfo(param: AppAssociativeDataApiGetAssociativeDataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAssociativeDataWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.changeId, param.associativeDataId, param.elementId, param.viewId, param.microversionId, param.documentMicroversion, param.deterministicId, param.featureId, param.entityId, param.occurrenceId, param.returnIdTags,  options).toPromise();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Get the associative data for the specified app element.
     * @param param the request object
     */
    public getAssociativeData(param: AppAssociativeDataApiGetAssociativeDataRequest, options?: Configuration): Promise<void> {
        return this.api.getAssociativeData(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.changeId, param.associativeDataId, param.elementId, param.viewId, param.microversionId, param.documentMicroversion, param.deterministicId, param.featureId, param.entityId, param.occurrenceId, param.returnIdTags,  options).toPromise();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Set the associative data for the specified app element.
     * @param param the request object
     */
    public postAssociativeDataWithHttpInfo(param: AppAssociativeDataApiPostAssociativeDataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postAssociativeDataWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.body,  options).toPromise();
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Set the associative data for the specified app element.
     * @param param the request object
     */
    public postAssociativeData(param: AppAssociativeDataApiPostAssociativeDataRequest, options?: Configuration): Promise<void> {
        return this.api.postAssociativeData(param.did, param.eid, param.wvm, param.wvmid, param.body,  options).toPromise();
    }

}

import { ObservableAppElementApi } from "./ObservableAPI";
import { AppElementApiRequestFactory, AppElementApiResponseProcessor} from "../apis/AppElementApi";

export interface AppElementApiAbortTransactionRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApiabortTransaction
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApiabortTransaction
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiabortTransaction
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiabortTransaction
     */
    tid: string
    /**
     * 
     * @type boolean
     * @memberof AppElementApiabortTransaction
     */
    returnError?: boolean
}

export interface AppElementApiBulkCreateElementRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AppElementApibulkCreateElement
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof AppElementApibulkCreateElement
     */
    wid: string
    /**
     * 
     * @type BTAppElementBulkCreateParams
     * @memberof AppElementApibulkCreateElement
     */
    bTAppElementBulkCreateParams: BTAppElementBulkCreateParams
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AppElementApibulkCreateElement
     */
    linkDocumentId?: string
}

export interface AppElementApiCommitTransactionsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AppElementApicommitTransactions
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof AppElementApicommitTransactions
     */
    wid: string
    /**
     * 
     * @type BTAppElementCommitTransactionParams
     * @memberof AppElementApicommitTransactions
     */
    bTAppElementCommitTransactionParams: BTAppElementCommitTransactionParams
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AppElementApicommitTransactions
     */
    linkDocumentId?: string
}

export interface AppElementApiCompareAppElementJsonRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    workspaceId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    versionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    microversionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApicompareAppElementJson
     */
    jsonDifferenceFormat?: string
}

export interface AppElementApiCreateElementRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AppElementApicreateElement
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof AppElementApicreateElement
     */
    wid: string
    /**
     * 
     * @type BTAppElementParams
     * @memberof AppElementApicreateElement
     */
    bTAppElementParams: BTAppElementParams
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AppElementApicreateElement
     */
    linkDocumentId?: string
}

export interface AppElementApiCreateReferenceRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApicreateReference
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApicreateReference
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApicreateReference
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApicreateReference
     */
    wvmid: string
    /**
     * 
     * @type BTAppElementReferenceParams
     * @memberof AppElementApicreateReference
     */
    bTAppElementReferenceParams: BTAppElementReferenceParams
}

export interface AppElementApiDeleteAppElementContentRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContent
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContent
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContent
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContent
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContent
     */
    sid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContent
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContent
     */
    parentChangeId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContent
     */
    description?: string
}

export interface AppElementApiDeleteAppElementContentBatchRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContentBatch
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContentBatch
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContentBatch
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContentBatch
     */
    wvmid: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof AppElementApideleteAppElementContentBatch
     */
    subelementIds?: Array<string>
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContentBatch
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContentBatch
     */
    parentChangeId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteAppElementContentBatch
     */
    description?: string
}

export interface AppElementApiDeleteBlobSubelementRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApideleteBlobSubelement
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteBlobSubelement
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteBlobSubelement
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteBlobSubelement
     */
    bid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteBlobSubelement
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteBlobSubelement
     */
    changeId?: string
}

export interface AppElementApiDeleteReferenceRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApideleteReference
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteReference
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteReference
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteReference
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteReference
     */
    rid: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteReference
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteReference
     */
    parentChangeId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApideleteReference
     */
    description?: string
}

export interface AppElementApiDownloadBlobSubelementRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    vm: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    vmid: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    bid: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    contentDisposition?: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    ifNoneMatch?: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    changeId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelement
     */
    linkDocumentId?: string
}

export interface AppElementApiDownloadBlobSubelementWorkspaceRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelementWorkspace
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelementWorkspace
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelementWorkspace
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelementWorkspace
     */
    bid: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelementWorkspace
     */
    contentDisposition?: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelementWorkspace
     */
    ifNoneMatch?: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelementWorkspace
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApidownloadBlobSubelementWorkspace
     */
    changeId?: string
}

export interface AppElementApiGetAppElementHistoryRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApigetAppElementHistory
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetAppElementHistory
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetAppElementHistory
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetAppElementHistory
     */
    wvmid: string
}

export interface AppElementApiGetBlobSubelementIdsRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApigetBlobSubelementIds
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetBlobSubelementIds
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetBlobSubelementIds
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetBlobSubelementIds
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetBlobSubelementIds
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetBlobSubelementIds
     */
    changeId?: string
}

export interface AppElementApiGetElementTransactionsRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApigetElementTransactions
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetElementTransactions
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetElementTransactions
     */
    wid: string
}

export interface AppElementApiGetJsonRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AppElementApigetJson
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AppElementApigetJson
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AppElementApigetJson
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AppElementApigetJson
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AppElementApigetJson
     */
    linkDocumentId?: string
    /**
     * The id of the transaction in which this operation should take place. Transaction ids can be generated through the AppElement startTransaction API.
     * @type string
     * @memberof AppElementApigetJson
     */
    transactionId?: string
    /**
     * The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     * @type string
     * @memberof AppElementApigetJson
     */
    changeId?: string
}

export interface AppElementApiGetJsonPathsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AppElementApigetJsonPaths
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AppElementApigetJsonPaths
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AppElementApigetJsonPaths
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AppElementApigetJsonPaths
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AppElementApigetJsonPaths
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetJsonPaths
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetJsonPaths
     */
    changeId?: string
    /**
     * 
     * @type BTGetJsonPaths1697
     * @memberof AppElementApigetJsonPaths
     */
    bTGetJsonPaths1697?: BTGetJsonPaths1697
}

export interface AppElementApiGetSubElementContentRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AppElementApigetSubElementContent
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AppElementApigetSubElementContent
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AppElementApigetSubElementContent
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AppElementApigetSubElementContent
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AppElementApigetSubElementContent
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubElementContent
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubElementContent
     */
    changeId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubElementContent
     */
    baseChangeId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubElementContent
     */
    subelementId?: string
}

export interface AppElementApiGetSubelementIdsRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubelementIds
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubelementIds
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubelementIds
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubelementIds
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubelementIds
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApigetSubelementIds
     */
    changeId?: string
}

export interface AppElementApiResolveReferenceRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReference
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReference
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReference
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReference
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReference
     */
    rid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReference
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReference
     */
    parentChangeId?: string
    /**
     * 
     * @type boolean
     * @memberof AppElementApiresolveReference
     */
    includeInternal?: boolean
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReference
     */
    linkDocumentId?: string
}

export interface AppElementApiResolveReferencesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AppElementApiresolveReferences
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AppElementApiresolveReferences
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AppElementApiresolveReferences
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AppElementApiresolveReferences
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AppElementApiresolveReferences
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReferences
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReferences
     */
    parentChangeId?: string
    /**
     * 
     * @type boolean
     * @memberof AppElementApiresolveReferences
     */
    includeInternal?: boolean
    /**
     * 
     * @type string
     * @memberof AppElementApiresolveReferences
     */
    referenceIds?: string
}

export interface AppElementApiStartTransactionRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApistartTransaction
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApistartTransaction
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApistartTransaction
     */
    wid: string
    /**
     * 
     * @type BTAppElementStartTransactionParams
     * @memberof AppElementApistartTransaction
     */
    bTAppElementStartTransactionParams: BTAppElementStartTransactionParams
}

export interface AppElementApiUpdateAppElementRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateAppElement
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateAppElement
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateAppElement
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateAppElement
     */
    wvmid: string
    /**
     * 
     * @type BTAppElementUpdateParams
     * @memberof AppElementApiupdateAppElement
     */
    bTAppElementUpdateParams?: BTAppElementUpdateParams
}

export interface AppElementApiUpdateReferenceRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateReference
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateReference
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateReference
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateReference
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiupdateReference
     */
    rid: string
    /**
     * 
     * @type BTAppElementReferenceParams
     * @memberof AppElementApiupdateReference
     */
    bTAppElementReferenceParams: BTAppElementReferenceParams
}

export interface AppElementApiUploadBlobSubelementRequest {
    /**
     * 
     * @type string
     * @memberof AppElementApiuploadBlobSubelement
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AppElementApiuploadBlobSubelement
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiuploadBlobSubelement
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiuploadBlobSubelement
     */
    bid: string
    /**
     * 
     * @type string
     * @memberof AppElementApiuploadBlobSubelement
     */
    transactionId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApiuploadBlobSubelement
     */
    parentChangeId?: string
    /**
     * 
     * @type string
     * @memberof AppElementApiuploadBlobSubelement
     */
    description?: string
    /**
     * File to upload.
     * @type HttpFile
     * @memberof AppElementApiuploadBlobSubelement
     */
    file?: HttpFile
    /**
     * 
     * @type number
     * @memberof AppElementApiuploadBlobSubelement
     */
    fileContentLength?: number
}

export class ObjectAppElementApi {
    private api: ObservableAppElementApi

    public constructor(configuration: Configuration, requestFactory?: AppElementApiRequestFactory, responseProcessor?: AppElementApiResponseProcessor) {
        this.api = new ObservableAppElementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a microbranch (i.e., the branch with the microversion for the transaction).
     * Abort a transaction.
     * @param param the request object
     */
    public abortTransactionWithHttpInfo(param: AppElementApiAbortTransactionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.abortTransactionWithHttpInfo(param.did, param.eid, param.wid, param.tid, param.returnError,  options).toPromise();
    }

    /**
     * Deletes a microbranch (i.e., the branch with the microversion for the transaction).
     * Abort a transaction.
     * @param param the request object
     */
    public abortTransaction(param: AppElementApiAbortTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.abortTransaction(param.did, param.eid, param.wid, param.tid, param.returnError,  options).toPromise();
    }

    /**
     * Call this faster API instead of creating multiple app elements one at a time or in parallel.
     * Create multiple empty application elements at once.
     * @param param the request object
     */
    public bulkCreateElementWithHttpInfo(param: AppElementApiBulkCreateElementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.bulkCreateElementWithHttpInfo(param.did, param.wid, param.bTAppElementBulkCreateParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Call this faster API instead of creating multiple app elements one at a time or in parallel.
     * Create multiple empty application elements at once.
     * @param param the request object
     */
    public bulkCreateElement(param: AppElementApiBulkCreateElementRequest, options?: Configuration): Promise<void> {
        return this.api.bulkCreateElement(param.did, param.wid, param.bTAppElementBulkCreateParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * If successful, all transactions will be committed to a single microversion. If the call raises an error, nothing will be committed.
     * Merge multiple transactions into one microversion.
     * @param param the request object
     */
    public commitTransactionsWithHttpInfo(param: AppElementApiCommitTransactionsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.commitTransactionsWithHttpInfo(param.did, param.wid, param.bTAppElementCommitTransactionParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * If successful, all transactions will be committed to a single microversion. If the call raises an error, nothing will be committed.
     * Merge multiple transactions into one microversion.
     * @param param the request object
     */
    public commitTransactions(param: AppElementApiCommitTransactionsRequest, options?: Configuration): Promise<void> {
        return this.api.commitTransactions(param.did, param.wid, param.bTAppElementCommitTransactionParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Specify the source workspace/version/microversion in the URL and specify the target workspace/version/microversion in the query parameters.
     * Compare app element JSON trees between workspaces/versions/microversions in a document.
     * @param param the request object
     */
    public compareAppElementJsonWithHttpInfo(param: AppElementApiCompareAppElementJsonRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.compareAppElementJsonWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.workspaceId, param.versionId, param.microversionId, param.linkDocumentId, param.jsonDifferenceFormat,  options).toPromise();
    }

    /**
     * Specify the source workspace/version/microversion in the URL and specify the target workspace/version/microversion in the query parameters.
     * Compare app element JSON trees between workspaces/versions/microversions in a document.
     * @param param the request object
     */
    public compareAppElementJson(param: AppElementApiCompareAppElementJsonRequest, options?: Configuration): Promise<void> {
        return this.api.compareAppElementJson(param.did, param.wvm, param.wvmid, param.eid, param.workspaceId, param.versionId, param.microversionId, param.linkDocumentId, param.jsonDifferenceFormat,  options).toPromise();
    }

    /**
     * Create a new application element.
     * @param param the request object
     */
    public createElementWithHttpInfo(param: AppElementApiCreateElementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createElementWithHttpInfo(param.did, param.wid, param.bTAppElementParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Create a new application element.
     * @param param the request object
     */
    public createElement(param: AppElementApiCreateElementRequest, options?: Configuration): Promise<void> {
        return this.api.createElement(param.did, param.wid, param.bTAppElementParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Creates a reference to an app element.
     * @param param the request object
     */
    public createReferenceWithHttpInfo(param: AppElementApiCreateReferenceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createReferenceWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.bTAppElementReferenceParams,  options).toPromise();
    }

    /**
     * Creates a reference to an app element.
     * @param param the request object
     */
    public createReference(param: AppElementApiCreateReferenceRequest, options?: Configuration): Promise<void> {
        return this.api.createReference(param.did, param.eid, param.wvm, param.wvmid, param.bTAppElementReferenceParams,  options).toPromise();
    }

    /**
     * Deletes the content from the specified app element.
     * @param param the request object
     */
    public deleteAppElementContentWithHttpInfo(param: AppElementApiDeleteAppElementContentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAppElementContentWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.sid, param.transactionId, param.parentChangeId, param.description,  options).toPromise();
    }

    /**
     * Deletes the content from the specified app element.
     * @param param the request object
     */
    public deleteAppElementContent(param: AppElementApiDeleteAppElementContentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAppElementContent(param.did, param.eid, param.wvm, param.wvmid, param.sid, param.transactionId, param.parentChangeId, param.description,  options).toPromise();
    }

    /**
     * Delete multiple subelements array by document ID, workspace or version or microversion ID, tab ID, and subelement IDs.
     * @param param the request object
     */
    public deleteAppElementContentBatchWithHttpInfo(param: AppElementApiDeleteAppElementContentBatchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAppElementContentBatchWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.subelementIds, param.transactionId, param.parentChangeId, param.description,  options).toPromise();
    }

    /**
     * Delete multiple subelements array by document ID, workspace or version or microversion ID, tab ID, and subelement IDs.
     * @param param the request object
     */
    public deleteAppElementContentBatch(param: AppElementApiDeleteAppElementContentBatchRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAppElementContentBatch(param.did, param.eid, param.wvm, param.wvmid, param.subelementIds, param.transactionId, param.parentChangeId, param.description,  options).toPromise();
    }

    /**
     * Delete a blob subelement from an app element.
     * @param param the request object
     */
    public deleteBlobSubelementWithHttpInfo(param: AppElementApiDeleteBlobSubelementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteBlobSubelementWithHttpInfo(param.did, param.wid, param.eid, param.bid, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * Delete a blob subelement from an app element.
     * @param param the request object
     */
    public deleteBlobSubelement(param: AppElementApiDeleteBlobSubelementRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBlobSubelement(param.did, param.wid, param.eid, param.bid, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * Delete an app element reference.
     * @param param the request object
     */
    public deleteReferenceWithHttpInfo(param: AppElementApiDeleteReferenceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteReferenceWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.rid, param.transactionId, param.parentChangeId, param.description,  options).toPromise();
    }

    /**
     * Delete an app element reference.
     * @param param the request object
     */
    public deleteReference(param: AppElementApiDeleteReferenceRequest, options?: Configuration): Promise<void> {
        return this.api.deleteReference(param.did, param.eid, param.wvm, param.wvmid, param.rid, param.transactionId, param.parentChangeId, param.description,  options).toPromise();
    }

    /**
     * Download a blob subelement as a file.
     * Download a blob subelement from the specified app element.
     * @param param the request object
     */
    public downloadBlobSubelementWithHttpInfo(param: AppElementApiDownloadBlobSubelementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.downloadBlobSubelementWithHttpInfo(param.did, param.vm, param.vmid, param.eid, param.bid, param.contentDisposition, param.ifNoneMatch, param.transactionId, param.changeId, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Download a blob subelement as a file.
     * Download a blob subelement from the specified app element.
     * @param param the request object
     */
    public downloadBlobSubelement(param: AppElementApiDownloadBlobSubelementRequest, options?: Configuration): Promise<void> {
        return this.api.downloadBlobSubelement(param.did, param.vm, param.vmid, param.eid, param.bid, param.contentDisposition, param.ifNoneMatch, param.transactionId, param.changeId, param.linkDocumentId,  options).toPromise();
    }

    /**
     * The downloaded file can be used to retrieve stored subelements.
     * Download the blob element (i.e., a file) stored in an app element in a document\'s workspace.
     * @param param the request object
     */
    public downloadBlobSubelementWorkspaceWithHttpInfo(param: AppElementApiDownloadBlobSubelementWorkspaceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.downloadBlobSubelementWorkspaceWithHttpInfo(param.did, param.wid, param.eid, param.bid, param.contentDisposition, param.ifNoneMatch, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * The downloaded file can be used to retrieve stored subelements.
     * Download the blob element (i.e., a file) stored in an app element in a document\'s workspace.
     * @param param the request object
     */
    public downloadBlobSubelementWorkspace(param: AppElementApiDownloadBlobSubelementWorkspaceRequest, options?: Configuration): Promise<void> {
        return this.api.downloadBlobSubelementWorkspace(param.did, param.wid, param.eid, param.bid, param.contentDisposition, param.ifNoneMatch, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * Get the history of the specified all element.
     * @param param the request object
     */
    public getAppElementHistoryWithHttpInfo(param: AppElementApiGetAppElementHistoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAppElementHistoryWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid,  options).toPromise();
    }

    /**
     * Get the history of the specified all element.
     * @param param the request object
     */
    public getAppElementHistory(param: AppElementApiGetAppElementHistoryRequest, options?: Configuration): Promise<void> {
        return this.api.getAppElementHistory(param.did, param.eid, param.wvm, param.wvmid,  options).toPromise();
    }

    /**
     * Get a list of all blob subelement IDs for the specified workspace, version, or microversion.
     * @param param the request object
     */
    public getBlobSubelementIdsWithHttpInfo(param: AppElementApiGetBlobSubelementIdsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getBlobSubelementIdsWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * Get a list of all blob subelement IDs for the specified workspace, version, or microversion.
     * @param param the request object
     */
    public getBlobSubelementIds(param: AppElementApiGetBlobSubelementIdsRequest, options?: Configuration): Promise<void> {
        return this.api.getBlobSubelementIds(param.did, param.eid, param.wvm, param.wvmid, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * Get a list of all transactions performed on an element.
     * @param param the request object
     */
    public getElementTransactionsWithHttpInfo(param: AppElementApiGetElementTransactionsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getElementTransactionsWithHttpInfo(param.did, param.eid, param.wid,  options).toPromise();
    }

    /**
     * Get a list of all transactions performed on an element.
     * @param param the request object
     */
    public getElementTransactions(param: AppElementApiGetElementTransactionsRequest, options?: Configuration): Promise<void> {
        return this.api.getElementTransactions(param.did, param.eid, param.wid,  options).toPromise();
    }

    /**
     * Get the full JSON tree for the specified workspace/version/microversion.
     * @param param the request object
     */
    public getJsonWithHttpInfo(param: AppElementApiGetJsonRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getJsonWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * Get the full JSON tree for the specified workspace/version/microversion.
     * @param param the request object
     */
    public getJson(param: AppElementApiGetJsonRequest, options?: Configuration): Promise<void> {
        return this.api.getJson(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * Use this endpoint to return the JSON at the specified path instead of returning the entire JSON for the element. This POST endpoint does not write any information.
     * Get the JSON at specified paths for an element.
     * @param param the request object
     */
    public getJsonPathsWithHttpInfo(param: AppElementApiGetJsonPathsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getJsonPathsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.changeId, param.bTGetJsonPaths1697,  options).toPromise();
    }

    /**
     * Use this endpoint to return the JSON at the specified path instead of returning the entire JSON for the element. This POST endpoint does not write any information.
     * Get the JSON at specified paths for an element.
     * @param param the request object
     */
    public getJsonPaths(param: AppElementApiGetJsonPathsRequest, options?: Configuration): Promise<void> {
        return this.api.getJsonPaths(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.changeId, param.bTGetJsonPaths1697,  options).toPromise();
    }

    /**
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param param the request object
     */
    public getSubElementContentWithHttpInfo(param: AppElementApiGetSubElementContentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getSubElementContentWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.changeId, param.baseChangeId, param.subelementId,  options).toPromise();
    }

    /**
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param param the request object
     */
    public getSubElementContent(param: AppElementApiGetSubElementContentRequest, options?: Configuration): Promise<void> {
        return this.api.getSubElementContent(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.changeId, param.baseChangeId, param.subelementId,  options).toPromise();
    }

    /**
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param param the request object
     */
    public getSubelementIdsWithHttpInfo(param: AppElementApiGetSubelementIdsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getSubelementIdsWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param param the request object
     */
    public getSubelementIds(param: AppElementApiGetSubelementIdsRequest, options?: Configuration): Promise<void> {
        return this.api.getSubelementIds(param.did, param.eid, param.wvm, param.wvmid, param.transactionId, param.changeId,  options).toPromise();
    }

    /**
     * For single operations only. Use `resolveReferences` for bulk operations.
     * Resolves a single reference to an app element.
     * @param param the request object
     */
    public resolveReferenceWithHttpInfo(param: AppElementApiResolveReferenceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resolveReferenceWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.rid, param.transactionId, param.parentChangeId, param.includeInternal, param.linkDocumentId,  options).toPromise();
    }

    /**
     * For single operations only. Use `resolveReferences` for bulk operations.
     * Resolves a single reference to an app element.
     * @param param the request object
     */
    public resolveReference(param: AppElementApiResolveReferenceRequest, options?: Configuration): Promise<void> {
        return this.api.resolveReference(param.did, param.eid, param.wvm, param.wvmid, param.rid, param.transactionId, param.parentChangeId, param.includeInternal, param.linkDocumentId,  options).toPromise();
    }

    /**
     * For bulk operations only. Use `resolveReference` for a single operation.
     * Resolves bulk app element references.
     * @param param the request object
     */
    public resolveReferencesWithHttpInfo(param: AppElementApiResolveReferencesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resolveReferencesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.parentChangeId, param.includeInternal, param.referenceIds,  options).toPromise();
    }

    /**
     * For bulk operations only. Use `resolveReference` for a single operation.
     * Resolves bulk app element references.
     * @param param the request object
     */
    public resolveReferences(param: AppElementApiResolveReferencesRequest, options?: Configuration): Promise<void> {
        return this.api.resolveReferences(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.transactionId, param.parentChangeId, param.includeInternal, param.referenceIds,  options).toPromise();
    }

    /**
     * Creates a microbranch (i.e., a branch for a new microversion).
     * Start a transaction
     * @param param the request object
     */
    public startTransactionWithHttpInfo(param: AppElementApiStartTransactionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.startTransactionWithHttpInfo(param.did, param.eid, param.wid, param.bTAppElementStartTransactionParams,  options).toPromise();
    }

    /**
     * Creates a microbranch (i.e., a branch for a new microversion).
     * Start a transaction
     * @param param the request object
     */
    public startTransaction(param: AppElementApiStartTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.startTransaction(param.did, param.eid, param.wid, param.bTAppElementStartTransactionParams,  options).toPromise();
    }

    /**
     * Update the content for the specified app element.
     * @param param the request object
     */
    public updateAppElementWithHttpInfo(param: AppElementApiUpdateAppElementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateAppElementWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.bTAppElementUpdateParams,  options).toPromise();
    }

    /**
     * Update the content for the specified app element.
     * @param param the request object
     */
    public updateAppElement(param: AppElementApiUpdateAppElementRequest, options?: Configuration): Promise<void> {
        return this.api.updateAppElement(param.did, param.eid, param.wvm, param.wvmid, param.bTAppElementUpdateParams,  options).toPromise();
    }

    /**
     * Update an app element reference.
     * @param param the request object
     */
    public updateReferenceWithHttpInfo(param: AppElementApiUpdateReferenceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateReferenceWithHttpInfo(param.did, param.eid, param.wvm, param.wvmid, param.rid, param.bTAppElementReferenceParams,  options).toPromise();
    }

    /**
     * Update an app element reference.
     * @param param the request object
     */
    public updateReference(param: AppElementApiUpdateReferenceRequest, options?: Configuration): Promise<void> {
        return this.api.updateReference(param.did, param.eid, param.wvm, param.wvmid, param.rid, param.bTAppElementReferenceParams,  options).toPromise();
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Create a new blob subelement from an uploaded file.
     * @param param the request object
     */
    public uploadBlobSubelementWithHttpInfo(param: AppElementApiUploadBlobSubelementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.uploadBlobSubelementWithHttpInfo(param.did, param.wid, param.eid, param.bid, param.transactionId, param.parentChangeId, param.description, param.file, param.fileContentLength,  options).toPromise();
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Create a new blob subelement from an uploaded file.
     * @param param the request object
     */
    public uploadBlobSubelement(param: AppElementApiUploadBlobSubelementRequest, options?: Configuration): Promise<void> {
        return this.api.uploadBlobSubelement(param.did, param.wid, param.eid, param.bid, param.transactionId, param.parentChangeId, param.description, param.file, param.fileContentLength,  options).toPromise();
    }

}

import { ObservableAssemblyApi } from "./ObservableAPI";
import { AssemblyApiRequestFactory, AssemblyApiResponseProcessor} from "../apis/AssemblyApi";

export interface AssemblyApiAddFeatureRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApiaddFeature
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApiaddFeature
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AssemblyApiaddFeature
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApiaddFeature
     */
    eid: string
    /**
     * 
     * @type BTFeatureDefinitionCall1406
     * @memberof AssemblyApiaddFeature
     */
    bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406
}

export interface AssemblyApiCreateAssemblyRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApicreateAssembly
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApicreateAssembly
     */
    wid: string
    /**
     * 
     * @type BTModelElementParams
     * @memberof AssemblyApicreateAssembly
     */
    bTModelElementParams: BTModelElementParams
}

export interface AssemblyApiCreateInstanceRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApicreateInstance
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApicreateInstance
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApicreateInstance
     */
    eid: string
    /**
     * 
     * @type BTAssemblyInstanceDefinitionParams
     * @memberof AssemblyApicreateInstance
     */
    bTAssemblyInstanceDefinitionParams?: BTAssemblyInstanceDefinitionParams
}

export interface AssemblyApiDeleteFeatureRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApideleteFeature
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApideleteFeature
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApideleteFeature
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApideleteFeature
     */
    fid: string
}

export interface AssemblyApiDeleteInstanceRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApideleteInstance
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApideleteInstance
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApideleteInstance
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApideleteInstance
     */
    nid: string
}

export interface AssemblyApiGetAssemblyBoundingBoxesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    explodedViewId?: string
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    includeHidden?: boolean
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    displayStateId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    namedPositionId?: string
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyBoundingBoxes
     */
    includeSketches?: boolean
}

export interface AssemblyApiGetAssemblyDefinitionRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetAssemblyDefinition
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AssemblyApigetAssemblyDefinition
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AssemblyApigetAssemblyDefinition
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetAssemblyDefinition
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetAssemblyDefinition
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyDefinition
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyDefinition
     */
    explodedViewId?: string
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyDefinition
     */
    includeMateFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyDefinition
     */
    includeNonSolids?: boolean
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyDefinition
     */
    includeMateConnectors?: boolean
    /**
     * Whether or not to exclude suppressed instances/mate features in response
     * @type boolean
     * @memberof AssemblyApigetAssemblyDefinition
     */
    excludeSuppressed?: boolean
}

export interface AssemblyApiGetAssemblyMassPropertiesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetAssemblyMassProperties
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AssemblyApigetAssemblyMassProperties
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AssemblyApigetAssemblyMassProperties
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetAssemblyMassProperties
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetAssemblyMassProperties
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyMassProperties
     */
    configuration?: string
}

export interface AssemblyApiGetAssemblyShadedViewsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    explodedViewId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    viewMatrix?: string
    /**
     * 
     * @type number
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    outputHeight?: number
    /**
     * 
     * @type number
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    outputWidth?: number
    /**
     * 
     * @type number
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    pixelSize?: number
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    edges?: string
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    showAllParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    includeSurfaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    useAntiAliasing?: boolean
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    includeWires?: boolean
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    displayStateId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetAssemblyShadedViews
     */
    namedPositionId?: string
}

export interface AssemblyApiGetBillOfMaterialsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetBillOfMaterials
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AssemblyApigetBillOfMaterials
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AssemblyApigetBillOfMaterials
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetBillOfMaterials
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetBillOfMaterials
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetBillOfMaterials
     */
    configuration?: string
    /**
     * Ids of the columns to include, or all columns if empty. BOM column ids correspond to metadata property ids.
     * @type Array&lt;string&gt;
     * @memberof AssemblyApigetBillOfMaterials
     */
    bomColumnIds?: Array<string>
    /**
     * Return the Structured BOM table with all rows collapsed, otherwise returns the Flattened BOM.
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    indented?: boolean
    /**
     * Return the Structured BOM table with all rows expanded. Ignored if indented is false.
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    multiLevel?: boolean
    /**
     * Return the BOM table data even if the BOM does not exist. If this is false and the BOM does not exist, a 404 status code will be returned. This option is highly recommended.
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    generateIfAbsent?: boolean
    /**
     * The id of the BOM table template to use when generating the table.
     * @type string
     * @memberof AssemblyApigetBillOfMaterials
     */
    templateId?: string
    /**
     * Include items that have been excluded from the BOM table.
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    includeExcluded?: boolean
    /**
     * Only return data for visible columns, instead of all possible columns.
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    onlyVisibleColumns?: boolean
    /**
     * Ignore the \&#39;Subassembly BOM behavior\&#39; property when constructing the BOM table.
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    ignoreSubassemblyBomBehavior?: boolean
    /**
     * Include element microversions and version metadata microversions in the JSON.
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    includeItemMicroversions?: boolean
    /**
     * Include top-level assembly row when constructing the BOM table.
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    includeTopLevelAssemblyRow?: boolean
    /**
     * Return thumbnail info
     * @type boolean
     * @memberof AssemblyApigetBillOfMaterials
     */
    thumbnail?: boolean
}

export interface AssemblyApiGetExplodedViewsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetExplodedViews
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AssemblyApigetExplodedViews
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AssemblyApigetExplodedViews
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetExplodedViews
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetExplodedViews
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetExplodedViews
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetExplodedViews
     */
    explodedViewId?: string
}

export interface AssemblyApiGetFeatureSpecsRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApigetFeatureSpecs
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetFeatureSpecs
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetFeatureSpecs
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetFeatureSpecs
     */
    eid: string
}

export interface AssemblyApiGetFeaturesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetFeatures
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AssemblyApigetFeatures
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AssemblyApigetFeatures
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetFeatures
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetFeatures
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetFeatures
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetFeatures
     */
    explodedViewId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof AssemblyApigetFeatures
     */
    featureId?: Array<string>
}

export interface AssemblyApiGetNamedPositionsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetNamedPositions
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof AssemblyApigetNamedPositions
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof AssemblyApigetNamedPositions
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetNamedPositions
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetNamedPositions
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetNamedPositions
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetNamedPositions
     */
    explodedViewId?: string
}

export interface AssemblyApiGetNamedViewsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApigetNamedViews
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetNamedViews
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApigetNamedViews
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetNamedViews
     */
    skipPerspective?: boolean
    /**
     * 
     * @type boolean
     * @memberof AssemblyApigetNamedViews
     */
    includeSectionCutViews?: boolean
}

export interface AssemblyApiGetOrCreateBillOfMaterialsElementRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApigetOrCreateBillOfMaterialsElement
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetOrCreateBillOfMaterialsElement
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApigetOrCreateBillOfMaterialsElement
     */
    eid: string
}

export interface AssemblyApiInsertTransformedInstancesRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApiinsertTransformedInstances
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApiinsertTransformedInstances
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApiinsertTransformedInstances
     */
    wid: string
    /**
     * 
     * @type BTAssemblyTransformedInstancesDefinitionParams
     * @memberof AssemblyApiinsertTransformedInstances
     */
    bTAssemblyTransformedInstancesDefinitionParams: BTAssemblyTransformedInstancesDefinitionParams
}

export interface AssemblyApiModifyRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof AssemblyApimodify
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof AssemblyApimodify
     */
    wid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof AssemblyApimodify
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof AssemblyApimodify
     */
    linkDocumentId?: string
    /**
     * 
     * @type BTAssemblyModificationParams
     * @memberof AssemblyApimodify
     */
    bTAssemblyModificationParams?: BTAssemblyModificationParams
}

export interface AssemblyApiTransformOccurrencesRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApitransformOccurrences
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApitransformOccurrences
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApitransformOccurrences
     */
    wid: string
    /**
     * 
     * @type BTAssemblyTransformDefinitionParams
     * @memberof AssemblyApitransformOccurrences
     */
    bTAssemblyTransformDefinitionParams?: BTAssemblyTransformDefinitionParams
}

export interface AssemblyApiTranslateFormatRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApitranslateFormat
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApitranslateFormat
     */
    wv: string
    /**
     * 
     * @type string
     * @memberof AssemblyApitranslateFormat
     */
    wvid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApitranslateFormat
     */
    eid: string
    /**
     * 
     * @type BTTranslateFormatParams
     * @memberof AssemblyApitranslateFormat
     */
    bTTranslateFormatParams: BTTranslateFormatParams
}

export interface AssemblyApiUpdateFeatureRequest {
    /**
     * 
     * @type string
     * @memberof AssemblyApiupdateFeature
     */
    did: string
    /**
     * 
     * @type string
     * @memberof AssemblyApiupdateFeature
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApiupdateFeature
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof AssemblyApiupdateFeature
     */
    fid: string
    /**
     * 
     * @type BTFeatureDefinitionCall1406
     * @memberof AssemblyApiupdateFeature
     */
    bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406
}

export class ObjectAssemblyApi {
    private api: ObservableAssemblyApi

    public constructor(configuration: Configuration, requestFactory?: AssemblyApiRequestFactory, responseProcessor?: AssemblyApiResponseProcessor) {
        this.api = new ObservableAssemblyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a feature to the assembly feature list.
     * @param param the request object
     */
    public addFeatureWithHttpInfo(param: AssemblyApiAddFeatureRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addFeatureWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.bTFeatureDefinitionCall1406,  options).toPromise();
    }

    /**
     * Add a feature to the assembly feature list.
     * @param param the request object
     */
    public addFeature(param: AssemblyApiAddFeatureRequest, options?: Configuration): Promise<void> {
        return this.api.addFeature(param.did, param.wvm, param.wvmid, param.eid, param.bTFeatureDefinitionCall1406,  options).toPromise();
    }

    /**
     * Create a new assembly tab in the document.
     * @param param the request object
     */
    public createAssemblyWithHttpInfo(param: AssemblyApiCreateAssemblyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createAssemblyWithHttpInfo(param.did, param.wid, param.bTModelElementParams,  options).toPromise();
    }

    /**
     * Create a new assembly tab in the document.
     * @param param the request object
     */
    public createAssembly(param: AssemblyApiCreateAssemblyRequest, options?: Configuration): Promise<void> {
        return this.api.createAssembly(param.did, param.wid, param.bTModelElementParams,  options).toPromise();
    }

    /**
     * Part Studio instances may include multiple parts.
     * Insert an instance of a part, sketch, assembly, or Part Studio into an assembly.
     * @param param the request object
     */
    public createInstanceWithHttpInfo(param: AssemblyApiCreateInstanceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createInstanceWithHttpInfo(param.did, param.wid, param.eid, param.bTAssemblyInstanceDefinitionParams,  options).toPromise();
    }

    /**
     * Part Studio instances may include multiple parts.
     * Insert an instance of a part, sketch, assembly, or Part Studio into an assembly.
     * @param param the request object
     */
    public createInstance(param: AssemblyApiCreateInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.createInstance(param.did, param.wid, param.eid, param.bTAssemblyInstanceDefinitionParams,  options).toPromise();
    }

    /**
     * Delete a feature from an assembly.
     * @param param the request object
     */
    public deleteFeatureWithHttpInfo(param: AssemblyApiDeleteFeatureRequest, options?: Configuration): Promise<HttpInfo<BTFeatureApiBase1430>> {
        return this.api.deleteFeatureWithHttpInfo(param.did, param.wid, param.eid, param.fid,  options).toPromise();
    }

    /**
     * Delete a feature from an assembly.
     * @param param the request object
     */
    public deleteFeature(param: AssemblyApiDeleteFeatureRequest, options?: Configuration): Promise<BTFeatureApiBase1430> {
        return this.api.deleteFeature(param.did, param.wid, param.eid, param.fid,  options).toPromise();
    }

    /**
     * Delete an instance of an assembly.
     * @param param the request object
     */
    public deleteInstanceWithHttpInfo(param: AssemblyApiDeleteInstanceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteInstanceWithHttpInfo(param.did, param.eid, param.wid, param.nid,  options).toPromise();
    }

    /**
     * Delete an instance of an assembly.
     * @param param the request object
     */
    public deleteInstance(param: AssemblyApiDeleteInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInstance(param.did, param.eid, param.wid, param.nid,  options).toPromise();
    }

    /**
     * Get bounding box information for the specified assembly.
     * @param param the request object
     */
    public getAssemblyBoundingBoxesWithHttpInfo(param: AssemblyApiGetAssemblyBoundingBoxesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAssemblyBoundingBoxesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId, param.includeHidden, param.displayStateId, param.namedPositionId, param.includeSketches,  options).toPromise();
    }

    /**
     * Get bounding box information for the specified assembly.
     * @param param the request object
     */
    public getAssemblyBoundingBoxes(param: AssemblyApiGetAssemblyBoundingBoxesRequest, options?: Configuration): Promise<void> {
        return this.api.getAssemblyBoundingBoxes(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId, param.includeHidden, param.displayStateId, param.namedPositionId, param.includeSketches,  options).toPromise();
    }

    /**
     * All coordinates and translation matrix components are in meters (m).
     * Get definition information for the specified assembly.
     * @param param the request object
     */
    public getAssemblyDefinitionWithHttpInfo(param: AssemblyApiGetAssemblyDefinitionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAssemblyDefinitionWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId, param.includeMateFeatures, param.includeNonSolids, param.includeMateConnectors, param.excludeSuppressed,  options).toPromise();
    }

    /**
     * All coordinates and translation matrix components are in meters (m).
     * Get definition information for the specified assembly.
     * @param param the request object
     */
    public getAssemblyDefinition(param: AssemblyApiGetAssemblyDefinitionRequest, options?: Configuration): Promise<void> {
        return this.api.getAssemblyDefinition(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId, param.includeMateFeatures, param.includeNonSolids, param.includeMateConnectors, param.excludeSuppressed,  options).toPromise();
    }

    /**
     * Get the mass properties for the assembly.
     * @param param the request object
     */
    public getAssemblyMassPropertiesWithHttpInfo(param: AssemblyApiGetAssemblyMassPropertiesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAssemblyMassPropertiesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration,  options).toPromise();
    }

    /**
     * Get the mass properties for the assembly.
     * @param param the request object
     */
    public getAssemblyMassProperties(param: AssemblyApiGetAssemblyMassPropertiesRequest, options?: Configuration): Promise<void> {
        return this.api.getAssemblyMassProperties(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration,  options).toPromise();
    }

    /**
     * Get an array of shaded view images for the document.
     * @param param the request object
     */
    public getAssemblyShadedViewsWithHttpInfo(param: AssemblyApiGetAssemblyShadedViewsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAssemblyShadedViewsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId, param.viewMatrix, param.outputHeight, param.outputWidth, param.pixelSize, param.edges, param.showAllParts, param.includeSurfaces, param.useAntiAliasing, param.includeWires, param.displayStateId, param.namedPositionId,  options).toPromise();
    }

    /**
     * Get an array of shaded view images for the document.
     * @param param the request object
     */
    public getAssemblyShadedViews(param: AssemblyApiGetAssemblyShadedViewsRequest, options?: Configuration): Promise<void> {
        return this.api.getAssemblyShadedViews(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId, param.viewMatrix, param.outputHeight, param.outputWidth, param.pixelSize, param.edges, param.showAllParts, param.includeSurfaces, param.useAntiAliasing, param.includeWires, param.displayStateId, param.namedPositionId,  options).toPromise();
    }

    /**
     * Returns the BOM in JSON in the Onshape BOM Standard format.
     * Get the Bill Of Materials (BOM) content for the specified assembly.
     * @param param the request object
     */
    public getBillOfMaterialsWithHttpInfo(param: AssemblyApiGetBillOfMaterialsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getBillOfMaterialsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.bomColumnIds, param.indented, param.multiLevel, param.generateIfAbsent, param.templateId, param.includeExcluded, param.onlyVisibleColumns, param.ignoreSubassemblyBomBehavior, param.includeItemMicroversions, param.includeTopLevelAssemblyRow, param.thumbnail,  options).toPromise();
    }

    /**
     * Returns the BOM in JSON in the Onshape BOM Standard format.
     * Get the Bill Of Materials (BOM) content for the specified assembly.
     * @param param the request object
     */
    public getBillOfMaterials(param: AssemblyApiGetBillOfMaterialsRequest, options?: Configuration): Promise<void> {
        return this.api.getBillOfMaterials(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.bomColumnIds, param.indented, param.multiLevel, param.generateIfAbsent, param.templateId, param.includeExcluded, param.onlyVisibleColumns, param.ignoreSubassemblyBomBehavior, param.includeItemMicroversions, param.includeTopLevelAssemblyRow, param.thumbnail,  options).toPromise();
    }

    /**
     * Get a list of exploded views for the specified assembly.
     * @param param the request object
     */
    public getExplodedViewsWithHttpInfo(param: AssemblyApiGetExplodedViewsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getExplodedViewsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId,  options).toPromise();
    }

    /**
     * Get a list of exploded views for the specified assembly.
     * @param param the request object
     */
    public getExplodedViews(param: AssemblyApiGetExplodedViewsRequest, options?: Configuration): Promise<void> {
        return this.api.getExplodedViews(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId,  options).toPromise();
    }

    /**
     * Get the feature spec definitions for an assembly.
     * @param param the request object
     */
    public getFeatureSpecsWithHttpInfo(param: AssemblyApiGetFeatureSpecsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getFeatureSpecsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Get the feature spec definitions for an assembly.
     * @param param the request object
     */
    public getFeatureSpecs(param: AssemblyApiGetFeatureSpecsRequest, options?: Configuration): Promise<void> {
        return this.api.getFeatureSpecs(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Get the definitions of the specified features in an assembly.
     * @param param the request object
     */
    public getFeaturesWithHttpInfo(param: AssemblyApiGetFeaturesRequest, options?: Configuration): Promise<HttpInfo<BTAssemblyFeatureListResponse1174>> {
        return this.api.getFeaturesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId, param.featureId,  options).toPromise();
    }

    /**
     * Get the definitions of the specified features in an assembly.
     * @param param the request object
     */
    public getFeatures(param: AssemblyApiGetFeaturesRequest, options?: Configuration): Promise<BTAssemblyFeatureListResponse1174> {
        return this.api.getFeatures(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId, param.featureId,  options).toPromise();
    }

    /**
     * Get a list of all named positions for the assembly.
     * @param param the request object
     */
    public getNamedPositionsWithHttpInfo(param: AssemblyApiGetNamedPositionsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getNamedPositionsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId,  options).toPromise();
    }

    /**
     * Get a list of all named positions for the assembly.
     * @param param the request object
     */
    public getNamedPositions(param: AssemblyApiGetNamedPositionsRequest, options?: Configuration): Promise<void> {
        return this.api.getNamedPositions(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.explodedViewId,  options).toPromise();
    }

    /**
     * Get the view data for all named views for the specified element.
     * @param param the request object
     */
    public getNamedViewsWithHttpInfo(param: AssemblyApiGetNamedViewsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getNamedViewsWithHttpInfo(param.did, param.eid, param.linkDocumentId, param.skipPerspective, param.includeSectionCutViews,  options).toPromise();
    }

    /**
     * Get the view data for all named views for the specified element.
     * @param param the request object
     */
    public getNamedViews(param: AssemblyApiGetNamedViewsRequest, options?: Configuration): Promise<void> {
        return this.api.getNamedViews(param.did, param.eid, param.linkDocumentId, param.skipPerspective, param.includeSectionCutViews,  options).toPromise();
    }

    /**
     * Gets the Bill Of Materials (BOM) for the specified assembly, or creates a BOM if none exist.
     * @param param the request object
     */
    public getOrCreateBillOfMaterialsElementWithHttpInfo(param: AssemblyApiGetOrCreateBillOfMaterialsElementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getOrCreateBillOfMaterialsElementWithHttpInfo(param.did, param.wid, param.eid,  options).toPromise();
    }

    /**
     * Gets the Bill Of Materials (BOM) for the specified assembly, or creates a BOM if none exist.
     * @param param the request object
     */
    public getOrCreateBillOfMaterialsElement(param: AssemblyApiGetOrCreateBillOfMaterialsElementRequest, options?: Configuration): Promise<void> {
        return this.api.getOrCreateBillOfMaterialsElement(param.did, param.wid, param.eid,  options).toPromise();
    }

    /**
     * Create new instances with transformation.
     * @param param the request object
     */
    public insertTransformedInstancesWithHttpInfo(param: AssemblyApiInsertTransformedInstancesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.insertTransformedInstancesWithHttpInfo(param.did, param.eid, param.wid, param.bTAssemblyTransformedInstancesDefinitionParams,  options).toPromise();
    }

    /**
     * Create new instances with transformation.
     * @param param the request object
     */
    public insertTransformedInstances(param: AssemblyApiInsertTransformedInstancesRequest, options?: Configuration): Promise<void> {
        return this.api.insertTransformedInstances(param.did, param.eid, param.wid, param.bTAssemblyTransformedInstancesDefinitionParams,  options).toPromise();
    }

    /**
     * This endpoint can include multiple modifications to an assembly with one change. For example, it can delete/suppress/unsuppress/transform multiple instances. It creates one history entry in the document history list.
     * Modify an assembly.
     * @param param the request object
     */
    public modifyWithHttpInfo(param: AssemblyApiModifyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.modifyWithHttpInfo(param.did, param.wid, param.eid, param.linkDocumentId, param.bTAssemblyModificationParams,  options).toPromise();
    }

    /**
     * This endpoint can include multiple modifications to an assembly with one change. For example, it can delete/suppress/unsuppress/transform multiple instances. It creates one history entry in the document history list.
     * Modify an assembly.
     * @param param the request object
     */
    public modify(param: AssemblyApiModifyRequest, options?: Configuration): Promise<void> {
        return this.api.modify(param.did, param.wid, param.eid, param.linkDocumentId, param.bTAssemblyModificationParams,  options).toPromise();
    }

    /**
     * Transform a list of assembly occurrences.
     * @param param the request object
     */
    public transformOccurrencesWithHttpInfo(param: AssemblyApiTransformOccurrencesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.transformOccurrencesWithHttpInfo(param.did, param.eid, param.wid, param.bTAssemblyTransformDefinitionParams,  options).toPromise();
    }

    /**
     * Transform a list of assembly occurrences.
     * @param param the request object
     */
    public transformOccurrences(param: AssemblyApiTransformOccurrencesRequest, options?: Configuration): Promise<void> {
        return this.api.transformOccurrences(param.did, param.eid, param.wid, param.bTAssemblyTransformDefinitionParams,  options).toPromise();
    }

    /**
     * Refer to the [Export dialog](https://cad.onshape.com/help/Content/exporting-files.htm) for a list of valid formats.
     * Translate the assembly to another format for export.
     * @param param the request object
     */
    public translateFormatWithHttpInfo(param: AssemblyApiTranslateFormatRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.translateFormatWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.bTTranslateFormatParams,  options).toPromise();
    }

    /**
     * Refer to the [Export dialog](https://cad.onshape.com/help/Content/exporting-files.htm) for a list of valid formats.
     * Translate the assembly to another format for export.
     * @param param the request object
     */
    public translateFormat(param: AssemblyApiTranslateFormatRequest, options?: Configuration): Promise<void> {
        return this.api.translateFormat(param.did, param.wv, param.wvid, param.eid, param.bTTranslateFormatParams,  options).toPromise();
    }

    /**
     * Update an existing feature for an Assembly.
     * @param param the request object
     */
    public updateFeatureWithHttpInfo(param: AssemblyApiUpdateFeatureRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateFeatureWithHttpInfo(param.did, param.wid, param.eid, param.fid, param.bTFeatureDefinitionCall1406,  options).toPromise();
    }

    /**
     * Update an existing feature for an Assembly.
     * @param param the request object
     */
    public updateFeature(param: AssemblyApiUpdateFeatureRequest, options?: Configuration): Promise<void> {
        return this.api.updateFeature(param.did, param.wid, param.eid, param.fid, param.bTFeatureDefinitionCall1406,  options).toPromise();
    }

}

import { ObservableBillingApi } from "./ObservableAPI";
import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";

export interface BillingApiGetClientPlansRequest {
    /**
     * 
     * @type string
     * @memberof BillingApigetClientPlans
     */
    cid: string
}

export class ObjectBillingApi {
    private api: ObservableBillingApi

    public constructor(configuration: Configuration, requestFactory?: BillingApiRequestFactory, responseProcessor?: BillingApiResponseProcessor) {
        this.api = new ObservableBillingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get all billing plans and their information for an application by client ID.
     * @param param the request object
     */
    public getClientPlansWithHttpInfo(param: BillingApiGetClientPlansRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getClientPlansWithHttpInfo(param.cid,  options).toPromise();
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get all billing plans and their information for an application by client ID.
     * @param param the request object
     */
    public getClientPlans(param: BillingApiGetClientPlansRequest, options?: Configuration): Promise<void> {
        return this.api.getClientPlans(param.cid,  options).toPromise();
    }

}

import { ObservableBlobElementApi } from "./ObservableAPI";
import { BlobElementApiRequestFactory, BlobElementApiResponseProcessor} from "../apis/BlobElementApi";

export interface BlobElementApiCreateBlobTranslationRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof BlobElementApicreateBlobTranslation
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof BlobElementApicreateBlobTranslation
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof BlobElementApicreateBlobTranslation
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof BlobElementApicreateBlobTranslation
     */
    eid: string
    /**
     * 
     * @type BTTranslateFormatParams
     * @memberof BlobElementApicreateBlobTranslation
     */
    bTTranslateFormatParams: BTTranslateFormatParams
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof BlobElementApicreateBlobTranslation
     */
    linkDocumentId?: string
}

export interface BlobElementApiDownloadFileWorkspaceRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof BlobElementApidownloadFileWorkspace
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof BlobElementApidownloadFileWorkspace
     */
    wid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof BlobElementApidownloadFileWorkspace
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof BlobElementApidownloadFileWorkspace
     */
    linkDocumentId?: string
    /**
     * If \&quot;attachment\&quot;, includes a Content-Disposition return header with the filename.
     * @type string
     * @memberof BlobElementApidownloadFileWorkspace
     */
    contentDisposition?: string
    /**
     * Entity tag; an md5 checksum of the data in double quotes. If the data to download has the same checksum as this entity tag, a 304 \&#39;Not Modified\&#39; status will be returned. The entity tag is returned in the response headers as ETag.
     * @type string
     * @memberof BlobElementApidownloadFileWorkspace
     */
    ifNoneMatch?: string
}

export interface BlobElementApiUpdateUnitsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof BlobElementApiupdateUnits
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof BlobElementApiupdateUnits
     */
    wid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof BlobElementApiupdateUnits
     */
    eid: string
    /**
     * 
     * @type BTUpdateMeshUnitsParams
     * @memberof BlobElementApiupdateUnits
     */
    bTUpdateMeshUnitsParams: BTUpdateMeshUnitsParams
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof BlobElementApiupdateUnits
     */
    linkDocumentId?: string
}

export interface BlobElementApiUploadFileCreateElementRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    wid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    linkDocumentId?: string
    /**
     * File to upload.
     * @type HttpFile
     * @memberof BlobElementApiuploadFileCreateElement
     */
    file?: HttpFile
    /**
     * If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    allowFaultyParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    createComposite?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    createDrawingIfPossible?: boolean
    /**
     * If the filename contains non-ASCII characters. Use this field to store the filename.
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    encodedFilename?: string
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    extractAssemblyHierarchy?: boolean
    /**
     * If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    flattenAssemblies?: boolean
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    formatName?: string
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    joinAdjacentSurfaces?: boolean
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    locationElementId?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    locationGroupId?: string
    /**
     * 
     * @type number
     * @memberof BlobElementApiuploadFileCreateElement
     */
    locationPosition?: number
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    notifyUser?: boolean
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    ownerId?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    parentId?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    projectId?: string
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    _public?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    onePartPerDoc?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    splitAssembliesIntoMultipleDocuments?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    storeInDocument?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    translate?: boolean
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    unit?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    uploadId?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileCreateElement
     */
    versionString?: string
    /**
     * Face appearances defined on models will be imported.
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    importAppearances?: boolean
    /**
     * If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    yAxisIsUp?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileCreateElement
     */
    importWithinDocument?: boolean
}

export interface BlobElementApiUploadFileUpdateElementRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    wid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    linkDocumentId?: string
    /**
     * The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    parentChangeId?: string
    /**
     * File to upload.
     * @type HttpFile
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    file?: HttpFile
    /**
     * If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    allowFaultyParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    createComposite?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    createDrawingIfPossible?: boolean
    /**
     * If the filename contains non-ASCII characters. Use this field to store the filename.
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    encodedFilename?: string
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    extractAssemblyHierarchy?: boolean
    /**
     * If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    flattenAssemblies?: boolean
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    formatName?: string
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    joinAdjacentSurfaces?: boolean
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    locationElementId?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    locationGroupId?: string
    /**
     * 
     * @type number
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    locationPosition?: number
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    notifyUser?: boolean
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    ownerId?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    parentId?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    projectId?: string
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    _public?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    onePartPerDoc?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    splitAssembliesIntoMultipleDocuments?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    storeInDocument?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    translate?: boolean
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    unit?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    uploadId?: string
    /**
     * 
     * @type string
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    versionString?: string
    /**
     * Face appearances defined on models will be imported.
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    importAppearances?: boolean
    /**
     * If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    yAxisIsUp?: boolean
    /**
     * 
     * @type boolean
     * @memberof BlobElementApiuploadFileUpdateElement
     */
    importWithinDocument?: boolean
}

export class ObjectBlobElementApi {
    private api: ObservableBlobElementApi

    public constructor(configuration: Configuration, requestFactory?: BlobElementApiRequestFactory, responseProcessor?: BlobElementApiResponseProcessor) {
        this.api = new ObservableBlobElementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Translate (i.e., export) a blob element to a different format.
     * Export a blob element.
     * @param param the request object
     */
    public createBlobTranslationWithHttpInfo(param: BlobElementApiCreateBlobTranslationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createBlobTranslationWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.bTTranslateFormatParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Translate (i.e., export) a blob element to a different format.
     * Export a blob element.
     * @param param the request object
     */
    public createBlobTranslation(param: BlobElementApiCreateBlobTranslationRequest, options?: Configuration): Promise<void> {
        return this.api.createBlobTranslation(param.did, param.wv, param.wvid, param.eid, param.bTTranslateFormatParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Download a file from a blob element for the specified workspace/version/microversion.
     * @param param the request object
     */
    public downloadFileWorkspaceWithHttpInfo(param: BlobElementApiDownloadFileWorkspaceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.downloadFileWorkspaceWithHttpInfo(param.did, param.wid, param.eid, param.linkDocumentId, param.contentDisposition, param.ifNoneMatch,  options).toPromise();
    }

    /**
     * Download a file from a blob element for the specified workspace/version/microversion.
     * @param param the request object
     */
    public downloadFileWorkspace(param: BlobElementApiDownloadFileWorkspaceRequest, options?: Configuration): Promise<void> {
        return this.api.downloadFileWorkspace(param.did, param.wid, param.eid, param.linkDocumentId, param.contentDisposition, param.ifNoneMatch,  options).toPromise();
    }

    /**
     * Change the measurement units for the blob element.
     * @param param the request object
     */
    public updateUnitsWithHttpInfo(param: BlobElementApiUpdateUnitsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateUnitsWithHttpInfo(param.did, param.wid, param.eid, param.bTUpdateMeshUnitsParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Change the measurement units for the blob element.
     * @param param the request object
     */
    public updateUnits(param: BlobElementApiUpdateUnitsRequest, options?: Configuration): Promise<void> {
        return this.api.updateUnits(param.did, param.wid, param.eid, param.bTUpdateMeshUnitsParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Upload a file and create a blob element from it.
     * @param param the request object
     */
    public uploadFileCreateElementWithHttpInfo(param: BlobElementApiUploadFileCreateElementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.uploadFileCreateElementWithHttpInfo(param.did, param.wid, param.linkDocumentId, param.file, param.allowFaultyParts, param.createComposite, param.createDrawingIfPossible, param.encodedFilename, param.extractAssemblyHierarchy, param.flattenAssemblies, param.formatName, param.joinAdjacentSurfaces, param.locationElementId, param.locationGroupId, param.locationPosition, param.notifyUser, param.ownerId, param.parentId, param.projectId, param._public, param.onePartPerDoc, param.splitAssembliesIntoMultipleDocuments, param.storeInDocument, param.translate, param.unit, param.uploadId, param.versionString, param.importAppearances, param.yAxisIsUp, param.importWithinDocument,  options).toPromise();
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Upload a file and create a blob element from it.
     * @param param the request object
     */
    public uploadFileCreateElement(param: BlobElementApiUploadFileCreateElementRequest, options?: Configuration): Promise<void> {
        return this.api.uploadFileCreateElement(param.did, param.wid, param.linkDocumentId, param.file, param.allowFaultyParts, param.createComposite, param.createDrawingIfPossible, param.encodedFilename, param.extractAssemblyHierarchy, param.flattenAssemblies, param.formatName, param.joinAdjacentSurfaces, param.locationElementId, param.locationGroupId, param.locationPosition, param.notifyUser, param.ownerId, param.parentId, param.projectId, param._public, param.onePartPerDoc, param.splitAssembliesIntoMultipleDocuments, param.storeInDocument, param.translate, param.unit, param.uploadId, param.versionString, param.importAppearances, param.yAxisIsUp, param.importWithinDocument,  options).toPromise();
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Update a blob element by uploading a file.
     * @param param the request object
     */
    public uploadFileUpdateElementWithHttpInfo(param: BlobElementApiUploadFileUpdateElementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.uploadFileUpdateElementWithHttpInfo(param.did, param.wid, param.eid, param.linkDocumentId, param.parentChangeId, param.file, param.allowFaultyParts, param.createComposite, param.createDrawingIfPossible, param.encodedFilename, param.extractAssemblyHierarchy, param.flattenAssemblies, param.formatName, param.joinAdjacentSurfaces, param.locationElementId, param.locationGroupId, param.locationPosition, param.notifyUser, param.ownerId, param.parentId, param.projectId, param._public, param.onePartPerDoc, param.splitAssembliesIntoMultipleDocuments, param.storeInDocument, param.translate, param.unit, param.uploadId, param.versionString, param.importAppearances, param.yAxisIsUp, param.importWithinDocument,  options).toPromise();
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Update a blob element by uploading a file.
     * @param param the request object
     */
    public uploadFileUpdateElement(param: BlobElementApiUploadFileUpdateElementRequest, options?: Configuration): Promise<void> {
        return this.api.uploadFileUpdateElement(param.did, param.wid, param.eid, param.linkDocumentId, param.parentChangeId, param.file, param.allowFaultyParts, param.createComposite, param.createDrawingIfPossible, param.encodedFilename, param.extractAssemblyHierarchy, param.flattenAssemblies, param.formatName, param.joinAdjacentSurfaces, param.locationElementId, param.locationGroupId, param.locationPosition, param.notifyUser, param.ownerId, param.parentId, param.projectId, param._public, param.onePartPerDoc, param.splitAssembliesIntoMultipleDocuments, param.storeInDocument, param.translate, param.unit, param.uploadId, param.versionString, param.importAppearances, param.yAxisIsUp, param.importWithinDocument,  options).toPromise();
    }

}

import { ObservableCommentApi } from "./ObservableAPI";
import { CommentApiRequestFactory, CommentApiResponseProcessor} from "../apis/CommentApi";

export interface CommentApiAddAttachmentRequest {
    /**
     * 
     * @type string
     * @memberof CommentApiaddAttachment
     */
    cid: string
    /**
     * File to upload.
     * @type HttpFile
     * @memberof CommentApiaddAttachment
     */
    file: HttpFile
}

export interface CommentApiCreateCommentRequest {
    /**
     * 
     * @type BTCommentParams
     * @memberof CommentApicreateComment
     */
    bTCommentParams: BTCommentParams
}

export interface CommentApiDeleteAttachmentsRequest {
    /**
     * 
     * @type string
     * @memberof CommentApideleteAttachments
     */
    cid: string
}

export interface CommentApiDeleteCommentRequest {
    /**
     * 
     * @type string
     * @memberof CommentApideleteComment
     */
    cid: string
}

export interface CommentApiGetAttachmentRequest {
    /**
     * 
     * @type string
     * @memberof CommentApigetAttachment
     */
    cid: string
    /**
     * 
     * @type string
     * @memberof CommentApigetAttachment
     */
    fdid: string
    /**
     * 
     * @type string
     * @memberof CommentApigetAttachment
     */
    ext: string
}

export interface CommentApiGetCommentRequest {
    /**
     * 
     * @type string
     * @memberof CommentApigetComment
     */
    cid: string
}

export interface CommentApiGetCommentsRequest {
    /**
     * 
     * @type string
     * @memberof CommentApigetComments
     */
    did?: string
    /**
     * 
     * @type number
     * @memberof CommentApigetComments
     */
    objectType?: number
    /**
     * 
     * @type string
     * @memberof CommentApigetComments
     */
    pid?: string
    /**
     * 
     * @type string
     * @memberof CommentApigetComments
     */
    eid?: string
    /**
     * 
     * @type number
     * @memberof CommentApigetComments
     */
    filter?: number
    /**
     * 
     * @type boolean
     * @memberof CommentApigetComments
     */
    resolved?: boolean
    /**
     * 
     * @type number
     * @memberof CommentApigetComments
     */
    offset?: number
    /**
     * 
     * @type number
     * @memberof CommentApigetComments
     */
    limit?: number
}

export interface CommentApiReopenRequest {
    /**
     * 
     * @type string
     * @memberof CommentApireopen
     */
    cid: string
}

export interface CommentApiResolveRequest {
    /**
     * 
     * @type string
     * @memberof CommentApiresolve
     */
    cid: string
}

export interface CommentApiUpdateCommentRequest {
    /**
     * 
     * @type string
     * @memberof CommentApiupdateComment
     */
    cid: string
    /**
     * 
     * @type BTCommentParams
     * @memberof CommentApiupdateComment
     */
    bTCommentParams: BTCommentParams
}

export class ObjectCommentApi {
    private api: ObservableCommentApi

    public constructor(configuration: Configuration, requestFactory?: CommentApiRequestFactory, responseProcessor?: CommentApiResponseProcessor) {
        this.api = new ObservableCommentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add an attachment to a comment.
     * @param param the request object
     */
    public addAttachmentWithHttpInfo(param: CommentApiAddAttachmentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentWithHttpInfo(param.cid, param.file,  options).toPromise();
    }

    /**
     * Add an attachment to a comment.
     * @param param the request object
     */
    public addAttachment(param: CommentApiAddAttachmentRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachment(param.cid, param.file,  options).toPromise();
    }

    /**
     * Update a document with a new comment.
     * @param param the request object
     */
    public createCommentWithHttpInfo(param: CommentApiCreateCommentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createCommentWithHttpInfo(param.bTCommentParams,  options).toPromise();
    }

    /**
     * Update a document with a new comment.
     * @param param the request object
     */
    public createComment(param: CommentApiCreateCommentRequest, options?: Configuration): Promise<void> {
        return this.api.createComment(param.bTCommentParams,  options).toPromise();
    }

    /**
     * Delete all attachments from a comment.
     * @param param the request object
     */
    public deleteAttachmentsWithHttpInfo(param: CommentApiDeleteAttachmentsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAttachmentsWithHttpInfo(param.cid,  options).toPromise();
    }

    /**
     * Delete all attachments from a comment.
     * @param param the request object
     */
    public deleteAttachments(param: CommentApiDeleteAttachmentsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAttachments(param.cid,  options).toPromise();
    }

    /**
     * Delete a comment from a document.
     * @param param the request object
     */
    public deleteCommentWithHttpInfo(param: CommentApiDeleteCommentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCommentWithHttpInfo(param.cid,  options).toPromise();
    }

    /**
     * Delete a comment from a document.
     * @param param the request object
     */
    public deleteComment(param: CommentApiDeleteCommentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteComment(param.cid,  options).toPromise();
    }

    /**
     * Returns only a single attachment.
     * Get the attachment with the specified file extension that is associated with the specified comment.
     * @param param the request object
     */
    public getAttachmentWithHttpInfo(param: CommentApiGetAttachmentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAttachmentWithHttpInfo(param.cid, param.fdid, param.ext,  options).toPromise();
    }

    /**
     * Returns only a single attachment.
     * Get the attachment with the specified file extension that is associated with the specified comment.
     * @param param the request object
     */
    public getAttachment(param: CommentApiGetAttachmentRequest, options?: Configuration): Promise<void> {
        return this.api.getAttachment(param.cid, param.fdid, param.ext,  options).toPromise();
    }

    /**
     * Get details for a comment.
     * @param param the request object
     */
    public getCommentWithHttpInfo(param: CommentApiGetCommentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCommentWithHttpInfo(param.cid,  options).toPromise();
    }

    /**
     * Get details for a comment.
     * @param param the request object
     */
    public getComment(param: CommentApiGetCommentRequest, options?: Configuration): Promise<void> {
        return this.api.getComment(param.cid,  options).toPromise();
    }

    /**
     * Get a list of comments in a document.
     * @param param the request object
     */
    public getCommentsWithHttpInfo(param: CommentApiGetCommentsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCommentsWithHttpInfo(param.did, param.objectType, param.pid, param.eid, param.filter, param.resolved, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Get a list of comments in a document.
     * @param param the request object
     */
    public getComments(param: CommentApiGetCommentsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getComments(param.did, param.objectType, param.pid, param.eid, param.filter, param.resolved, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Reopen a resolved comment.
     * @param param the request object
     */
    public reopenWithHttpInfo(param: CommentApiReopenRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.reopenWithHttpInfo(param.cid,  options).toPromise();
    }

    /**
     * Reopen a resolved comment.
     * @param param the request object
     */
    public reopen(param: CommentApiReopenRequest, options?: Configuration): Promise<void> {
        return this.api.reopen(param.cid,  options).toPromise();
    }

    /**
     * Resolve a comment.
     * @param param the request object
     */
    public resolveWithHttpInfo(param: CommentApiResolveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resolveWithHttpInfo(param.cid,  options).toPromise();
    }

    /**
     * Resolve a comment.
     * @param param the request object
     */
    public resolve(param: CommentApiResolveRequest, options?: Configuration): Promise<void> {
        return this.api.resolve(param.cid,  options).toPromise();
    }

    /**
     * Update the content of an existing comment.
     * @param param the request object
     */
    public updateCommentWithHttpInfo(param: CommentApiUpdateCommentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateCommentWithHttpInfo(param.cid, param.bTCommentParams,  options).toPromise();
    }

    /**
     * Update the content of an existing comment.
     * @param param the request object
     */
    public updateComment(param: CommentApiUpdateCommentRequest, options?: Configuration): Promise<void> {
        return this.api.updateComment(param.cid, param.bTCommentParams,  options).toPromise();
    }

}

import { ObservableCompanyApi } from "./ObservableAPI";
import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";

export interface CompanyApiAddUserToCompanyRequest {
    /**
     * 
     * @type string
     * @memberof CompanyApiaddUserToCompany
     */
    cid: string
    /**
     * 
     * @type BTCompanyUserParams
     * @memberof CompanyApiaddUserToCompany
     */
    bTCompanyUserParams: BTCompanyUserParams
}

export interface CompanyApiFindCompanyRequest {
    /**
     * 
     * @type string
     * @memberof CompanyApifindCompany
     */
    uid?: string
    /**
     * 
     * @type boolean
     * @memberof CompanyApifindCompany
     */
    activeOnly?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompanyApifindCompany
     */
    includeAll?: boolean
}

export interface CompanyApiGetCompanyRequest {
    /**
     * 
     * @type string
     * @memberof CompanyApigetCompany
     */
    cid: string
}

export interface CompanyApiGetDocumentsByNameRequest {
    /**
     * 
     * @type string
     * @memberof CompanyApigetDocumentsByName
     */
    cid: string
    /**
     * 
     * @type string
     * @memberof CompanyApigetDocumentsByName
     */
    name: string
}

export interface CompanyApiRemoveUserFromCompanyRequest {
    /**
     * 
     * @type string
     * @memberof CompanyApiremoveUserFromCompany
     */
    cid: string
    /**
     * 
     * @type string
     * @memberof CompanyApiremoveUserFromCompany
     */
    uid: string
    /**
     * 
     * @type boolean
     * @memberof CompanyApiremoveUserFromCompany
     */
    removeFromTeams?: boolean
    /**
     * 
     * @type boolean
     * @memberof CompanyApiremoveUserFromCompany
     */
    removeDirectShares?: boolean
}

export interface CompanyApiUpdateCompanyUserRequest {
    /**
     * 
     * @type string
     * @memberof CompanyApiupdateCompanyUser
     */
    cid: string
    /**
     * 
     * @type string
     * @memberof CompanyApiupdateCompanyUser
     */
    uid: string
    /**
     * 
     * @type BTCompanyUserParams
     * @memberof CompanyApiupdateCompanyUser
     */
    bTCompanyUserParams: BTCompanyUserParams
}

export class ObjectCompanyApi {
    private api: ObservableCompanyApi

    public constructor(configuration: Configuration, requestFactory?: CompanyApiRequestFactory, responseProcessor?: CompanyApiResponseProcessor) {
        this.api = new ObservableCompanyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the company user info.
     * Add a user to a company.
     * @param param the request object
     */
    public addUserToCompanyWithHttpInfo(param: CompanyApiAddUserToCompanyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addUserToCompanyWithHttpInfo(param.cid, param.bTCompanyUserParams,  options).toPromise();
    }

    /**
     * Returns the company user info.
     * Add a user to a company.
     * @param param the request object
     */
    public addUserToCompany(param: CompanyApiAddUserToCompanyRequest, options?: Configuration): Promise<void> {
        return this.api.addUserToCompany(param.cid, param.bTCompanyUserParams,  options).toPromise();
    }

    /**
     * If no user is specified, will return all companies associated with the current user.
     * Get all companies to which the specified user belongs.
     * @param param the request object
     */
    public findCompanyWithHttpInfo(param: CompanyApiFindCompanyRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.findCompanyWithHttpInfo(param.uid, param.activeOnly, param.includeAll,  options).toPromise();
    }

    /**
     * If no user is specified, will return all companies associated with the current user.
     * Get all companies to which the specified user belongs.
     * @param param the request object
     */
    public findCompany(param: CompanyApiFindCompanyRequest = {}, options?: Configuration): Promise<void> {
        return this.api.findCompany(param.uid, param.activeOnly, param.includeAll,  options).toPromise();
    }

    /**
     * Get company information by company ID.
     * @param param the request object
     */
    public getCompanyWithHttpInfo(param: CompanyApiGetCompanyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCompanyWithHttpInfo(param.cid,  options).toPromise();
    }

    /**
     * Get company information by company ID.
     * @param param the request object
     */
    public getCompany(param: CompanyApiGetCompanyRequest, options?: Configuration): Promise<void> {
        return this.api.getCompany(param.cid,  options).toPromise();
    }

    /**
     * This API can only be called by company admins. Use the `name` field for the exact document name string.
     * Get document by exact document name.
     * @param param the request object
     */
    public getDocumentsByNameWithHttpInfo(param: CompanyApiGetDocumentsByNameRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentsByNameWithHttpInfo(param.cid, param.name,  options).toPromise();
    }

    /**
     * This API can only be called by company admins. Use the `name` field for the exact document name string.
     * Get document by exact document name.
     * @param param the request object
     */
    public getDocumentsByName(param: CompanyApiGetDocumentsByNameRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentsByName(param.cid, param.name,  options).toPromise();
    }

    /**
     * Remove a user from a company, company teams, and all the direct shares.
     * @param param the request object
     */
    public removeUserFromCompanyWithHttpInfo(param: CompanyApiRemoveUserFromCompanyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeUserFromCompanyWithHttpInfo(param.cid, param.uid, param.removeFromTeams, param.removeDirectShares,  options).toPromise();
    }

    /**
     * Remove a user from a company, company teams, and all the direct shares.
     * @param param the request object
     */
    public removeUserFromCompany(param: CompanyApiRemoveUserFromCompanyRequest, options?: Configuration): Promise<void> {
        return this.api.removeUserFromCompany(param.cid, param.uid, param.removeFromTeams, param.removeDirectShares,  options).toPromise();
    }

    /**
     * Returns updated company user info. Global permissions can only be updated by the company admin.
     * Update the company\'s information for a user.
     * @param param the request object
     */
    public updateCompanyUserWithHttpInfo(param: CompanyApiUpdateCompanyUserRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateCompanyUserWithHttpInfo(param.cid, param.uid, param.bTCompanyUserParams,  options).toPromise();
    }

    /**
     * Returns updated company user info. Global permissions can only be updated by the company admin.
     * Update the company\'s information for a user.
     * @param param the request object
     */
    public updateCompanyUser(param: CompanyApiUpdateCompanyUserRequest, options?: Configuration): Promise<void> {
        return this.api.updateCompanyUser(param.cid, param.uid, param.bTCompanyUserParams,  options).toPromise();
    }

}

import { ObservableDocumentApi } from "./ObservableAPI";
import { DocumentApiRequestFactory, DocumentApiResponseProcessor} from "../apis/DocumentApi";

export interface DocumentApiCopyWorkspaceRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApicopyWorkspace
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApicopyWorkspace
     */
    wid: string
    /**
     * 
     * @type BTCopyDocumentParams
     * @memberof DocumentApicopyWorkspace
     */
    bTCopyDocumentParams: BTCopyDocumentParams
}

export interface DocumentApiCreateDocumentRequest {
    /**
     * 
     * @type BTDocumentParams
     * @memberof DocumentApicreateDocument
     */
    bTDocumentParams: BTDocumentParams
}

export interface DocumentApiCreateVersionRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApicreateVersion
     */
    did: string
    /**
     * 
     * @type BTVersionOrWorkspaceParams
     * @memberof DocumentApicreateVersion
     */
    bTVersionOrWorkspaceParams: BTVersionOrWorkspaceParams
}

export interface DocumentApiCreateWorkspaceRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApicreateWorkspace
     */
    did: string
    /**
     * 
     * @type BTVersionOrWorkspaceParams
     * @memberof DocumentApicreateWorkspace
     */
    bTVersionOrWorkspaceParams?: BTVersionOrWorkspaceParams
}

export interface DocumentApiDeleteDocumentRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApideleteDocument
     */
    did: string
    /**
     * 
     * @type boolean
     * @memberof DocumentApideleteDocument
     */
    forever?: boolean
}

export interface DocumentApiDeleteWorkspaceRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApideleteWorkspace
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApideleteWorkspace
     */
    wid: string
}

export interface DocumentApiDownloadExternalDataRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApidownloadExternalData
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApidownloadExternalData
     */
    fid: string
    /**
     * 
     * @type string
     * @memberof DocumentApidownloadExternalData
     */
    ifNoneMatch?: string
}

export interface DocumentApiExport2JsonRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof DocumentApiexport2Json
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof DocumentApiexport2Json
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof DocumentApiexport2Json
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof DocumentApiexport2Json
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof DocumentApiexport2Json
     */
    linkDocumentId?: string
    /**
     * 
     * @type BTBExportModelParams
     * @memberof DocumentApiexport2Json
     */
    bTBExportModelParams?: BTBExportModelParams
}

export interface DocumentApiGetCurrentMicroversionRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetCurrentMicroversion
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetCurrentMicroversion
     */
    wv: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetCurrentMicroversion
     */
    wvid: string
}

export interface DocumentApiGetDocumentRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetDocument
     */
    did: string
}

export interface DocumentApiGetDocumentAclRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetDocumentAcl
     */
    did: string
}

export interface DocumentApiGetDocumentHistoryRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetDocumentHistory
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetDocumentHistory
     */
    wm: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetDocumentHistory
     */
    wmid: string
}

export interface DocumentApiGetDocumentPermissionSetRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetDocumentPermissionSet
     */
    did: string
}

export interface DocumentApiGetDocumentVersionsRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetDocumentVersions
     */
    did: string
    /**
     * 
     * @type number
     * @memberof DocumentApigetDocumentVersions
     */
    offset?: number
    /**
     * 
     * @type number
     * @memberof DocumentApigetDocumentVersions
     */
    limit?: number
}

export interface DocumentApiGetDocumentWorkspacesRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetDocumentWorkspaces
     */
    did: string
}

export interface DocumentApiGetDocumentsRequest {
    /**
     * Search for documents that contain the given string in the name. Search is not case-sensitive.
     * @type string
     * @memberof DocumentApigetDocuments
     */
    q?: string
    /**
     * Filter ID. Options are 0 (my documents), 1 (created), 2 (shared), 3 (trash), 4 (public), 5 (recent), 6 (by owner), 7 (by company), or 9 (by team).
     * @type number
     * @memberof DocumentApigetDocuments
     */
    filter?: number
    /**
     * Document owner\&#39;s ID (if the filter is 6 or 7), or Team Id (if the filter is 9) 
     * @type string
     * @memberof DocumentApigetDocuments
     */
    owner?: string
    /**
     * Type of owner. Options are 0 (user), 1 (company), 2 (onshape). If the owner is a teamId, leave this unspecified.
     * @type number
     * @memberof DocumentApigetDocuments
     */
    ownerType?: number
    /**
     * Column by which to sort search results. Options are name, modifiedAt, createdAt (Default), email, modifiedBy, and promotedAt.
     * @type string
     * @memberof DocumentApigetDocuments
     */
    sortColumn?: string
    /**
     * Sort order. Options are desc (descending, the default), or asc (ascending).
     * @type string
     * @memberof DocumentApigetDocuments
     */
    sortOrder?: string
    /**
     * Offset. Determines where search results begin. Default value is 0.
     * @type number
     * @memberof DocumentApigetDocuments
     */
    offset?: number
    /**
     * Maximum number of results to return per page. Default value is 20 (also the maximum). Number of results returned can be less than this value. Use the &#x60;next&#x60; URL in the response to fetch the next page.
     * @type number
     * @memberof DocumentApigetDocuments
     */
    limit?: number
    /**
     * Label
     * @type string
     * @memberof DocumentApigetDocuments
     */
    label?: string
    /**
     * Project
     * @type string
     * @memberof DocumentApigetDocuments
     */
    project?: string
    /**
     * Parent Id
     * @type string
     * @memberof DocumentApigetDocuments
     */
    parentId?: string
}

export interface DocumentApiGetElementsInDocumentRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof DocumentApigetElementsInDocument
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof DocumentApigetElementsInDocument
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof DocumentApigetElementsInDocument
     */
    wvmid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof DocumentApigetElementsInDocument
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetElementsInDocument
     */
    elementType?: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetElementsInDocument
     */
    elementId?: string
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetElementsInDocument
     */
    withThumbnails?: boolean
}

export interface DocumentApiGetInsertablesRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetInsertables
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetInsertables
     */
    wv: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetInsertables
     */
    wvid: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetInsertables
     */
    elementId?: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetInsertables
     */
    configuration?: string
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeSurfaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeSketches?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeReferenceFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeAssemblies?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeFeatureStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeBlobs?: boolean
    /**
     * 
     * @type string
     * @memberof DocumentApigetInsertables
     */
    allowedBlobMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    excludeNewerFSVersions?: boolean
    /**
     * 
     * @type number
     * @memberof DocumentApigetInsertables
     */
    maxFeatureScriptVersion?: number
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includePartStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeMeshes?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeWires?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeFlattenedBodies?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeApplications?: boolean
    /**
     * 
     * @type string
     * @memberof DocumentApigetInsertables
     */
    allowedApplicationMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeCompositeParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeFSTables?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeFSComputedPartPropertyFunctions?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeVariables?: boolean
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetInsertables
     */
    includeVariableStudios?: boolean
    /**
     * 
     * @type string
     * @memberof DocumentApigetInsertables
     */
    allowedBlobExtensions?: string
}

export interface DocumentApiGetUnitInfoRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof DocumentApigetUnitInfo
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof DocumentApigetUnitInfo
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof DocumentApigetUnitInfo
     */
    wvmid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof DocumentApigetUnitInfo
     */
    linkDocumentId?: string
}

export interface DocumentApiGetVersionRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApigetVersion
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApigetVersion
     */
    vid: string
    /**
     * 
     * @type boolean
     * @memberof DocumentApigetVersion
     */
    parents?: boolean
    /**
     * 
     * @type string
     * @memberof DocumentApigetVersion
     */
    linkDocumentId?: string
}

export interface DocumentApiMergeIntoWorkspaceRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApimergeIntoWorkspace
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApimergeIntoWorkspace
     */
    wid: string
    /**
     * 
     * @type BTVersionOrWorkspaceMergeInfo
     * @memberof DocumentApimergeIntoWorkspace
     */
    bTVersionOrWorkspaceMergeInfo: BTVersionOrWorkspaceMergeInfo
}

export interface DocumentApiMergePreviewRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof DocumentApimergePreview
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof DocumentApimergePreview
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof DocumentApimergePreview
     */
    sourceType: string
    /**
     * 
     * @type string
     * @memberof DocumentApimergePreview
     */
    sourceId: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof DocumentApimergePreview
     */
    linkDocumentId?: string
}

export interface DocumentApiMoveElementsToDocumentRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApimoveElementsToDocument
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApimoveElementsToDocument
     */
    wid: string
    /**
     * 
     * @type BTMoveElementParams
     * @memberof DocumentApimoveElementsToDocument
     */
    bTMoveElementParams: BTMoveElementParams
}

export interface DocumentApiRestoreFromHistoryRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof DocumentApirestoreFromHistory
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof DocumentApirestoreFromHistory
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof DocumentApirestoreFromHistory
     */
    vm: string
    /**
     * 
     * @type string
     * @memberof DocumentApirestoreFromHistory
     */
    vmid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof DocumentApirestoreFromHistory
     */
    linkDocumentId?: string
}

export interface DocumentApiRevertUnchangedToRevisionsRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApirevertUnchangedToRevisions
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApirevertUnchangedToRevisions
     */
    wid: string
    /**
     * 
     * @type BTRevertUnchangedParams
     * @memberof DocumentApirevertUnchangedToRevisions
     */
    bTRevertUnchangedParams?: BTRevertUnchangedParams
}

export interface DocumentApiSearchRequest {
    /**
     * 
     * @type BTDocumentSearchParams
     * @memberof DocumentApisearch
     */
    bTDocumentSearchParams: BTDocumentSearchParams
}

export interface DocumentApiShareDocumentRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApishareDocument
     */
    did: string
    /**
     * 
     * @type BTShareParams
     * @memberof DocumentApishareDocument
     */
    bTShareParams: BTShareParams
}

export interface DocumentApiShareWithSupportRequest {
    /**
     * Document ID.
     * @type string
     * @memberof DocumentApishareWithSupport
     */
    did: string
}

export interface DocumentApiSyncApplicationElementsRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApisyncApplicationElements
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApisyncApplicationElements
     */
    wid: string
    /**
     * 
     * @type BTSyncAppElementParams
     * @memberof DocumentApisyncApplicationElements
     */
    bTSyncAppElementParams: BTSyncAppElementParams
}

export interface DocumentApiUnShareDocumentRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApiunShareDocument
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApiunShareDocument
     */
    eid: string
    /**
     * 
     * @type number
     * @memberof DocumentApiunShareDocument
     */
    entryType?: number
}

export interface DocumentApiUnshareFromSupportRequest {
    /**
     * Document ID.
     * @type string
     * @memberof DocumentApiunshareFromSupport
     */
    did: string
}

export interface DocumentApiUpdateDocumentAttributesRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApiupdateDocumentAttributes
     */
    did: string
    /**
     * 
     * @type BTDocumentParams
     * @memberof DocumentApiupdateDocumentAttributes
     */
    bTDocumentParams: BTDocumentParams
}

export interface DocumentApiUpdateExternalReferencesToLatestDocumentsRequest {
    /**
     * 
     * @type string
     * @memberof DocumentApiupdateExternalReferencesToLatestDocuments
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DocumentApiupdateExternalReferencesToLatestDocuments
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof DocumentApiupdateExternalReferencesToLatestDocuments
     */
    eid: string
    /**
     * 
     * @type BTLinkToLatestDocumentParams
     * @memberof DocumentApiupdateExternalReferencesToLatestDocuments
     */
    bTLinkToLatestDocumentParams?: BTLinkToLatestDocumentParams
}

export class ObjectDocumentApi {
    private api: ObservableDocumentApi

    public constructor(configuration: Configuration, requestFactory?: DocumentApiRequestFactory, responseProcessor?: DocumentApiResponseProcessor) {
        this.api = new ObservableDocumentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Copy workspace by document ID and workspace ID.
     * @param param the request object
     */
    public copyWorkspaceWithHttpInfo(param: DocumentApiCopyWorkspaceRequest, options?: Configuration): Promise<HttpInfo<BTCopyDocumentInfo>> {
        return this.api.copyWorkspaceWithHttpInfo(param.did, param.wid, param.bTCopyDocumentParams,  options).toPromise();
    }

    /**
     * Copy workspace by document ID and workspace ID.
     * @param param the request object
     */
    public copyWorkspace(param: DocumentApiCopyWorkspaceRequest, options?: Configuration): Promise<BTCopyDocumentInfo> {
        return this.api.copyWorkspace(param.did, param.wid, param.bTCopyDocumentParams,  options).toPromise();
    }

    /**
     * Create and upload a document.
     * @param param the request object
     */
    public createDocumentWithHttpInfo(param: DocumentApiCreateDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createDocumentWithHttpInfo(param.bTDocumentParams,  options).toPromise();
    }

    /**
     * Create and upload a document.
     * @param param the request object
     */
    public createDocument(param: DocumentApiCreateDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.createDocument(param.bTDocumentParams,  options).toPromise();
    }

    /**
     * Create version by document ID.
     * @param param the request object
     */
    public createVersionWithHttpInfo(param: DocumentApiCreateVersionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createVersionWithHttpInfo(param.did, param.bTVersionOrWorkspaceParams,  options).toPromise();
    }

    /**
     * Create version by document ID.
     * @param param the request object
     */
    public createVersion(param: DocumentApiCreateVersionRequest, options?: Configuration): Promise<void> {
        return this.api.createVersion(param.did, param.bTVersionOrWorkspaceParams,  options).toPromise();
    }

    /**
     * Create workspace by document ID.
     * @param param the request object
     */
    public createWorkspaceWithHttpInfo(param: DocumentApiCreateWorkspaceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createWorkspaceWithHttpInfo(param.did, param.bTVersionOrWorkspaceParams,  options).toPromise();
    }

    /**
     * Create workspace by document ID.
     * @param param the request object
     */
    public createWorkspace(param: DocumentApiCreateWorkspaceRequest, options?: Configuration): Promise<void> {
        return this.api.createWorkspace(param.did, param.bTVersionOrWorkspaceParams,  options).toPromise();
    }

    /**
     * Delete document by document ID.
     * @param param the request object
     */
    public deleteDocumentWithHttpInfo(param: DocumentApiDeleteDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDocumentWithHttpInfo(param.did, param.forever,  options).toPromise();
    }

    /**
     * Delete document by document ID.
     * @param param the request object
     */
    public deleteDocument(param: DocumentApiDeleteDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDocument(param.did, param.forever,  options).toPromise();
    }

    /**
     * Delete workspace by document ID and workspace ID.
     * @param param the request object
     */
    public deleteWorkspaceWithHttpInfo(param: DocumentApiDeleteWorkspaceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteWorkspaceWithHttpInfo(param.did, param.wid,  options).toPromise();
    }

    /**
     * Delete workspace by document ID and workspace ID.
     * @param param the request object
     */
    public deleteWorkspace(param: DocumentApiDeleteWorkspaceRequest, options?: Configuration): Promise<void> {
        return this.api.deleteWorkspace(param.did, param.wid,  options).toPromise();
    }

    /**
     * Retrieve external data by document ID and foreign ID.
     * @param param the request object
     */
    public downloadExternalDataWithHttpInfo(param: DocumentApiDownloadExternalDataRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.downloadExternalDataWithHttpInfo(param.did, param.fid, param.ifNoneMatch,  options).toPromise();
    }

    /**
     * Retrieve external data by document ID and foreign ID.
     * @param param the request object
     */
    public downloadExternalData(param: DocumentApiDownloadExternalDataRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadExternalData(param.did, param.fid, param.ifNoneMatch,  options).toPromise();
    }

    /**
     * Export document by document ID, workspace or version ID, and tab ID.
     * @param param the request object
     */
    public export2JsonWithHttpInfo(param: DocumentApiExport2JsonRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.export2JsonWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId, param.bTBExportModelParams,  options).toPromise();
    }

    /**
     * Export document by document ID, workspace or version ID, and tab ID.
     * @param param the request object
     */
    public export2Json(param: DocumentApiExport2JsonRequest, options?: Configuration): Promise<void> {
        return this.api.export2Json(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId, param.bTBExportModelParams,  options).toPromise();
    }

    /**
     * Retrieve current microversion by document ID and workspace or version ID.
     * @param param the request object
     */
    public getCurrentMicroversionWithHttpInfo(param: DocumentApiGetCurrentMicroversionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCurrentMicroversionWithHttpInfo(param.did, param.wv, param.wvid,  options).toPromise();
    }

    /**
     * Retrieve current microversion by document ID and workspace or version ID.
     * @param param the request object
     */
    public getCurrentMicroversion(param: DocumentApiGetCurrentMicroversionRequest, options?: Configuration): Promise<void> {
        return this.api.getCurrentMicroversion(param.did, param.wv, param.wvid,  options).toPromise();
    }

    /**
     * Retrieve document by document ID.
     * @param param the request object
     */
    public getDocumentWithHttpInfo(param: DocumentApiGetDocumentRequest, options?: Configuration): Promise<HttpInfo<BTDocumentInfo>> {
        return this.api.getDocumentWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * Retrieve document by document ID.
     * @param param the request object
     */
    public getDocument(param: DocumentApiGetDocumentRequest, options?: Configuration): Promise<BTDocumentInfo> {
        return this.api.getDocument(param.did,  options).toPromise();
    }

    /**
     * Retrieve access control list by document ID.
     * @param param the request object
     */
    public getDocumentAclWithHttpInfo(param: DocumentApiGetDocumentAclRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentAclWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * Retrieve access control list by document ID.
     * @param param the request object
     */
    public getDocumentAcl(param: DocumentApiGetDocumentAclRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentAcl(param.did,  options).toPromise();
    }

    /**
     * Retrieve document history by document ID and workspace or microversion ID.
     * @param param the request object
     */
    public getDocumentHistoryWithHttpInfo(param: DocumentApiGetDocumentHistoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentHistoryWithHttpInfo(param.did, param.wm, param.wmid,  options).toPromise();
    }

    /**
     * Retrieve document history by document ID and workspace or microversion ID.
     * @param param the request object
     */
    public getDocumentHistory(param: DocumentApiGetDocumentHistoryRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentHistory(param.did, param.wm, param.wmid,  options).toPromise();
    }

    /**
     * Retrieve Document permissions by document ID.
     * @param param the request object
     */
    public getDocumentPermissionSetWithHttpInfo(param: DocumentApiGetDocumentPermissionSetRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getDocumentPermissionSetWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * Retrieve Document permissions by document ID.
     * @param param the request object
     */
    public getDocumentPermissionSet(param: DocumentApiGetDocumentPermissionSetRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.getDocumentPermissionSet(param.did,  options).toPromise();
    }

    /**
     * Retrieve versions by document ID.
     * @param param the request object
     */
    public getDocumentVersionsWithHttpInfo(param: DocumentApiGetDocumentVersionsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentVersionsWithHttpInfo(param.did, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Retrieve versions by document ID.
     * @param param the request object
     */
    public getDocumentVersions(param: DocumentApiGetDocumentVersionsRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentVersions(param.did, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Retrieve workspaces by document ID.
     * @param param the request object
     */
    public getDocumentWorkspacesWithHttpInfo(param: DocumentApiGetDocumentWorkspacesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentWorkspacesWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * Retrieve workspaces by document ID.
     * @param param the request object
     */
    public getDocumentWorkspaces(param: DocumentApiGetDocumentWorkspacesRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentWorkspaces(param.did,  options).toPromise();
    }

    /**
     * Retrieve a document.
     * @param param the request object
     */
    public getDocumentsWithHttpInfo(param: DocumentApiGetDocumentsRequest = {}, options?: Configuration): Promise<HttpInfo<BTGlobalTreeNodeListResponse>> {
        return this.api.getDocumentsWithHttpInfo(param.q, param.filter, param.owner, param.ownerType, param.sortColumn, param.sortOrder, param.offset, param.limit, param.label, param.project, param.parentId,  options).toPromise();
    }

    /**
     * Retrieve a document.
     * @param param the request object
     */
    public getDocuments(param: DocumentApiGetDocumentsRequest = {}, options?: Configuration): Promise<BTGlobalTreeNodeListResponse> {
        return this.api.getDocuments(param.q, param.filter, param.owner, param.ownerType, param.sortColumn, param.sortOrder, param.offset, param.limit, param.label, param.project, param.parentId,  options).toPromise();
    }

    /**
     * Retrieve tabs by document ID and workspace or version or microversion ID.
     * @param param the request object
     */
    public getElementsInDocumentWithHttpInfo(param: DocumentApiGetElementsInDocumentRequest, options?: Configuration): Promise<HttpInfo<Array<BTDocumentElementInfo>>> {
        return this.api.getElementsInDocumentWithHttpInfo(param.did, param.wvm, param.wvmid, param.linkDocumentId, param.elementType, param.elementId, param.withThumbnails,  options).toPromise();
    }

    /**
     * Retrieve tabs by document ID and workspace or version or microversion ID.
     * @param param the request object
     */
    public getElementsInDocument(param: DocumentApiGetElementsInDocumentRequest, options?: Configuration): Promise<Array<BTDocumentElementInfo>> {
        return this.api.getElementsInDocument(param.did, param.wvm, param.wvmid, param.linkDocumentId, param.elementType, param.elementId, param.withThumbnails,  options).toPromise();
    }

    /**
     * Retrieve insertables by document ID and workspace or version ID.
     * @param param the request object
     */
    public getInsertablesWithHttpInfo(param: DocumentApiGetInsertablesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getInsertablesWithHttpInfo(param.did, param.wv, param.wvid, param.elementId, param.configuration, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includePartStudios, param.includeFeatures, param.includeMeshes, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeCompositeParts, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions,  options).toPromise();
    }

    /**
     * Retrieve insertables by document ID and workspace or version ID.
     * @param param the request object
     */
    public getInsertables(param: DocumentApiGetInsertablesRequest, options?: Configuration): Promise<void> {
        return this.api.getInsertables(param.did, param.wv, param.wvid, param.elementId, param.configuration, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includePartStudios, param.includeFeatures, param.includeMeshes, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeCompositeParts, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions,  options).toPromise();
    }

    /**
     * Get the selected units and precision by document ID and workspace or version or microversion ID.
     * @param param the request object
     */
    public getUnitInfoWithHttpInfo(param: DocumentApiGetUnitInfoRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getUnitInfoWithHttpInfo(param.did, param.wvm, param.wvmid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the selected units and precision by document ID and workspace or version or microversion ID.
     * @param param the request object
     */
    public getUnitInfo(param: DocumentApiGetUnitInfoRequest, options?: Configuration): Promise<void> {
        return this.api.getUnitInfo(param.did, param.wvm, param.wvmid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Retrieve version by document ID and version ID.
     * @param param the request object
     */
    public getVersionWithHttpInfo(param: DocumentApiGetVersionRequest, options?: Configuration): Promise<HttpInfo<BTVersionInfo>> {
        return this.api.getVersionWithHttpInfo(param.did, param.vid, param.parents, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Retrieve version by document ID and version ID.
     * @param param the request object
     */
    public getVersion(param: DocumentApiGetVersionRequest, options?: Configuration): Promise<BTVersionInfo> {
        return this.api.getVersion(param.did, param.vid, param.parents, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Merge into workspace by document ID and workspace ID.
     * @param param the request object
     */
    public mergeIntoWorkspaceWithHttpInfo(param: DocumentApiMergeIntoWorkspaceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.mergeIntoWorkspaceWithHttpInfo(param.did, param.wid, param.bTVersionOrWorkspaceMergeInfo,  options).toPromise();
    }

    /**
     * Merge into workspace by document ID and workspace ID.
     * @param param the request object
     */
    public mergeIntoWorkspace(param: DocumentApiMergeIntoWorkspaceRequest, options?: Configuration): Promise<void> {
        return this.api.mergeIntoWorkspace(param.did, param.wid, param.bTVersionOrWorkspaceMergeInfo,  options).toPromise();
    }

    /**
     * Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID
     * @param param the request object
     */
    public mergePreviewWithHttpInfo(param: DocumentApiMergePreviewRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.mergePreviewWithHttpInfo(param.did, param.wid, param.sourceType, param.sourceId, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID
     * @param param the request object
     */
    public mergePreview(param: DocumentApiMergePreviewRequest, options?: Configuration): Promise<void> {
        return this.api.mergePreview(param.did, param.wid, param.sourceType, param.sourceId, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Move tab by document ID and workspace ID.
     * @param param the request object
     */
    public moveElementsToDocumentWithHttpInfo(param: DocumentApiMoveElementsToDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.moveElementsToDocumentWithHttpInfo(param.did, param.wid, param.bTMoveElementParams,  options).toPromise();
    }

    /**
     * Move tab by document ID and workspace ID.
     * @param param the request object
     */
    public moveElementsToDocument(param: DocumentApiMoveElementsToDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.moveElementsToDocument(param.did, param.wid, param.bTMoveElementParams,  options).toPromise();
    }

    /**
     * Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID.
     * @param param the request object
     */
    public restoreFromHistoryWithHttpInfo(param: DocumentApiRestoreFromHistoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.restoreFromHistoryWithHttpInfo(param.did, param.wid, param.vm, param.vmid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID.
     * @param param the request object
     */
    public restoreFromHistory(param: DocumentApiRestoreFromHistoryRequest, options?: Configuration): Promise<void> {
        return this.api.restoreFromHistory(param.did, param.wid, param.vm, param.vmid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public revertUnchangedToRevisionsWithHttpInfo(param: DocumentApiRevertUnchangedToRevisionsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.revertUnchangedToRevisionsWithHttpInfo(param.did, param.wid, param.bTRevertUnchangedParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public revertUnchangedToRevisions(param: DocumentApiRevertUnchangedToRevisionsRequest, options?: Configuration): Promise<void> {
        return this.api.revertUnchangedToRevisions(param.did, param.wid, param.bTRevertUnchangedParams,  options).toPromise();
    }

    /**
     * This returns list of documents based on search parameters.
     * Search document.
     * @param param the request object
     */
    public searchWithHttpInfo(param: DocumentApiSearchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.searchWithHttpInfo(param.bTDocumentSearchParams,  options).toPromise();
    }

    /**
     * This returns list of documents based on search parameters.
     * Search document.
     * @param param the request object
     */
    public search(param: DocumentApiSearchRequest, options?: Configuration): Promise<void> {
        return this.api.search(param.bTDocumentSearchParams,  options).toPromise();
    }

    /**
     * Share document by document ID.
     * @param param the request object
     */
    public shareDocumentWithHttpInfo(param: DocumentApiShareDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.shareDocumentWithHttpInfo(param.did, param.bTShareParams,  options).toPromise();
    }

    /**
     * Share document by document ID.
     * @param param the request object
     */
    public shareDocument(param: DocumentApiShareDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.shareDocument(param.did, param.bTShareParams,  options).toPromise();
    }

    /**
     * Share document by document ID with Onshape support.
     * @param param the request object
     */
    public shareWithSupportWithHttpInfo(param: DocumentApiShareWithSupportRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.shareWithSupportWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * Share document by document ID with Onshape support.
     * @param param the request object
     */
    public shareWithSupport(param: DocumentApiShareWithSupportRequest, options?: Configuration): Promise<void> {
        return this.api.shareWithSupport(param.did,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public syncApplicationElementsWithHttpInfo(param: DocumentApiSyncApplicationElementsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.syncApplicationElementsWithHttpInfo(param.did, param.wid, param.bTSyncAppElementParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public syncApplicationElements(param: DocumentApiSyncApplicationElementsRequest, options?: Configuration): Promise<void> {
        return this.api.syncApplicationElements(param.did, param.wid, param.bTSyncAppElementParams,  options).toPromise();
    }

    /**
     * Unshare document by document ID and tab ID.
     * @param param the request object
     */
    public unShareDocumentWithHttpInfo(param: DocumentApiUnShareDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unShareDocumentWithHttpInfo(param.did, param.eid, param.entryType,  options).toPromise();
    }

    /**
     * Unshare document by document ID and tab ID.
     * @param param the request object
     */
    public unShareDocument(param: DocumentApiUnShareDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.unShareDocument(param.did, param.eid, param.entryType,  options).toPromise();
    }

    /**
     * Unshare document with support.
     * @param param the request object
     */
    public unshareFromSupportWithHttpInfo(param: DocumentApiUnshareFromSupportRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unshareFromSupportWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * Unshare document with support.
     * @param param the request object
     */
    public unshareFromSupport(param: DocumentApiUnshareFromSupportRequest, options?: Configuration): Promise<void> {
        return this.api.unshareFromSupport(param.did,  options).toPromise();
    }

    /**
     * Update document attributes by document ID.
     * @param param the request object
     */
    public updateDocumentAttributesWithHttpInfo(param: DocumentApiUpdateDocumentAttributesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateDocumentAttributesWithHttpInfo(param.did, param.bTDocumentParams,  options).toPromise();
    }

    /**
     * Update document attributes by document ID.
     * @param param the request object
     */
    public updateDocumentAttributes(param: DocumentApiUpdateDocumentAttributesRequest, options?: Configuration): Promise<void> {
        return this.api.updateDocumentAttributes(param.did, param.bTDocumentParams,  options).toPromise();
    }

    /**
     * Update external references to latest by document ID, workspace ID, and tab ID.
     * @param param the request object
     */
    public updateExternalReferencesToLatestDocumentsWithHttpInfo(param: DocumentApiUpdateExternalReferencesToLatestDocumentsRequest, options?: Configuration): Promise<HttpInfo<BTLinkToLatestDocumentInfo>> {
        return this.api.updateExternalReferencesToLatestDocumentsWithHttpInfo(param.did, param.wid, param.eid, param.bTLinkToLatestDocumentParams,  options).toPromise();
    }

    /**
     * Update external references to latest by document ID, workspace ID, and tab ID.
     * @param param the request object
     */
    public updateExternalReferencesToLatestDocuments(param: DocumentApiUpdateExternalReferencesToLatestDocumentsRequest, options?: Configuration): Promise<BTLinkToLatestDocumentInfo> {
        return this.api.updateExternalReferencesToLatestDocuments(param.did, param.wid, param.eid, param.bTLinkToLatestDocumentParams,  options).toPromise();
    }

}

import { ObservableDrawingApi } from "./ObservableAPI";
import { DrawingApiRequestFactory, DrawingApiResponseProcessor} from "../apis/DrawingApi";

export interface DrawingApiCreateDrawingAppElementRequest {
    /**
     * 
     * @type string
     * @memberof DrawingApicreateDrawingAppElement
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DrawingApicreateDrawingAppElement
     */
    wid: string
    /**
     * 
     * @type BTDrawingParams
     * @memberof DrawingApicreateDrawingAppElement
     */
    bTDrawingParams: BTDrawingParams
}

export interface DrawingApiCreateDrawingTranslationRequest {
    /**
     * 
     * @type string
     * @memberof DrawingApicreateDrawingTranslation
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DrawingApicreateDrawingTranslation
     */
    wv: string
    /**
     * 
     * @type string
     * @memberof DrawingApicreateDrawingTranslation
     */
    wvid: string
    /**
     * 
     * @type string
     * @memberof DrawingApicreateDrawingTranslation
     */
    eid: string
    /**
     * 
     * @type BTTranslateFormatParams
     * @memberof DrawingApicreateDrawingTranslation
     */
    bTTranslateFormatParams: BTTranslateFormatParams
}

export interface DrawingApiGetDrawingTranslatorFormatsRequest {
    /**
     * 
     * @type string
     * @memberof DrawingApigetDrawingTranslatorFormats
     */
    did: string
    /**
     * 
     * @type string
     * @memberof DrawingApigetDrawingTranslatorFormats
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof DrawingApigetDrawingTranslatorFormats
     */
    eid: string
}

export interface DrawingApiGetModificationStatusRequest {
    /**
     * 
     * @type string
     * @memberof DrawingApigetModificationStatus
     */
    mrid: string
}

export interface DrawingApiModifyDrawingRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof DrawingApimodifyDrawing
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof DrawingApimodifyDrawing
     */
    wid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof DrawingApimodifyDrawing
     */
    eid: string
    /**
     * 
     * @type BTDrawingModificationParams
     * @memberof DrawingApimodifyDrawing
     */
    bTDrawingModificationParams: BTDrawingModificationParams
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof DrawingApimodifyDrawing
     */
    linkDocumentId?: string
}

export class ObjectDrawingApi {
    private api: ObservableDrawingApi

    public constructor(configuration: Configuration, requestFactory?: DrawingApiRequestFactory, responseProcessor?: DrawingApiResponseProcessor) {
        this.api = new ObservableDrawingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new drawing in a document.
     * @param param the request object
     */
    public createDrawingAppElementWithHttpInfo(param: DrawingApiCreateDrawingAppElementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createDrawingAppElementWithHttpInfo(param.did, param.wid, param.bTDrawingParams,  options).toPromise();
    }

    /**
     * Create a new drawing in a document.
     * @param param the request object
     */
    public createDrawingAppElement(param: DrawingApiCreateDrawingAppElementRequest, options?: Configuration): Promise<void> {
        return this.api.createDrawingAppElement(param.did, param.wid, param.bTDrawingParams,  options).toPromise();
    }

    /**
     * Export a drawing to a different format within a document. Use `getDrawingTranslatorFormats` for a list of supported translation (i.e., import/export) formats.
     * Translate (export) a drawing to a different format.
     * @param param the request object
     */
    public createDrawingTranslationWithHttpInfo(param: DrawingApiCreateDrawingTranslationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createDrawingTranslationWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.bTTranslateFormatParams,  options).toPromise();
    }

    /**
     * Export a drawing to a different format within a document. Use `getDrawingTranslatorFormats` for a list of supported translation (i.e., import/export) formats.
     * Translate (export) a drawing to a different format.
     * @param param the request object
     */
    public createDrawingTranslation(param: DrawingApiCreateDrawingTranslationRequest, options?: Configuration): Promise<void> {
        return this.api.createDrawingTranslation(param.did, param.wv, param.wvid, param.eid, param.bTTranslateFormatParams,  options).toPromise();
    }

    /**
     * Get a list of all valid formats the drawing can be translated (exported) to.
     * @param param the request object
     */
    public getDrawingTranslatorFormatsWithHttpInfo(param: DrawingApiGetDrawingTranslatorFormatsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDrawingTranslatorFormatsWithHttpInfo(param.did, param.wid, param.eid,  options).toPromise();
    }

    /**
     * Get a list of all valid formats the drawing can be translated (exported) to.
     * @param param the request object
     */
    public getDrawingTranslatorFormats(param: DrawingApiGetDrawingTranslatorFormatsRequest, options?: Configuration): Promise<void> {
        return this.api.getDrawingTranslatorFormats(param.did, param.wid, param.eid,  options).toPromise();
    }

    /**
     * Get the status of a drawing modification operation.
     * @param param the request object
     */
    public getModificationStatusWithHttpInfo(param: DrawingApiGetModificationStatusRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getModificationStatusWithHttpInfo(param.mrid,  options).toPromise();
    }

    /**
     * Get the status of a drawing modification operation.
     * @param param the request object
     */
    public getModificationStatus(param: DrawingApiGetModificationStatusRequest, options?: Configuration): Promise<void> {
        return this.api.getModificationStatus(param.mrid,  options).toPromise();
    }

    /**
     * Modify a drawing via JSON payload.
     * @param param the request object
     */
    public modifyDrawingWithHttpInfo(param: DrawingApiModifyDrawingRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.modifyDrawingWithHttpInfo(param.did, param.wid, param.eid, param.bTDrawingModificationParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Modify a drawing via JSON payload.
     * @param param the request object
     */
    public modifyDrawing(param: DrawingApiModifyDrawingRequest, options?: Configuration): Promise<void> {
        return this.api.modifyDrawing(param.did, param.wid, param.eid, param.bTDrawingModificationParams, param.linkDocumentId,  options).toPromise();
    }

}

import { ObservableElementApi } from "./ObservableAPI";
import { ElementApiRequestFactory, ElementApiResponseProcessor} from "../apis/ElementApi";

export interface ElementApiCopyElementFromSourceDocumentRequest {
    /**
     * 
     * @type string
     * @memberof ElementApicopyElementFromSourceDocument
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ElementApicopyElementFromSourceDocument
     */
    wid: string
    /**
     * 
     * @type BTCopyElementParams
     * @memberof ElementApicopyElementFromSourceDocument
     */
    bTCopyElementParams: BTCopyElementParams
}

export interface ElementApiDecodeConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ElementApidecodeConfiguration
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ElementApidecodeConfiguration
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof ElementApidecodeConfiguration
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof ElementApidecodeConfiguration
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof ElementApidecodeConfiguration
     */
    cid: string
    /**
     * 
     * @type string
     * @memberof ElementApidecodeConfiguration
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof ElementApidecodeConfiguration
     */
    includeDisplay?: boolean
    /**
     * 
     * @type boolean
     * @memberof ElementApidecodeConfiguration
     */
    configurationIsId?: boolean
}

export interface ElementApiDeleteElementRequest {
    /**
     * 
     * @type string
     * @memberof ElementApideleteElement
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ElementApideleteElement
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof ElementApideleteElement
     */
    eid: string
}

export interface ElementApiEncodeConfigurationMapRequest {
    /**
     * 
     * @type string
     * @memberof ElementApiencodeConfigurationMap
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ElementApiencodeConfigurationMap
     */
    eid: string
    /**
     * 
     * @type BTConfigurationParams
     * @memberof ElementApiencodeConfigurationMap
     */
    bTConfigurationParams: BTConfigurationParams
    /**
     * 
     * @type string
     * @memberof ElementApiencodeConfigurationMap
     */
    versionId?: string
    /**
     * 
     * @type string
     * @memberof ElementApiencodeConfigurationMap
     */
    linkDocumentId?: string
}

export interface ElementApiGetConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ElementApigetConfiguration
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ElementApigetConfiguration
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof ElementApigetConfiguration
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof ElementApigetConfiguration
     */
    eid: string
}

export interface ElementApiGetElementTranslatorFormatsByVersionOrWorkspaceRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof ElementApigetElementTranslatorFormatsByVersionOrWorkspace
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof ElementApigetElementTranslatorFormatsByVersionOrWorkspace
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof ElementApigetElementTranslatorFormatsByVersionOrWorkspace
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof ElementApigetElementTranslatorFormatsByVersionOrWorkspace
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof ElementApigetElementTranslatorFormatsByVersionOrWorkspace
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof ElementApigetElementTranslatorFormatsByVersionOrWorkspace
     */
    checkContent?: boolean
    /**
     * 
     * @type string
     * @memberof ElementApigetElementTranslatorFormatsByVersionOrWorkspace
     */
    configuration?: string
}

export interface ElementApiUpdateConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ElementApiupdateConfiguration
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ElementApiupdateConfiguration
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof ElementApiupdateConfiguration
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof ElementApiupdateConfiguration
     */
    eid: string
    /**
     * 
     * @type BTConfigurationUpdateCall2933
     * @memberof ElementApiupdateConfiguration
     */
    bTConfigurationUpdateCall2933?: BTConfigurationUpdateCall2933
}

export interface ElementApiUpdateReferencesRequest {
    /**
     * 
     * @type string
     * @memberof ElementApiupdateReferences
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ElementApiupdateReferences
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof ElementApiupdateReferences
     */
    eid: string
    /**
     * 
     * @type BTUpdateReferenceParams
     * @memberof ElementApiupdateReferences
     */
    bTUpdateReferenceParams: BTUpdateReferenceParams
}

export class ObjectElementApi {
    private api: ObservableElementApi

    public constructor(configuration: Configuration, requestFactory?: ElementApiRequestFactory, responseProcessor?: ElementApiResponseProcessor) {
        this.api = new ObservableElementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Copy tab by document ID and workspace ID.
     * @param param the request object
     */
    public copyElementFromSourceDocumentWithHttpInfo(param: ElementApiCopyElementFromSourceDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.copyElementFromSourceDocumentWithHttpInfo(param.did, param.wid, param.bTCopyElementParams,  options).toPromise();
    }

    /**
     * Copy tab by document ID and workspace ID.
     * @param param the request object
     */
    public copyElementFromSourceDocument(param: ElementApiCopyElementFromSourceDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.copyElementFromSourceDocument(param.did, param.wid, param.bTCopyElementParams,  options).toPromise();
    }

    /**
     * Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID.
     * @param param the request object
     */
    public decodeConfigurationWithHttpInfo(param: ElementApiDecodeConfigurationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.decodeConfigurationWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.cid, param.linkDocumentId, param.includeDisplay, param.configurationIsId,  options).toPromise();
    }

    /**
     * Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID.
     * @param param the request object
     */
    public decodeConfiguration(param: ElementApiDecodeConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.decodeConfiguration(param.did, param.wvm, param.wvmid, param.eid, param.cid, param.linkDocumentId, param.includeDisplay, param.configurationIsId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteElementWithHttpInfo(param: ElementApiDeleteElementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteElementWithHttpInfo(param.did, param.wid, param.eid,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteElement(param: ElementApiDeleteElementRequest, options?: Configuration): Promise<void> {
        return this.api.deleteElement(param.did, param.wid, param.eid,  options).toPromise();
    }

    /**
     * Encode configuration by documentation ID and tab ID.
     * @param param the request object
     */
    public encodeConfigurationMapWithHttpInfo(param: ElementApiEncodeConfigurationMapRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.encodeConfigurationMapWithHttpInfo(param.did, param.eid, param.bTConfigurationParams, param.versionId, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Encode configuration by documentation ID and tab ID.
     * @param param the request object
     */
    public encodeConfigurationMap(param: ElementApiEncodeConfigurationMapRequest, options?: Configuration): Promise<void> {
        return this.api.encodeConfigurationMap(param.did, param.eid, param.bTConfigurationParams, param.versionId, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID.
     * @param param the request object
     */
    public getConfigurationWithHttpInfo(param: ElementApiGetConfigurationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getConfigurationWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID.
     * @param param the request object
     */
    public getConfiguration(param: ElementApiGetConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.getConfiguration(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getElementTranslatorFormatsByVersionOrWorkspaceWithHttpInfo(param: ElementApiGetElementTranslatorFormatsByVersionOrWorkspaceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getElementTranslatorFormatsByVersionOrWorkspaceWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId, param.checkContent, param.configuration,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getElementTranslatorFormatsByVersionOrWorkspace(param: ElementApiGetElementTranslatorFormatsByVersionOrWorkspaceRequest, options?: Configuration): Promise<void> {
        return this.api.getElementTranslatorFormatsByVersionOrWorkspace(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId, param.checkContent, param.configuration,  options).toPromise();
    }

    /**
     * Update configuration by document ID, workspace or microversion ID, and tab ID.
     * @param param the request object
     */
    public updateConfigurationWithHttpInfo(param: ElementApiUpdateConfigurationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateConfigurationWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.bTConfigurationUpdateCall2933,  options).toPromise();
    }

    /**
     * Update configuration by document ID, workspace or microversion ID, and tab ID.
     * @param param the request object
     */
    public updateConfiguration(param: ElementApiUpdateConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.updateConfiguration(param.did, param.wvm, param.wvmid, param.eid, param.bTConfigurationUpdateCall2933,  options).toPromise();
    }

    /**
     * Update or replace node references by document ID, workspace ID, and tab ID.
     * @param param the request object
     */
    public updateReferencesWithHttpInfo(param: ElementApiUpdateReferencesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateReferencesWithHttpInfo(param.did, param.wid, param.eid, param.bTUpdateReferenceParams,  options).toPromise();
    }

    /**
     * Update or replace node references by document ID, workspace ID, and tab ID.
     * @param param the request object
     */
    public updateReferences(param: ElementApiUpdateReferencesRequest, options?: Configuration): Promise<void> {
        return this.api.updateReferences(param.did, param.wid, param.eid, param.bTUpdateReferenceParams,  options).toPromise();
    }

}

import { ObservableEventApi } from "./ObservableAPI";
import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";

export interface EventApiFireEventRequest {
    /**
     * 
     * @type BTEventParams
     * @memberof EventApifireEvent
     */
    bTEventParams?: BTEventParams
}

export class ObjectEventApi {
    private api: ObservableEventApi

    public constructor(configuration: Configuration, requestFactory?: EventApiRequestFactory, responseProcessor?: EventApiResponseProcessor) {
        this.api = new ObservableEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fire an asynchronous event.
     * @param param the request object
     */
    public fireEventWithHttpInfo(param: EventApiFireEventRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.fireEventWithHttpInfo(param.bTEventParams,  options).toPromise();
    }

    /**
     * Fire an asynchronous event.
     * @param param the request object
     */
    public fireEvent(param: EventApiFireEventRequest = {}, options?: Configuration): Promise<void> {
        return this.api.fireEvent(param.bTEventParams,  options).toPromise();
    }

}

import { ObservableExportRuleApi } from "./ObservableAPI";
import { ExportRuleApiRequestFactory, ExportRuleApiResponseProcessor} from "../apis/ExportRuleApi";

export interface ExportRuleApiGetValidRuleOptionsRequest {
    /**
     * Indicates which of company (c) or user (u) id is specified below.
     * @type &#39;c&#39; | &#39;u&#39;
     * @memberof ExportRuleApigetValidRuleOptions
     */
    cu: 'c' | 'u'
    /**
     * The id of the company or user in which the operation should be performed.
     * @type string
     * @memberof ExportRuleApigetValidRuleOptions
     */
    cuid: string
}

export class ObjectExportRuleApi {
    private api: ObservableExportRuleApi

    public constructor(configuration: Configuration, requestFactory?: ExportRuleApiRequestFactory, responseProcessor?: ExportRuleApiResponseProcessor) {
        this.api = new ObservableExportRuleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Does NOT get the rules themselves; it gets the information used to create them.
     *  Get a list of valid export rule options for the user or company.
     * @param param the request object
     */
    public getValidRuleOptionsWithHttpInfo(param: ExportRuleApiGetValidRuleOptionsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getValidRuleOptionsWithHttpInfo(param.cu, param.cuid,  options).toPromise();
    }

    /**
     * Does NOT get the rules themselves; it gets the information used to create them.
     *  Get a list of valid export rule options for the user or company.
     * @param param the request object
     */
    public getValidRuleOptions(param: ExportRuleApiGetValidRuleOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.getValidRuleOptions(param.cu, param.cuid,  options).toPromise();
    }

}

import { ObservableFeatureStudioApi } from "./ObservableAPI";
import { FeatureStudioApiRequestFactory, FeatureStudioApiResponseProcessor} from "../apis/FeatureStudioApi";

export interface FeatureStudioApiCreateFeatureStudioRequest {
    /**
     * 
     * @type string
     * @memberof FeatureStudioApicreateFeatureStudio
     */
    did: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApicreateFeatureStudio
     */
    wid: string
    /**
     * 
     * @type BTModelElementParams
     * @memberof FeatureStudioApicreateFeatureStudio
     */
    bTModelElementParams: BTModelElementParams
}

export interface FeatureStudioApiGetFeatureStudioContentsRequest {
    /**
     * 
     * @type string
     * @memberof FeatureStudioApigetFeatureStudioContents
     */
    did: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApigetFeatureStudioContents
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApigetFeatureStudioContents
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApigetFeatureStudioContents
     */
    eid: string
}

export interface FeatureStudioApiGetFeatureStudioSpecsRequest {
    /**
     * 
     * @type string
     * @memberof FeatureStudioApigetFeatureStudioSpecs
     */
    did: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApigetFeatureStudioSpecs
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApigetFeatureStudioSpecs
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApigetFeatureStudioSpecs
     */
    eid: string
}

export interface FeatureStudioApiUpdateFeatureStudioContentsRequest {
    /**
     * 
     * @type string
     * @memberof FeatureStudioApiupdateFeatureStudioContents
     */
    did: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApiupdateFeatureStudioContents
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApiupdateFeatureStudioContents
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof FeatureStudioApiupdateFeatureStudioContents
     */
    eid: string
    /**
     * 
     * @type BTFeatureStudioContents2239
     * @memberof FeatureStudioApiupdateFeatureStudioContents
     */
    bTFeatureStudioContents2239?: BTFeatureStudioContents2239
}

export class ObjectFeatureStudioApi {
    private api: ObservableFeatureStudioApi

    public constructor(configuration: Configuration, requestFactory?: FeatureStudioApiRequestFactory, responseProcessor?: FeatureStudioApiResponseProcessor) {
        this.api = new ObservableFeatureStudioApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Specify the name for the new tab in the request body.
     * Create a new Feature Studio tab in a document.
     * @param param the request object
     */
    public createFeatureStudioWithHttpInfo(param: FeatureStudioApiCreateFeatureStudioRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createFeatureStudioWithHttpInfo(param.did, param.wid, param.bTModelElementParams,  options).toPromise();
    }

    /**
     * Specify the name for the new tab in the request body.
     * Create a new Feature Studio tab in a document.
     * @param param the request object
     */
    public createFeatureStudio(param: FeatureStudioApiCreateFeatureStudioRequest, options?: Configuration): Promise<void> {
        return this.api.createFeatureStudio(param.did, param.wid, param.bTModelElementParams,  options).toPromise();
    }

    /**
     * Get the text for a Feature Studio element.
     * @param param the request object
     */
    public getFeatureStudioContentsWithHttpInfo(param: FeatureStudioApiGetFeatureStudioContentsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getFeatureStudioContentsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Get the text for a Feature Studio element.
     * @param param the request object
     */
    public getFeatureStudioContents(param: FeatureStudioApiGetFeatureStudioContentsRequest, options?: Configuration): Promise<void> {
        return this.api.getFeatureStudioContents(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Get the feature specs for a Feature Studio element.
     * @param param the request object
     */
    public getFeatureStudioSpecsWithHttpInfo(param: FeatureStudioApiGetFeatureStudioSpecsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getFeatureStudioSpecsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Get the feature specs for a Feature Studio element.
     * @param param the request object
     */
    public getFeatureStudioSpecs(param: FeatureStudioApiGetFeatureStudioSpecsRequest, options?: Configuration): Promise<void> {
        return this.api.getFeatureStudioSpecs(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Update the text for a Feature Studio element.
     * @param param the request object
     */
    public updateFeatureStudioContentsWithHttpInfo(param: FeatureStudioApiUpdateFeatureStudioContentsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateFeatureStudioContentsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.bTFeatureStudioContents2239,  options).toPromise();
    }

    /**
     * Update the text for a Feature Studio element.
     * @param param the request object
     */
    public updateFeatureStudioContents(param: FeatureStudioApiUpdateFeatureStudioContentsRequest, options?: Configuration): Promise<void> {
        return this.api.updateFeatureStudioContents(param.did, param.wvm, param.wvmid, param.eid, param.bTFeatureStudioContents2239,  options).toPromise();
    }

}

import { ObservableFolderApi } from "./ObservableAPI";
import { FolderApiRequestFactory, FolderApiResponseProcessor} from "../apis/FolderApi";

export interface FolderApiGetFolderAclRequest {
    /**
     * 
     * @type string
     * @memberof FolderApigetFolderAcl
     */
    fid: string
}

export interface FolderApiShareRequest {
    /**
     * 
     * @type string
     * @memberof FolderApishare
     */
    fid: string
    /**
     * 
     * @type BTShareParams
     * @memberof FolderApishare
     */
    bTShareParams: BTShareParams
}

export interface FolderApiUnShareRequest {
    /**
     * 
     * @type string
     * @memberof FolderApiunShare
     */
    fid: string
    /**
     * 
     * @type string
     * @memberof FolderApiunShare
     */
    eid: string
    /**
     * 
     * @type number
     * @memberof FolderApiunShare
     */
    entryType?: number
}

export class ObjectFolderApi {
    private api: ObservableFolderApi

    public constructor(configuration: Configuration, requestFactory?: FolderApiRequestFactory, responseProcessor?: FolderApiResponseProcessor) {
        this.api = new ObservableFolderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the ACL of permission objects. Each object contains:  * The type of entity       * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)   * The ID of the entity for the specified type.  * The permissions for that entity.      *  OWNER (100): All permissions, including those not listed, such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Get the Access Control List (ACL) for a folder to view permissions.
     * @param param the request object
     */
    public getFolderAclWithHttpInfo(param: FolderApiGetFolderAclRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getFolderAclWithHttpInfo(param.fid,  options).toPromise();
    }

    /**
     * Returns the ACL of permission objects. Each object contains:  * The type of entity       * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)   * The ID of the entity for the specified type.  * The permissions for that entity.      *  OWNER (100): All permissions, including those not listed, such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Get the Access Control List (ACL) for a folder to view permissions.
     * @param param the request object
     */
    public getFolderAcl(param: FolderApiGetFolderAclRequest, options?: Configuration): Promise<void> {
        return this.api.getFolderAcl(param.fid,  options).toPromise();
    }

    /**
     * * Specify the type of entity to share with using `entries.entryType`:      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide one of the identifiers in the `entries` object in the request body.       * You can share with non-Onshape users with the `email` field when `entryType=0`.    * Provide the string for the permission set. Do not include the integer in parentheses:      * OWNER (100): Object owner. Implies all permissions including those not listed such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Share folder with an entity.
     * @param param the request object
     */
    public shareWithHttpInfo(param: FolderApiShareRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.shareWithHttpInfo(param.fid, param.bTShareParams,  options).toPromise();
    }

    /**
     * * Specify the type of entity to share with using `entries.entryType`:      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide one of the identifiers in the `entries` object in the request body.       * You can share with non-Onshape users with the `email` field when `entryType=0`.    * Provide the string for the permission set. Do not include the integer in parentheses:      * OWNER (100): Object owner. Implies all permissions including those not listed such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Share folder with an entity.
     * @param param the request object
     */
    public share(param: FolderApiShareRequest, options?: Configuration): Promise<void> {
        return this.api.share(param.fid, param.bTShareParams,  options).toPromise();
    }

    /**
     * * Provide the folder ID for the folder to unshare.    * Provide the `entityType` for the type of entity to remove.      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide the entity ID in the `eid` param.
     * Remove permissions from the folder for the specified Access Control List (ACL) entry.
     * @param param the request object
     */
    public unShareWithHttpInfo(param: FolderApiUnShareRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unShareWithHttpInfo(param.fid, param.eid, param.entryType,  options).toPromise();
    }

    /**
     * * Provide the folder ID for the folder to unshare.    * Provide the `entityType` for the type of entity to remove.      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide the entity ID in the `eid` param.
     * Remove permissions from the folder for the specified Access Control List (ACL) entry.
     * @param param the request object
     */
    public unShare(param: FolderApiUnShareRequest, options?: Configuration): Promise<void> {
        return this.api.unShare(param.fid, param.eid, param.entryType,  options).toPromise();
    }

}

import { ObservableGlobalTreeNodesApi } from "./ObservableAPI";
import { GlobalTreeNodesApiRequestFactory, GlobalTreeNodesApiResponseProcessor} from "../apis/GlobalTreeNodesApi";

export interface GlobalTreeNodesApiGlobalTreeNodesRequest {
}

export interface GlobalTreeNodesApiGlobalTreeNodesFolderRequest {
    /**
     * ID of the folder to traverse.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolder
     */
    fid: string
    /**
     * When true, requests that the path of all nodes up to the root are to be returned.
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolder
     */
    getPathToRoot?: boolean
    /**
     * Starting offset in the sorted list of items to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolder
     */
    offset?: number
    /**
     * Maximum number of items in the list to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolder
     */
    limit?: number
    /**
     * Field to sort the items in the list by.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolder
     */
    sortColumn?: string
    /**
     * Which way to sort the list (asc/desc).  Defaults to asc.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolder
     */
    sortOrder?: string
}

export interface GlobalTreeNodesApiGlobalTreeNodesFolderInsertablesRequest {
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    fid: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeSurfaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeSketches?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeReferenceFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeAssemblies?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeFeatureStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeBlobs?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    allowedBlobMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includePartStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeWires?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeFlattenedBodies?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeApplications?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    allowedApplicationMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeFSTables?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeFSComputedPartPropertyFunctions?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeVariables?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeVariableStudios?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    allowedBlobExtensions?: string
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    excludeNewerFSVersions?: boolean
    /**
     * Is this actually supported?
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    maxFeatureScriptVersion?: number
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeMeshes?: boolean
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    includeCompositeParts?: boolean
    /**
     * When true, requests that the path of all nodes up to the root are to be returned.
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    getPathToRoot?: boolean
    /**
     * Starting offset in the sorted list of items to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    offset?: number
    /**
     * Maximum number of items in the list to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    limit?: number
    /**
     * Field to sort the items in the list by.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    sortColumn?: string
    /**
     * Which way to sort the list (asc/desc).  Defaults to asc.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesFolderInsertables
     */
    sortOrder?: string
}

export interface GlobalTreeNodesApiGlobalTreeNodesMagicRequest {
    /**
     * Magic ID of list to return.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    mid: string
    /**
     * When true, requests that the path of all nodes up to the root are to be returned.
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    getPathToRoot?: boolean
    /**
     * Starting offset in the sorted list of items to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    offset?: number
    /**
     * Maximum number of items in the list to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    limit?: number
    /**
     * Field to sort the items in the list by.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    sortColumn?: string
    /**
     * Which way to sort the list (asc/desc).  Defaults to asc.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    sortOrder?: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeSurfaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeSketches?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeReferenceFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeAssemblies?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeFeatureStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeBlobs?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    allowedBlobMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includePartStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeWires?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeFlattenedBodies?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeApplications?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    allowedApplicationMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeFSTables?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeFSComputedPartPropertyFunctions?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeVariables?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeVariableStudios?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    allowedBlobExtensions?: string
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    excludeNewerFSVersions?: boolean
    /**
     * Is this actually supported?
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    maxFeatureScriptVersion?: number
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeMeshes?: boolean
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesMagic
     */
    includeCompositeParts?: boolean
}

export interface GlobalTreeNodesApiGlobalTreeNodesTeamRequest {
    /**
     * ID of team to get data for
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeam
     */
    teamId: string
    /**
     * When true, requests that the path of all nodes up to the root are to be returned.
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeam
     */
    getPathToRoot?: boolean
    /**
     * Starting offset in the sorted list of items to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeam
     */
    offset?: number
    /**
     * Maximum number of items in the list to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeam
     */
    limit?: number
    /**
     * Field to sort the items in the list by.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeam
     */
    sortColumn?: string
    /**
     * Which way to sort the list (asc/desc).  Defaults to asc.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeam
     */
    sortOrder?: string
}

export interface GlobalTreeNodesApiGlobalTreeNodesTeamInsertablesRequest {
    /**
     * ID of team to get data for
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    teamId: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeSurfaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeSketches?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeReferenceFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeAssemblies?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeFeatureStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeBlobs?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    allowedBlobMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includePartStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeWires?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeFlattenedBodies?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeApplications?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    allowedApplicationMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeFSTables?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeFSComputedPartPropertyFunctions?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeVariables?: boolean
    /**
     * 
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeVariableStudios?: boolean
    /**
     * 
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    allowedBlobExtensions?: string
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    excludeNewerFSVersions?: boolean
    /**
     * Is this actually supported?
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    maxFeatureScriptVersion?: number
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeMeshes?: boolean
    /**
     * Is this actually supported?
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    includeCompositeParts?: boolean
    /**
     * When true, requests that the path of all nodes up to the root are to be returned.
     * @type boolean
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    getPathToRoot?: boolean
    /**
     * Starting offset in the sorted list of items to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    offset?: number
    /**
     * Maximum number of items in the list to return.
     * @type number
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    limit?: number
    /**
     * Field to sort the items in the list by.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    sortColumn?: string
    /**
     * Which way to sort the list (asc/desc).  Defaults to asc.
     * @type string
     * @memberof GlobalTreeNodesApiglobalTreeNodesTeamInsertables
     */
    sortOrder?: string
}

export class ObjectGlobalTreeNodesApi {
    private api: ObservableGlobalTreeNodesApi

    public constructor(configuration: Configuration, requestFactory?: GlobalTreeNodesApiRequestFactory, responseProcessor?: GlobalTreeNodesApiResponseProcessor) {
        this.api = new ObservableGlobalTreeNodesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Searchable Trees
     * @param param the request object
     */
    public globalTreeNodesWithHttpInfo(param: GlobalTreeNodesApiGlobalTreeNodesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.globalTreeNodesWithHttpInfo( options).toPromise();
    }

    /**
     * Get Searchable Trees
     * @param param the request object
     */
    public globalTreeNodes(param: GlobalTreeNodesApiGlobalTreeNodesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.globalTreeNodes( options).toPromise();
    }

    /**
     * Get Tree Node List
     * @param param the request object
     */
    public globalTreeNodesFolderWithHttpInfo(param: GlobalTreeNodesApiGlobalTreeNodesFolderRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.globalTreeNodesFolderWithHttpInfo(param.fid, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder,  options).toPromise();
    }

    /**
     * Get Tree Node List
     * @param param the request object
     */
    public globalTreeNodesFolder(param: GlobalTreeNodesApiGlobalTreeNodesFolderRequest, options?: Configuration): Promise<void> {
        return this.api.globalTreeNodesFolder(param.fid, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve insertables by folder id.
     * @param param the request object
     */
    public globalTreeNodesFolderInsertablesWithHttpInfo(param: GlobalTreeNodesApiGlobalTreeNodesFolderInsertablesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.globalTreeNodesFolderInsertablesWithHttpInfo(param.fid, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.includePartStudios, param.includeFeatures, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includeMeshes, param.includeCompositeParts, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve insertables by folder id.
     * @param param the request object
     */
    public globalTreeNodesFolderInsertables(param: GlobalTreeNodesApiGlobalTreeNodesFolderInsertablesRequest, options?: Configuration): Promise<void> {
        return this.api.globalTreeNodesFolderInsertables(param.fid, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.includePartStudios, param.includeFeatures, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includeMeshes, param.includeCompositeParts, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder,  options).toPromise();
    }

    /**
     * Returns a list of all the elements in one of several globally defined lists. Known values include: | MAGIC ID | TITLE | USAGE | |-|-|-| | 0 | Recently Opened | Most recently opened documents | | 1 | My Onshape | Root folder and contents | | 2 | Created by Me | Documents created by the logged in user | | 3 | Public | All public documents (a very long list) | | 4 | Trash | Trashcan for the logged in user | | 5 | Tutorials & Samples | Desktop Tutorials | | 6 | FeatureScript samples |  FeatureScript samples (found when you select Other documents while adding a custom feature) | | 7 | Community spotlight | Community spotlight (found when you select Other documents while adding a custom feature) | | 8 | Tutorials | IOS Tutorials | | 9 | Tutorials | Android Tutorials | | 10 | Labels | Labels created by the user  | | 11 | Teams | Teams that the user is connected to | | 12 | Shared with me | Documents shared with the user | | 13 | Cloud Storage | Visual list of cloud accounts associated with the logged in user | | 14 | Custom table samples | Custom table samples (found when you select Other documents while adding a custom table) | 
     * Get Tree Node List
     * @param param the request object
     */
    public globalTreeNodesMagicWithHttpInfo(param: GlobalTreeNodesApiGlobalTreeNodesMagicRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.globalTreeNodesMagicWithHttpInfo(param.mid, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.includePartStudios, param.includeFeatures, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includeMeshes, param.includeCompositeParts,  options).toPromise();
    }

    /**
     * Returns a list of all the elements in one of several globally defined lists. Known values include: | MAGIC ID | TITLE | USAGE | |-|-|-| | 0 | Recently Opened | Most recently opened documents | | 1 | My Onshape | Root folder and contents | | 2 | Created by Me | Documents created by the logged in user | | 3 | Public | All public documents (a very long list) | | 4 | Trash | Trashcan for the logged in user | | 5 | Tutorials & Samples | Desktop Tutorials | | 6 | FeatureScript samples |  FeatureScript samples (found when you select Other documents while adding a custom feature) | | 7 | Community spotlight | Community spotlight (found when you select Other documents while adding a custom feature) | | 8 | Tutorials | IOS Tutorials | | 9 | Tutorials | Android Tutorials | | 10 | Labels | Labels created by the user  | | 11 | Teams | Teams that the user is connected to | | 12 | Shared with me | Documents shared with the user | | 13 | Cloud Storage | Visual list of cloud accounts associated with the logged in user | | 14 | Custom table samples | Custom table samples (found when you select Other documents while adding a custom table) | 
     * Get Tree Node List
     * @param param the request object
     */
    public globalTreeNodesMagic(param: GlobalTreeNodesApiGlobalTreeNodesMagicRequest, options?: Configuration): Promise<void> {
        return this.api.globalTreeNodesMagic(param.mid, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.includePartStudios, param.includeFeatures, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includeMeshes, param.includeCompositeParts,  options).toPromise();
    }

    /**
     * Retrieve List of folders by Team id.
     * @param param the request object
     */
    public globalTreeNodesTeamWithHttpInfo(param: GlobalTreeNodesApiGlobalTreeNodesTeamRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.globalTreeNodesTeamWithHttpInfo(param.teamId, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve List of folders by Team id.
     * @param param the request object
     */
    public globalTreeNodesTeam(param: GlobalTreeNodesApiGlobalTreeNodesTeamRequest, options?: Configuration): Promise<void> {
        return this.api.globalTreeNodesTeam(param.teamId, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve insertables by Team id.
     * @param param the request object
     */
    public globalTreeNodesTeamInsertablesWithHttpInfo(param: GlobalTreeNodesApiGlobalTreeNodesTeamInsertablesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.globalTreeNodesTeamInsertablesWithHttpInfo(param.teamId, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.includePartStudios, param.includeFeatures, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includeMeshes, param.includeCompositeParts, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieve insertables by Team id.
     * @param param the request object
     */
    public globalTreeNodesTeamInsertables(param: GlobalTreeNodesApiGlobalTreeNodesTeamInsertablesRequest, options?: Configuration): Promise<void> {
        return this.api.globalTreeNodesTeamInsertables(param.teamId, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.includePartStudios, param.includeFeatures, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includeMeshes, param.includeCompositeParts, param.getPathToRoot, param.offset, param.limit, param.sortColumn, param.sortOrder,  options).toPromise();
    }

}

import { ObservableInsertableApi } from "./ObservableAPI";
import { InsertableApiRequestFactory, InsertableApiResponseProcessor} from "../apis/InsertableApi";

export interface InsertableApiGetLatestInDocumentRequest {
    /**
     * 
     * @type string
     * @memberof InsertableApigetLatestInDocument
     */
    did: string
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeSurfaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeSketches?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeReferenceFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeAssemblies?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeFeatureStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeBlobs?: boolean
    /**
     * 
     * @type string
     * @memberof InsertableApigetLatestInDocument
     */
    allowedBlobMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    excludeNewerFSVersions?: boolean
    /**
     * 
     * @type number
     * @memberof InsertableApigetLatestInDocument
     */
    maxFeatureScriptVersion?: number
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includePartStudios?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeFeatures?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeMeshes?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeWires?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeFlattenedBodies?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeApplications?: boolean
    /**
     * 
     * @type string
     * @memberof InsertableApigetLatestInDocument
     */
    allowedApplicationMimeTypes?: string
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeCompositeParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeFSTables?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeFSComputedPartPropertyFunctions?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeVariables?: boolean
    /**
     * 
     * @type boolean
     * @memberof InsertableApigetLatestInDocument
     */
    includeVariableStudios?: boolean
    /**
     * 
     * @type string
     * @memberof InsertableApigetLatestInDocument
     */
    allowedBlobExtensions?: string
}

export class ObjectInsertableApi {
    private api: ObservableInsertableApi

    public constructor(configuration: Configuration, requestFactory?: InsertableApiRequestFactory, responseProcessor?: InsertableApiResponseProcessor) {
        this.api = new ObservableInsertableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * * Returns only the latest revision of released insertables.  * Use the document ID (`did`) parameter to specify the source document, not the insertion target.  * For example, you can insert a custom Feature library into another custom Feature library, insert Parts into an Assembly or a Drawing, etc.
     * Get a list of things in this document that can be inserted elsewhere.
     * @param param the request object
     */
    public getLatestInDocumentWithHttpInfo(param: InsertableApiGetLatestInDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getLatestInDocumentWithHttpInfo(param.did, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includePartStudios, param.includeFeatures, param.includeMeshes, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeCompositeParts, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions,  options).toPromise();
    }

    /**
     * * Returns only the latest revision of released insertables.  * Use the document ID (`did`) parameter to specify the source document, not the insertion target.  * For example, you can insert a custom Feature library into another custom Feature library, insert Parts into an Assembly or a Drawing, etc.
     * Get a list of things in this document that can be inserted elsewhere.
     * @param param the request object
     */
    public getLatestInDocument(param: InsertableApiGetLatestInDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.getLatestInDocument(param.did, param.includeParts, param.includeSurfaces, param.includeSketches, param.includeReferenceFeatures, param.includeAssemblies, param.includeFeatureStudios, param.includeBlobs, param.allowedBlobMimeTypes, param.excludeNewerFSVersions, param.maxFeatureScriptVersion, param.includePartStudios, param.includeFeatures, param.includeMeshes, param.includeWires, param.includeFlattenedBodies, param.includeApplications, param.allowedApplicationMimeTypes, param.includeCompositeParts, param.includeFSTables, param.includeFSComputedPartPropertyFunctions, param.includeVariables, param.includeVariableStudios, param.allowedBlobExtensions,  options).toPromise();
    }

}

import { ObservableMetadataApi } from "./ObservableAPI";
import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";

export interface MetadataApiGetVEOPStandardContentMetadataRequest {
    /**
     * 
     * @type string
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    did: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    vid: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    pid: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    includeComputedProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    includeComputedAssemblyProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetVEOPStandardContentMetadata
     */
    thumbnail?: boolean
}

export interface MetadataApiGetWMVEMetadataRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof MetadataApigetWMVEMetadata
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof MetadataApigetWMVEMetadata
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof MetadataApigetWMVEMetadata
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof MetadataApigetWMVEMetadata
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof MetadataApigetWMVEMetadata
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEMetadata
     */
    configuration?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEMetadata
     */
    inferMetadataOwner?: boolean
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEMetadata
     */
    depth?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEMetadata
     */
    includeComputedProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEMetadata
     */
    includeComputedAssemblyProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEMetadata
     */
    thumbnail?: boolean
}

export interface MetadataApiGetWMVEPMetadataRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof MetadataApigetWMVEPMetadata
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof MetadataApigetWMVEPMetadata
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof MetadataApigetWMVEPMetadata
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof MetadataApigetWMVEPMetadata
     */
    eid: string
    /**
     * Denotes whether the pid specified is a part id (p) or a part identity (pi).
     * @type &#39;p&#39; | &#39;pi&#39;
     * @memberof MetadataApigetWMVEPMetadata
     */
    iden: 'p' | 'pi'
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEPMetadata
     */
    pid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof MetadataApigetWMVEPMetadata
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEPMetadata
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof MetadataApigetWMVEPMetadata
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof MetadataApigetWMVEPMetadata
     */
    elementMicroversionId?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEPMetadata
     */
    inferMetadataOwner?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEPMetadata
     */
    includeComputedProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEPMetadata
     */
    includeComputedAssemblyProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEPMetadata
     */
    thumbnail?: boolean
}

export interface MetadataApiGetWMVEPsMetadataRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof MetadataApigetWMVEPsMetadata
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof MetadataApigetWMVEPsMetadata
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof MetadataApigetWMVEPsMetadata
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof MetadataApigetWMVEPsMetadata
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof MetadataApigetWMVEPsMetadata
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEPsMetadata
     */
    configuration?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEPsMetadata
     */
    inferMetadataOwner?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEPsMetadata
     */
    includeComputedProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEPsMetadata
     */
    includeComputedAssemblyProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEPsMetadata
     */
    thumbnail?: boolean
}

export interface MetadataApiGetWMVEsMetadataRequest {
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEsMetadata
     */
    did: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEsMetadata
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEsMetadata
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEsMetadata
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEsMetadata
     */
    inferMetadataOwner?: boolean
    /**
     * 
     * @type string
     * @memberof MetadataApigetWMVEsMetadata
     */
    depth?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEsMetadata
     */
    includeComputedProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEsMetadata
     */
    includeComputedAssemblyProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWMVEsMetadata
     */
    thumbnail?: boolean
}

export interface MetadataApiGetWVMetadataRequest {
    /**
     * 
     * @type string
     * @memberof MetadataApigetWVMetadata
     */
    did: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWVMetadata
     */
    wv: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWVMetadata
     */
    wvid: string
    /**
     * 
     * @type string
     * @memberof MetadataApigetWVMetadata
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWVMetadata
     */
    inferMetadataOwner?: boolean
    /**
     * 
     * @type string
     * @memberof MetadataApigetWVMetadata
     */
    depth?: string
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWVMetadata
     */
    includeComputedProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWVMetadata
     */
    includeComputedAssemblyProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataApigetWVMetadata
     */
    thumbnail?: boolean
}

export interface MetadataApiUpdateVEOPStandardContentPartMetadataRequest {
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateVEOPStandardContentPartMetadata
     */
    did: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateVEOPStandardContentPartMetadata
     */
    linkDocumentId: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateVEOPStandardContentPartMetadata
     */
    body: string
}

export interface MetadataApiUpdateWVEMetadataRequest {
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEMetadata
     */
    did: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEMetadata
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEMetadata
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEMetadata
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEMetadata
     */
    body: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEMetadata
     */
    configuration?: string
}

export interface MetadataApiUpdateWVEPMetadataRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof MetadataApiupdateWVEPMetadata
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof MetadataApiupdateWVEPMetadata
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof MetadataApiupdateWVEPMetadata
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof MetadataApiupdateWVEPMetadata
     */
    eid: string
    /**
     * Denotes whether the pid specified is a part id (p) or a part identity (pi).
     * @type &#39;p&#39; | &#39;pi&#39;
     * @memberof MetadataApiupdateWVEPMetadata
     */
    iden: 'p' | 'pi'
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEPMetadata
     */
    pid: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEPMetadata
     */
    body: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof MetadataApiupdateWVEPMetadata
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVEPMetadata
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof MetadataApiupdateWVEPMetadata
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof MetadataApiupdateWVEPMetadata
     */
    elementMicroversionId?: string
}

export interface MetadataApiUpdateWVMetadataRequest {
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVMetadata
     */
    did: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVMetadata
     */
    wv: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVMetadata
     */
    wvid: string
    /**
     * 
     * @type string
     * @memberof MetadataApiupdateWVMetadata
     */
    body: string
}

export class ObjectMetadataApi {
    private api: ObservableMetadataApi

    public constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * * Specify the part in the `pid` path parameter.  * The `configuration` and `linkDocumentId` query parameters are required.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a standard content part.
     * @param param the request object
     */
    public getVEOPStandardContentMetadataWithHttpInfo(param: MetadataApiGetVEOPStandardContentMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getVEOPStandardContentMetadataWithHttpInfo(param.did, param.vid, param.eid, param.pid, param.configuration, param.linkDocumentId, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * Specify the part in the `pid` path parameter.  * The `configuration` and `linkDocumentId` query parameters are required.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a standard content part.
     * @param param the request object
     */
    public getVEOPStandardContentMetadata(param: MetadataApiGetVEOPStandardContentMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.getVEOPStandardContentMetadata(param.did, param.vid, param.eid, param.pid, param.configuration, param.linkDocumentId, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * `linkDocumentId` can be specified where applicable and this combined with the query param `inferMetadataOwner` (default value is `false`) will be used to infer metadata owner.  * `configuration` optional query parameter defaults to default configuration.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for an element.
     * @param param the request object
     */
    public getWMVEMetadataWithHttpInfo(param: MetadataApiGetWMVEMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getWMVEMetadataWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.inferMetadataOwner, param.depth, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * `linkDocumentId` can be specified where applicable and this combined with the query param `inferMetadataOwner` (default value is `false`) will be used to infer metadata owner.  * `configuration` optional query parameter defaults to default configuration.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for an element.
     * @param param the request object
     */
    public getWMVEMetadata(param: MetadataApiGetWMVEMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.getWMVEMetadata(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.inferMetadataOwner, param.depth, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a part.
     * @param param the request object
     */
    public getWMVEPMetadataWithHttpInfo(param: MetadataApiGetWMVEPMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getWMVEPMetadataWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.iden, param.pid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.inferMetadataOwner, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a part.
     * @param param the request object
     */
    public getWMVEPMetadata(param: MetadataApiGetWMVEPMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.getWMVEPMetadata(param.did, param.wvm, param.wvmid, param.eid, param.iden, param.pid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.inferMetadataOwner, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all parts in a document.
     * @param param the request object
     */
    public getWMVEPsMetadataWithHttpInfo(param: MetadataApiGetWMVEPsMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getWMVEPsMetadataWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.inferMetadataOwner, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all parts in a document.
     * @param param the request object
     */
    public getWMVEPsMetadata(param: MetadataApiGetWMVEPsMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.getWMVEPsMetadata(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.inferMetadataOwner, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * You can specify the optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all elements in a document.
     * @param param the request object
     */
    public getWMVEsMetadataWithHttpInfo(param: MetadataApiGetWMVEsMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getWMVEsMetadataWithHttpInfo(param.did, param.wvm, param.wvmid, param.linkDocumentId, param.inferMetadataOwner, param.depth, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * You can specify the optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all elements in a document.
     * @param param the request object
     */
    public getWMVEsMetadata(param: MetadataApiGetWMVEsMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.getWMVEsMetadata(param.did, param.wvm, param.wvmid, param.linkDocumentId, param.inferMetadataOwner, param.depth, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a workspace or version.
     * @param param the request object
     */
    public getWVMetadataWithHttpInfo(param: MetadataApiGetWVMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getWVMetadataWithHttpInfo(param.did, param.wv, param.wvid, param.linkDocumentId, param.inferMetadataOwner, param.depth, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a workspace or version.
     * @param param the request object
     */
    public getWVMetadata(param: MetadataApiGetWVMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.getWVMetadata(param.did, param.wv, param.wvid, param.linkDocumentId, param.inferMetadataOwner, param.depth, param.includeComputedProperties, param.includeComputedAssemblyProperties, param.thumbnail,  options).toPromise();
    }

    /**
     * * Specify the document ID to update in the `did` path param.  * Specify the document in which you have inserted the standard content part in the `linkDocumentId` query param.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a standard content part.
     * @param param the request object
     */
    public updateVEOPStandardContentPartMetadataWithHttpInfo(param: MetadataApiUpdateVEOPStandardContentPartMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateVEOPStandardContentPartMetadataWithHttpInfo(param.did, param.linkDocumentId, param.body,  options).toPromise();
    }

    /**
     * * Specify the document ID to update in the `did` path param.  * Specify the document in which you have inserted the standard content part in the `linkDocumentId` query param.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a standard content part.
     * @param param the request object
     */
    public updateVEOPStandardContentPartMetadata(param: MetadataApiUpdateVEOPStandardContentPartMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.updateVEOPStandardContentPartMetadata(param.did, param.linkDocumentId, param.body,  options).toPromise();
    }

    /**
     * * Microversion (`m`) in `wvm` path parameter option is not supported.  * Specify the property metadata to update in the Request body.
     * Update the metadata for an element.
     * @param param the request object
     */
    public updateWVEMetadataWithHttpInfo(param: MetadataApiUpdateWVEMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateWVEMetadataWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.body, param.configuration,  options).toPromise();
    }

    /**
     * * Microversion (`m`) in `wvm` path parameter option is not supported.  * Specify the property metadata to update in the Request body.
     * Update the metadata for an element.
     * @param param the request object
     */
    public updateWVEMetadata(param: MetadataApiUpdateWVEMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.updateWVEMetadata(param.did, param.wvm, param.wvmid, param.eid, param.body, param.configuration,  options).toPromise();
    }

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a part.
     * @param param the request object
     */
    public updateWVEPMetadataWithHttpInfo(param: MetadataApiUpdateWVEPMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateWVEPMetadataWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.iden, param.pid, param.body, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId,  options).toPromise();
    }

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a part.
     * @param param the request object
     */
    public updateWVEPMetadata(param: MetadataApiUpdateWVEPMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.updateWVEPMetadata(param.did, param.wvm, param.wvmid, param.eid, param.iden, param.pid, param.body, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId,  options).toPromise();
    }

    /**
     * Specify the property metadata to update in the Request body.
     * Update the metadata for a workspace or version.
     * @param param the request object
     */
    public updateWVMetadataWithHttpInfo(param: MetadataApiUpdateWVMetadataRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateWVMetadataWithHttpInfo(param.did, param.wv, param.wvid, param.body,  options).toPromise();
    }

    /**
     * Specify the property metadata to update in the Request body.
     * Update the metadata for a workspace or version.
     * @param param the request object
     */
    public updateWVMetadata(param: MetadataApiUpdateWVMetadataRequest, options?: Configuration): Promise<void> {
        return this.api.updateWVMetadata(param.did, param.wv, param.wvid, param.body,  options).toPromise();
    }

}

import { ObservableMetadataCategoryApi } from "./ObservableAPI";
import { MetadataCategoryApiRequestFactory, MetadataCategoryApiResponseProcessor} from "../apis/MetadataCategoryApi";

export interface MetadataCategoryApiGetCategoryPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    ownerId?: string
    /**
     * 
     * @type number
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    ownerType?: number
    /**
     * 
     * @type string
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    documentId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    categoryIds?: Array<string>
    /**
     * 
     * @type number
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    objectType?: number
    /**
     * 
     * @type boolean
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    strict?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    includeObjectTypeDefaults?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    includeComputedProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    includePartPropertiesTableOnlyProperties?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    onlyActive?: boolean
    /**
     * 
     * @type boolean
     * @memberof MetadataCategoryApigetCategoryProperties
     */
    onlyObjectTypeDefaults?: boolean
}

export class ObjectMetadataCategoryApi {
    private api: ObservableMetadataCategoryApi

    public constructor(configuration: Configuration, requestFactory?: MetadataCategoryApiRequestFactory, responseProcessor?: MetadataCategoryApiResponseProcessor) {
        this.api = new ObservableMetadataCategoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * An object\'s category specifies its type: Part, Assembly, Drawing, etc. Available properties depend on the object\'s category.
     * Get properties associated with the specified metadata categories.
     * @param param the request object
     */
    public getCategoryPropertiesWithHttpInfo(param: MetadataCategoryApiGetCategoryPropertiesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCategoryPropertiesWithHttpInfo(param.ownerId, param.ownerType, param.documentId, param.categoryIds, param.objectType, param.strict, param.includeObjectTypeDefaults, param.includeComputedProperties, param.includePartPropertiesTableOnlyProperties, param.onlyActive, param.onlyObjectTypeDefaults,  options).toPromise();
    }

    /**
     * An object\'s category specifies its type: Part, Assembly, Drawing, etc. Available properties depend on the object\'s category.
     * Get properties associated with the specified metadata categories.
     * @param param the request object
     */
    public getCategoryProperties(param: MetadataCategoryApiGetCategoryPropertiesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCategoryProperties(param.ownerId, param.ownerType, param.documentId, param.categoryIds, param.objectType, param.strict, param.includeObjectTypeDefaults, param.includeComputedProperties, param.includePartPropertiesTableOnlyProperties, param.onlyActive, param.onlyObjectTypeDefaults,  options).toPromise();
    }

}

import { ObservableNumberingSchemeApi } from "./ObservableAPI";
import { NumberingSchemeApiRequestFactory, NumberingSchemeApiResponseProcessor} from "../apis/NumberingSchemeApi";

export interface NumberingSchemeApiNextNumbersRequest {
    /**
     * 
     * @type BTNextPartNumbersParam
     * @memberof NumberingSchemeApinextNumbers
     */
    bTNextPartNumbersParam: BTNextPartNumbersParam
    /**
     * 
     * @type string
     * @memberof NumberingSchemeApinextNumbers
     */
    cid?: string
    /**
     * 
     * @type string
     * @memberof NumberingSchemeApinextNumbers
     */
    did?: string
}

export class ObjectNumberingSchemeApi {
    private api: ObservableNumberingSchemeApi

    public constructor(configuration: Configuration, requestFactory?: NumberingSchemeApiRequestFactory, responseProcessor?: NumberingSchemeApiResponseProcessor) {
        this.api = new ObservableNumberingSchemeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param param the request object
     */
    public nextNumbersWithHttpInfo(param: NumberingSchemeApiNextNumbersRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.nextNumbersWithHttpInfo(param.bTNextPartNumbersParam, param.cid, param.did,  options).toPromise();
    }

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param param the request object
     */
    public nextNumbers(param: NumberingSchemeApiNextNumbersRequest, options?: Configuration): Promise<void> {
        return this.api.nextNumbers(param.bTNextPartNumbersParam, param.cid, param.did,  options).toPromise();
    }

}

import { ObservableOpenApiApi } from "./ObservableAPI";
import { OpenApiApiRequestFactory, OpenApiApiResponseProcessor} from "../apis/OpenApiApi";

export interface OpenApiApiGetOpenApiRequest {
    /**
     * Force reload the OpenApi definition. Only works when asking for the latest version.
     * @type boolean
     * @memberof OpenApiApigetOpenApi
     */
    forceReload?: boolean
    /**
     * Specify a version of Onshape from which the OpenAPI is generated. If \&#39;*\&#39; is specified in any of the version fields, that indicates any version if acceptable.
     * @type string
     * @memberof OpenApiApigetOpenApi
     */
    version?: string
    /**
     * Version aliases based on the currently released version.
     * @type VersionAlias
     * @memberof OpenApiApigetOpenApi
     */
    versionAlias?: VersionAlias
    /**
     * Do not filter the specification at all.
     * @type boolean
     * @memberof OpenApiApigetOpenApi
     */
    noFilter?: boolean
    /**
     * Return only operations with tags included in includedTags.
     * @type Array&lt;string&gt;
     * @memberof OpenApiApigetOpenApi
     */
    includedTags?: Array<string>
    /**
     * If an operation contains an excluded tag, it is not returned from this endpoint.
     * @type Array&lt;string&gt;
     * @memberof OpenApiApigetOpenApi
     */
    excludedTags?: Array<string>
    /**
     * Include deprecated endpoints.
     * @type boolean
     * @memberof OpenApiApigetOpenApi
     */
    includeDeprecated?: boolean
    /**
     * Only include deprecated endpoints.
     * @type boolean
     * @memberof OpenApiApigetOpenApi
     */
    onlyDeprecated?: boolean
    /**
     * Only return endpoints that have the specified documentation status. Default is to return all the endpoints the user should have access to.
     * @type Array&lt;Status&gt;
     * @memberof OpenApiApigetOpenApi
     */
    documentationStatuses?: Array<Status>
    /**
     * The REST user role for which this spec is requested.
     * @type BTRestUserRole
     * @memberof OpenApiApigetOpenApi
     */
    restUserRole?: BTRestUserRole
    /**
     * Only return operations with specified ids.
     * @type Array&lt;string&gt;
     * @memberof OpenApiApigetOpenApi
     */
    operationIds?: Array<string>
    /**
     * Do not return operations with specified ids.
     * @type Array&lt;string&gt;
     * @memberof OpenApiApigetOpenApi
     */
    excludedOperationIds?: Array<string>
}

export interface OpenApiApiGetTagsRequest {
}

export class ObjectOpenApiApi {
    private api: ObservableOpenApiApi

    public constructor(configuration: Configuration, requestFactory?: OpenApiApiRequestFactory, responseProcessor?: OpenApiApiResponseProcessor) {
        this.api = new ObservableOpenApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The Onshape API OpenAPI specification is returned in the JSON format.
     * Get the OpenAPI specification for the Onshape REST API.
     * @param param the request object
     */
    public getOpenApiWithHttpInfo(param: OpenApiApiGetOpenApiRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getOpenApiWithHttpInfo(param.forceReload, param.version, param.versionAlias, param.noFilter, param.includedTags, param.excludedTags, param.includeDeprecated, param.onlyDeprecated, param.documentationStatuses, param.restUserRole, param.operationIds, param.excludedOperationIds,  options).toPromise();
    }

    /**
     * The Onshape API OpenAPI specification is returned in the JSON format.
     * Get the OpenAPI specification for the Onshape REST API.
     * @param param the request object
     */
    public getOpenApi(param: OpenApiApiGetOpenApiRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getOpenApi(param.forceReload, param.version, param.versionAlias, param.noFilter, param.includedTags, param.excludedTags, param.includeDeprecated, param.onlyDeprecated, param.documentationStatuses, param.restUserRole, param.operationIds, param.excludedOperationIds,  options).toPromise();
    }

    /**
     * Tags are used to group operations. For example, `Document` groups operations on documents.
     * Get the list of tags in the Onshape OpenAPI specification.
     * @param param the request object
     */
    public getTagsWithHttpInfo(param: OpenApiApiGetTagsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getTagsWithHttpInfo( options).toPromise();
    }

    /**
     * Tags are used to group operations. For example, `Document` groups operations on documents.
     * Get the list of tags in the Onshape OpenAPI specification.
     * @param param the request object
     */
    public getTags(param: OpenApiApiGetTagsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getTags( options).toPromise();
    }

}

import { ObservablePartApi } from "./ObservableAPI";
import { PartApiRequestFactory, PartApiResponseProcessor} from "../apis/PartApi";

export interface PartApiExportPSRequest {
    /**
     * 
     * @type string
     * @memberof PartApiexportPS
     */
    did: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPS
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPS
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPS
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPS
     */
    partid: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPS
     */
    version?: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPS
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPS
     */
    linkDocumentId?: string
}

export interface PartApiExportPartGltfRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartApiexportPartGltf
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartApiexportPartGltf
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartApiexportPartGltf
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartApiexportPartGltf
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPartGltf
     */
    partid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartApiexportPartGltf
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartApiexportPartGltf
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartApiexportPartGltf
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartApiexportPartGltf
     */
    elementMicroversionId?: string
    /**
     * 
     * @type number
     * @memberof PartApiexportPartGltf
     */
    angleTolerance?: number
    /**
     * 
     * @type number
     * @memberof PartApiexportPartGltf
     */
    chordTolerance?: number
    /**
     * 
     * @type string
     * @memberof PartApiexportPartGltf
     */
    precomputedLevelOfDetail?: string
    /**
     * 
     * @type boolean
     * @memberof PartApiexportPartGltf
     */
    outputSeparateFaceNodes?: boolean
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartApiexportPartGltf
     */
    faceId?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof PartApiexportPartGltf
     */
    outputFaceAppearances?: boolean
    /**
     * 
     * @type number
     * @memberof PartApiexportPartGltf
     */
    maxFacetWidth?: number
}

export interface PartApiExportStlRequest {
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    did: string
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    partid: string
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    mode?: string
    /**
     * 
     * @type boolean
     * @memberof PartApiexportStl
     */
    grouping?: boolean
    /**
     * 
     * @type number
     * @memberof PartApiexportStl
     */
    scale?: number
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    units?: string
    /**
     * 
     * @type number
     * @memberof PartApiexportStl
     */
    angleTolerance?: number
    /**
     * 
     * @type number
     * @memberof PartApiexportStl
     */
    chordTolerance?: number
    /**
     * 
     * @type number
     * @memberof PartApiexportStl
     */
    maxFacetWidth?: number
    /**
     * 
     * @type number
     * @memberof PartApiexportStl
     */
    minFacetWidth?: number
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof PartApiexportStl
     */
    linkDocumentId?: string
}

export interface PartApiGetBendTableRequest {
    /**
     * 
     * @type string
     * @memberof PartApigetBendTable
     */
    did: string
    /**
     * 
     * @type string
     * @memberof PartApigetBendTable
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof PartApigetBendTable
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof PartApigetBendTable
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApigetBendTable
     */
    partid: string
    /**
     * 
     * @type string
     * @memberof PartApigetBendTable
     */
    linkDocumentId?: string
}

export interface PartApiGetBodyDetailsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartApigetBodyDetails
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartApigetBodyDetails
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartApigetBodyDetails
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartApigetBodyDetails
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApigetBodyDetails
     */
    partid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartApigetBodyDetails
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartApigetBodyDetails
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartApigetBodyDetails
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartApigetBodyDetails
     */
    elementMicroversionId?: string
    /**
     * Whether or not geometric data should be included in the response.
     * @type boolean
     * @memberof PartApigetBodyDetails
     */
    includeGeometricData?: boolean
}

export interface PartApiGetBoundingBoxesRequest {
    /**
     * 
     * @type string
     * @memberof PartApigetBoundingBoxes
     */
    did: string
    /**
     * 
     * @type string
     * @memberof PartApigetBoundingBoxes
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof PartApigetBoundingBoxes
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof PartApigetBoundingBoxes
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApigetBoundingBoxes
     */
    partid: string
    /**
     * 
     * @type boolean
     * @memberof PartApigetBoundingBoxes
     */
    includeHidden?: boolean
    /**
     * 
     * @type string
     * @memberof PartApigetBoundingBoxes
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof PartApigetBoundingBoxes
     */
    linkDocumentId?: string
}

export interface PartApiGetEdgesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartApigetEdges
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartApigetEdges
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartApigetEdges
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartApigetEdges
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApigetEdges
     */
    partid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartApigetEdges
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartApigetEdges
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartApigetEdges
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartApigetEdges
     */
    elementMicroversionId?: string
    /**
     * 
     * @type number
     * @memberof PartApigetEdges
     */
    angleTolerance?: number
    /**
     * 
     * @type number
     * @memberof PartApigetEdges
     */
    chordTolerance?: number
    /**
     * 
     * @type string
     * @memberof PartApigetEdges
     */
    precomputedLevelOfDetail?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartApigetEdges
     */
    edgeId?: Array<string>
}

export interface PartApiGetFaces1Request {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartApigetFaces1
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartApigetFaces1
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartApigetFaces1
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartApigetFaces1
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApigetFaces1
     */
    partid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartApigetFaces1
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartApigetFaces1
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartApigetFaces1
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartApigetFaces1
     */
    elementMicroversionId?: string
    /**
     * 
     * @type number
     * @memberof PartApigetFaces1
     */
    angleTolerance?: number
    /**
     * 
     * @type number
     * @memberof PartApigetFaces1
     */
    chordTolerance?: number
    /**
     * 
     * @type string
     * @memberof PartApigetFaces1
     */
    precomputedLevelOfDetail?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartApigetFaces1
     */
    faceId?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof PartApigetFaces1
     */
    outputFaceAppearances?: boolean
    /**
     * 
     * @type number
     * @memberof PartApigetFaces1
     */
    maxFacetWidth?: number
    /**
     * 
     * @type boolean
     * @memberof PartApigetFaces1
     */
    outputVertexNormals?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartApigetFaces1
     */
    outputFacetNormals?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartApigetFaces1
     */
    outputTextureCoordinates?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartApigetFaces1
     */
    outputIndexTable?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartApigetFaces1
     */
    outputErrorFaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartApigetFaces1
     */
    combineCompositePartConstituents?: boolean
}

export interface PartApiGetMassPropertiesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartApigetMassProperties
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartApigetMassProperties
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartApigetMassProperties
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartApigetMassProperties
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApigetMassProperties
     */
    partid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartApigetMassProperties
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartApigetMassProperties
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartApigetMassProperties
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartApigetMassProperties
     */
    elementMicroversionId?: string
    /**
     * 
     * @type boolean
     * @memberof PartApigetMassProperties
     */
    inferMetadataOwner?: boolean
    /**
     * If true, use the user mass property overrides when calculated mass properties
     * @type boolean
     * @memberof PartApigetMassProperties
     */
    useMassPropertyOverrides?: boolean
}

export interface PartApiGetPartShadedViewsRequest {
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    did: string
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    partid: string
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    viewMatrix?: string
    /**
     * 
     * @type number
     * @memberof PartApigetPartShadedViews
     */
    outputHeight?: number
    /**
     * 
     * @type number
     * @memberof PartApigetPartShadedViews
     */
    outputWidth?: number
    /**
     * 
     * @type number
     * @memberof PartApigetPartShadedViews
     */
    pixelSize?: number
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    edges?: string
    /**
     * 
     * @type boolean
     * @memberof PartApigetPartShadedViews
     */
    useAntiAliasing?: boolean
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof PartApigetPartShadedViews
     */
    linkDocumentId?: string
}

export interface PartApiGetPartsWMVRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartApigetPartsWMV
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartApigetPartsWMV
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartApigetPartsWMV
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartApigetPartsWMV
     */
    elementId: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartApigetPartsWMV
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartApigetPartsWMV
     */
    configuration?: string
    /**
     * Whether or not to include thumbnails (not supported for microversion)
     * @type boolean
     * @memberof PartApigetPartsWMV
     */
    withThumbnails?: boolean
    /**
     * If true, include metadata schema property defaults in response
     * @type boolean
     * @memberof PartApigetPartsWMV
     */
    includePropertyDefaults?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartApigetPartsWMV
     */
    includeFlatParts?: boolean
}

export interface PartApiGetPartsWMVERequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartApigetPartsWMVE
     */
    did: string
    /**
     * One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @type string
     * @memberof PartApigetPartsWMVE
     */
    wvm: string
    /**
     * Workspace (w), Version (v) or Microversion (m) ID.
     * @type string
     * @memberof PartApigetPartsWMVE
     */
    wvmid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartApigetPartsWMVE
     */
    eid: string
    /**
     * Whether or not to include thumbnails (not supported for microversion)
     * @type boolean
     * @memberof PartApigetPartsWMVE
     */
    withThumbnails?: boolean
    /**
     * If true, include metadata schema property defaults in response
     * @type boolean
     * @memberof PartApigetPartsWMVE
     */
    includePropertyDefaults?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartApigetPartsWMVE
     */
    includeFlatParts?: boolean
    /**
     * Configuration string.
     * @type string
     * @memberof PartApigetPartsWMVE
     */
    configuration?: string
    /**
     * Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     * @type string
     * @memberof PartApigetPartsWMVE
     */
    linkDocumentId?: string
}

export class ObjectPartApi {
    private api: ObservablePartApi

    public constructor(configuration: Configuration, requestFactory?: PartApiRequestFactory, responseProcessor?: PartApiResponseProcessor) {
        this.api = new ObservablePartApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Export a part as a Parasolid file.
     * @param param the request object
     */
    public exportPSWithHttpInfo(param: PartApiExportPSRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.exportPSWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.version, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Export a part as a Parasolid file.
     * @param param the request object
     */
    public exportPS(param: PartApiExportPSRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.exportPS(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.version, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Export a part as a glTF file.
     * @param param the request object
     */
    public exportPartGltfWithHttpInfo(param: PartApiExportPartGltfRequest, options?: Configuration): Promise<HttpInfo<GlTF>> {
        return this.api.exportPartGltfWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.outputSeparateFaceNodes, param.faceId, param.outputFaceAppearances, param.maxFacetWidth,  options).toPromise();
    }

    /**
     * Export a part as a glTF file.
     * @param param the request object
     */
    public exportPartGltf(param: PartApiExportPartGltfRequest, options?: Configuration): Promise<GlTF> {
        return this.api.exportPartGltf(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.outputSeparateFaceNodes, param.faceId, param.outputFaceAppearances, param.maxFacetWidth,  options).toPromise();
    }

    /**
     * Returns a 307 redirect.
     * Export a part to an STL file.
     * @param param the request object
     */
    public exportStlWithHttpInfo(param: PartApiExportStlRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.exportStlWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.mode, param.grouping, param.scale, param.units, param.angleTolerance, param.chordTolerance, param.maxFacetWidth, param.minFacetWidth, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Returns a 307 redirect.
     * Export a part to an STL file.
     * @param param the request object
     */
    public exportStl(param: PartApiExportStlRequest, options?: Configuration): Promise<void> {
        return this.api.exportStl(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.mode, param.grouping, param.scale, param.units, param.angleTolerance, param.chordTolerance, param.maxFacetWidth, param.minFacetWidth, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get a part\'s sheet metal bend table.
     * @param param the request object
     */
    public getBendTableWithHttpInfo(param: PartApiGetBendTableRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getBendTableWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get a part\'s sheet metal bend table.
     * @param param the request object
     */
    public getBendTable(param: PartApiGetBendTableRequest, options?: Configuration): Promise<void> {
        return this.api.getBendTable(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * All coordinates are in meters (m).
     * Get a part\'s body details.
     * @param param the request object
     */
    public getBodyDetailsWithHttpInfo(param: PartApiGetBodyDetailsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getBodyDetailsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.includeGeometricData,  options).toPromise();
    }

    /**
     * All coordinates are in meters (m).
     * Get a part\'s body details.
     * @param param the request object
     */
    public getBodyDetails(param: PartApiGetBodyDetailsRequest, options?: Configuration): Promise<void> {
        return this.api.getBodyDetails(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.includeGeometricData,  options).toPromise();
    }

    /**
     * Get a part\'s bounding box details.
     * @param param the request object
     */
    public getBoundingBoxesWithHttpInfo(param: PartApiGetBoundingBoxesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getBoundingBoxesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.includeHidden, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get a part\'s bounding box details.
     * @param param the request object
     */
    public getBoundingBoxes(param: PartApiGetBoundingBoxesRequest, options?: Configuration): Promise<void> {
        return this.api.getBoundingBoxes(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.includeHidden, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Returns the coordinates (in meters) of each edge\'s endpoints.
     * Get a list of a part\'s tessellation edges.
     * @param param the request object
     */
    public getEdgesWithHttpInfo(param: PartApiGetEdgesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getEdgesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.edgeId,  options).toPromise();
    }

    /**
     * Returns the coordinates (in meters) of each edge\'s endpoints.
     * Get a list of a part\'s tessellation edges.
     * @param param the request object
     */
    public getEdges(param: PartApiGetEdgesRequest, options?: Configuration): Promise<void> {
        return this.api.getEdges(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.edgeId,  options).toPromise();
    }

    /**
     * Coordinates are in meters (m).
     * Get a list of a part\'s tessellation faces.
     * @param param the request object
     */
    public getFaces1WithHttpInfo(param: PartApiGetFaces1Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getFaces1WithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.faceId, param.outputFaceAppearances, param.maxFacetWidth, param.outputVertexNormals, param.outputFacetNormals, param.outputTextureCoordinates, param.outputIndexTable, param.outputErrorFaces, param.combineCompositePartConstituents,  options).toPromise();
    }

    /**
     * Coordinates are in meters (m).
     * Get a list of a part\'s tessellation faces.
     * @param param the request object
     */
    public getFaces1(param: PartApiGetFaces1Request, options?: Configuration): Promise<void> {
        return this.api.getFaces1(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.faceId, param.outputFaceAppearances, param.maxFacetWidth, param.outputVertexNormals, param.outputFacetNormals, param.outputTextureCoordinates, param.outputIndexTable, param.outputErrorFaces, param.combineCompositePartConstituents,  options).toPromise();
    }

    /**
     * Parts must have density. If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get a part\'s mass properties.
     * @param param the request object
     */
    public getMassPropertiesWithHttpInfo(param: PartApiGetMassPropertiesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getMassPropertiesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.inferMetadataOwner, param.useMassPropertyOverrides,  options).toPromise();
    }

    /**
     * Parts must have density. If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get a part\'s mass properties.
     * @param param the request object
     */
    public getMassProperties(param: PartApiGetMassPropertiesRequest, options?: Configuration): Promise<void> {
        return this.api.getMassProperties(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.inferMetadataOwner, param.useMassPropertyOverrides,  options).toPromise();
    }

    /**
     * Get a part\'s shaded views.
     * @param param the request object
     */
    public getPartShadedViewsWithHttpInfo(param: PartApiGetPartShadedViewsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartShadedViewsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.viewMatrix, param.outputHeight, param.outputWidth, param.pixelSize, param.edges, param.useAntiAliasing, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get a part\'s shaded views.
     * @param param the request object
     */
    public getPartShadedViews(param: PartApiGetPartShadedViewsRequest, options?: Configuration): Promise<void> {
        return this.api.getPartShadedViews(param.did, param.wvm, param.wvmid, param.eid, param.partid, param.viewMatrix, param.outputHeight, param.outputWidth, param.pixelSize, param.edges, param.useAntiAliasing, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get all parts in a workspace, version, or microversion.
     * @param param the request object
     */
    public getPartsWMVWithHttpInfo(param: PartApiGetPartsWMVRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartsWMVWithHttpInfo(param.did, param.wvm, param.wvmid, param.elementId, param.linkDocumentId, param.configuration, param.withThumbnails, param.includePropertyDefaults, param.includeFlatParts,  options).toPromise();
    }

    /**
     * Get all parts in a workspace, version, or microversion.
     * @param param the request object
     */
    public getPartsWMV(param: PartApiGetPartsWMVRequest, options?: Configuration): Promise<void> {
        return this.api.getPartsWMV(param.did, param.wvm, param.wvmid, param.elementId, param.linkDocumentId, param.configuration, param.withThumbnails, param.includePropertyDefaults, param.includeFlatParts,  options).toPromise();
    }

    /**
     * Get all parts in an element.
     * @param param the request object
     */
    public getPartsWMVEWithHttpInfo(param: PartApiGetPartsWMVERequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartsWMVEWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.withThumbnails, param.includePropertyDefaults, param.includeFlatParts, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get all parts in an element.
     * @param param the request object
     */
    public getPartsWMVE(param: PartApiGetPartsWMVERequest, options?: Configuration): Promise<void> {
        return this.api.getPartsWMVE(param.did, param.wvm, param.wvmid, param.eid, param.withThumbnails, param.includePropertyDefaults, param.includeFlatParts, param.configuration, param.linkDocumentId,  options).toPromise();
    }

}

import { ObservablePartNumberApi } from "./ObservableAPI";
import { PartNumberApiRequestFactory, PartNumberApiResponseProcessor} from "../apis/PartNumberApi";

export interface PartNumberApiUpdateNextNumbersRequest {
    /**
     * 
     * @type BTNextPartNumbersParam
     * @memberof PartNumberApiupdateNextNumbers
     */
    bTNextPartNumbersParam: BTNextPartNumbersParam
    /**
     * 
     * @type string
     * @memberof PartNumberApiupdateNextNumbers
     */
    cid?: string
    /**
     * 
     * @type string
     * @memberof PartNumberApiupdateNextNumbers
     */
    did?: string
}

export class ObjectPartNumberApi {
    private api: ObservablePartNumberApi

    public constructor(configuration: Configuration, requestFactory?: PartNumberApiRequestFactory, responseProcessor?: PartNumberApiResponseProcessor) {
        this.api = new ObservablePartNumberApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param param the request object
     */
    public updateNextNumbersWithHttpInfo(param: PartNumberApiUpdateNextNumbersRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateNextNumbersWithHttpInfo(param.bTNextPartNumbersParam, param.cid, param.did,  options).toPromise();
    }

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param param the request object
     */
    public updateNextNumbers(param: PartNumberApiUpdateNextNumbersRequest, options?: Configuration): Promise<void> {
        return this.api.updateNextNumbers(param.bTNextPartNumbersParam, param.cid, param.did,  options).toPromise();
    }

}

import { ObservablePartStudioApi } from "./ObservableAPI";
import { PartStudioApiRequestFactory, PartStudioApiResponseProcessor} from "../apis/PartStudioApi";

export interface PartStudioApiAddPartStudioFeatureRequest {
    /**
     * 
     * @type string
     * @memberof PartStudioApiaddPartStudioFeature
     */
    did: string
    /**
     * 
     * @type string
     * @memberof PartStudioApiaddPartStudioFeature
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof PartStudioApiaddPartStudioFeature
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof PartStudioApiaddPartStudioFeature
     */
    eid: string
    /**
     * 
     * @type BTFeatureDefinitionCall1406
     * @memberof PartStudioApiaddPartStudioFeature
     */
    bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406
}

export interface PartStudioApiComparePartStudiosRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    did: string
    /**
     * One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    wvm: string
    /**
     * Workspace (w), Version (v) or Microversion (m) ID.
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    wvmid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    workspaceId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    versionId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    microversionId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    sourceConfiguration?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    targetConfiguration?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApicomparePartStudios
     */
    linkDocumentId?: string
}

export interface PartStudioApiCreatePartStudioRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApicreatePartStudio
     */
    did: string
    /**
     * Workspace ID.
     * @type string
     * @memberof PartStudioApicreatePartStudio
     */
    wid: string
    /**
     * 
     * @type BTModelElementParams
     * @memberof PartStudioApicreatePartStudio
     */
    bTModelElementParams: BTModelElementParams
}

export interface PartStudioApiCreatePartStudioTranslationRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApicreatePartStudioTranslation
     */
    did: string
    /**
     * One of w or v corresponding to whether a workspace or version was specified.
     * @type string
     * @memberof PartStudioApicreatePartStudioTranslation
     */
    wv: string
    /**
     * Workspace (w) or Version (v) ID.
     * @type string
     * @memberof PartStudioApicreatePartStudioTranslation
     */
    wvid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApicreatePartStudioTranslation
     */
    eid: string
    /**
     * 
     * @type BTTranslateFormatParams
     * @memberof PartStudioApicreatePartStudioTranslation
     */
    bTTranslateFormatParams: BTTranslateFormatParams
}

export interface PartStudioApiDeletePartStudioFeatureRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApideletePartStudioFeature
     */
    did: string
    /**
     * Workspace ID.
     * @type string
     * @memberof PartStudioApideletePartStudioFeature
     */
    wid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApideletePartStudioFeature
     */
    eid: string
    /**
     * The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
     * @type string
     * @memberof PartStudioApideletePartStudioFeature
     */
    fid: string
}

export interface PartStudioApiEvalFeatureScriptRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApievalFeatureScript
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartStudioApievalFeatureScript
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartStudioApievalFeatureScript
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartStudioApievalFeatureScript
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApievalFeatureScript
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApievalFeatureScript
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartStudioApievalFeatureScript
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartStudioApievalFeatureScript
     */
    elementMicroversionId?: string
    /**
     * 
     * @type BTFeatureScriptEvalCall2377
     * @memberof PartStudioApievalFeatureScript
     */
    bTFeatureScriptEvalCall2377?: BTFeatureScriptEvalCall2377
}

export interface PartStudioApiExportParasolidRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApiexportParasolid
     */
    did: string
    /**
     * One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @type string
     * @memberof PartStudioApiexportParasolid
     */
    wvm: string
    /**
     * Workspace (w), Version (v) or Microversion (m) ID.
     * @type string
     * @memberof PartStudioApiexportParasolid
     */
    wvmid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApiexportParasolid
     */
    eid: string
    /**
     * IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD).
     * @type string
     * @memberof PartStudioApiexportParasolid
     */
    partIds?: string
    /**
     * Parasolid version
     * @type string
     * @memberof PartStudioApiexportParasolid
     */
    version?: string
    /**
     * Whether topology ids should be exported as parasolid attributes
     * @type boolean
     * @memberof PartStudioApiexportParasolid
     */
    includeExportIds?: boolean
    /**
     * Configuration string.
     * @type string
     * @memberof PartStudioApiexportParasolid
     */
    configuration?: string
    /**
     * Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     * @type string
     * @memberof PartStudioApiexportParasolid
     */
    linkDocumentId?: string
    /**
     * Whether to use binary parasolid format instead of text
     * @type boolean
     * @memberof PartStudioApiexportParasolid
     */
    binaryExport?: boolean
}

export interface PartStudioApiExportPartStudioGltfRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApiexportPartStudioGltf
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartStudioApiexportPartStudioGltf
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartStudioApiexportPartStudioGltf
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartStudioApiexportPartStudioGltf
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApiexportPartStudioGltf
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApiexportPartStudioGltf
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartStudioApiexportPartStudioGltf
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartStudioApiexportPartStudioGltf
     */
    elementMicroversionId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartStudioApiexportPartStudioGltf
     */
    partId?: Array<string>
    /**
     * 
     * @type number
     * @memberof PartStudioApiexportPartStudioGltf
     */
    angleTolerance?: number
    /**
     * 
     * @type number
     * @memberof PartStudioApiexportPartStudioGltf
     */
    chordTolerance?: number
    /**
     * 
     * @type string
     * @memberof PartStudioApiexportPartStudioGltf
     */
    precomputedLevelOfDetail?: string
    /**
     * 
     * @type boolean
     * @memberof PartStudioApiexportPartStudioGltf
     */
    outputSeparateFaceNodes?: boolean
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartStudioApiexportPartStudioGltf
     */
    faceId?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof PartStudioApiexportPartStudioGltf
     */
    outputFaceAppearances?: boolean
    /**
     * 
     * @type number
     * @memberof PartStudioApiexportPartStudioGltf
     */
    maxFacetWidth?: number
}

export interface PartStudioApiExportPartStudioStlRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    did: string
    /**
     * One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    wvm: string
    /**
     * Workspace (w), Version (v) or Microversion (m) ID.
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    wvmid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    eid: string
    /**
     * IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD).
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    partIds?: string
    /**
     * Type of file: text, binary
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    mode?: string
    /**
     * Whether parts should be exported as a group or individually in a .zip file
     * @type boolean
     * @memberof PartStudioApiexportPartStudioStl
     */
    grouping?: boolean
    /**
     * Scale for measurements.
     * @type number
     * @memberof PartStudioApiexportPartStudioStl
     */
    scale?: number
    /**
     * Name of base unit (meter, centimeter, millimeter, inch, foot, or yard)
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    units?: string
    /**
     * Angle tolerance (in radians). This specifies the limit on the sum of the angular deviations of a tessellation chord from the tangent vectors at two chord endpoints. The specified value must be less than PI/2. This parameter currently has a default value chosen based on the complexity of the parts being tessellated.
     * @type number
     * @memberof PartStudioApiexportPartStudioStl
     */
    angleTolerance?: number
    /**
     * Chord tolerance (in meters). This specifies the limit on the maximum deviation of a tessellation chord from the true surface/edge. This parameter currently has a default value chosen based on the size and complexity of the parts being tessellated.
     * @type number
     * @memberof PartStudioApiexportPartStudioStl
     */
    chordTolerance?: number
    /**
     * Max facet width. This specifies the limit on the size of any side of a tessellation facet.
     * @type number
     * @memberof PartStudioApiexportPartStudioStl
     */
    maxFacetWidth?: number
    /**
     * Max facet width. This specifies the limit on the size of any side of a tessellation facet.
     * @type number
     * @memberof PartStudioApiexportPartStudioStl
     */
    minFacetWidth?: number
    /**
     * Configuration string.
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    configuration?: string
    /**
     * Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     * @type string
     * @memberof PartStudioApiexportPartStudioStl
     */
    linkDocumentId?: string
}

export interface PartStudioApiGetFeatureScriptRepresentationRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetFeatureScriptRepresentation
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartStudioApigetFeatureScriptRepresentation
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartStudioApigetFeatureScriptRepresentation
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetFeatureScriptRepresentation
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApigetFeatureScriptRepresentation
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptRepresentation
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartStudioApigetFeatureScriptRepresentation
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartStudioApigetFeatureScriptRepresentation
     */
    elementMicroversionId?: string
}

export interface PartStudioApiGetFeatureScriptTableRequest {
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    did: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    tableType: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    tableNamespace?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    tableParameters?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    partId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetFeatureScriptTable
     */
    linkDocumentId?: string
}

export interface PartStudioApiGetPartStudioBodyDetailsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    elementMicroversionId?: string
    /**
     * If specified, the response will only include body details for the specific parts as indicated here by their corresponding Id
     * @type Array&lt;string&gt;
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    partIds?: Array<string>
    /**
     * Whether or not surfaces should be included in the response.
     * @type boolean
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    includeSurfaces?: boolean
    /**
     * Whether or not composite parts should be included in the response.
     * @type boolean
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    includeCompositeParts?: boolean
    /**
     * Whether or not geometric data should be included in the response.
     * @type boolean
     * @memberof PartStudioApigetPartStudioBodyDetails
     */
    includeGeometricData?: boolean
}

export interface PartStudioApiGetPartStudioBoundingBoxesRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApigetPartStudioBoundingBoxes
     */
    did: string
    /**
     * One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @type string
     * @memberof PartStudioApigetPartStudioBoundingBoxes
     */
    wvm: string
    /**
     * Workspace (w), Version (v) or Microversion (m) ID.
     * @type string
     * @memberof PartStudioApigetPartStudioBoundingBoxes
     */
    wvmid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApigetPartStudioBoundingBoxes
     */
    eid: string
    /**
     * Whether or not to include bounding boxes for hidden parts.
     * @type boolean
     * @memberof PartStudioApigetPartStudioBoundingBoxes
     */
    includeHidden?: boolean
    /**
     * Whether to include wire bodies in the bounding box.
     * @type boolean
     * @memberof PartStudioApigetPartStudioBoundingBoxes
     */
    includeWireBodies?: boolean
    /**
     * Configuration string.
     * @type string
     * @memberof PartStudioApigetPartStudioBoundingBoxes
     */
    configuration?: string
    /**
     * Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     * @type string
     * @memberof PartStudioApigetPartStudioBoundingBoxes
     */
    linkDocumentId?: string
}

export interface PartStudioApiGetPartStudioEdgesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioEdges
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartStudioApigetPartStudioEdges
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartStudioApigetPartStudioEdges
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioEdges
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApigetPartStudioEdges
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetPartStudioEdges
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartStudioApigetPartStudioEdges
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartStudioApigetPartStudioEdges
     */
    elementMicroversionId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartStudioApigetPartStudioEdges
     */
    partId?: Array<string>
    /**
     * 
     * @type number
     * @memberof PartStudioApigetPartStudioEdges
     */
    angleTolerance?: number
    /**
     * 
     * @type number
     * @memberof PartStudioApigetPartStudioEdges
     */
    chordTolerance?: number
    /**
     * 
     * @type string
     * @memberof PartStudioApigetPartStudioEdges
     */
    precomputedLevelOfDetail?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartStudioApigetPartStudioEdges
     */
    edgeId?: Array<string>
}

export interface PartStudioApiGetPartStudioFacesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioFaces
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartStudioApigetPartStudioFaces
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartStudioApigetPartStudioFaces
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioFaces
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApigetPartStudioFaces
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetPartStudioFaces
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartStudioApigetPartStudioFaces
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartStudioApigetPartStudioFaces
     */
    elementMicroversionId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartStudioApigetPartStudioFaces
     */
    partId?: Array<string>
    /**
     * 
     * @type number
     * @memberof PartStudioApigetPartStudioFaces
     */
    angleTolerance?: number
    /**
     * 
     * @type number
     * @memberof PartStudioApigetPartStudioFaces
     */
    chordTolerance?: number
    /**
     * 
     * @type string
     * @memberof PartStudioApigetPartStudioFaces
     */
    precomputedLevelOfDetail?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartStudioApigetPartStudioFaces
     */
    faceId?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioFaces
     */
    outputFaceAppearances?: boolean
    /**
     * 
     * @type number
     * @memberof PartStudioApigetPartStudioFaces
     */
    maxFacetWidth?: number
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioFaces
     */
    outputVertexNormals?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioFaces
     */
    outputFacetNormals?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioFaces
     */
    outputTextureCoordinates?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioFaces
     */
    outputIndexTable?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioFaces
     */
    outputErrorFaces?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioFaces
     */
    combineCompositePartConstituents?: boolean
}

export interface PartStudioApiGetPartStudioFeatureSpecsRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatureSpecs
     */
    did: string
    /**
     * One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatureSpecs
     */
    wvm: string
    /**
     * Workspace (w), Version (v) or Microversion (m) ID.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatureSpecs
     */
    wvmid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatureSpecs
     */
    eid: string
}

export interface PartStudioApiGetPartStudioFeaturesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatures
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartStudioApigetPartStudioFeatures
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatures
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatures
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatures
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetPartStudioFeatures
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartStudioApigetPartStudioFeatures
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartStudioApigetPartStudioFeatures
     */
    elementMicroversionId?: string
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioFeatures
     */
    includeGeometryIds?: boolean
    /**
     * ID of a feature; repeat query param to add more than one
     * @type Array&lt;string&gt;
     * @memberof PartStudioApigetPartStudioFeatures
     */
    featureId?: Array<string>
    /**
     * Whether or not to output simple sketch info without geometry
     * @type boolean
     * @memberof PartStudioApigetPartStudioFeatures
     */
    noSketchGeometry?: boolean
}

export interface PartStudioApiGetPartStudioMassPropertiesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    did: string
    /**
     * Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39; | &#39;m&#39;
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    wvm: 'w' | 'v' | 'm'
    /**
     * The id of the workspace, version or document microversion in which the operation should be performed.
     * @type string
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    wvmid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    configuration?: string
    /**
     * Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @type number
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    rollbackBarIndex?: number
    /**
     * A specific element microversion in which to evaluate the request.
     * @type string
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    elementMicroversionId?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    partId?: Array<string>
    /**
     * If true, specified parts will be evaluated as a single object instead of individually
     * @type boolean
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    massAsGroup?: boolean
    /**
     * If true, use the user mass property overrides when calculated mass properties
     * @type boolean
     * @memberof PartStudioApigetPartStudioMassProperties
     */
    useMassPropertyOverrides?: boolean
}

export interface PartStudioApiGetPartStudioNamedViewsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PartStudioApigetPartStudioNamedViews
     */
    did: string
    /**
     * 
     * @type string
     * @memberof PartStudioApigetPartStudioNamedViews
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof PartStudioApigetPartStudioNamedViews
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioNamedViews
     */
    skipPerspective?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioNamedViews
     */
    includeSectionCutViews?: boolean
}

export interface PartStudioApiGetPartStudioShadedViewsRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    did: string
    /**
     * One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @type string
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    wvm: string
    /**
     * Workspace (w), Version (v) or Microversion (m) ID.
     * @type string
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    wvmid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    eid: string
    /**
     * 12-number view matrix (comma-separated), or one of the following named views: top, bottom, front, back, left, right The 12 entries in the view matrix form three rows and four columns, which is a linear transformation applied to the model itself. The matrix\&#39;s first three columns maps the coordinate axes of the model to the coordinate axes of the view, and the fourth column translates the origin (in meters). The view coordinates have x pointing right, y pointing up, and z pointing towards the viewer, while a front view of the model has x pointing right, y pointing away from the viewer, and z pointing up. For example, the identity matrix viewMatrix&#x3D;1,0,0,0,0,1,0,0,0,0,1,0 corresponds to the top view, and viewMatrix&#x3D;0.612,0.612,0,0,-0.354,0.354,0.707,0,0.707,-0.707,0.707,0 corresponds (approximately) to the isometric view. The first three columns of the view matrix should be orthonormal and have a positive determinant.  If this is not the case, view behavior may be undefined.
     * @type string
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    viewMatrix?: string
    /**
     * Output image height (in pixels)
     * @type number
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    outputHeight?: number
    /**
     * Output image width (in pixels)
     * @type number
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    outputWidth?: number
    /**
     * Height and width represented by each pixel (in meters). If the value is 0, the display will be sized to fit the output image dimensions.
     * @type number
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    pixelSize?: number
    /**
     * The treatment to be applied to edges in the display. Options are show: show visible edges, hide: hide visible edges.
     * @type string
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    edges?: string
    /**
     * Whether or not all parts should be shown in the element, regardless of user setting. If false, the visibility setting made by the user will be reflected in the image. If true, all parts will be shown.
     * @type boolean
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    showAllParts?: boolean
    /**
     * Whether or not surfaces should be shown in the element. It is applicable only when showAllParts is true. If false, surfaces will be excluded. If true, all surfaces will be shown.
     * @type boolean
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    includeSurfaces?: boolean
    /**
     * If true, an anti-aliasing factor will be used to smooth model boundaries in the final image result. If false, the image will be rasterized at the given resolution. Setting to true can have negative performance implications with respect to rendering time and memory usage. If a high-resolution image is requested and anti-aliasing is turned on, the server may not be able to fulfill the request.
     * @type boolean
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    useAntiAliasing?: boolean
    /**
     * 
     * @type boolean
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    includeWires?: boolean
    /**
     * Configuration string.
     * @type string
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    configuration?: string
    /**
     * Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     * @type string
     * @memberof PartStudioApigetPartStudioShadedViews
     */
    linkDocumentId?: string
}

export interface PartStudioApiTranslateIdsRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApitranslateIds
     */
    did: string
    /**
     * One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @type string
     * @memberof PartStudioApitranslateIds
     */
    wvm: string
    /**
     * Workspace (w), Version (v) or Microversion (m) ID.
     * @type string
     * @memberof PartStudioApitranslateIds
     */
    wvmid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApitranslateIds
     */
    eid: string
    /**
     * 
     * @type BTIdTranslationParams
     * @memberof PartStudioApitranslateIds
     */
    bTIdTranslationParams: BTIdTranslationParams
}

export interface PartStudioApiUpdateFeaturesRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApiupdateFeatures
     */
    did: string
    /**
     * Workspace ID.
     * @type string
     * @memberof PartStudioApiupdateFeatures
     */
    wid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApiupdateFeatures
     */
    eid: string
    /**
     * feature The serialized feature definition
     * @type BTUpdateFeaturesCall1748
     * @memberof PartStudioApiupdateFeatures
     */
    bTUpdateFeaturesCall1748?: BTUpdateFeaturesCall1748
}

export interface PartStudioApiUpdatePartStudioFeatureRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApiupdatePartStudioFeature
     */
    did: string
    /**
     * Workspace ID.
     * @type string
     * @memberof PartStudioApiupdatePartStudioFeature
     */
    wid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApiupdatePartStudioFeature
     */
    eid: string
    /**
     * The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
     * @type string
     * @memberof PartStudioApiupdatePartStudioFeature
     */
    fid: string
    /**
     * feature The serialized feature definition
     * @type BTFeatureDefinitionCall1406
     * @memberof PartStudioApiupdatePartStudioFeature
     */
    bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406
}

export interface PartStudioApiUpdateRollbackRequest {
    /**
     * Document ID.
     * @type string
     * @memberof PartStudioApiupdateRollback
     */
    did: string
    /**
     * Workspace ID.
     * @type string
     * @memberof PartStudioApiupdateRollback
     */
    wid: string
    /**
     * Element ID.
     * @type string
     * @memberof PartStudioApiupdateRollback
     */
    eid: string
    /**
     * The index at which the rollback index should be placed. Features  with entry index (0-based) higher than or equal to the value are rolled back. Value of -1 is treated  as an alias for \&quot;end of feature list\&quot;. Otherwise the value must be in the range 0 to the number of  entries in the feature list
     * @type string
     * @memberof PartStudioApiupdateRollback
     */
    body: string
}

export class ObjectPartStudioApi {
    private api: ObservablePartStudioApi

    public constructor(configuration: Configuration, requestFactory?: PartStudioApiRequestFactory, responseProcessor?: PartStudioApiResponseProcessor) {
        this.api = new ObservablePartStudioApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * See Feature List APIs in the [developer documentation](https://onshape-public.github.io/docs/api-adv/featureaccess/) for additional information.
     * Add a feature to the Part Studio\'s Feature List.
     * @param param the request object
     */
    public addPartStudioFeatureWithHttpInfo(param: PartStudioApiAddPartStudioFeatureRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addPartStudioFeatureWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.bTFeatureDefinitionCall1406,  options).toPromise();
    }

    /**
     * See Feature List APIs in the [developer documentation](https://onshape-public.github.io/docs/api-adv/featureaccess/) for additional information.
     * Add a feature to the Part Studio\'s Feature List.
     * @param param the request object
     */
    public addPartStudioFeature(param: PartStudioApiAddPartStudioFeatureRequest, options?: Configuration): Promise<void> {
        return this.api.addPartStudioFeature(param.did, param.wvm, param.wvmid, param.eid, param.bTFeatureDefinitionCall1406,  options).toPromise();
    }

    /**
     * Get the differences between two Part Studios in a single document.
     * @param param the request object
     */
    public comparePartStudiosWithHttpInfo(param: PartStudioApiComparePartStudiosRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.comparePartStudiosWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.workspaceId, param.versionId, param.microversionId, param.sourceConfiguration, param.targetConfiguration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the differences between two Part Studios in a single document.
     * @param param the request object
     */
    public comparePartStudios(param: PartStudioApiComparePartStudiosRequest, options?: Configuration): Promise<void> {
        return this.api.comparePartStudios(param.did, param.wvm, param.wvmid, param.eid, param.workspaceId, param.versionId, param.microversionId, param.sourceConfiguration, param.targetConfiguration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Create a new Part Studio in a document.
     * @param param the request object
     */
    public createPartStudioWithHttpInfo(param: PartStudioApiCreatePartStudioRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createPartStudioWithHttpInfo(param.did, param.wid, param.bTModelElementParams,  options).toPromise();
    }

    /**
     * Create a new Part Studio in a document.
     * @param param the request object
     */
    public createPartStudio(param: PartStudioApiCreatePartStudioRequest, options?: Configuration): Promise<void> {
        return this.api.createPartStudio(param.did, param.wid, param.bTModelElementParams,  options).toPromise();
    }

    /**
     * Translate (export) a Part Studio.
     * @param param the request object
     */
    public createPartStudioTranslationWithHttpInfo(param: PartStudioApiCreatePartStudioTranslationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createPartStudioTranslationWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.bTTranslateFormatParams,  options).toPromise();
    }

    /**
     * Translate (export) a Part Studio.
     * @param param the request object
     */
    public createPartStudioTranslation(param: PartStudioApiCreatePartStudioTranslationRequest, options?: Configuration): Promise<void> {
        return this.api.createPartStudioTranslation(param.did, param.wv, param.wvid, param.eid, param.bTTranslateFormatParams,  options).toPromise();
    }

    /**
     * Delete a Part Studio feature.
     * @param param the request object
     */
    public deletePartStudioFeatureWithHttpInfo(param: PartStudioApiDeletePartStudioFeatureRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deletePartStudioFeatureWithHttpInfo(param.did, param.wid, param.eid, param.fid,  options).toPromise();
    }

    /**
     * Delete a Part Studio feature.
     * @param param the request object
     */
    public deletePartStudioFeature(param: PartStudioApiDeletePartStudioFeatureRequest, options?: Configuration): Promise<void> {
        return this.api.deletePartStudioFeature(param.did, param.wid, param.eid, param.fid,  options).toPromise();
    }

    /**
     * Evaluate the FeatureScript snippet for a Part Studio.
     * @param param the request object
     */
    public evalFeatureScriptWithHttpInfo(param: PartStudioApiEvalFeatureScriptRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.evalFeatureScriptWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.bTFeatureScriptEvalCall2377,  options).toPromise();
    }

    /**
     * Evaluate the FeatureScript snippet for a Part Studio.
     * @param param the request object
     */
    public evalFeatureScript(param: PartStudioApiEvalFeatureScriptRequest, options?: Configuration): Promise<void> {
        return this.api.evalFeatureScript(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.bTFeatureScriptEvalCall2377,  options).toPromise();
    }

    /**
     * Returns a 307 redirect.
     * Export the Part Studio as a Parasolid file.
     * @param param the request object
     */
    public exportParasolidWithHttpInfo(param: PartStudioApiExportParasolidRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.exportParasolidWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partIds, param.version, param.includeExportIds, param.configuration, param.linkDocumentId, param.binaryExport,  options).toPromise();
    }

    /**
     * Returns a 307 redirect.
     * Export the Part Studio as a Parasolid file.
     * @param param the request object
     */
    public exportParasolid(param: PartStudioApiExportParasolidRequest, options?: Configuration): Promise<void> {
        return this.api.exportParasolid(param.did, param.wvm, param.wvmid, param.eid, param.partIds, param.version, param.includeExportIds, param.configuration, param.linkDocumentId, param.binaryExport,  options).toPromise();
    }

    /**
     * Export the Part Studio as a glTF file.
     * @param param the request object
     */
    public exportPartStudioGltfWithHttpInfo(param: PartStudioApiExportPartStudioGltfRequest, options?: Configuration): Promise<HttpInfo<GlTF>> {
        return this.api.exportPartStudioGltfWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.outputSeparateFaceNodes, param.faceId, param.outputFaceAppearances, param.maxFacetWidth,  options).toPromise();
    }

    /**
     * Export the Part Studio as a glTF file.
     * @param param the request object
     */
    public exportPartStudioGltf(param: PartStudioApiExportPartStudioGltfRequest, options?: Configuration): Promise<GlTF> {
        return this.api.exportPartStudioGltf(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.outputSeparateFaceNodes, param.faceId, param.outputFaceAppearances, param.maxFacetWidth,  options).toPromise();
    }

    /**
     * Export the Part Studio as an STL file.
     * @param param the request object
     */
    public exportPartStudioStlWithHttpInfo(param: PartStudioApiExportPartStudioStlRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.exportPartStudioStlWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.partIds, param.mode, param.grouping, param.scale, param.units, param.angleTolerance, param.chordTolerance, param.maxFacetWidth, param.minFacetWidth, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Export the Part Studio as an STL file.
     * @param param the request object
     */
    public exportPartStudioStl(param: PartStudioApiExportPartStudioStlRequest, options?: Configuration): Promise<void> {
        return this.api.exportPartStudioStl(param.did, param.wvm, param.wvmid, param.eid, param.partIds, param.mode, param.grouping, param.scale, param.units, param.angleTolerance, param.chordTolerance, param.maxFacetWidth, param.minFacetWidth, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the FeatureScript representation of a Part Studio.
     * @param param the request object
     */
    public getFeatureScriptRepresentationWithHttpInfo(param: PartStudioApiGetFeatureScriptRepresentationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getFeatureScriptRepresentationWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId,  options).toPromise();
    }

    /**
     * Get the FeatureScript representation of a Part Studio.
     * @param param the request object
     */
    public getFeatureScriptRepresentation(param: PartStudioApiGetFeatureScriptRepresentationRequest, options?: Configuration): Promise<void> {
        return this.api.getFeatureScriptRepresentation(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId,  options).toPromise();
    }

    /**
     * Compute and return a FeatureScript table for a Part Studio.
     * @param param the request object
     */
    public getFeatureScriptTableWithHttpInfo(param: PartStudioApiGetFeatureScriptTableRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getFeatureScriptTableWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.tableType, param.configuration, param.tableNamespace, param.tableParameters, param.partId, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Compute and return a FeatureScript table for a Part Studio.
     * @param param the request object
     */
    public getFeatureScriptTable(param: PartStudioApiGetFeatureScriptTableRequest, options?: Configuration): Promise<void> {
        return this.api.getFeatureScriptTable(param.did, param.wvm, param.wvmid, param.eid, param.tableType, param.configuration, param.tableNamespace, param.tableParameters, param.partId, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the body details for a Part Studio.
     * @param param the request object
     */
    public getPartStudioBodyDetailsWithHttpInfo(param: PartStudioApiGetPartStudioBodyDetailsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioBodyDetailsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partIds, param.includeSurfaces, param.includeCompositeParts, param.includeGeometricData,  options).toPromise();
    }

    /**
     * Get the body details for a Part Studio.
     * @param param the request object
     */
    public getPartStudioBodyDetails(param: PartStudioApiGetPartStudioBodyDetailsRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioBodyDetails(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partIds, param.includeSurfaces, param.includeCompositeParts, param.includeGeometricData,  options).toPromise();
    }

    /**
     * Get the bounding boxes for a Part Studio.
     * @param param the request object
     */
    public getPartStudioBoundingBoxesWithHttpInfo(param: PartStudioApiGetPartStudioBoundingBoxesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioBoundingBoxesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.includeHidden, param.includeWireBodies, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the bounding boxes for a Part Studio.
     * @param param the request object
     */
    public getPartStudioBoundingBoxes(param: PartStudioApiGetPartStudioBoundingBoxesRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioBoundingBoxes(param.did, param.wvm, param.wvmid, param.eid, param.includeHidden, param.includeWireBodies, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Returns the edges as tessellated data and includes display data.  Coordinates are in meters (m).
     * Get a list of all edges in a Part Studio.
     * @param param the request object
     */
    public getPartStudioEdgesWithHttpInfo(param: PartStudioApiGetPartStudioEdgesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioEdgesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.edgeId,  options).toPromise();
    }

    /**
     * Returns the edges as tessellated data and includes display data.  Coordinates are in meters (m).
     * Get a list of all edges in a Part Studio.
     * @param param the request object
     */
    public getPartStudioEdges(param: PartStudioApiGetPartStudioEdgesRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioEdges(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.edgeId,  options).toPromise();
    }

    /**
     * Coordinates are in meters (m).
     * Get a list of all faces in a Part Studio.
     * @param param the request object
     */
    public getPartStudioFacesWithHttpInfo(param: PartStudioApiGetPartStudioFacesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioFacesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.faceId, param.outputFaceAppearances, param.maxFacetWidth, param.outputVertexNormals, param.outputFacetNormals, param.outputTextureCoordinates, param.outputIndexTable, param.outputErrorFaces, param.combineCompositePartConstituents,  options).toPromise();
    }

    /**
     * Coordinates are in meters (m).
     * Get a list of all faces in a Part Studio.
     * @param param the request object
     */
    public getPartStudioFaces(param: PartStudioApiGetPartStudioFacesRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioFaces(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partId, param.angleTolerance, param.chordTolerance, param.precomputedLevelOfDetail, param.faceId, param.outputFaceAppearances, param.maxFacetWidth, param.outputVertexNormals, param.outputFacetNormals, param.outputTextureCoordinates, param.outputIndexTable, param.outputErrorFaces, param.combineCompositePartConstituents,  options).toPromise();
    }

    /**
     * Get the specs for a Part Studio feature.
     * @param param the request object
     */
    public getPartStudioFeatureSpecsWithHttpInfo(param: PartStudioApiGetPartStudioFeatureSpecsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioFeatureSpecsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Get the specs for a Part Studio feature.
     * @param param the request object
     */
    public getPartStudioFeatureSpecs(param: PartStudioApiGetPartStudioFeatureSpecsRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioFeatureSpecs(param.did, param.wvm, param.wvmid, param.eid,  options).toPromise();
    }

    /**
     * Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.
     * @param param the request object
     */
    public getPartStudioFeaturesWithHttpInfo(param: PartStudioApiGetPartStudioFeaturesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioFeaturesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.includeGeometryIds, param.featureId, param.noSketchGeometry,  options).toPromise();
    }

    /**
     * Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.
     * @param param the request object
     */
    public getPartStudioFeatures(param: PartStudioApiGetPartStudioFeaturesRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioFeatures(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.includeGeometryIds, param.featureId, param.noSketchGeometry,  options).toPromise();
    }

    /**
     * If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get the mass properties for a Part Studio.
     * @param param the request object
     */
    public getPartStudioMassPropertiesWithHttpInfo(param: PartStudioApiGetPartStudioMassPropertiesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioMassPropertiesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partId, param.massAsGroup, param.useMassPropertyOverrides,  options).toPromise();
    }

    /**
     * If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get the mass properties for a Part Studio.
     * @param param the request object
     */
    public getPartStudioMassProperties(param: PartStudioApiGetPartStudioMassPropertiesRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioMassProperties(param.did, param.wvm, param.wvmid, param.eid, param.linkDocumentId, param.configuration, param.rollbackBarIndex, param.elementMicroversionId, param.partId, param.massAsGroup, param.useMassPropertyOverrides,  options).toPromise();
    }

    /**
     * Returns a map from view name to view data for the given element
     * Get a list of all named views that exist in the Part Studio.
     * @param param the request object
     */
    public getPartStudioNamedViewsWithHttpInfo(param: PartStudioApiGetPartStudioNamedViewsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioNamedViewsWithHttpInfo(param.did, param.eid, param.linkDocumentId, param.skipPerspective, param.includeSectionCutViews,  options).toPromise();
    }

    /**
     * Returns a map from view name to view data for the given element
     * Get a list of all named views that exist in the Part Studio.
     * @param param the request object
     */
    public getPartStudioNamedViews(param: PartStudioApiGetPartStudioNamedViewsRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioNamedViews(param.did, param.eid, param.linkDocumentId, param.skipPerspective, param.includeSectionCutViews,  options).toPromise();
    }

    /**
     * Get a list of shaded views for a Part Studio.
     * @param param the request object
     */
    public getPartStudioShadedViewsWithHttpInfo(param: PartStudioApiGetPartStudioShadedViewsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPartStudioShadedViewsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.viewMatrix, param.outputHeight, param.outputWidth, param.pixelSize, param.edges, param.showAllParts, param.includeSurfaces, param.useAntiAliasing, param.includeWires, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get a list of shaded views for a Part Studio.
     * @param param the request object
     */
    public getPartStudioShadedViews(param: PartStudioApiGetPartStudioShadedViewsRequest, options?: Configuration): Promise<void> {
        return this.api.getPartStudioShadedViews(param.did, param.wvm, param.wvmid, param.eid, param.viewMatrix, param.outputHeight, param.outputWidth, param.pixelSize, param.edges, param.showAllParts, param.includeSurfaces, param.useAntiAliasing, param.includeWires, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * * Deterministic IDs are only valid for one microversion.  * This maps deterministic IDs between microversions in an attempt to find the corresponding entities in each version.
     * Find corresponding deterministic IDs from a source document microversion at the target version.
     * @param param the request object
     */
    public translateIdsWithHttpInfo(param: PartStudioApiTranslateIdsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.translateIdsWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.bTIdTranslationParams,  options).toPromise();
    }

    /**
     * * Deterministic IDs are only valid for one microversion.  * This maps deterministic IDs between microversions in an attempt to find the corresponding entities in each version.
     * Find corresponding deterministic IDs from a source document microversion at the target version.
     * @param param the request object
     */
    public translateIds(param: PartStudioApiTranslateIdsRequest, options?: Configuration): Promise<void> {
        return this.api.translateIds(param.did, param.wvm, param.wvmid, param.eid, param.bTIdTranslationParams,  options).toPromise();
    }

    /**
     * You can update multiple features with a single call.
     * Update existing features\' parameters.
     * @param param the request object
     */
    public updateFeaturesWithHttpInfo(param: PartStudioApiUpdateFeaturesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateFeaturesWithHttpInfo(param.did, param.wid, param.eid, param.bTUpdateFeaturesCall1748,  options).toPromise();
    }

    /**
     * You can update multiple features with a single call.
     * Update existing features\' parameters.
     * @param param the request object
     */
    public updateFeatures(param: PartStudioApiUpdateFeaturesRequest, options?: Configuration): Promise<void> {
        return this.api.updateFeatures(param.did, param.wid, param.eid, param.bTUpdateFeaturesCall1748,  options).toPromise();
    }

    /**
     * Update the definition of a Part Studio feature.
     * @param param the request object
     */
    public updatePartStudioFeatureWithHttpInfo(param: PartStudioApiUpdatePartStudioFeatureRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updatePartStudioFeatureWithHttpInfo(param.did, param.wid, param.eid, param.fid, param.bTFeatureDefinitionCall1406,  options).toPromise();
    }

    /**
     * Update the definition of a Part Studio feature.
     * @param param the request object
     */
    public updatePartStudioFeature(param: PartStudioApiUpdatePartStudioFeatureRequest, options?: Configuration): Promise<void> {
        return this.api.updatePartStudioFeature(param.did, param.wid, param.eid, param.fid, param.bTFeatureDefinitionCall1406,  options).toPromise();
    }

    /**
     * Set to -1 to move the rollback bar to the end of the list.
     * Move the Feature List rollback bar in the Part Studio.
     * @param param the request object
     */
    public updateRollbackWithHttpInfo(param: PartStudioApiUpdateRollbackRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateRollbackWithHttpInfo(param.did, param.wid, param.eid, param.body,  options).toPromise();
    }

    /**
     * Set to -1 to move the rollback bar to the end of the list.
     * Move the Feature List rollback bar in the Part Studio.
     * @param param the request object
     */
    public updateRollback(param: PartStudioApiUpdateRollbackRequest, options?: Configuration): Promise<void> {
        return this.api.updateRollback(param.did, param.wid, param.eid, param.body,  options).toPromise();
    }

}

import { ObservablePropertiesTableTemplateApi } from "./ObservableAPI";
import { PropertiesTableTemplateApiRequestFactory, PropertiesTableTemplateApiResponseProcessor} from "../apis/PropertiesTableTemplateApi";

export interface PropertiesTableTemplateApiCreateTableTemplateRequest {
    /**
     * 
     * @type BTPropertiesTableTemplateParams
     * @memberof PropertiesTableTemplateApicreateTableTemplate
     */
    bTPropertiesTableTemplateParams: BTPropertiesTableTemplateParams
    /**
     * 
     * @type string
     * @memberof PropertiesTableTemplateApicreateTableTemplate
     */
    templateGroupId?: string
}

export interface PropertiesTableTemplateApiDeleteTableTemplateRequest {
    /**
     * The id of the template in which to perform the operation.
     * @type string
     * @memberof PropertiesTableTemplateApideleteTableTemplate
     */
    tid: string
}

export interface PropertiesTableTemplateApiGetByCompanyIdRequest {
    /**
     * The id of the company in which to perform the operation.
     * @type string
     * @memberof PropertiesTableTemplateApigetByCompanyId
     */
    cid: string
    /**
     * Indicates filter for table templates: 0 (BOM) or 1 (Revision Table).
     * @type BTPropertiesTableTemplateType
     * @memberof PropertiesTableTemplateApigetByCompanyId
     */
    templateType?: BTPropertiesTableTemplateType
    /**
     * 
     * @type boolean
     * @memberof PropertiesTableTemplateApigetByCompanyId
     */
    onlyActive?: boolean
    /**
     * 
     * @type boolean
     * @memberof PropertiesTableTemplateApigetByCompanyId
     */
    includeDefaults?: boolean
}

export interface PropertiesTableTemplateApiGetByDocumentIdRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof PropertiesTableTemplateApigetByDocumentId
     */
    did: string
    /**
     * Indicates filter for table templates: 0 (BOM) or 1 (Revision Table).
     * @type BTPropertiesTableTemplateType
     * @memberof PropertiesTableTemplateApigetByDocumentId
     */
    templateType?: BTPropertiesTableTemplateType
    /**
     * 
     * @type boolean
     * @memberof PropertiesTableTemplateApigetByDocumentId
     */
    onlyActive?: boolean
    /**
     * 
     * @type boolean
     * @memberof PropertiesTableTemplateApigetByDocumentId
     */
    includeDefaults?: boolean
}

export interface PropertiesTableTemplateApiGetTableTemplateRequest {
    /**
     * The id of the template in which to perform the operation.
     * @type string
     * @memberof PropertiesTableTemplateApigetTableTemplate
     */
    tid: string
}

export class ObjectPropertiesTableTemplateApi {
    private api: ObservablePropertiesTableTemplateApi

    public constructor(configuration: Configuration, requestFactory?: PropertiesTableTemplateApiRequestFactory, responseProcessor?: PropertiesTableTemplateApiResponseProcessor) {
        this.api = new ObservablePropertiesTableTemplateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new properties table template.
     * @param param the request object
     */
    public createTableTemplateWithHttpInfo(param: PropertiesTableTemplateApiCreateTableTemplateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createTableTemplateWithHttpInfo(param.bTPropertiesTableTemplateParams, param.templateGroupId,  options).toPromise();
    }

    /**
     * Create a new properties table template.
     * @param param the request object
     */
    public createTableTemplate(param: PropertiesTableTemplateApiCreateTableTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.createTableTemplate(param.bTPropertiesTableTemplateParams, param.templateGroupId,  options).toPromise();
    }

    /**
     * Delete a properties table template.
     * @param param the request object
     */
    public deleteTableTemplateWithHttpInfo(param: PropertiesTableTemplateApiDeleteTableTemplateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTableTemplateWithHttpInfo(param.tid,  options).toPromise();
    }

    /**
     * Delete a properties table template.
     * @param param the request object
     */
    public deleteTableTemplate(param: PropertiesTableTemplateApiDeleteTableTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTableTemplate(param.tid,  options).toPromise();
    }

    /**
     * Get all properties table templates available for a company.
     * @param param the request object
     */
    public getByCompanyIdWithHttpInfo(param: PropertiesTableTemplateApiGetByCompanyIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getByCompanyIdWithHttpInfo(param.cid, param.templateType, param.onlyActive, param.includeDefaults,  options).toPromise();
    }

    /**
     * Get all properties table templates available for a company.
     * @param param the request object
     */
    public getByCompanyId(param: PropertiesTableTemplateApiGetByCompanyIdRequest, options?: Configuration): Promise<void> {
        return this.api.getByCompanyId(param.cid, param.templateType, param.onlyActive, param.includeDefaults,  options).toPromise();
    }

    /**
     * Get all table templates that are available to use on the provided document.
     * @param param the request object
     */
    public getByDocumentIdWithHttpInfo(param: PropertiesTableTemplateApiGetByDocumentIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getByDocumentIdWithHttpInfo(param.did, param.templateType, param.onlyActive, param.includeDefaults,  options).toPromise();
    }

    /**
     * Get all table templates that are available to use on the provided document.
     * @param param the request object
     */
    public getByDocumentId(param: PropertiesTableTemplateApiGetByDocumentIdRequest, options?: Configuration): Promise<void> {
        return this.api.getByDocumentId(param.did, param.templateType, param.onlyActive, param.includeDefaults,  options).toPromise();
    }

    /**
     * Get a properties table template by template ID.
     * @param param the request object
     */
    public getTableTemplateWithHttpInfo(param: PropertiesTableTemplateApiGetTableTemplateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getTableTemplateWithHttpInfo(param.tid,  options).toPromise();
    }

    /**
     * Get a properties table template by template ID.
     * @param param the request object
     */
    public getTableTemplate(param: PropertiesTableTemplateApiGetTableTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.getTableTemplate(param.tid,  options).toPromise();
    }

}

import { ObservablePublicationApi } from "./ObservableAPI";
import { PublicationApiRequestFactory, PublicationApiResponseProcessor} from "../apis/PublicationApi";

export interface PublicationApiGetPublicationItemsRequest {
    /**
     * 
     * @type string
     * @memberof PublicationApigetPublicationItems
     */
    pid: string
}

export class ObjectPublicationApi {
    private api: ObservablePublicationApi

    public constructor(configuration: Configuration, requestFactory?: PublicationApiRequestFactory, responseProcessor?: PublicationApiResponseProcessor) {
        this.api = new ObservablePublicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all items in a publication.
     * @param param the request object
     */
    public getPublicationItemsWithHttpInfo(param: PublicationApiGetPublicationItemsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getPublicationItemsWithHttpInfo(param.pid,  options).toPromise();
    }

    /**
     * Get all items in a publication.
     * @param param the request object
     */
    public getPublicationItems(param: PublicationApiGetPublicationItemsRequest, options?: Configuration): Promise<void> {
        return this.api.getPublicationItems(param.pid,  options).toPromise();
    }

}

import { ObservableReleasePackageApi } from "./ObservableAPI";
import { ReleasePackageApiRequestFactory, ReleasePackageApiResponseProcessor} from "../apis/ReleasePackageApi";

export interface ReleasePackageApiCreateObsoletionPackageRequest {
    /**
     * 
     * @type string
     * @memberof ReleasePackageApicreateObsoletionPackage
     */
    wfid: string
    /**
     * 
     * @type string
     * @memberof ReleasePackageApicreateObsoletionPackage
     */
    revisionId: string
    /**
     * 
     * @type boolean
     * @memberof ReleasePackageApicreateObsoletionPackage
     */
    debugMode?: boolean
}

export interface ReleasePackageApiCreateReleasePackageRequest {
    /**
     * 
     * @type string
     * @memberof ReleasePackageApicreateReleasePackage
     */
    wfid: string
    /**
     * 
     * @type BTReleasePackageParams
     * @memberof ReleasePackageApicreateReleasePackage
     */
    bTReleasePackageParams: BTReleasePackageParams
    /**
     * 
     * @type boolean
     * @memberof ReleasePackageApicreateReleasePackage
     */
    debugMode?: boolean
}

export interface ReleasePackageApiGetCompanyReleaseWorkflowRequest {
    /**
     * 
     * @type string
     * @memberof ReleasePackageApigetCompanyReleaseWorkflow
     */
    documentId?: string
}

export interface ReleasePackageApiGetReleasePackageRequest {
    /**
     * 
     * @type string
     * @memberof ReleasePackageApigetReleasePackage
     */
    rpid: string
    /**
     * 
     * @type boolean
     * @memberof ReleasePackageApigetReleasePackage
     */
    detailed?: boolean
}

export interface ReleasePackageApiUpdateReleasePackageRequest {
    /**
     * 
     * @type string
     * @memberof ReleasePackageApiupdateReleasePackage
     */
    rpid: string
    /**
     * 
     * @type BTUpdateReleasePackageParams
     * @memberof ReleasePackageApiupdateReleasePackage
     */
    bTUpdateReleasePackageParams: BTUpdateReleasePackageParams
    /**
     * 
     * @type string
     * @memberof ReleasePackageApiupdateReleasePackage
     */
    action?: string
    /**
     * 
     * @type string
     * @memberof ReleasePackageApiupdateReleasePackage
     */
    wfaction?: string
}

export class ObjectReleasePackageApi {
    private api: ObservableReleasePackageApi

    public constructor(configuration: Configuration, requestFactory?: ReleasePackageApiRequestFactory, responseProcessor?: ReleasePackageApiResponseProcessor) {
        this.api = new ObservableReleasePackageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an obsoletion package to make an existing revision obsolete.
     * @param param the request object
     */
    public createObsoletionPackageWithHttpInfo(param: ReleasePackageApiCreateObsoletionPackageRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createObsoletionPackageWithHttpInfo(param.wfid, param.revisionId, param.debugMode,  options).toPromise();
    }

    /**
     * Create an obsoletion package to make an existing revision obsolete.
     * @param param the request object
     */
    public createObsoletionPackage(param: ReleasePackageApiCreateObsoletionPackageRequest, options?: Configuration): Promise<void> {
        return this.api.createObsoletionPackage(param.wfid, param.revisionId, param.debugMode,  options).toPromise();
    }

    /**
     * All revisionable items must be from the same document. Once a release package is successfully created, use `updateReleasePackage` to update all desired item/package properties, and transition it to the desired state.
     * Create a new release package for one or more items.
     * @param param the request object
     */
    public createReleasePackageWithHttpInfo(param: ReleasePackageApiCreateReleasePackageRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createReleasePackageWithHttpInfo(param.wfid, param.bTReleasePackageParams, param.debugMode,  options).toPromise();
    }

    /**
     * All revisionable items must be from the same document. Once a release package is successfully created, use `updateReleasePackage` to update all desired item/package properties, and transition it to the desired state.
     * Create a new release package for one or more items.
     * @param param the request object
     */
    public createReleasePackage(param: ReleasePackageApiCreateReleasePackageRequest, options?: Configuration): Promise<void> {
        return this.api.createReleasePackage(param.wfid, param.bTReleasePackageParams, param.debugMode,  options).toPromise();
    }

    /**
     * Get information about the release/obsoletion workflow for a company-owned document.
     * @param param the request object
     */
    public getCompanyReleaseWorkflowWithHttpInfo(param: ReleasePackageApiGetCompanyReleaseWorkflowRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getCompanyReleaseWorkflowWithHttpInfo(param.documentId,  options).toPromise();
    }

    /**
     * Get information about the release/obsoletion workflow for a company-owned document.
     * @param param the request object
     */
    public getCompanyReleaseWorkflow(param: ReleasePackageApiGetCompanyReleaseWorkflowRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getCompanyReleaseWorkflow(param.documentId,  options).toPromise();
    }

    /**
     * Get details about the specified release package.
     * @param param the request object
     */
    public getReleasePackageWithHttpInfo(param: ReleasePackageApiGetReleasePackageRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getReleasePackageWithHttpInfo(param.rpid, param.detailed,  options).toPromise();
    }

    /**
     * Get details about the specified release package.
     * @param param the request object
     */
    public getReleasePackage(param: ReleasePackageApiGetReleasePackageRequest, options?: Configuration): Promise<void> {
        return this.api.getReleasePackage(param.rpid, param.detailed,  options).toPromise();
    }

    /**
     * Use the `wfaction` query param to also perform a workflow transition.
     * Update the release/obsoletion package/item properties.
     * @param param the request object
     */
    public updateReleasePackageWithHttpInfo(param: ReleasePackageApiUpdateReleasePackageRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateReleasePackageWithHttpInfo(param.rpid, param.bTUpdateReleasePackageParams, param.action, param.wfaction,  options).toPromise();
    }

    /**
     * Use the `wfaction` query param to also perform a workflow transition.
     * Update the release/obsoletion package/item properties.
     * @param param the request object
     */
    public updateReleasePackage(param: ReleasePackageApiUpdateReleasePackageRequest, options?: Configuration): Promise<void> {
        return this.api.updateReleasePackage(param.rpid, param.bTUpdateReleasePackageParams, param.action, param.wfaction,  options).toPromise();
    }

}

import { ObservableRevisionApi } from "./ObservableAPI";
import { RevisionApiRequestFactory, RevisionApiResponseProcessor} from "../apis/RevisionApi";

export interface RevisionApiDeleteRevisionHistoryRequest {
    /**
     * 
     * @type string
     * @memberof RevisionApideleteRevisionHistory
     */
    cid: string
    /**
     * 
     * @type string
     * @memberof RevisionApideleteRevisionHistory
     */
    pnum: string
    /**
     * 
     * @type string
     * @memberof RevisionApideleteRevisionHistory
     */
    et: string
    /**
     * 
     * @type boolean
     * @memberof RevisionApideleteRevisionHistory
     */
    ignoreLinkedDocuments?: boolean
}

export interface RevisionApiEnumerateRevisionsRequest {
    /**
     * The company or enterprise ID that owns the resource.
     * @type string
     * @memberof RevisionApienumerateRevisions
     */
    cid: string
    /**
     * 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     * @type number
     * @memberof RevisionApienumerateRevisions
     */
    elementType?: number
    /**
     * The number of items to return in a single API call
     * @type number
     * @memberof RevisionApienumerateRevisions
     */
    limit?: number
    /**
     * Whether to limit search to only latest revisions.
     * @type boolean
     * @memberof RevisionApienumerateRevisions
     */
    latestOnly?: boolean
    /**
     * The earliest creation date of the revision to find.
     * @type Date
     * @memberof RevisionApienumerateRevisions
     */
    after?: Date
}

export interface RevisionApiGetAllInDocumentRequest {
    /**
     * 
     * @type string
     * @memberof RevisionApigetAllInDocument
     */
    did: string
}

export interface RevisionApiGetAllInDocumentVersionRequest {
    /**
     * 
     * @type string
     * @memberof RevisionApigetAllInDocumentVersion
     */
    did: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetAllInDocumentVersion
     */
    vid: string
}

export interface RevisionApiGetLatestInDocumentOrCompanyRequest {
    /**
     * 
     * @type string
     * @memberof RevisionApigetLatestInDocumentOrCompany
     */
    cd: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetLatestInDocumentOrCompany
     */
    cdid: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetLatestInDocumentOrCompany
     */
    pnum: string
    /**
     * 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     * @type string
     * @memberof RevisionApigetLatestInDocumentOrCompany
     */
    et: string
}

export interface RevisionApiGetRevisionByPartNumberRequest {
    /**
     * Company id
     * @type string
     * @memberof RevisionApigetRevisionByPartNumber
     */
    cid: string
    /**
     * Part Number
     * @type string
     * @memberof RevisionApigetRevisionByPartNumber
     */
    pnum: string
    /**
     * Revision
     * @type string
     * @memberof RevisionApigetRevisionByPartNumber
     */
    revision?: string
    /**
     * 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     * @type number
     * @memberof RevisionApigetRevisionByPartNumber
     */
    elementType?: number
}

export interface RevisionApiGetRevisionHistoryInCompanyByElementIdRequest {
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    cid: string
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    elementType: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    configuration?: string
    /**
     * 
     * @type boolean
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    fillApprovers?: boolean
    /**
     * 
     * @type boolean
     * @memberof RevisionApigetRevisionHistoryInCompanyByElementId
     */
    fillExportPermission?: boolean
}

export interface RevisionApiGetRevisionHistoryInCompanyByPartIdRequest {
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    cid: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    did: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    wv: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    wvid: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    pid: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    fillApprovers?: boolean
    /**
     * 
     * @type boolean
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartId
     */
    fillExportPermission?: boolean
}

export interface RevisionApiGetRevisionHistoryInCompanyByPartNumberRequest {
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartNumber
     */
    cid: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartNumber
     */
    pnum: string
    /**
     * 
     * @type string
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartNumber
     */
    elementType: string
    /**
     * 
     * @type boolean
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartNumber
     */
    fillApprovers?: boolean
    /**
     * 
     * @type boolean
     * @memberof RevisionApigetRevisionHistoryInCompanyByPartNumber
     */
    fillExportPermission?: boolean
}

export class ObjectRevisionApi {
    private api: ObservableRevisionApi

    public constructor(configuration: Configuration, requestFactory?: RevisionApiRequestFactory, responseProcessor?: RevisionApiResponseProcessor) {
        this.api = new ObservableRevisionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Only company admins can call this API. All documents that contain or use the part number must be deleted first. This operation cannot be undone.
     * Delete all revisions for a part number.
     * @param param the request object
     */
    public deleteRevisionHistoryWithHttpInfo(param: RevisionApiDeleteRevisionHistoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteRevisionHistoryWithHttpInfo(param.cid, param.pnum, param.et, param.ignoreLinkedDocuments,  options).toPromise();
    }

    /**
     * Only company admins can call this API. All documents that contain or use the part number must be deleted first. This operation cannot be undone.
     * Delete all revisions for a part number.
     * @param param the request object
     */
    public deleteRevisionHistory(param: RevisionApiDeleteRevisionHistoryRequest, options?: Configuration): Promise<void> {
        return this.api.deleteRevisionHistory(param.cid, param.pnum, param.et, param.ignoreLinkedDocuments,  options).toPromise();
    }

    /**
     * * Returns a slice of all revisions per API call.  * To get the next set of results, use the `next` URL from the response body.  * This API can only be called by company admins.
     * Enumerate all of a company\'s revisions.
     * @param param the request object
     */
    public enumerateRevisionsWithHttpInfo(param: RevisionApiEnumerateRevisionsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.enumerateRevisionsWithHttpInfo(param.cid, param.elementType, param.limit, param.latestOnly, param.after,  options).toPromise();
    }

    /**
     * * Returns a slice of all revisions per API call.  * To get the next set of results, use the `next` URL from the response body.  * This API can only be called by company admins.
     * Enumerate all of a company\'s revisions.
     * @param param the request object
     */
    public enumerateRevisions(param: RevisionApiEnumerateRevisionsRequest, options?: Configuration): Promise<void> {
        return this.api.enumerateRevisions(param.cid, param.elementType, param.limit, param.latestOnly, param.after,  options).toPromise();
    }

    /**
     * Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
     * Get all revisions for the specified document.
     * @param param the request object
     */
    public getAllInDocumentWithHttpInfo(param: RevisionApiGetAllInDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAllInDocumentWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
     * Get all revisions for the specified document.
     * @param param the request object
     */
    public getAllInDocument(param: RevisionApiGetAllInDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.getAllInDocument(param.did,  options).toPromise();
    }

    /**
     * Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
     * Get all revisions for a version.
     * @param param the request object
     */
    public getAllInDocumentVersionWithHttpInfo(param: RevisionApiGetAllInDocumentVersionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAllInDocumentVersionWithHttpInfo(param.did, param.vid,  options).toPromise();
    }

    /**
     * Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
     * Get all revisions for a version.
     * @param param the request object
     */
    public getAllInDocumentVersion(param: RevisionApiGetAllInDocumentVersionRequest, options?: Configuration): Promise<void> {
        return this.api.getAllInDocumentVersion(param.did, param.vid,  options).toPromise();
    }

    /**
     * Returns 204 if no revisions are found.
     * Get the latest revision for a part number in a document or company.
     * @param param the request object
     */
    public getLatestInDocumentOrCompanyWithHttpInfo(param: RevisionApiGetLatestInDocumentOrCompanyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getLatestInDocumentOrCompanyWithHttpInfo(param.cd, param.cdid, param.pnum, param.et,  options).toPromise();
    }

    /**
     * Returns 204 if no revisions are found.
     * Get the latest revision for a part number in a document or company.
     * @param param the request object
     */
    public getLatestInDocumentOrCompany(param: RevisionApiGetLatestInDocumentOrCompanyRequest, options?: Configuration): Promise<void> {
        return this.api.getLatestInDocumentOrCompany(param.cd, param.cdid, param.pnum, param.et,  options).toPromise();
    }

    /**
     * Get a list of revisions by part number.
     * @param param the request object
     */
    public getRevisionByPartNumberWithHttpInfo(param: RevisionApiGetRevisionByPartNumberRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getRevisionByPartNumberWithHttpInfo(param.cid, param.pnum, param.revision, param.elementType,  options).toPromise();
    }

    /**
     * Get a list of revisions by part number.
     * @param param the request object
     */
    public getRevisionByPartNumber(param: RevisionApiGetRevisionByPartNumberRequest, options?: Configuration): Promise<void> {
        return this.api.getRevisionByPartNumber(param.cid, param.pnum, param.revision, param.elementType,  options).toPromise();
    }

    /**
     * Get a list of all revisions for an element in a company-owned document.
     * @param param the request object
     */
    public getRevisionHistoryInCompanyByElementIdWithHttpInfo(param: RevisionApiGetRevisionHistoryInCompanyByElementIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getRevisionHistoryInCompanyByElementIdWithHttpInfo(param.cid, param.did, param.wv, param.wvid, param.eid, param.elementType, param.linkDocumentId, param.configuration, param.fillApprovers, param.fillExportPermission,  options).toPromise();
    }

    /**
     * Get a list of all revisions for an element in a company-owned document.
     * @param param the request object
     */
    public getRevisionHistoryInCompanyByElementId(param: RevisionApiGetRevisionHistoryInCompanyByElementIdRequest, options?: Configuration): Promise<void> {
        return this.api.getRevisionHistoryInCompanyByElementId(param.cid, param.did, param.wv, param.wvid, param.eid, param.elementType, param.linkDocumentId, param.configuration, param.fillApprovers, param.fillExportPermission,  options).toPromise();
    }

    /**
     * Get a list of all revisions for a part in a company-owned document by part ID.
     * @param param the request object
     */
    public getRevisionHistoryInCompanyByPartIdWithHttpInfo(param: RevisionApiGetRevisionHistoryInCompanyByPartIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getRevisionHistoryInCompanyByPartIdWithHttpInfo(param.cid, param.did, param.wv, param.wvid, param.eid, param.pid, param.configuration, param.linkDocumentId, param.fillApprovers, param.fillExportPermission,  options).toPromise();
    }

    /**
     * Get a list of all revisions for a part in a company-owned document by part ID.
     * @param param the request object
     */
    public getRevisionHistoryInCompanyByPartId(param: RevisionApiGetRevisionHistoryInCompanyByPartIdRequest, options?: Configuration): Promise<void> {
        return this.api.getRevisionHistoryInCompanyByPartId(param.cid, param.did, param.wv, param.wvid, param.eid, param.pid, param.configuration, param.linkDocumentId, param.fillApprovers, param.fillExportPermission,  options).toPromise();
    }

    /**
     * You can also request `elementType` in addition to `partNumber` since companies may or may not allow drawings to share part numbers with their parts/assemblies. 
     * Get a list of all revisions for a part or element in a company-owned document by part number.
     * @param param the request object
     */
    public getRevisionHistoryInCompanyByPartNumberWithHttpInfo(param: RevisionApiGetRevisionHistoryInCompanyByPartNumberRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getRevisionHistoryInCompanyByPartNumberWithHttpInfo(param.cid, param.pnum, param.elementType, param.fillApprovers, param.fillExportPermission,  options).toPromise();
    }

    /**
     * You can also request `elementType` in addition to `partNumber` since companies may or may not allow drawings to share part numbers with their parts/assemblies. 
     * Get a list of all revisions for a part or element in a company-owned document by part number.
     * @param param the request object
     */
    public getRevisionHistoryInCompanyByPartNumber(param: RevisionApiGetRevisionHistoryInCompanyByPartNumberRequest, options?: Configuration): Promise<void> {
        return this.api.getRevisionHistoryInCompanyByPartNumber(param.cid, param.pnum, param.elementType, param.fillApprovers, param.fillExportPermission,  options).toPromise();
    }

}

import { ObservableSketchApi } from "./ObservableAPI";
import { SketchApiRequestFactory, SketchApiResponseProcessor} from "../apis/SketchApi";

export interface SketchApiGetSketchBoundingBoxesRequest {
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchBoundingBoxes
     */
    did: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchBoundingBoxes
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchBoundingBoxes
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchBoundingBoxes
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchBoundingBoxes
     */
    sid: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchBoundingBoxes
     */
    configuration?: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchBoundingBoxes
     */
    linkDocumentId?: string
}

export interface SketchApiGetSketchInfoRequest {
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchInfo
     */
    did: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchInfo
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchInfo
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchInfo
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchInfo
     */
    configuration?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof SketchApigetSketchInfo
     */
    sketchId?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof SketchApigetSketchInfo
     */
    output3D?: boolean
    /**
     * 
     * @type boolean
     * @memberof SketchApigetSketchInfo
     */
    curvePoints?: boolean
    /**
     * 
     * @type boolean
     * @memberof SketchApigetSketchInfo
     */
    includeGeometry?: boolean
    /**
     * 
     * @type string
     * @memberof SketchApigetSketchInfo
     */
    linkDocumentId?: string
}

export interface SketchApiGetTessellatedEntitiesRequest {
    /**
     * 
     * @type string
     * @memberof SketchApigetTessellatedEntities
     */
    did: string
    /**
     * 
     * @type string
     * @memberof SketchApigetTessellatedEntities
     */
    wvm: string
    /**
     * 
     * @type string
     * @memberof SketchApigetTessellatedEntities
     */
    wvmid: string
    /**
     * 
     * @type string
     * @memberof SketchApigetTessellatedEntities
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof SketchApigetTessellatedEntities
     */
    sid: string
    /**
     * 
     * @type string
     * @memberof SketchApigetTessellatedEntities
     */
    configuration?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof SketchApigetTessellatedEntities
     */
    entityId?: Array<string>
    /**
     * 
     * @type number
     * @memberof SketchApigetTessellatedEntities
     */
    angleTolerance?: number
    /**
     * 
     * @type number
     * @memberof SketchApigetTessellatedEntities
     */
    chordTolerance?: number
    /**
     * 
     * @type string
     * @memberof SketchApigetTessellatedEntities
     */
    linkDocumentId?: string
}

export class ObjectSketchApi {
    private api: ObservableSketchApi

    public constructor(configuration: Configuration, requestFactory?: SketchApiRequestFactory, responseProcessor?: SketchApiResponseProcessor) {
        this.api = new ObservableSketchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all bounding boxes for a sketch.
     * @param param the request object
     */
    public getSketchBoundingBoxesWithHttpInfo(param: SketchApiGetSketchBoundingBoxesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getSketchBoundingBoxesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.sid, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get all bounding boxes for a sketch.
     * @param param the request object
     */
    public getSketchBoundingBoxes(param: SketchApiGetSketchBoundingBoxesRequest, options?: Configuration): Promise<void> {
        return this.api.getSketchBoundingBoxes(param.did, param.wvm, param.wvmid, param.eid, param.sid, param.configuration, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get information for all sketches in Part Studio.
     * @param param the request object
     */
    public getSketchInfoWithHttpInfo(param: SketchApiGetSketchInfoRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getSketchInfoWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.configuration, param.sketchId, param.output3D, param.curvePoints, param.includeGeometry, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get information for all sketches in Part Studio.
     * @param param the request object
     */
    public getSketchInfo(param: SketchApiGetSketchInfoRequest, options?: Configuration): Promise<void> {
        return this.api.getSketchInfo(param.did, param.wvm, param.wvmid, param.eid, param.configuration, param.sketchId, param.output3D, param.curvePoints, param.includeGeometry, param.linkDocumentId,  options).toPromise();
    }

    /**
     * The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances.
     * Get the tessellations of a sketch in a Part Studio.
     * @param param the request object
     */
    public getTessellatedEntitiesWithHttpInfo(param: SketchApiGetTessellatedEntitiesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getTessellatedEntitiesWithHttpInfo(param.did, param.wvm, param.wvmid, param.eid, param.sid, param.configuration, param.entityId, param.angleTolerance, param.chordTolerance, param.linkDocumentId,  options).toPromise();
    }

    /**
     * The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances.
     * Get the tessellations of a sketch in a Part Studio.
     * @param param the request object
     */
    public getTessellatedEntities(param: SketchApiGetTessellatedEntitiesRequest, options?: Configuration): Promise<void> {
        return this.api.getTessellatedEntities(param.did, param.wvm, param.wvmid, param.eid, param.sid, param.configuration, param.entityId, param.angleTolerance, param.chordTolerance, param.linkDocumentId,  options).toPromise();
    }

}

import { ObservableTeamApi } from "./ObservableAPI";
import { TeamApiRequestFactory, TeamApiResponseProcessor} from "../apis/TeamApi";

export interface TeamApiFindRequest {
    /**
     * 
     * @type string
     * @memberof TeamApifind
     */
    prefix?: string
    /**
     * 
     * @type string
     * @memberof TeamApifind
     */
    uid?: string
    /**
     * 
     * @type string
     * @memberof TeamApifind
     */
    companyId?: string
    /**
     * 
     * @type boolean
     * @memberof TeamApifind
     */
    includeCompanyOwnedTeams?: boolean
}

export interface TeamApiGetMembersRequest {
    /**
     * 
     * @type string
     * @memberof TeamApigetMembers
     */
    tid: string
    /**
     * 
     * @type string
     * @memberof TeamApigetMembers
     */
    sortColumn?: string
    /**
     * 
     * @type string
     * @memberof TeamApigetMembers
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof TeamApigetMembers
     */
    offset?: number
    /**
     * 
     * @type number
     * @memberof TeamApigetMembers
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof TeamApigetMembers
     */
    q?: string
}

export interface TeamApiGetTeamRequest {
    /**
     * 
     * @type string
     * @memberof TeamApigetTeam
     */
    tid: string
}

export class ObjectTeamApi {
    private api: ObservableTeamApi

    public constructor(configuration: Configuration, requestFactory?: TeamApiRequestFactory, responseProcessor?: TeamApiResponseProcessor) {
        this.api = new ObservableTeamApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a list of all teams the current user belongs to.
     * @param param the request object
     */
    public findWithHttpInfo(param: TeamApiFindRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.findWithHttpInfo(param.prefix, param.uid, param.companyId, param.includeCompanyOwnedTeams,  options).toPromise();
    }

    /**
     * Get a list of all teams the current user belongs to.
     * @param param the request object
     */
    public find(param: TeamApiFindRequest = {}, options?: Configuration): Promise<void> {
        return this.api.find(param.prefix, param.uid, param.companyId, param.includeCompanyOwnedTeams,  options).toPromise();
    }

    /**
     * Returns a maximum of 20 per page.
     * Get a list of a team\'s members.
     * @param param the request object
     */
    public getMembersWithHttpInfo(param: TeamApiGetMembersRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getMembersWithHttpInfo(param.tid, param.sortColumn, param.sortOrder, param.offset, param.limit, param.q,  options).toPromise();
    }

    /**
     * Returns a maximum of 20 per page.
     * Get a list of a team\'s members.
     * @param param the request object
     */
    public getMembers(param: TeamApiGetMembersRequest, options?: Configuration): Promise<void> {
        return this.api.getMembers(param.tid, param.sortColumn, param.sortOrder, param.offset, param.limit, param.q,  options).toPromise();
    }

    /**
     * Get team information by team ID.
     * @param param the request object
     */
    public getTeamWithHttpInfo(param: TeamApiGetTeamRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getTeamWithHttpInfo(param.tid,  options).toPromise();
    }

    /**
     * Get team information by team ID.
     * @param param the request object
     */
    public getTeam(param: TeamApiGetTeamRequest, options?: Configuration): Promise<void> {
        return this.api.getTeam(param.tid,  options).toPromise();
    }

}

import { ObservableThumbnailApi } from "./ObservableAPI";
import { ThumbnailApiRequestFactory, ThumbnailApiResponseProcessor} from "../apis/ThumbnailApi";

export interface ThumbnailApiDeleteApplicationThumbnailsRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof ThumbnailApideleteApplicationThumbnails
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof ThumbnailApideleteApplicationThumbnails
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof ThumbnailApideleteApplicationThumbnails
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof ThumbnailApideleteApplicationThumbnails
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof ThumbnailApideleteApplicationThumbnails
     */
    linkDocumentId?: string
}

export interface ThumbnailApiGetDocumentDefaultThumbnailWithSizeRequest {
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetDocumentDefaultThumbnailWithSize
     */
    did: string
    /**
     * the generated thumbnail size in pixels, widthxheigth
     * @type string
     * @memberof ThumbnailApigetDocumentDefaultThumbnailWithSize
     */
    sz: string
    /**
     * Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @type string
     * @memberof ThumbnailApigetDocumentDefaultThumbnailWithSize
     */
    t?: string
    /**
     * Controls the return of the default image, if thumbnail is not available
     * @type string
     * @memberof ThumbnailApigetDocumentDefaultThumbnailWithSize
     */
    skipDefaultImage?: string
}

export interface ThumbnailApiGetDocumentThumbnailRequest {
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetDocumentThumbnail
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetDocumentThumbnail
     */
    wid: string
}

export interface ThumbnailApiGetDocumentThumbnailWithSizeRequest {
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetDocumentThumbnailWithSize
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetDocumentThumbnailWithSize
     */
    wid: string
    /**
     * the generated thumbnail size in pixels, widthxheigth
     * @type string
     * @memberof ThumbnailApigetDocumentThumbnailWithSize
     */
    sz: string
    /**
     * Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @type string
     * @memberof ThumbnailApigetDocumentThumbnailWithSize
     */
    t?: string
    /**
     * Controls the return of the default image, if thumbnail is not available
     * @type string
     * @memberof ThumbnailApigetDocumentThumbnailWithSize
     */
    skipDefaultImage?: string
}

export interface ThumbnailApiGetElementThumbnailRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof ThumbnailApigetElementThumbnail
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof ThumbnailApigetElementThumbnail
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof ThumbnailApigetElementThumbnail
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof ThumbnailApigetElementThumbnail
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof ThumbnailApigetElementThumbnail
     */
    linkDocumentId?: string
}

export interface ThumbnailApiGetElementThumbnailWithApiConfigurationRequest {
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    eid: string
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    cid: string
    /**
     * the generated thumbnail size in pixels, widthxheigth
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    sz: string
    /**
     * Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    t?: string
    /**
     * Controls the return of the default image, if thumbnail is not available
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    skipDefaultImage?: string
    /**
     * 
     * @type boolean
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    rejectEmpty?: boolean
    /**
     * 
     * @type boolean
     * @memberof ThumbnailApigetElementThumbnailWithApiConfiguration
     */
    requireConfigMatch?: boolean
}

export interface ThumbnailApiGetElementThumbnailWithSizeRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    eid: string
    /**
     * the generated thumbnail size in pixels, widthxheigth
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    sz: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    linkDocumentId?: string
    /**
     * Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    t?: string
    /**
     * Controls the return of the default image, if thumbnail is not available
     * @type string
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    skipDefaultImage?: string
    /**
     * 
     * @type boolean
     * @memberof ThumbnailApigetElementThumbnailWithSize
     */
    rejectEmpty?: boolean
}

export interface ThumbnailApiGetThumbnailForDocumentRequest {
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetThumbnailForDocument
     */
    did: string
}

export interface ThumbnailApiGetThumbnailForDocumentAndVersionRequest {
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetThumbnailForDocumentAndVersion
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetThumbnailForDocumentAndVersion
     */
    vid: string
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetThumbnailForDocumentAndVersion
     */
    linkDocumentId?: string
}

export interface ThumbnailApiGetThumbnailForDocumentAndVersionOldRequest {
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetThumbnailForDocumentAndVersionOld
     */
    did: string
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetThumbnailForDocumentAndVersionOld
     */
    vid: string
}

export interface ThumbnailApiGetThumbnailForDocumentOldRequest {
    /**
     * 
     * @type string
     * @memberof ThumbnailApigetThumbnailForDocumentOld
     */
    did: string
}

export interface ThumbnailApiSetApplicationElementThumbnailRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof ThumbnailApisetApplicationElementThumbnail
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof ThumbnailApisetApplicationElementThumbnail
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof ThumbnailApisetApplicationElementThumbnail
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof ThumbnailApisetApplicationElementThumbnail
     */
    eid: string
    /**
     * 
     * @type BTApplicationElementThumbnailParamsArray
     * @memberof ThumbnailApisetApplicationElementThumbnail
     */
    bTApplicationElementThumbnailParamsArray: BTApplicationElementThumbnailParamsArray
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof ThumbnailApisetApplicationElementThumbnail
     */
    linkDocumentId?: string
    /**
     * 
     * @type boolean
     * @memberof ThumbnailApisetApplicationElementThumbnail
     */
    overwrite?: boolean
}

export class ObjectThumbnailApi {
    private api: ObservableThumbnailApi

    public constructor(configuration: Configuration, requestFactory?: ThumbnailApiRequestFactory, responseProcessor?: ThumbnailApiResponseProcessor) {
        this.api = new ObservableThumbnailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an application element\'s thumbnail and images for the given document, workspace or version, and element combination.
     * Delete an element\'s thumbnail.
     * @param param the request object
     */
    public deleteApplicationThumbnailsWithHttpInfo(param: ThumbnailApiDeleteApplicationThumbnailsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteApplicationThumbnailsWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Deletes an application element\'s thumbnail and images for the given document, workspace or version, and element combination.
     * Delete an element\'s thumbnail.
     * @param param the request object
     */
    public deleteApplicationThumbnails(param: ThumbnailApiDeleteApplicationThumbnailsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApplicationThumbnails(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Retrieve default thumbnail information for a document, with a specified size in pixels by document ID.
     * @param param the request object
     */
    public getDocumentDefaultThumbnailWithSizeWithHttpInfo(param: ThumbnailApiGetDocumentDefaultThumbnailWithSizeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentDefaultThumbnailWithSizeWithHttpInfo(param.did, param.sz, param.t, param.skipDefaultImage,  options).toPromise();
    }

    /**
     * Retrieve default thumbnail information for a document, with a specified size in pixels by document ID.
     * @param param the request object
     */
    public getDocumentDefaultThumbnailWithSize(param: ThumbnailApiGetDocumentDefaultThumbnailWithSizeRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentDefaultThumbnailWithSize(param.did, param.sz, param.t, param.skipDefaultImage,  options).toPromise();
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a workspace.
     * @param param the request object
     */
    public getDocumentThumbnailWithHttpInfo(param: ThumbnailApiGetDocumentThumbnailRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentThumbnailWithHttpInfo(param.did, param.wid,  options).toPromise();
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a workspace.
     * @param param the request object
     */
    public getDocumentThumbnail(param: ThumbnailApiGetDocumentThumbnailRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentThumbnail(param.did, param.wid,  options).toPromise();
    }

    /**
     * * By default, returns thumbnail image for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail image with the given size for a document.
     * @param param the request object
     */
    public getDocumentThumbnailWithSizeWithHttpInfo(param: ThumbnailApiGetDocumentThumbnailWithSizeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentThumbnailWithSizeWithHttpInfo(param.did, param.wid, param.sz, param.t, param.skipDefaultImage,  options).toPromise();
    }

    /**
     * * By default, returns thumbnail image for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail image with the given size for a document.
     * @param param the request object
     */
    public getDocumentThumbnailWithSize(param: ThumbnailApiGetDocumentThumbnailWithSizeRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentThumbnailWithSize(param.did, param.wid, param.sz, param.t, param.skipDefaultImage,  options).toPromise();
    }

    /**
     * Returns thumbnail info for the given document, workspace or version, and element.
     * Get the thumbnail info structure for an element.
     * @param param the request object
     */
    public getElementThumbnailWithHttpInfo(param: ThumbnailApiGetElementThumbnailRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getElementThumbnailWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Returns thumbnail info for the given document, workspace or version, and element.
     * Get the thumbnail info structure for an element.
     * @param param the request object
     */
    public getElementThumbnail(param: ThumbnailApiGetElementThumbnailRequest, options?: Configuration): Promise<void> {
        return this.api.getElementThumbnail(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Returns the thumbnail image for an element at a specified version, with the given configuration.
     * Get the thumbnail image with the given configuration for an element.
     * @param param the request object
     */
    public getElementThumbnailWithApiConfigurationWithHttpInfo(param: ThumbnailApiGetElementThumbnailWithApiConfigurationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getElementThumbnailWithApiConfigurationWithHttpInfo(param.did, param.wid, param.eid, param.cid, param.sz, param.t, param.skipDefaultImage, param.rejectEmpty, param.requireConfigMatch,  options).toPromise();
    }

    /**
     * Returns the thumbnail image for an element at a specified version, with the given configuration.
     * Get the thumbnail image with the given configuration for an element.
     * @param param the request object
     */
    public getElementThumbnailWithApiConfiguration(param: ThumbnailApiGetElementThumbnailWithApiConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.getElementThumbnailWithApiConfiguration(param.did, param.wid, param.eid, param.cid, param.sz, param.t, param.skipDefaultImage, param.rejectEmpty, param.requireConfigMatch,  options).toPromise();
    }

    /**
     * Get the thumbnail image with the given size for an element.
     * @param param the request object
     */
    public getElementThumbnailWithSizeWithHttpInfo(param: ThumbnailApiGetElementThumbnailWithSizeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getElementThumbnailWithSizeWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.sz, param.linkDocumentId, param.t, param.skipDefaultImage, param.rejectEmpty,  options).toPromise();
    }

    /**
     * Get the thumbnail image with the given size for an element.
     * @param param the request object
     */
    public getElementThumbnailWithSize(param: ThumbnailApiGetElementThumbnailWithSizeRequest, options?: Configuration): Promise<void> {
        return this.api.getElementThumbnailWithSize(param.did, param.wv, param.wvid, param.eid, param.sz, param.linkDocumentId, param.t, param.skipDefaultImage, param.rejectEmpty,  options).toPromise();
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * The default workspace may vary by user; the image served depends on the signed-in user. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a document in the default workspace.
     * @param param the request object
     */
    public getThumbnailForDocumentWithHttpInfo(param: ThumbnailApiGetThumbnailForDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getThumbnailForDocumentWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * The default workspace may vary by user; the image served depends on the signed-in user. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a document in the default workspace.
     * @param param the request object
     */
    public getThumbnailForDocument(param: ThumbnailApiGetThumbnailForDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.getThumbnailForDocument(param.did,  options).toPromise();
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a version of a document.
     * @param param the request object
     */
    public getThumbnailForDocumentAndVersionWithHttpInfo(param: ThumbnailApiGetThumbnailForDocumentAndVersionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getThumbnailForDocumentAndVersionWithHttpInfo(param.did, param.vid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a version of a document.
     * @param param the request object
     */
    public getThumbnailForDocumentAndVersion(param: ThumbnailApiGetThumbnailForDocumentAndVersionRequest, options?: Configuration): Promise<void> {
        return this.api.getThumbnailForDocumentAndVersion(param.did, param.vid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocumentAndVersion` instead.
     * @param param the request object
     */
    public getThumbnailForDocumentAndVersionOldWithHttpInfo(param: ThumbnailApiGetThumbnailForDocumentAndVersionOldRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getThumbnailForDocumentAndVersionOldWithHttpInfo(param.did, param.vid,  options).toPromise();
    }

    /**
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocumentAndVersion` instead.
     * @param param the request object
     */
    public getThumbnailForDocumentAndVersionOld(param: ThumbnailApiGetThumbnailForDocumentAndVersionOldRequest, options?: Configuration): Promise<void> {
        return this.api.getThumbnailForDocumentAndVersionOld(param.did, param.vid,  options).toPromise();
    }

    /**
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocument` instead.
     * @param param the request object
     */
    public getThumbnailForDocumentOldWithHttpInfo(param: ThumbnailApiGetThumbnailForDocumentOldRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getThumbnailForDocumentOldWithHttpInfo(param.did,  options).toPromise();
    }

    /**
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocument` instead.
     * @param param the request object
     */
    public getThumbnailForDocumentOld(param: ThumbnailApiGetThumbnailForDocumentOldRequest, options?: Configuration): Promise<void> {
        return this.api.getThumbnailForDocumentOld(param.did,  options).toPromise();
    }

    /**
     * * Allows 3rd-party applications to set thumbnails for their elements.  * Application elements can have both primary and secondary thumbnails. A primary thumbnail represents the top-level of the element. A secondary thumbnail can represent sub-components of the element (e.g., a drawing sheet). * To update one or more thumbnails, you must set the overwrite query param to `true` and supply the entire set of thumbnails. All previous thumbnails will be deleted prior to updating the element with the latest images.
     * Set the thumbnail image for an application element.
     * @param param the request object
     */
    public setApplicationElementThumbnailWithHttpInfo(param: ThumbnailApiSetApplicationElementThumbnailRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setApplicationElementThumbnailWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.bTApplicationElementThumbnailParamsArray, param.linkDocumentId, param.overwrite,  options).toPromise();
    }

    /**
     * * Allows 3rd-party applications to set thumbnails for their elements.  * Application elements can have both primary and secondary thumbnails. A primary thumbnail represents the top-level of the element. A secondary thumbnail can represent sub-components of the element (e.g., a drawing sheet). * To update one or more thumbnails, you must set the overwrite query param to `true` and supply the entire set of thumbnails. All previous thumbnails will be deleted prior to updating the element with the latest images.
     * Set the thumbnail image for an application element.
     * @param param the request object
     */
    public setApplicationElementThumbnail(param: ThumbnailApiSetApplicationElementThumbnailRequest, options?: Configuration): Promise<void> {
        return this.api.setApplicationElementThumbnail(param.did, param.wv, param.wvid, param.eid, param.bTApplicationElementThumbnailParamsArray, param.linkDocumentId, param.overwrite,  options).toPromise();
    }

}

import { ObservableTranslationApi } from "./ObservableAPI";
import { TranslationApiRequestFactory, TranslationApiResponseProcessor} from "../apis/TranslationApi";

export interface TranslationApiCreateTranslationRequest {
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    did: string
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    wid: string
    /**
     * File to upload.
     * @type HttpFile
     * @memberof TranslationApicreateTranslation
     */
    file?: HttpFile
    /**
     * If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    allowFaultyParts?: boolean
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    createComposite?: boolean
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    createDrawingIfPossible?: boolean
    /**
     * If the filename contains non-ASCII characters. Use this field to store the filename.
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    encodedFilename?: string
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    extractAssemblyHierarchy?: boolean
    /**
     * If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    flattenAssemblies?: boolean
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    formatName?: string
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    joinAdjacentSurfaces?: boolean
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    locationElementId?: string
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    locationGroupId?: string
    /**
     * 
     * @type number
     * @memberof TranslationApicreateTranslation
     */
    locationPosition?: number
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    notifyUser?: boolean
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    ownerId?: string
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    parentId?: string
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    projectId?: string
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    _public?: boolean
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    onePartPerDoc?: boolean
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    splitAssembliesIntoMultipleDocuments?: boolean
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    storeInDocument?: boolean
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    translate?: boolean
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    unit?: string
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    uploadId?: string
    /**
     * 
     * @type string
     * @memberof TranslationApicreateTranslation
     */
    versionString?: string
    /**
     * Face appearances defined on models will be imported.
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    importAppearances?: boolean
    /**
     * If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    yAxisIsUp?: boolean
    /**
     * 
     * @type boolean
     * @memberof TranslationApicreateTranslation
     */
    importWithinDocument?: boolean
}

export interface TranslationApiDeleteTranslationRequest {
    /**
     * 
     * @type string
     * @memberof TranslationApideleteTranslation
     */
    tid: string
}

export interface TranslationApiGetAllTranslatorFormatsRequest {
}

export interface TranslationApiGetDocumentTranslationsRequest {
    /**
     * 
     * @type string
     * @memberof TranslationApigetDocumentTranslations
     */
    did: string
    /**
     * 
     * @type number
     * @memberof TranslationApigetDocumentTranslations
     */
    offset?: number
    /**
     * 
     * @type number
     * @memberof TranslationApigetDocumentTranslations
     */
    limit?: number
}

export interface TranslationApiGetTranslationRequest {
    /**
     * 
     * @type string
     * @memberof TranslationApigetTranslation
     */
    tid: string
}

export class ObjectTranslationApi {
    private api: ObservableTranslationApi

    public constructor(configuration: Configuration, requestFactory?: TranslationApiRequestFactory, responseProcessor?: TranslationApiResponseProcessor) {
        this.api = new ObservableTranslationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either DONE or FAILED. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`).
     * Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies.
     * @param param the request object
     */
    public createTranslationWithHttpInfo(param: TranslationApiCreateTranslationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createTranslationWithHttpInfo(param.did, param.wid, param.file, param.allowFaultyParts, param.createComposite, param.createDrawingIfPossible, param.encodedFilename, param.extractAssemblyHierarchy, param.flattenAssemblies, param.formatName, param.joinAdjacentSurfaces, param.locationElementId, param.locationGroupId, param.locationPosition, param.notifyUser, param.ownerId, param.parentId, param.projectId, param._public, param.onePartPerDoc, param.splitAssembliesIntoMultipleDocuments, param.storeInDocument, param.translate, param.unit, param.uploadId, param.versionString, param.importAppearances, param.yAxisIsUp, param.importWithinDocument,  options).toPromise();
    }

    /**
     * The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either DONE or FAILED. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`).
     * Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies.
     * @param param the request object
     */
    public createTranslation(param: TranslationApiCreateTranslationRequest, options?: Configuration): Promise<void> {
        return this.api.createTranslation(param.did, param.wid, param.file, param.allowFaultyParts, param.createComposite, param.createDrawingIfPossible, param.encodedFilename, param.extractAssemblyHierarchy, param.flattenAssemblies, param.formatName, param.joinAdjacentSurfaces, param.locationElementId, param.locationGroupId, param.locationPosition, param.notifyUser, param.ownerId, param.parentId, param.projectId, param._public, param.onePartPerDoc, param.splitAssembliesIntoMultipleDocuments, param.storeInDocument, param.translate, param.unit, param.uploadId, param.versionString, param.importAppearances, param.yAxisIsUp, param.importWithinDocument,  options).toPromise();
    }

    /**
     * Delete a translation request.
     * @param param the request object
     */
    public deleteTranslationWithHttpInfo(param: TranslationApiDeleteTranslationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTranslationWithHttpInfo(param.tid,  options).toPromise();
    }

    /**
     * Delete a translation request.
     * @param param the request object
     */
    public deleteTranslation(param: TranslationApiDeleteTranslationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTranslation(param.tid,  options).toPromise();
    }

    /**
     * Note that we don\'t necessarily support both import and export for any given format. Please use specific export APIs, such as `exportPartStudioStl`, for STL and Parasolid exports.
     * Get a list of formats this translation can use.
     * @param param the request object
     */
    public getAllTranslatorFormatsWithHttpInfo(param: TranslationApiGetAllTranslatorFormatsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAllTranslatorFormatsWithHttpInfo( options).toPromise();
    }

    /**
     * Note that we don\'t necessarily support both import and export for any given format. Please use specific export APIs, such as `exportPartStudioStl`, for STL and Parasolid exports.
     * Get a list of formats this translation can use.
     * @param param the request object
     */
    public getAllTranslatorFormats(param: TranslationApiGetAllTranslatorFormatsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getAllTranslatorFormats( options).toPromise();
    }

    /**
     * Get information on an in-progress or completed translation by document ID.
     * @param param the request object
     */
    public getDocumentTranslationsWithHttpInfo(param: TranslationApiGetDocumentTranslationsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDocumentTranslationsWithHttpInfo(param.did, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Get information on an in-progress or completed translation by document ID.
     * @param param the request object
     */
    public getDocumentTranslations(param: TranslationApiGetDocumentTranslationsRequest, options?: Configuration): Promise<void> {
        return this.api.getDocumentTranslations(param.did, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Get information on an in-progress or completed translation by translation ID.
     * @param param the request object
     */
    public getTranslationWithHttpInfo(param: TranslationApiGetTranslationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getTranslationWithHttpInfo(param.tid,  options).toPromise();
    }

    /**
     * Get information on an in-progress or completed translation by translation ID.
     * @param param the request object
     */
    public getTranslation(param: TranslationApiGetTranslationRequest, options?: Configuration): Promise<void> {
        return this.api.getTranslation(param.tid,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiGetUserSettingsRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUserSettings
     */
    uid: string
    /**
     * 
     * @type boolean
     * @memberof UserApigetUserSettings
     */
    includematerials?: boolean
}

export interface UserApiGetUserSettingsCurrentLoggedInUserRequest {
    /**
     * 
     * @type boolean
     * @memberof UserApigetUserSettingsCurrentLoggedInUser
     */
    includematerials?: boolean
}

export interface UserApiSessionRequest {
    /**
     * 
     * @type BTLoginParams
     * @memberof UserApisession
     */
    bTLoginParams: BTLoginParams
}

export interface UserApiSessionInfoRequest {
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.
     * Get the user settings for any user in your organization (admins only).
     * @param param the request object
     */
    public getUserSettingsWithHttpInfo(param: UserApiGetUserSettingsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getUserSettingsWithHttpInfo(param.uid, param.includematerials,  options).toPromise();
    }

    /**
     * * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.
     * Get the user settings for any user in your organization (admins only).
     * @param param the request object
     */
    public getUserSettings(param: UserApiGetUserSettingsRequest, options?: Configuration): Promise<void> {
        return this.api.getUserSettings(param.uid, param.includematerials,  options).toPromise();
    }

    /**
     * * Non-admins can call this API for their own user ID.  * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.
     * Get the user settings for the signed-in user (i.e., you) for the current session.
     * @param param the request object
     */
    public getUserSettingsCurrentLoggedInUserWithHttpInfo(param: UserApiGetUserSettingsCurrentLoggedInUserRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getUserSettingsCurrentLoggedInUserWithHttpInfo(param.includematerials,  options).toPromise();
    }

    /**
     * * Non-admins can call this API for their own user ID.  * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.
     * Get the user settings for the signed-in user (i.e., you) for the current session.
     * @param param the request object
     */
    public getUserSettingsCurrentLoggedInUser(param: UserApiGetUserSettingsCurrentLoggedInUserRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getUserSettingsCurrentLoggedInUser(param.includematerials,  options).toPromise();
    }

    /**
     * Returned information depends on caller\'s `OAuth2ReadPll` scope.
     * Authenticate a user\'s Onshape credentials, and create a session.
     * @param param the request object
     */
    public sessionWithHttpInfo(param: UserApiSessionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sessionWithHttpInfo(param.bTLoginParams,  options).toPromise();
    }

    /**
     * Returned information depends on caller\'s `OAuth2ReadPll` scope.
     * Authenticate a user\'s Onshape credentials, and create a session.
     * @param param the request object
     */
    public session(param: UserApiSessionRequest, options?: Configuration): Promise<void> {
        return this.api.session(param.bTLoginParams,  options).toPromise();
    }

    /**
     * Returned information depends on caller\'s `OAuth2ReadPll` scope.
     * Get the session information for an authenticated (signed-in) user.
     * @param param the request object
     */
    public sessionInfoWithHttpInfo(param: UserApiSessionInfoRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sessionInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Returned information depends on caller\'s `OAuth2ReadPll` scope.
     * Get the session information for an authenticated (signed-in) user.
     * @param param the request object
     */
    public sessionInfo(param: UserApiSessionInfoRequest = {}, options?: Configuration): Promise<void> {
        return this.api.sessionInfo( options).toPromise();
    }

}

import { ObservableVariablesApi } from "./ObservableAPI";
import { VariablesApiRequestFactory, VariablesApiResponseProcessor} from "../apis/VariablesApi";

export interface VariablesApiCreateVariableStudioRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof VariablesApicreateVariableStudio
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof VariablesApicreateVariableStudio
     */
    wid: string
    /**
     * 
     * @type BTModelElementParams
     * @memberof VariablesApicreateVariableStudio
     */
    bTModelElementParams: BTModelElementParams
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof VariablesApicreateVariableStudio
     */
    linkDocumentId?: string
}

export interface VariablesApiGetVariableStudioReferencesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof VariablesApigetVariableStudioReferences
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof VariablesApigetVariableStudioReferences
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof VariablesApigetVariableStudioReferences
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof VariablesApigetVariableStudioReferences
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof VariablesApigetVariableStudioReferences
     */
    linkDocumentId?: string
}

export interface VariablesApiGetVariableStudioScopeRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof VariablesApigetVariableStudioScope
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof VariablesApigetVariableStudioScope
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof VariablesApigetVariableStudioScope
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof VariablesApigetVariableStudioScope
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof VariablesApigetVariableStudioScope
     */
    linkDocumentId?: string
}

export interface VariablesApiGetVariablesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof VariablesApigetVariables
     */
    did: string
    /**
     * Indicates which of workspace (w) or version (v) id is specified below.
     * @type &#39;w&#39; | &#39;v&#39;
     * @memberof VariablesApigetVariables
     */
    wv: 'w' | 'v'
    /**
     * The id of the workspace, version in which the operation should be performed.
     * @type string
     * @memberof VariablesApigetVariables
     */
    wvid: string
    /**
     * The id of the element in which to perform the operation.
     * @type string
     * @memberof VariablesApigetVariables
     */
    eid: string
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof VariablesApigetVariables
     */
    linkDocumentId?: string
    /**
     * 
     * @type string
     * @memberof VariablesApigetVariables
     */
    configuration?: string
    /**
     * 
     * @type boolean
     * @memberof VariablesApigetVariables
     */
    includeValuesAndReferencedVariables?: boolean
}

export interface VariablesApiSetVariableStudioReferencesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof VariablesApisetVariableStudioReferences
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof VariablesApisetVariableStudioReferences
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof VariablesApisetVariableStudioReferences
     */
    eid: string
    /**
     * 
     * @type BTVariableStudioReferenceListInfo
     * @memberof VariablesApisetVariableStudioReferences
     */
    bTVariableStudioReferenceListInfo: BTVariableStudioReferenceListInfo
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof VariablesApisetVariableStudioReferences
     */
    linkDocumentId?: string
}

export interface VariablesApiSetVariableStudioScopeRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof VariablesApisetVariableStudioScope
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof VariablesApisetVariableStudioScope
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof VariablesApisetVariableStudioScope
     */
    eid: string
    /**
     * 
     * @type BTVariableStudioScopeInfo
     * @memberof VariablesApisetVariableStudioScope
     */
    bTVariableStudioScopeInfo: BTVariableStudioScopeInfo
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof VariablesApisetVariableStudioScope
     */
    linkDocumentId?: string
}

export interface VariablesApiSetVariablesRequest {
    /**
     * The id of the document in which to perform the operation.
     * @type string
     * @memberof VariablesApisetVariables
     */
    did: string
    /**
     * The id of the workspace in which to perform the operation.
     * @type string
     * @memberof VariablesApisetVariables
     */
    wid: string
    /**
     * 
     * @type string
     * @memberof VariablesApisetVariables
     */
    eid: string
    /**
     * 
     * @type Array&lt;BTVariableParams&gt;
     * @memberof VariablesApisetVariables
     */
    bTVariableParams: Array<BTVariableParams>
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type string
     * @memberof VariablesApisetVariables
     */
    linkDocumentId?: string
}

export class ObjectVariablesApi {
    private api: ObservableVariablesApi

    public constructor(configuration: Configuration, requestFactory?: VariablesApiRequestFactory, responseProcessor?: VariablesApiResponseProcessor) {
        this.api = new ObservableVariablesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Variable Studio in a document and workspace.
     * @param param the request object
     */
    public createVariableStudioWithHttpInfo(param: VariablesApiCreateVariableStudioRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createVariableStudioWithHttpInfo(param.did, param.wid, param.bTModelElementParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Create a new Variable Studio in a document and workspace.
     * @param param the request object
     */
    public createVariableStudio(param: VariablesApiCreateVariableStudioRequest, options?: Configuration): Promise<void> {
        return this.api.createVariableStudio(param.did, param.wid, param.bTModelElementParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the Variable Studio references for an element.
     * @param param the request object
     */
    public getVariableStudioReferencesWithHttpInfo(param: VariablesApiGetVariableStudioReferencesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getVariableStudioReferencesWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the Variable Studio references for an element.
     * @param param the request object
     */
    public getVariableStudioReferences(param: VariablesApiGetVariableStudioReferencesRequest, options?: Configuration): Promise<void> {
        return this.api.getVariableStudioReferences(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the scope of a Variable Studio.
     * @param param the request object
     */
    public getVariableStudioScopeWithHttpInfo(param: VariablesApiGetVariableStudioScopeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getVariableStudioScopeWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the scope of a Variable Studio.
     * @param param the request object
     */
    public getVariableStudioScope(param: VariablesApiGetVariableStudioScopeRequest, options?: Configuration): Promise<void> {
        return this.api.getVariableStudioScope(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Get the contents of all variable tables in an element.
     * @param param the request object
     */
    public getVariablesWithHttpInfo(param: VariablesApiGetVariablesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getVariablesWithHttpInfo(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId, param.configuration, param.includeValuesAndReferencedVariables,  options).toPromise();
    }

    /**
     * Get the contents of all variable tables in an element.
     * @param param the request object
     */
    public getVariables(param: VariablesApiGetVariablesRequest, options?: Configuration): Promise<void> {
        return this.api.getVariables(param.did, param.wv, param.wvid, param.eid, param.linkDocumentId, param.configuration, param.includeValuesAndReferencedVariables,  options).toPromise();
    }

    /**
     * Set the Variable Studio references for an element.
     * @param param the request object
     */
    public setVariableStudioReferencesWithHttpInfo(param: VariablesApiSetVariableStudioReferencesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setVariableStudioReferencesWithHttpInfo(param.did, param.wid, param.eid, param.bTVariableStudioReferenceListInfo, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Set the Variable Studio references for an element.
     * @param param the request object
     */
    public setVariableStudioReferences(param: VariablesApiSetVariableStudioReferencesRequest, options?: Configuration): Promise<void> {
        return this.api.setVariableStudioReferences(param.did, param.wid, param.eid, param.bTVariableStudioReferenceListInfo, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Set the scope the Variable Studio.
     * @param param the request object
     */
    public setVariableStudioScopeWithHttpInfo(param: VariablesApiSetVariableStudioScopeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setVariableStudioScopeWithHttpInfo(param.did, param.wid, param.eid, param.bTVariableStudioScopeInfo, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Set the scope the Variable Studio.
     * @param param the request object
     */
    public setVariableStudioScope(param: VariablesApiSetVariableStudioScopeRequest, options?: Configuration): Promise<void> {
        return this.api.setVariableStudioScope(param.did, param.wid, param.eid, param.bTVariableStudioScopeInfo, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Assign variables to a Variable Studio
     * @param param the request object
     */
    public setVariablesWithHttpInfo(param: VariablesApiSetVariablesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setVariablesWithHttpInfo(param.did, param.wid, param.eid, param.bTVariableParams, param.linkDocumentId,  options).toPromise();
    }

    /**
     * Assign variables to a Variable Studio
     * @param param the request object
     */
    public setVariables(param: VariablesApiSetVariablesRequest, options?: Configuration): Promise<void> {
        return this.api.setVariables(param.did, param.wid, param.eid, param.bTVariableParams, param.linkDocumentId,  options).toPromise();
    }

}

import { ObservableVersionApi } from "./ObservableAPI";
import { VersionApiRequestFactory, VersionApiResponseProcessor} from "../apis/VersionApi";

export interface VersionApiGetAllVersionsRequest {
}

export class ObjectVersionApi {
    private api: ObservableVersionApi

    public constructor(configuration: Configuration, requestFactory?: VersionApiRequestFactory, responseProcessor?: VersionApiResponseProcessor) {
        this.api = new ObservableVersionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all versions of the Onshape REST APIs.
     * @param param the request object
     */
    public getAllVersionsWithHttpInfo(param: VersionApiGetAllVersionsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAllVersionsWithHttpInfo( options).toPromise();
    }

    /**
     * Get all versions of the Onshape REST APIs.
     * @param param the request object
     */
    public getAllVersions(param: VersionApiGetAllVersionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getAllVersions( options).toPromise();
    }

}

import { ObservableWebhookApi } from "./ObservableAPI";
import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";

export interface WebhookApiCreateWebhookRequest {
    /**
     * 
     * @type BTWebhookParams
     * @memberof WebhookApicreateWebhook
     */
    bTWebhookParams?: BTWebhookParams
}

export interface WebhookApiGetWebhookRequest {
    /**
     * 
     * @type string
     * @memberof WebhookApigetWebhook
     */
    webhookid: string
}

export interface WebhookApiGetWebhooksRequest {
    /**
     * 
     * @type string
     * @memberof WebhookApigetWebhooks
     */
    company?: string
    /**
     * 
     * @type string
     * @memberof WebhookApigetWebhooks
     */
    user?: string
    /**
     * 
     * @type number
     * @memberof WebhookApigetWebhooks
     */
    offset?: number
    /**
     * 
     * @type number
     * @memberof WebhookApigetWebhooks
     */
    limit?: number
}

export interface WebhookApiPingWebhookRequest {
    /**
     * 
     * @type string
     * @memberof WebhookApipingWebhook
     */
    webhookid: string
}

export interface WebhookApiUnregisterWebhookRequest {
    /**
     * 
     * @type string
     * @memberof WebhookApiunregisterWebhook
     */
    webhookid: string
    /**
     * 
     * @type boolean
     * @memberof WebhookApiunregisterWebhook
     */
    blockNotification?: boolean
}

export interface WebhookApiUpdateWebhookRequest {
    /**
     * 
     * @type string
     * @memberof WebhookApiupdateWebhook
     */
    webhookid: string
    /**
     * 
     * @type BTWebhookParams
     * @memberof WebhookApiupdateWebhook
     */
    bTWebhookParams?: BTWebhookParams
}

export class ObjectWebhookApi {
    private api: ObservableWebhookApi

    public constructor(configuration: Configuration, requestFactory?: WebhookApiRequestFactory, responseProcessor?: WebhookApiResponseProcessor) {
        this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new webhook.
     * @param param the request object
     */
    public createWebhookWithHttpInfo(param: WebhookApiCreateWebhookRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createWebhookWithHttpInfo(param.bTWebhookParams,  options).toPromise();
    }

    /**
     * Create a new webhook.
     * @param param the request object
     */
    public createWebhook(param: WebhookApiCreateWebhookRequest = {}, options?: Configuration): Promise<void> {
        return this.api.createWebhook(param.bTWebhookParams,  options).toPromise();
    }

    /**
     * Get webhook info by webhook ID.
     * @param param the request object
     */
    public getWebhookWithHttpInfo(param: WebhookApiGetWebhookRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getWebhookWithHttpInfo(param.webhookid,  options).toPromise();
    }

    /**
     * Get webhook info by webhook ID.
     * @param param the request object
     */
    public getWebhook(param: WebhookApiGetWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.getWebhook(param.webhookid,  options).toPromise();
    }

    /**
     * Get a list of all webhooks registered by a user or company.
     * @param param the request object
     */
    public getWebhooksWithHttpInfo(param: WebhookApiGetWebhooksRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getWebhooksWithHttpInfo(param.company, param.user, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Get a list of all webhooks registered by a user or company.
     * @param param the request object
     */
    public getWebhooks(param: WebhookApiGetWebhooksRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getWebhooks(param.company, param.user, param.offset, param.limit,  options).toPromise();
    }

    /**
     * Ping a webhook.
     * @param param the request object
     */
    public pingWebhookWithHttpInfo(param: WebhookApiPingWebhookRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pingWebhookWithHttpInfo(param.webhookid,  options).toPromise();
    }

    /**
     * Ping a webhook.
     * @param param the request object
     */
    public pingWebhook(param: WebhookApiPingWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.pingWebhook(param.webhookid,  options).toPromise();
    }

    /**
     * Unregister a webhook.
     * @param param the request object
     */
    public unregisterWebhookWithHttpInfo(param: WebhookApiUnregisterWebhookRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unregisterWebhookWithHttpInfo(param.webhookid, param.blockNotification,  options).toPromise();
    }

    /**
     * Unregister a webhook.
     * @param param the request object
     */
    public unregisterWebhook(param: WebhookApiUnregisterWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.unregisterWebhook(param.webhookid, param.blockNotification,  options).toPromise();
    }

    /**
     * Update a webhook
     * Update a webhook.
     * @param param the request object
     */
    public updateWebhookWithHttpInfo(param: WebhookApiUpdateWebhookRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateWebhookWithHttpInfo(param.webhookid, param.bTWebhookParams,  options).toPromise();
    }

    /**
     * Update a webhook
     * Update a webhook.
     * @param param the request object
     */
    public updateWebhook(param: WebhookApiUpdateWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.updateWebhook(param.webhookid, param.bTWebhookParams,  options).toPromise();
    }

}

import { ObservableWorkflowApi } from "./ObservableAPI";
import { WorkflowApiRequestFactory, WorkflowApiResponseProcessor} from "../apis/WorkflowApi";

export interface WorkflowApiEnumerateObjectWorkflowsRequest {
    /**
     * The company or enterprise ID that owns the resource.
     * @type string
     * @memberof WorkflowApienumerateObjectWorkflows
     */
    cid: string
    /**
     * Optionally filter for specific workflowable types. Defaults to RELEASE and OBSOLETION
     * @type Array&lt;BTAPIWorkflowableType&gt;
     * @memberof WorkflowApienumerateObjectWorkflows
     */
    objectTypes?: Array<BTAPIWorkflowableType>
    /**
     * Optionally filter for specific workflow states like PENDING, RELEASED
     * @type Set&lt;string&gt;
     * @memberof WorkflowApienumerateObjectWorkflows
     */
    states?: Set<string>
    /**
     * The number of items to return in a single API call
     * @type number
     * @memberof WorkflowApienumerateObjectWorkflows
     */
    limit?: number
    /**
     * The earliest modification date of workflowable object to find.
     * @type Date
     * @memberof WorkflowApienumerateObjectWorkflows
     */
    modifiedAfter?: Date
}

export interface WorkflowApiGetActiveWorkflowsRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowApigetActiveWorkflows
     */
    documentId?: string
}

export interface WorkflowApiGetAllowedApproversRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowApigetAllowedApprovers
     */
    companyId: string
    /**
     * 
     * @type string
     * @memberof WorkflowApigetAllowedApprovers
     */
    q?: string
    /**
     * 
     * @type boolean
     * @memberof WorkflowApigetAllowedApprovers
     */
    expandTeams?: boolean
    /**
     * 
     * @type boolean
     * @memberof WorkflowApigetAllowedApprovers
     */
    includeSelf?: boolean
}

export interface WorkflowApiGetAuditLogRequest {
    /**
     * 
     * @type string
     * @memberof WorkflowApigetAuditLog
     */
    objectId: string
}

export class ObjectWorkflowApi {
    private api: ObservableWorkflowApi

    public constructor(configuration: Configuration, requestFactory?: WorkflowApiRequestFactory, responseProcessor?: WorkflowApiResponseProcessor) {
        this.api = new ObservableWorkflowApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * * For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time.  * Caller must be a company admin.  * Specify `modifiedAfter` and use the `next` URI for complete enumeration.
     * Enumerate all of a company\'s workflowable objects.
     * @param param the request object
     */
    public enumerateObjectWorkflowsWithHttpInfo(param: WorkflowApiEnumerateObjectWorkflowsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.enumerateObjectWorkflowsWithHttpInfo(param.cid, param.objectTypes, param.states, param.limit, param.modifiedAfter,  options).toPromise();
    }

    /**
     * * For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time.  * Caller must be a company admin.  * Specify `modifiedAfter` and use the `next` URI for complete enumeration.
     * Enumerate all of a company\'s workflowable objects.
     * @param param the request object
     */
    public enumerateObjectWorkflows(param: WorkflowApiEnumerateObjectWorkflowsRequest, options?: Configuration): Promise<void> {
        return this.api.enumerateObjectWorkflows(param.cid, param.objectTypes, param.states, param.limit, param.modifiedAfter,  options).toPromise();
    }

    /**
     * Optionally takes a document ID to return all workflows for that document\'s owning company.
     * Get all active workflows for the currently logged in user\'s company.
     * @param param the request object
     */
    public getActiveWorkflowsWithHttpInfo(param: WorkflowApiGetActiveWorkflowsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getActiveWorkflowsWithHttpInfo(param.documentId,  options).toPromise();
    }

    /**
     * Optionally takes a document ID to return all workflows for that document\'s owning company.
     * Get all active workflows for the currently logged in user\'s company.
     * @param param the request object
     */
    public getActiveWorkflows(param: WorkflowApiGetActiveWorkflowsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getActiveWorkflows(param.documentId,  options).toPromise();
    }

    /**
     * * Identities can be users and/or teams.  * For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams.  * Not object- or property-specific.  * Used for delegation and company settings.
     * Get all identities allowed to be approvers on a workflow object.
     * @param param the request object
     */
    public getAllowedApproversWithHttpInfo(param: WorkflowApiGetAllowedApproversRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAllowedApproversWithHttpInfo(param.companyId, param.q, param.expandTeams, param.includeSelf,  options).toPromise();
    }

    /**
     * * Identities can be users and/or teams.  * For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams.  * Not object- or property-specific.  * Used for delegation and company settings.
     * Get all identities allowed to be approvers on a workflow object.
     * @param param the request object
     */
    public getAllowedApprovers(param: WorkflowApiGetAllowedApproversRequest, options?: Configuration): Promise<void> {
        return this.api.getAllowedApprovers(param.companyId, param.q, param.expandTeams, param.includeSelf,  options).toPromise();
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     * Get all audit log entries for a workflowable object.
     * @param param the request object
     */
    public getAuditLogWithHttpInfo(param: WorkflowApiGetAuditLogRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getAuditLogWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     * Get all audit log entries for a workflowable object.
     * @param param the request object
     */
    public getAuditLog(param: WorkflowApiGetAuditLogRequest, options?: Configuration): Promise<void> {
        return this.api.getAuditLog(param.objectId,  options).toPromise();
    }

}
