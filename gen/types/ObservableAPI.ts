import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { APIApplicationApiRequestFactory, APIApplicationApiResponseProcessor} from "../apis/APIApplicationApi";
export class ObservableAPIApplicationApi {
    private requestFactory: APIApplicationApiRequestFactory;
    private responseProcessor: APIApplicationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: APIApplicationApiRequestFactory,
        responseProcessor?: APIApplicationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new APIApplicationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new APIApplicationApiResponseProcessor();
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a user\'s application preference settings.
     * @param uid 
     * @param cid 
     * @param key 
     */
    public deleteAppSettingsWithHttpInfo(uid: string, cid: string, key?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAppSettings(uid, cid, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAppSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a user\'s application preference settings.
     * @param uid 
     * @param cid 
     * @param key 
     */
    public deleteAppSettings(uid: string, cid: string, key?: Array<string>, _options?: Configuration): Observable<void> {
        return this.deleteAppSettingsWithHttpInfo(uid, cid, key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a company\'s application preference settings.
     * @param cpid 
     * @param cid 
     * @param key 
     */
    public deleteCompanyAppSettingsWithHttpInfo(cpid: string, cid: string, key?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCompanyAppSettings(cpid, cid, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCompanyAppSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Delete a company\'s application preference settings.
     * @param cpid 
     * @param cid 
     * @param key 
     */
    public deleteCompanyAppSettings(cpid: string, cid: string, key?: Array<string>, _options?: Configuration): Observable<void> {
        return this.deleteCompanyAppSettingsWithHttpInfo(cpid, cid, key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of the client extensions the specified user has granted/accepted terms for.
     * @param uid 
     * @param cid 
     * @param validPurchases 
     */
    public getApplicableExtensionsForClientWithHttpInfo(uid: string, cid: string, validPurchases?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getApplicableExtensionsForClient(uid, cid, validPurchases, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicableExtensionsForClientWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of the client extensions the specified user has granted/accepted terms for.
     * @param uid 
     * @param cid 
     * @param validPurchases 
     */
    public getApplicableExtensionsForClient(uid: string, cid: string, validPurchases?: boolean, _options?: Configuration): Observable<void> {
        return this.getApplicableExtensionsForClientWithHttpInfo(uid, cid, validPurchases, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get company-level preference settings for an application.
     * @param cpid 
     * @param cid 
     * @param documentId A document owned by the company. Read access to this document allows read access to its owning company\&#39;s settings.
     * @param key 
     */
    public getCompanyAppSettingsWithHttpInfo(cpid: string, cid: string, documentId?: string, key?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCompanyAppSettings(cpid, cid, documentId, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompanyAppSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get company-level preference settings for an application.
     * @param cpid 
     * @param cid 
     * @param documentId A document owned by the company. Read access to this document allows read access to its owning company\&#39;s settings.
     * @param key 
     */
    public getCompanyAppSettings(cpid: string, cid: string, documentId?: string, key?: Array<string>, _options?: Configuration): Observable<void> {
        return this.getCompanyAppSettingsWithHttpInfo(cpid, cid, documentId, key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get user-level preference settings for an application.
     * @param uid 
     * @param cid 
     * @param key 
     */
    public getUserAppSettingsWithHttpInfo(uid: string, cid: string, key?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getUserAppSettings(uid, cid, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserAppSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Get user-level preference settings for an application.
     * @param uid 
     * @param cid 
     * @param key 
     */
    public getUserAppSettings(uid: string, cid: string, key?: Array<string>, _options?: Configuration): Observable<void> {
        return this.getUserAppSettingsWithHttpInfo(uid, cid, key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update company preference settings for an application.
     * @param cpid 
     * @param cid 
     * @param bTUserAppSettingsParams 
     */
    public updateAppCompanySettingsWithHttpInfo(cpid: string, cid: string, bTUserAppSettingsParams: BTUserAppSettingsParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateAppCompanySettings(cpid, cid, bTUserAppSettingsParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAppCompanySettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update company preference settings for an application.
     * @param cpid 
     * @param cid 
     * @param bTUserAppSettingsParams 
     */
    public updateAppCompanySettings(cpid: string, cid: string, bTUserAppSettingsParams: BTUserAppSettingsParams, _options?: Configuration): Observable<void> {
        return this.updateAppCompanySettingsWithHttpInfo(cpid, cid, bTUserAppSettingsParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update a user\'s application preference settings.
     * @param uid 
     * @param cid 
     * @param bTUserAppSettingsParams 
     */
    public updateAppSettingsWithHttpInfo(uid: string, cid: string, bTUserAppSettingsParams: BTUserAppSettingsParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateAppSettings(uid, cid, bTUserAppSettingsParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAppSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is only usable with an OAuth token and only by the current user or admin.
     * Update a user\'s application preference settings.
     * @param uid 
     * @param cid 
     * @param bTUserAppSettingsParams 
     */
    public updateAppSettings(uid: string, cid: string, bTUserAppSettingsParams: BTUserAppSettingsParams, _options?: Configuration): Observable<void> {
        return this.updateAppSettingsWithHttpInfo(uid, cid, bTUserAppSettingsParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class ObservableAccountApi {
    private requestFactory: AccountApiRequestFactory;
    private responseProcessor: AccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountApiResponseProcessor();
    }

    /**
     * Cancel a recurring subscription for the specified account ID and purchase ID.
     * @param aid 
     * @param pid 
     * @param cancelImmediately 
     */
    public cancelPurchaseNewWithHttpInfo(aid: string, pid: string, cancelImmediately?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cancelPurchaseNew(aid, pid, cancelImmediately, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelPurchaseNewWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel a recurring subscription for the specified account ID and purchase ID.
     * @param aid 
     * @param pid 
     * @param cancelImmediately 
     */
    public cancelPurchaseNew(aid: string, pid: string, cancelImmediately?: boolean, _options?: Configuration): Observable<void> {
        return this.cancelPurchaseNewWithHttpInfo(aid, pid, cancelImmediately, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Mark a purchase as consumed by the current user.
     * @param pid 
     * @param bTPurchaseUserParams 
     */
    public consumePurchaseWithHttpInfo(pid: string, bTPurchaseUserParams?: BTPurchaseUserParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.consumePurchase(pid, bTPurchaseUserParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.consumePurchaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Mark a purchase as consumed by the current user.
     * @param pid 
     * @param bTPurchaseUserParams 
     */
    public consumePurchase(pid: string, bTPurchaseUserParams?: BTPurchaseUserParams, _options?: Configuration): Observable<void> {
        return this.consumePurchaseWithHttpInfo(pid, bTPurchaseUserParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all app purchases made for the specified plan.
     * @param planId 
     * @param offset 
     * @param limit 
     */
    public getPlanPurchasesWithHttpInfo(planId: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<BTListResponseBTPurchaseInfo>> {
        const requestContextPromise = this.requestFactory.getPlanPurchases(planId, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlanPurchasesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all app purchases made for the specified plan.
     * @param planId 
     * @param offset 
     * @param limit 
     */
    public getPlanPurchases(planId: string, offset?: number, limit?: number, _options?: Configuration): Observable<BTListResponseBTPurchaseInfo> {
        return this.getPlanPurchasesWithHttpInfo(planId, offset, limit, _options).pipe(map((apiResponse: HttpInfo<BTListResponseBTPurchaseInfo>) => apiResponse.data));
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get a list of all app purchases made by the current user.
     * @param all 
     * @param ownPurchaseOnly 
     * @param includeGoDEnabledAppPurchases 
     */
    public getPurchasesWithHttpInfo(all?: boolean, ownPurchaseOnly?: boolean, includeGoDEnabledAppPurchases?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPurchases(all, ownPurchaseOnly, includeGoDEnabledAppPurchases, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchasesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get a list of all app purchases made by the current user.
     * @param all 
     * @param ownPurchaseOnly 
     * @param includeGoDEnabledAppPurchases 
     */
    public getPurchases(all?: boolean, ownPurchaseOnly?: boolean, includeGoDEnabledAppPurchases?: boolean, _options?: Configuration): Observable<void> {
        return this.getPurchasesWithHttpInfo(all, ownPurchaseOnly, includeGoDEnabledAppPurchases, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AliasApiRequestFactory, AliasApiResponseProcessor} from "../apis/AliasApi";
export class ObservableAliasApi {
    private requestFactory: AliasApiRequestFactory;
    private responseProcessor: AliasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasApiRequestFactory,
        responseProcessor?: AliasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AliasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AliasApiResponseProcessor();
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Create an alias in your enterprise.
     * @param bTAliasParams 
     */
    public createAliasWithHttpInfo(bTAliasParams: BTAliasParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createAlias(bTAliasParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAliasWithHttpInfo(rsp)));
            }));
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Create an alias in your enterprise.
     * @param bTAliasParams 
     */
    public createAlias(bTAliasParams: BTAliasParams, _options?: Configuration): Observable<void> {
        return this.createAliasWithHttpInfo(bTAliasParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Delete an alias from your enterprise.
     * @param aid 
     */
    public deleteAliasWithHttpInfo(aid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAlias(aid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAliasWithHttpInfo(rsp)));
            }));
    }

    /**
     * `Manage users and teams` global permission is required to call this API.
     * Delete an alias from your enterprise.
     * @param aid 
     */
    public deleteAlias(aid: string, _options?: Configuration): Observable<void> {
        return this.deleteAliasWithHttpInfo(aid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the information for an alias ID.
     * Get an alias by ID.
     * @param aid 
     */
    public getAliasWithHttpInfo(aid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAlias(aid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliasWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the information for an alias ID.
     * Get an alias by ID.
     * @param aid 
     */
    public getAlias(aid: string, _options?: Configuration): Observable<void> {
        return this.getAliasWithHttpInfo(aid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This is a search-like endpoint that returns a subset of the member list. Use `getAlias` to return all members every time it\'s called.
     * Get all users and teams assigned to an alias.
     * @param aid 
     * @param prefix 
     * @param sortColumn 
     * @param sortOrder 
     * @param offset 
     * @param limit 
     */
    public getAliasMembersWithHttpInfo(aid: string, prefix?: string, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAliasMembers(aid, prefix, sortColumn, sortOrder, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliasMembersWithHttpInfo(rsp)));
            }));
    }

    /**
     * This is a search-like endpoint that returns a subset of the member list. Use `getAlias` to return all members every time it\'s called.
     * Get all users and teams assigned to an alias.
     * @param aid 
     * @param prefix 
     * @param sortColumn 
     * @param sortOrder 
     * @param offset 
     * @param limit 
     */
    public getAliasMembers(aid: string, prefix?: string, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, _options?: Configuration): Observable<void> {
        return this.getAliasMembersWithHttpInfo(aid, prefix, sortColumn, sortOrder, offset, limit, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all aliases that exist for your enterprise.
     * @param prefix 
     * @param sortColumn 
     * @param sortOrder 
     * @param offset 
     * @param limit 
     */
    public getAliasesInCompanyWithHttpInfo(prefix?: string, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAliasesInCompany(prefix, sortColumn, sortOrder, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliasesInCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all aliases that exist for your enterprise.
     * @param prefix 
     * @param sortColumn 
     * @param sortOrder 
     * @param offset 
     * @param limit 
     */
    public getAliasesInCompany(prefix?: string, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, _options?: Configuration): Observable<void> {
        return this.getAliasesInCompanyWithHttpInfo(prefix, sortColumn, sortOrder, offset, limit, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * `Manage users and teams` global permission is required to call this API.  * Add new users in the `additions` array.  * Remove existing users in the `removals` array. Attempts to remove a user that does not exist in the Alias list will have no effect. * Replace the entire Alias list with the `entries` array.  * You can also update the alias\' `name` and `description`.  For example, given an Alias with members userA and userB:  * `additions: [userC]` results in [userA, userB, userC]  * `removals: [userB]` results in [userA]  * `entries: [userC, user D]` results in [userC, userD]
     * Add, remove, replace, or rename entries in an alias list.
     * @param aid 
     * @param bTAliasParams 
     */
    public updateAliasWithHttpInfo(aid: string, bTAliasParams: BTAliasParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateAlias(aid, bTAliasParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAliasWithHttpInfo(rsp)));
            }));
    }

    /**
     * `Manage users and teams` global permission is required to call this API.  * Add new users in the `additions` array.  * Remove existing users in the `removals` array. Attempts to remove a user that does not exist in the Alias list will have no effect. * Replace the entire Alias list with the `entries` array.  * You can also update the alias\' `name` and `description`.  For example, given an Alias with members userA and userB:  * `additions: [userC]` results in [userA, userB, userC]  * `removals: [userB]` results in [userA]  * `entries: [userC, user D]` results in [userC, userD]
     * Add, remove, replace, or rename entries in an alias list.
     * @param aid 
     * @param bTAliasParams 
     */
    public updateAlias(aid: string, bTAliasParams: BTAliasParams, _options?: Configuration): Observable<void> {
        return this.updateAliasWithHttpInfo(aid, bTAliasParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AppAssociativeDataApiRequestFactory, AppAssociativeDataApiResponseProcessor} from "../apis/AppAssociativeDataApi";
export class ObservableAppAssociativeDataApi {
    private requestFactory: AppAssociativeDataApiRequestFactory;
    private responseProcessor: AppAssociativeDataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AppAssociativeDataApiRequestFactory,
        responseProcessor?: AppAssociativeDataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AppAssociativeDataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AppAssociativeDataApiResponseProcessor();
    }

    /**
     * Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Copy associative data from one view to another.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTAppElementParamsArrayBTCopyViewAssociativeDataParams 
     */
    public copyAssociativeDataWithHttpInfo(did: string, wid: string, eid: string, bTAppElementParamsArrayBTCopyViewAssociativeDataParams?: BTAppElementParamsArrayBTCopyViewAssociativeDataParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.copyAssociativeData(did, wid, eid, bTAppElementParamsArrayBTCopyViewAssociativeDataParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.copyAssociativeDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Can only be copied between tabs in the same document. You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Copy associative data from one view to another.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTAppElementParamsArrayBTCopyViewAssociativeDataParams 
     */
    public copyAssociativeData(did: string, wid: string, eid: string, bTAppElementParamsArrayBTCopyViewAssociativeDataParams?: BTAppElementParamsArrayBTCopyViewAssociativeDataParams, _options?: Configuration): Observable<void> {
        return this.copyAssociativeDataWithHttpInfo(did, wid, eid, bTAppElementParamsArrayBTCopyViewAssociativeDataParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Delete the associative data from the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param parentChangeId 
     * @param associativeDataId 
     * @param elementId 
     * @param viewId 
     * @param microversionId 
     * @param documentMicroversion 
     * @param deterministicId 
     * @param featureId 
     * @param entityId 
     * @param occurrenceId 
     */
    public deleteAssociativeDataWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, parentChangeId?: string, associativeDataId?: Array<string>, elementId?: string, viewId?: string, microversionId?: string, documentMicroversion?: string, deterministicId?: string, featureId?: string, entityId?: string, occurrenceId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAssociativeData(did, eid, wvm, wvmid, transactionId, parentChangeId, associativeDataId, elementId, viewId, microversionId, documentMicroversion, deterministicId, featureId, entityId, occurrenceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAssociativeDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Delete the associative data from the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param parentChangeId 
     * @param associativeDataId 
     * @param elementId 
     * @param viewId 
     * @param microversionId 
     * @param documentMicroversion 
     * @param deterministicId 
     * @param featureId 
     * @param entityId 
     * @param occurrenceId 
     */
    public deleteAssociativeData(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, parentChangeId?: string, associativeDataId?: Array<string>, elementId?: string, viewId?: string, microversionId?: string, documentMicroversion?: string, deterministicId?: string, featureId?: string, entityId?: string, occurrenceId?: string, _options?: Configuration): Observable<void> {
        return this.deleteAssociativeDataWithHttpInfo(did, eid, wvm, wvmid, transactionId, parentChangeId, associativeDataId, elementId, viewId, microversionId, documentMicroversion, deterministicId, featureId, entityId, occurrenceId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Get the associative data for the specified app element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param associativeDataId 
     * @param elementId 
     * @param viewId 
     * @param microversionId 
     * @param documentMicroversion 
     * @param deterministicId 
     * @param featureId 
     * @param entityId 
     * @param occurrenceId 
     * @param returnIdTags 
     */
    public getAssociativeDataWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, associativeDataId?: Array<string>, elementId?: string, viewId?: string, microversionId?: string, documentMicroversion?: string, deterministicId?: string, featureId?: string, entityId?: string, occurrenceId?: string, returnIdTags?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAssociativeData(did, wvm, wvmid, eid, linkDocumentId, transactionId, changeId, associativeDataId, elementId, viewId, microversionId, documentMicroversion, deterministicId, featureId, entityId, occurrenceId, returnIdTags, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssociativeDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Get the associative data for the specified app element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param associativeDataId 
     * @param elementId 
     * @param viewId 
     * @param microversionId 
     * @param documentMicroversion 
     * @param deterministicId 
     * @param featureId 
     * @param entityId 
     * @param occurrenceId 
     * @param returnIdTags 
     */
    public getAssociativeData(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, associativeDataId?: Array<string>, elementId?: string, viewId?: string, microversionId?: string, documentMicroversion?: string, deterministicId?: string, featureId?: string, entityId?: string, occurrenceId?: string, returnIdTags?: boolean, _options?: Configuration): Observable<void> {
        return this.getAssociativeDataWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, transactionId, changeId, associativeDataId, elementId, viewId, microversionId, documentMicroversion, deterministicId, featureId, entityId, occurrenceId, returnIdTags, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Set the associative data for the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param body 
     */
    public postAssociativeDataWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, body: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postAssociativeData(did, eid, wvm, wvmid, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postAssociativeDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * You can manage associativity with [translateIds](https://cad.onshape.com/glassworks/explorer/#/PartStudio/translateIds).
     * Set the associative data for the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param body 
     */
    public postAssociativeData(did: string, eid: string, wvm: string, wvmid: string, body: string, _options?: Configuration): Observable<void> {
        return this.postAssociativeDataWithHttpInfo(did, eid, wvm, wvmid, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AppElementApiRequestFactory, AppElementApiResponseProcessor} from "../apis/AppElementApi";
export class ObservableAppElementApi {
    private requestFactory: AppElementApiRequestFactory;
    private responseProcessor: AppElementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AppElementApiRequestFactory,
        responseProcessor?: AppElementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AppElementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AppElementApiResponseProcessor();
    }

    /**
     * Deletes a microbranch (i.e., the branch with the microversion for the transaction).
     * Abort a transaction.
     * @param did 
     * @param eid 
     * @param wid 
     * @param tid 
     * @param returnError 
     */
    public abortTransactionWithHttpInfo(did: string, eid: string, wid: string, tid: string, returnError?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.abortTransaction(did, eid, wid, tid, returnError, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.abortTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a microbranch (i.e., the branch with the microversion for the transaction).
     * Abort a transaction.
     * @param did 
     * @param eid 
     * @param wid 
     * @param tid 
     * @param returnError 
     */
    public abortTransaction(did: string, eid: string, wid: string, tid: string, returnError?: boolean, _options?: Configuration): Observable<void> {
        return this.abortTransactionWithHttpInfo(did, eid, wid, tid, returnError, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Call this faster API instead of creating multiple app elements one at a time or in parallel.
     * Create multiple empty application elements at once.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementBulkCreateParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public bulkCreateElementWithHttpInfo(did: string, wid: string, bTAppElementBulkCreateParams: BTAppElementBulkCreateParams, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.bulkCreateElement(did, wid, bTAppElementBulkCreateParams, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkCreateElementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Call this faster API instead of creating multiple app elements one at a time or in parallel.
     * Create multiple empty application elements at once.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementBulkCreateParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public bulkCreateElement(did: string, wid: string, bTAppElementBulkCreateParams: BTAppElementBulkCreateParams, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.bulkCreateElementWithHttpInfo(did, wid, bTAppElementBulkCreateParams, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * If successful, all transactions will be committed to a single microversion. If the call raises an error, nothing will be committed.
     * Merge multiple transactions into one microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementCommitTransactionParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public commitTransactionsWithHttpInfo(did: string, wid: string, bTAppElementCommitTransactionParams: BTAppElementCommitTransactionParams, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.commitTransactions(did, wid, bTAppElementCommitTransactionParams, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commitTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * If successful, all transactions will be committed to a single microversion. If the call raises an error, nothing will be committed.
     * Merge multiple transactions into one microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementCommitTransactionParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public commitTransactions(did: string, wid: string, bTAppElementCommitTransactionParams: BTAppElementCommitTransactionParams, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.commitTransactionsWithHttpInfo(did, wid, bTAppElementCommitTransactionParams, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Specify the source workspace/version/microversion in the URL and specify the target workspace/version/microversion in the query parameters.
     * Compare app element JSON trees between workspaces/versions/microversions in a document.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param workspaceId 
     * @param versionId 
     * @param microversionId 
     * @param linkDocumentId 
     * @param jsonDifferenceFormat 
     */
    public compareAppElementJsonWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, workspaceId?: string, versionId?: string, microversionId?: string, linkDocumentId?: string, jsonDifferenceFormat?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.compareAppElementJson(did, wvm, wvmid, eid, workspaceId, versionId, microversionId, linkDocumentId, jsonDifferenceFormat, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.compareAppElementJsonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Specify the source workspace/version/microversion in the URL and specify the target workspace/version/microversion in the query parameters.
     * Compare app element JSON trees between workspaces/versions/microversions in a document.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param workspaceId 
     * @param versionId 
     * @param microversionId 
     * @param linkDocumentId 
     * @param jsonDifferenceFormat 
     */
    public compareAppElementJson(did: string, wvm: string, wvmid: string, eid: string, workspaceId?: string, versionId?: string, microversionId?: string, linkDocumentId?: string, jsonDifferenceFormat?: string, _options?: Configuration): Observable<void> {
        return this.compareAppElementJsonWithHttpInfo(did, wvm, wvmid, eid, workspaceId, versionId, microversionId, linkDocumentId, jsonDifferenceFormat, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new application element.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public createElementWithHttpInfo(did: string, wid: string, bTAppElementParams: BTAppElementParams, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createElement(did, wid, bTAppElementParams, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createElementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new application element.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTAppElementParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public createElement(did: string, wid: string, bTAppElementParams: BTAppElementParams, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.createElementWithHttpInfo(did, wid, bTAppElementParams, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a reference to an app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param bTAppElementReferenceParams 
     */
    public createReferenceWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, bTAppElementReferenceParams: BTAppElementReferenceParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createReference(did, eid, wvm, wvmid, bTAppElementReferenceParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a reference to an app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param bTAppElementReferenceParams 
     */
    public createReference(did: string, eid: string, wvm: string, wvmid: string, bTAppElementReferenceParams: BTAppElementReferenceParams, _options?: Configuration): Observable<void> {
        return this.createReferenceWithHttpInfo(did, eid, wvm, wvmid, bTAppElementReferenceParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the content from the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param sid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public deleteAppElementContentWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, sid: string, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAppElementContent(did, eid, wvm, wvmid, sid, transactionId, parentChangeId, description, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAppElementContentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the content from the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param sid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public deleteAppElementContent(did: string, eid: string, wvm: string, wvmid: string, sid: string, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Observable<void> {
        return this.deleteAppElementContentWithHttpInfo(did, eid, wvm, wvmid, sid, transactionId, parentChangeId, description, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete multiple subelements array by document ID, workspace or version or microversion ID, tab ID, and subelement IDs.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param subelementIds 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public deleteAppElementContentBatchWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, subelementIds?: Array<string>, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAppElementContentBatch(did, eid, wvm, wvmid, subelementIds, transactionId, parentChangeId, description, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAppElementContentBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete multiple subelements array by document ID, workspace or version or microversion ID, tab ID, and subelement IDs.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param subelementIds 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public deleteAppElementContentBatch(did: string, eid: string, wvm: string, wvmid: string, subelementIds?: Array<string>, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Observable<void> {
        return this.deleteAppElementContentBatchWithHttpInfo(did, eid, wvm, wvmid, subelementIds, transactionId, parentChangeId, description, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a blob subelement from an app element.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param transactionId 
     * @param changeId 
     */
    public deleteBlobSubelementWithHttpInfo(did: string, wid: string, eid: string, bid: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteBlobSubelement(did, wid, eid, bid, transactionId, changeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBlobSubelementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a blob subelement from an app element.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param transactionId 
     * @param changeId 
     */
    public deleteBlobSubelement(did: string, wid: string, eid: string, bid: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<void> {
        return this.deleteBlobSubelementWithHttpInfo(did, wid, eid, bid, transactionId, changeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete an app element reference.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public deleteReferenceWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, rid: string, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteReference(did, eid, wvm, wvmid, rid, transactionId, parentChangeId, description, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteReferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an app element reference.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     */
    public deleteReference(did: string, eid: string, wvm: string, wvmid: string, rid: string, transactionId?: string, parentChangeId?: string, description?: string, _options?: Configuration): Observable<void> {
        return this.deleteReferenceWithHttpInfo(did, eid, wvm, wvmid, rid, transactionId, parentChangeId, description, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Download a blob subelement as a file.
     * Download a blob subelement from the specified app element.
     * @param did 
     * @param vm 
     * @param vmid 
     * @param eid 
     * @param bid 
     * @param contentDisposition 
     * @param ifNoneMatch 
     * @param transactionId 
     * @param changeId 
     * @param linkDocumentId 
     */
    public downloadBlobSubelementWithHttpInfo(did: string, vm: string, vmid: string, eid: string, bid: string, contentDisposition?: string, ifNoneMatch?: string, transactionId?: string, changeId?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.downloadBlobSubelement(did, vm, vmid, eid, bid, contentDisposition, ifNoneMatch, transactionId, changeId, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadBlobSubelementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download a blob subelement as a file.
     * Download a blob subelement from the specified app element.
     * @param did 
     * @param vm 
     * @param vmid 
     * @param eid 
     * @param bid 
     * @param contentDisposition 
     * @param ifNoneMatch 
     * @param transactionId 
     * @param changeId 
     * @param linkDocumentId 
     */
    public downloadBlobSubelement(did: string, vm: string, vmid: string, eid: string, bid: string, contentDisposition?: string, ifNoneMatch?: string, transactionId?: string, changeId?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.downloadBlobSubelementWithHttpInfo(did, vm, vmid, eid, bid, contentDisposition, ifNoneMatch, transactionId, changeId, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * The downloaded file can be used to retrieve stored subelements.
     * Download the blob element (i.e., a file) stored in an app element in a document\'s workspace.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param contentDisposition 
     * @param ifNoneMatch 
     * @param transactionId 
     * @param changeId 
     */
    public downloadBlobSubelementWorkspaceWithHttpInfo(did: string, wid: string, eid: string, bid: string, contentDisposition?: string, ifNoneMatch?: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.downloadBlobSubelementWorkspace(did, wid, eid, bid, contentDisposition, ifNoneMatch, transactionId, changeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadBlobSubelementWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * The downloaded file can be used to retrieve stored subelements.
     * Download the blob element (i.e., a file) stored in an app element in a document\'s workspace.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param contentDisposition 
     * @param ifNoneMatch 
     * @param transactionId 
     * @param changeId 
     */
    public downloadBlobSubelementWorkspace(did: string, wid: string, eid: string, bid: string, contentDisposition?: string, ifNoneMatch?: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<void> {
        return this.downloadBlobSubelementWorkspaceWithHttpInfo(did, wid, eid, bid, contentDisposition, ifNoneMatch, transactionId, changeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the history of the specified all element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     */
    public getAppElementHistoryWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAppElementHistory(did, eid, wvm, wvmid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppElementHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the history of the specified all element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     */
    public getAppElementHistory(did: string, eid: string, wvm: string, wvmid: string, _options?: Configuration): Observable<void> {
        return this.getAppElementHistoryWithHttpInfo(did, eid, wvm, wvmid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all blob subelement IDs for the specified workspace, version, or microversion.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param changeId 
     */
    public getBlobSubelementIdsWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getBlobSubelementIds(did, eid, wvm, wvmid, transactionId, changeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBlobSubelementIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all blob subelement IDs for the specified workspace, version, or microversion.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param changeId 
     */
    public getBlobSubelementIds(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<void> {
        return this.getBlobSubelementIdsWithHttpInfo(did, eid, wvm, wvmid, transactionId, changeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all transactions performed on an element.
     * @param did 
     * @param eid 
     * @param wid 
     */
    public getElementTransactionsWithHttpInfo(did: string, eid: string, wid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getElementTransactions(did, eid, wid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElementTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all transactions performed on an element.
     * @param did 
     * @param eid 
     * @param wid 
     */
    public getElementTransactions(did: string, eid: string, wid: string, _options?: Configuration): Observable<void> {
        return this.getElementTransactionsWithHttpInfo(did, eid, wid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the full JSON tree for the specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId The id of the transaction in which this operation should take place. Transaction ids can be generated through the AppElement startTransaction API.
     * @param changeId The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     */
    public getJsonWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getJson(did, wvm, wvmid, eid, linkDocumentId, transactionId, changeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJsonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the full JSON tree for the specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId The id of the transaction in which this operation should take place. Transaction ids can be generated through the AppElement startTransaction API.
     * @param changeId The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     */
    public getJson(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<void> {
        return this.getJsonWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, transactionId, changeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Use this endpoint to return the JSON at the specified path instead of returning the entire JSON for the element. This POST endpoint does not write any information.
     * Get the JSON at specified paths for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param bTGetJsonPaths1697 
     */
    public getJsonPathsWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, bTGetJsonPaths1697?: BTGetJsonPaths1697, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getJsonPaths(did, wvm, wvmid, eid, linkDocumentId, transactionId, changeId, bTGetJsonPaths1697, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJsonPathsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to return the JSON at the specified path instead of returning the entire JSON for the element. This POST endpoint does not write any information.
     * Get the JSON at specified paths for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param bTGetJsonPaths1697 
     */
    public getJsonPaths(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, bTGetJsonPaths1697?: BTGetJsonPaths1697, _options?: Configuration): Observable<void> {
        return this.getJsonPathsWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, transactionId, changeId, bTGetJsonPaths1697, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param baseChangeId 
     * @param subelementId 
     */
    public getSubElementContentWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, baseChangeId?: string, subelementId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getSubElementContent(did, wvm, wvmid, eid, linkDocumentId, transactionId, changeId, baseChangeId, subelementId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubElementContentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param changeId 
     * @param baseChangeId 
     * @param subelementId 
     */
    public getSubElementContent(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, changeId?: string, baseChangeId?: string, subelementId?: string, _options?: Configuration): Observable<void> {
        return this.getSubElementContentWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, transactionId, changeId, baseChangeId, subelementId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param changeId 
     */
    public getSubelementIdsWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getSubelementIds(did, eid, wvm, wvmid, transactionId, changeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubelementIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all subelement IDs in a specified workspace/version/microversion.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param transactionId 
     * @param changeId 
     */
    public getSubelementIds(did: string, eid: string, wvm: string, wvmid: string, transactionId?: string, changeId?: string, _options?: Configuration): Observable<void> {
        return this.getSubelementIdsWithHttpInfo(did, eid, wvm, wvmid, transactionId, changeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * For single operations only. Use `resolveReferences` for bulk operations.
     * Resolves a single reference to an app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param transactionId 
     * @param parentChangeId 
     * @param includeInternal 
     * @param linkDocumentId 
     */
    public resolveReferenceWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, rid: string, transactionId?: string, parentChangeId?: string, includeInternal?: boolean, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resolveReference(did, eid, wvm, wvmid, rid, transactionId, parentChangeId, includeInternal, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resolveReferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * For single operations only. Use `resolveReferences` for bulk operations.
     * Resolves a single reference to an app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param transactionId 
     * @param parentChangeId 
     * @param includeInternal 
     * @param linkDocumentId 
     */
    public resolveReference(did: string, eid: string, wvm: string, wvmid: string, rid: string, transactionId?: string, parentChangeId?: string, includeInternal?: boolean, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.resolveReferenceWithHttpInfo(did, eid, wvm, wvmid, rid, transactionId, parentChangeId, includeInternal, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * For bulk operations only. Use `resolveReference` for a single operation.
     * Resolves bulk app element references.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param parentChangeId 
     * @param includeInternal 
     * @param referenceIds 
     */
    public resolveReferencesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, parentChangeId?: string, includeInternal?: boolean, referenceIds?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resolveReferences(did, wvm, wvmid, eid, linkDocumentId, transactionId, parentChangeId, includeInternal, referenceIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resolveReferencesWithHttpInfo(rsp)));
            }));
    }

    /**
     * For bulk operations only. Use `resolveReference` for a single operation.
     * Resolves bulk app element references.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param transactionId 
     * @param parentChangeId 
     * @param includeInternal 
     * @param referenceIds 
     */
    public resolveReferences(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, transactionId?: string, parentChangeId?: string, includeInternal?: boolean, referenceIds?: string, _options?: Configuration): Observable<void> {
        return this.resolveReferencesWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, transactionId, parentChangeId, includeInternal, referenceIds, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a microbranch (i.e., a branch for a new microversion).
     * Start a transaction
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAppElementStartTransactionParams 
     */
    public startTransactionWithHttpInfo(did: string, eid: string, wid: string, bTAppElementStartTransactionParams: BTAppElementStartTransactionParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.startTransaction(did, eid, wid, bTAppElementStartTransactionParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a microbranch (i.e., a branch for a new microversion).
     * Start a transaction
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAppElementStartTransactionParams 
     */
    public startTransaction(did: string, eid: string, wid: string, bTAppElementStartTransactionParams: BTAppElementStartTransactionParams, _options?: Configuration): Observable<void> {
        return this.startTransactionWithHttpInfo(did, eid, wid, bTAppElementStartTransactionParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update the content for the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param bTAppElementUpdateParams 
     */
    public updateAppElementWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, bTAppElementUpdateParams?: BTAppElementUpdateParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateAppElement(did, eid, wvm, wvmid, bTAppElementUpdateParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAppElementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the content for the specified app element.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param bTAppElementUpdateParams 
     */
    public updateAppElement(did: string, eid: string, wvm: string, wvmid: string, bTAppElementUpdateParams?: BTAppElementUpdateParams, _options?: Configuration): Observable<void> {
        return this.updateAppElementWithHttpInfo(did, eid, wvm, wvmid, bTAppElementUpdateParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update an app element reference.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param bTAppElementReferenceParams 
     */
    public updateReferenceWithHttpInfo(did: string, eid: string, wvm: string, wvmid: string, rid: string, bTAppElementReferenceParams: BTAppElementReferenceParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateReference(did, eid, wvm, wvmid, rid, bTAppElementReferenceParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateReferenceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an app element reference.
     * @param did 
     * @param eid 
     * @param wvm 
     * @param wvmid 
     * @param rid 
     * @param bTAppElementReferenceParams 
     */
    public updateReference(did: string, eid: string, wvm: string, wvmid: string, rid: string, bTAppElementReferenceParams: BTAppElementReferenceParams, _options?: Configuration): Observable<void> {
        return this.updateReferenceWithHttpInfo(did, eid, wvm, wvmid, rid, bTAppElementReferenceParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Create a new blob subelement from an uploaded file.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     * @param file File to upload.
     * @param fileContentLength 
     */
    public uploadBlobSubelementWithHttpInfo(did: string, wid: string, eid: string, bid: string, transactionId?: string, parentChangeId?: string, description?: string, file?: HttpFile, fileContentLength?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.uploadBlobSubelement(did, wid, eid, bid, transactionId, parentChangeId, description, file, fileContentLength, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadBlobSubelementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Create a new blob subelement from an uploaded file.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bid 
     * @param transactionId 
     * @param parentChangeId 
     * @param description 
     * @param file File to upload.
     * @param fileContentLength 
     */
    public uploadBlobSubelement(did: string, wid: string, eid: string, bid: string, transactionId?: string, parentChangeId?: string, description?: string, file?: HttpFile, fileContentLength?: number, _options?: Configuration): Observable<void> {
        return this.uploadBlobSubelementWithHttpInfo(did, wid, eid, bid, transactionId, parentChangeId, description, file, fileContentLength, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AssemblyApiRequestFactory, AssemblyApiResponseProcessor} from "../apis/AssemblyApi";
export class ObservableAssemblyApi {
    private requestFactory: AssemblyApiRequestFactory;
    private responseProcessor: AssemblyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssemblyApiRequestFactory,
        responseProcessor?: AssemblyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssemblyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssemblyApiResponseProcessor();
    }

    /**
     * Add a feature to the assembly feature list.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureDefinitionCall1406 
     */
    public addFeatureWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addFeature(did, wvm, wvmid, eid, bTFeatureDefinitionCall1406, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addFeatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a feature to the assembly feature list.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureDefinitionCall1406 
     */
    public addFeature(did: string, wvm: string, wvmid: string, eid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Observable<void> {
        return this.addFeatureWithHttpInfo(did, wvm, wvmid, eid, bTFeatureDefinitionCall1406, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new assembly tab in the document.
     * @param did 
     * @param wid 
     * @param bTModelElementParams 
     */
    public createAssemblyWithHttpInfo(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createAssembly(did, wid, bTModelElementParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAssemblyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new assembly tab in the document.
     * @param did 
     * @param wid 
     * @param bTModelElementParams 
     */
    public createAssembly(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Observable<void> {
        return this.createAssemblyWithHttpInfo(did, wid, bTModelElementParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Part Studio instances may include multiple parts.
     * Insert an instance of a part, sketch, assembly, or Part Studio into an assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTAssemblyInstanceDefinitionParams 
     */
    public createInstanceWithHttpInfo(did: string, wid: string, eid: string, bTAssemblyInstanceDefinitionParams?: BTAssemblyInstanceDefinitionParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createInstance(did, wid, eid, bTAssemblyInstanceDefinitionParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInstanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Part Studio instances may include multiple parts.
     * Insert an instance of a part, sketch, assembly, or Part Studio into an assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTAssemblyInstanceDefinitionParams 
     */
    public createInstance(did: string, wid: string, eid: string, bTAssemblyInstanceDefinitionParams?: BTAssemblyInstanceDefinitionParams, _options?: Configuration): Observable<void> {
        return this.createInstanceWithHttpInfo(did, wid, eid, bTAssemblyInstanceDefinitionParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a feature from an assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param fid 
     */
    public deleteFeatureWithHttpInfo(did: string, wid: string, eid: string, fid: string, _options?: Configuration): Observable<HttpInfo<BTFeatureApiBase1430>> {
        const requestContextPromise = this.requestFactory.deleteFeature(did, wid, eid, fid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFeatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a feature from an assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param fid 
     */
    public deleteFeature(did: string, wid: string, eid: string, fid: string, _options?: Configuration): Observable<BTFeatureApiBase1430> {
        return this.deleteFeatureWithHttpInfo(did, wid, eid, fid, _options).pipe(map((apiResponse: HttpInfo<BTFeatureApiBase1430>) => apiResponse.data));
    }

    /**
     * Delete an instance of an assembly.
     * @param did 
     * @param eid 
     * @param wid 
     * @param nid 
     */
    public deleteInstanceWithHttpInfo(did: string, eid: string, wid: string, nid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteInstance(did, eid, wid, nid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInstanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an instance of an assembly.
     * @param did 
     * @param eid 
     * @param wid 
     * @param nid 
     */
    public deleteInstance(did: string, eid: string, wid: string, nid: string, _options?: Configuration): Observable<void> {
        return this.deleteInstanceWithHttpInfo(did, eid, wid, nid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get bounding box information for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param includeHidden 
     * @param displayStateId 
     * @param namedPositionId 
     * @param includeSketches 
     */
    public getAssemblyBoundingBoxesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, includeHidden?: boolean, displayStateId?: string, namedPositionId?: string, includeSketches?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAssemblyBoundingBoxes(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, includeHidden, displayStateId, namedPositionId, includeSketches, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssemblyBoundingBoxesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get bounding box information for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param includeHidden 
     * @param displayStateId 
     * @param namedPositionId 
     * @param includeSketches 
     */
    public getAssemblyBoundingBoxes(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, includeHidden?: boolean, displayStateId?: string, namedPositionId?: string, includeSketches?: boolean, _options?: Configuration): Observable<void> {
        return this.getAssemblyBoundingBoxesWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, includeHidden, displayStateId, namedPositionId, includeSketches, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * All coordinates and translation matrix components are in meters (m).
     * Get definition information for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param includeMateFeatures 
     * @param includeNonSolids 
     * @param includeMateConnectors 
     * @param excludeSuppressed Whether or not to exclude suppressed instances/mate features in response
     */
    public getAssemblyDefinitionWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, includeMateFeatures?: boolean, includeNonSolids?: boolean, includeMateConnectors?: boolean, excludeSuppressed?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAssemblyDefinition(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, includeMateFeatures, includeNonSolids, includeMateConnectors, excludeSuppressed, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssemblyDefinitionWithHttpInfo(rsp)));
            }));
    }

    /**
     * All coordinates and translation matrix components are in meters (m).
     * Get definition information for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param includeMateFeatures 
     * @param includeNonSolids 
     * @param includeMateConnectors 
     * @param excludeSuppressed Whether or not to exclude suppressed instances/mate features in response
     */
    public getAssemblyDefinition(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, includeMateFeatures?: boolean, includeNonSolids?: boolean, includeMateConnectors?: boolean, excludeSuppressed?: boolean, _options?: Configuration): Observable<void> {
        return this.getAssemblyDefinitionWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, includeMateFeatures, includeNonSolids, includeMateConnectors, excludeSuppressed, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the mass properties for the assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     */
    public getAssemblyMassPropertiesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAssemblyMassProperties(did, wvm, wvmid, eid, linkDocumentId, configuration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssemblyMassPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the mass properties for the assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     */
    public getAssemblyMassProperties(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, _options?: Configuration): Observable<void> {
        return this.getAssemblyMassPropertiesWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get an array of shaded view images for the document.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param viewMatrix 
     * @param outputHeight 
     * @param outputWidth 
     * @param pixelSize 
     * @param edges 
     * @param showAllParts 
     * @param includeSurfaces 
     * @param useAntiAliasing 
     * @param includeWires 
     * @param displayStateId 
     * @param namedPositionId 
     */
    public getAssemblyShadedViewsWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, showAllParts?: boolean, includeSurfaces?: boolean, useAntiAliasing?: boolean, includeWires?: boolean, displayStateId?: string, namedPositionId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAssemblyShadedViews(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, viewMatrix, outputHeight, outputWidth, pixelSize, edges, showAllParts, includeSurfaces, useAntiAliasing, includeWires, displayStateId, namedPositionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAssemblyShadedViewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get an array of shaded view images for the document.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param viewMatrix 
     * @param outputHeight 
     * @param outputWidth 
     * @param pixelSize 
     * @param edges 
     * @param showAllParts 
     * @param includeSurfaces 
     * @param useAntiAliasing 
     * @param includeWires 
     * @param displayStateId 
     * @param namedPositionId 
     */
    public getAssemblyShadedViews(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, showAllParts?: boolean, includeSurfaces?: boolean, useAntiAliasing?: boolean, includeWires?: boolean, displayStateId?: string, namedPositionId?: string, _options?: Configuration): Observable<void> {
        return this.getAssemblyShadedViewsWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, viewMatrix, outputHeight, outputWidth, pixelSize, edges, showAllParts, includeSurfaces, useAntiAliasing, includeWires, displayStateId, namedPositionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns the BOM in JSON in the Onshape BOM Standard format.
     * Get the Bill Of Materials (BOM) content for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param bomColumnIds Ids of the columns to include, or all columns if empty. BOM column ids correspond to metadata property ids.
     * @param indented Return the Structured BOM table with all rows collapsed, otherwise returns the Flattened BOM.
     * @param multiLevel Return the Structured BOM table with all rows expanded. Ignored if indented is false.
     * @param generateIfAbsent Return the BOM table data even if the BOM does not exist. If this is false and the BOM does not exist, a 404 status code will be returned. This option is highly recommended.
     * @param templateId The id of the BOM table template to use when generating the table.
     * @param includeExcluded Include items that have been excluded from the BOM table.
     * @param onlyVisibleColumns Only return data for visible columns, instead of all possible columns.
     * @param ignoreSubassemblyBomBehavior Ignore the \&#39;Subassembly BOM behavior\&#39; property when constructing the BOM table.
     * @param includeItemMicroversions Include element microversions and version metadata microversions in the JSON.
     * @param includeTopLevelAssemblyRow Include top-level assembly row when constructing the BOM table.
     * @param thumbnail Return thumbnail info
     */
    public getBillOfMaterialsWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, bomColumnIds?: Array<string>, indented?: boolean, multiLevel?: boolean, generateIfAbsent?: boolean, templateId?: string, includeExcluded?: boolean, onlyVisibleColumns?: boolean, ignoreSubassemblyBomBehavior?: boolean, includeItemMicroversions?: boolean, includeTopLevelAssemblyRow?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getBillOfMaterials(did, wvm, wvmid, eid, linkDocumentId, configuration, bomColumnIds, indented, multiLevel, generateIfAbsent, templateId, includeExcluded, onlyVisibleColumns, ignoreSubassemblyBomBehavior, includeItemMicroversions, includeTopLevelAssemblyRow, thumbnail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBillOfMaterialsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the BOM in JSON in the Onshape BOM Standard format.
     * Get the Bill Of Materials (BOM) content for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param bomColumnIds Ids of the columns to include, or all columns if empty. BOM column ids correspond to metadata property ids.
     * @param indented Return the Structured BOM table with all rows collapsed, otherwise returns the Flattened BOM.
     * @param multiLevel Return the Structured BOM table with all rows expanded. Ignored if indented is false.
     * @param generateIfAbsent Return the BOM table data even if the BOM does not exist. If this is false and the BOM does not exist, a 404 status code will be returned. This option is highly recommended.
     * @param templateId The id of the BOM table template to use when generating the table.
     * @param includeExcluded Include items that have been excluded from the BOM table.
     * @param onlyVisibleColumns Only return data for visible columns, instead of all possible columns.
     * @param ignoreSubassemblyBomBehavior Ignore the \&#39;Subassembly BOM behavior\&#39; property when constructing the BOM table.
     * @param includeItemMicroversions Include element microversions and version metadata microversions in the JSON.
     * @param includeTopLevelAssemblyRow Include top-level assembly row when constructing the BOM table.
     * @param thumbnail Return thumbnail info
     */
    public getBillOfMaterials(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, bomColumnIds?: Array<string>, indented?: boolean, multiLevel?: boolean, generateIfAbsent?: boolean, templateId?: string, includeExcluded?: boolean, onlyVisibleColumns?: boolean, ignoreSubassemblyBomBehavior?: boolean, includeItemMicroversions?: boolean, includeTopLevelAssemblyRow?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<void> {
        return this.getBillOfMaterialsWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, bomColumnIds, indented, multiLevel, generateIfAbsent, templateId, includeExcluded, onlyVisibleColumns, ignoreSubassemblyBomBehavior, includeItemMicroversions, includeTopLevelAssemblyRow, thumbnail, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of exploded views for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     */
    public getExplodedViewsWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getExplodedViews(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExplodedViewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of exploded views for the specified assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     */
    public getExplodedViews(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, _options?: Configuration): Observable<void> {
        return this.getExplodedViewsWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the feature spec definitions for an assembly.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public getFeatureSpecsWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getFeatureSpecs(did, wvm, wvmid, eid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeatureSpecsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the feature spec definitions for an assembly.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public getFeatureSpecs(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<void> {
        return this.getFeatureSpecsWithHttpInfo(did, wvm, wvmid, eid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the definitions of the specified features in an assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param featureId 
     */
    public getFeaturesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, featureId?: Array<string>, _options?: Configuration): Observable<HttpInfo<BTAssemblyFeatureListResponse1174>> {
        const requestContextPromise = this.requestFactory.getFeatures(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, featureId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeaturesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the definitions of the specified features in an assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     * @param featureId 
     */
    public getFeatures(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, featureId?: Array<string>, _options?: Configuration): Observable<BTAssemblyFeatureListResponse1174> {
        return this.getFeaturesWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, featureId, _options).pipe(map((apiResponse: HttpInfo<BTAssemblyFeatureListResponse1174>) => apiResponse.data));
    }

    /**
     * Get a list of all named positions for the assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     */
    public getNamedPositionsWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getNamedPositions(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNamedPositionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all named positions for the assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param explodedViewId 
     */
    public getNamedPositions(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, explodedViewId?: string, _options?: Configuration): Observable<void> {
        return this.getNamedPositionsWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, explodedViewId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the view data for all named views for the specified element.
     * @param did The id of the document in which to perform the operation.
     * @param eid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param skipPerspective 
     * @param includeSectionCutViews 
     */
    public getNamedViewsWithHttpInfo(did: string, eid: string, linkDocumentId?: string, skipPerspective?: boolean, includeSectionCutViews?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getNamedViews(did, eid, linkDocumentId, skipPerspective, includeSectionCutViews, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNamedViewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the view data for all named views for the specified element.
     * @param did The id of the document in which to perform the operation.
     * @param eid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param skipPerspective 
     * @param includeSectionCutViews 
     */
    public getNamedViews(did: string, eid: string, linkDocumentId?: string, skipPerspective?: boolean, includeSectionCutViews?: boolean, _options?: Configuration): Observable<void> {
        return this.getNamedViewsWithHttpInfo(did, eid, linkDocumentId, skipPerspective, includeSectionCutViews, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets the Bill Of Materials (BOM) for the specified assembly, or creates a BOM if none exist.
     * @param did 
     * @param wid 
     * @param eid 
     */
    public getOrCreateBillOfMaterialsElementWithHttpInfo(did: string, wid: string, eid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getOrCreateBillOfMaterialsElement(did, wid, eid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrCreateBillOfMaterialsElementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the Bill Of Materials (BOM) for the specified assembly, or creates a BOM if none exist.
     * @param did 
     * @param wid 
     * @param eid 
     */
    public getOrCreateBillOfMaterialsElement(did: string, wid: string, eid: string, _options?: Configuration): Observable<void> {
        return this.getOrCreateBillOfMaterialsElementWithHttpInfo(did, wid, eid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create new instances with transformation.
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAssemblyTransformedInstancesDefinitionParams 
     */
    public insertTransformedInstancesWithHttpInfo(did: string, eid: string, wid: string, bTAssemblyTransformedInstancesDefinitionParams: BTAssemblyTransformedInstancesDefinitionParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.insertTransformedInstances(did, eid, wid, bTAssemblyTransformedInstancesDefinitionParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.insertTransformedInstancesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create new instances with transformation.
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAssemblyTransformedInstancesDefinitionParams 
     */
    public insertTransformedInstances(did: string, eid: string, wid: string, bTAssemblyTransformedInstancesDefinitionParams: BTAssemblyTransformedInstancesDefinitionParams, _options?: Configuration): Observable<void> {
        return this.insertTransformedInstancesWithHttpInfo(did, eid, wid, bTAssemblyTransformedInstancesDefinitionParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This endpoint can include multiple modifications to an assembly with one change. For example, it can delete/suppress/unsuppress/transform multiple instances. It creates one history entry in the document history list.
     * Modify an assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param bTAssemblyModificationParams 
     */
    public modifyWithHttpInfo(did: string, wid: string, eid: string, linkDocumentId?: string, bTAssemblyModificationParams?: BTAssemblyModificationParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.modify(did, wid, eid, linkDocumentId, bTAssemblyModificationParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.modifyWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint can include multiple modifications to an assembly with one change. For example, it can delete/suppress/unsuppress/transform multiple instances. It creates one history entry in the document history list.
     * Modify an assembly.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param bTAssemblyModificationParams 
     */
    public modify(did: string, wid: string, eid: string, linkDocumentId?: string, bTAssemblyModificationParams?: BTAssemblyModificationParams, _options?: Configuration): Observable<void> {
        return this.modifyWithHttpInfo(did, wid, eid, linkDocumentId, bTAssemblyModificationParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Transform a list of assembly occurrences.
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAssemblyTransformDefinitionParams 
     */
    public transformOccurrencesWithHttpInfo(did: string, eid: string, wid: string, bTAssemblyTransformDefinitionParams?: BTAssemblyTransformDefinitionParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.transformOccurrences(did, eid, wid, bTAssemblyTransformDefinitionParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transformOccurrencesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Transform a list of assembly occurrences.
     * @param did 
     * @param eid 
     * @param wid 
     * @param bTAssemblyTransformDefinitionParams 
     */
    public transformOccurrences(did: string, eid: string, wid: string, bTAssemblyTransformDefinitionParams?: BTAssemblyTransformDefinitionParams, _options?: Configuration): Observable<void> {
        return this.transformOccurrencesWithHttpInfo(did, eid, wid, bTAssemblyTransformDefinitionParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Refer to the [Export dialog](https://cad.onshape.com/help/Content/exporting-files.htm) for a list of valid formats.
     * Translate the assembly to another format for export.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param bTTranslateFormatParams 
     */
    public translateFormatWithHttpInfo(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.translateFormat(did, wv, wvid, eid, bTTranslateFormatParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateFormatWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refer to the [Export dialog](https://cad.onshape.com/help/Content/exporting-files.htm) for a list of valid formats.
     * Translate the assembly to another format for export.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param bTTranslateFormatParams 
     */
    public translateFormat(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Observable<void> {
        return this.translateFormatWithHttpInfo(did, wv, wvid, eid, bTTranslateFormatParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update an existing feature for an Assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param fid 
     * @param bTFeatureDefinitionCall1406 
     */
    public updateFeatureWithHttpInfo(did: string, wid: string, eid: string, fid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateFeature(did, wid, eid, fid, bTFeatureDefinitionCall1406, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFeatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing feature for an Assembly.
     * @param did 
     * @param wid 
     * @param eid 
     * @param fid 
     * @param bTFeatureDefinitionCall1406 
     */
    public updateFeature(did: string, wid: string, eid: string, fid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Observable<void> {
        return this.updateFeatureWithHttpInfo(did, wid, eid, fid, bTFeatureDefinitionCall1406, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";
export class ObservableBillingApi {
    private requestFactory: BillingApiRequestFactory;
    private responseProcessor: BillingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingApiRequestFactory,
        responseProcessor?: BillingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BillingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BillingApiResponseProcessor();
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get all billing plans and their information for an application by client ID.
     * @param cid 
     */
    public getClientPlansWithHttpInfo(cid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getClientPlans(cid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getClientPlansWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API should be used within the context of an OAuth-enabled application.
     * Get all billing plans and their information for an application by client ID.
     * @param cid 
     */
    public getClientPlans(cid: string, _options?: Configuration): Observable<void> {
        return this.getClientPlansWithHttpInfo(cid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { BlobElementApiRequestFactory, BlobElementApiResponseProcessor} from "../apis/BlobElementApi";
export class ObservableBlobElementApi {
    private requestFactory: BlobElementApiRequestFactory;
    private responseProcessor: BlobElementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BlobElementApiRequestFactory,
        responseProcessor?: BlobElementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlobElementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlobElementApiResponseProcessor();
    }

    /**
     * Translate (i.e., export) a blob element to a different format.
     * Export a blob element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param bTTranslateFormatParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public createBlobTranslationWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createBlobTranslation(did, wv, wvid, eid, bTTranslateFormatParams, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBlobTranslationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Translate (i.e., export) a blob element to a different format.
     * Export a blob element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param bTTranslateFormatParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public createBlobTranslation(did: string, wv: 'w' | 'v', wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.createBlobTranslationWithHttpInfo(did, wv, wvid, eid, bTTranslateFormatParams, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Download a file from a blob element for the specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param contentDisposition If \&quot;attachment\&quot;, includes a Content-Disposition return header with the filename.
     * @param ifNoneMatch Entity tag; an md5 checksum of the data in double quotes. If the data to download has the same checksum as this entity tag, a 304 \&#39;Not Modified\&#39; status will be returned. The entity tag is returned in the response headers as ETag.
     */
    public downloadFileWorkspaceWithHttpInfo(did: string, wid: string, eid: string, linkDocumentId?: string, contentDisposition?: string, ifNoneMatch?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.downloadFileWorkspace(did, wid, eid, linkDocumentId, contentDisposition, ifNoneMatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadFileWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download a file from a blob element for the specified workspace/version/microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param contentDisposition If \&quot;attachment\&quot;, includes a Content-Disposition return header with the filename.
     * @param ifNoneMatch Entity tag; an md5 checksum of the data in double quotes. If the data to download has the same checksum as this entity tag, a 304 \&#39;Not Modified\&#39; status will be returned. The entity tag is returned in the response headers as ETag.
     */
    public downloadFileWorkspace(did: string, wid: string, eid: string, linkDocumentId?: string, contentDisposition?: string, ifNoneMatch?: string, _options?: Configuration): Observable<void> {
        return this.downloadFileWorkspaceWithHttpInfo(did, wid, eid, linkDocumentId, contentDisposition, ifNoneMatch, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Change the measurement units for the blob element.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param bTUpdateMeshUnitsParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public updateUnitsWithHttpInfo(did: string, wid: string, eid: string, bTUpdateMeshUnitsParams: BTUpdateMeshUnitsParams, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateUnits(did, wid, eid, bTUpdateMeshUnitsParams, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUnitsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Change the measurement units for the blob element.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param bTUpdateMeshUnitsParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public updateUnits(did: string, wid: string, eid: string, bTUpdateMeshUnitsParams: BTUpdateMeshUnitsParams, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.updateUnitsWithHttpInfo(did, wid, eid, bTUpdateMeshUnitsParams, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Upload a file and create a blob element from it.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public uploadFileCreateElementWithHttpInfo(did: string, wid: string, linkDocumentId?: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.uploadFileCreateElement(did, wid, linkDocumentId, file, allowFaultyParts, createComposite, createDrawingIfPossible, encodedFilename, extractAssemblyHierarchy, flattenAssemblies, formatName, joinAdjacentSurfaces, locationElementId, locationGroupId, locationPosition, notifyUser, ownerId, parentId, projectId, _public, onePartPerDoc, splitAssembliesIntoMultipleDocuments, storeInDocument, translate, unit, uploadId, versionString, importAppearances, yAxisIsUp, importWithinDocument, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadFileCreateElementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Upload a file and create a blob element from it.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public uploadFileCreateElement(did: string, wid: string, linkDocumentId?: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Observable<void> {
        return this.uploadFileCreateElementWithHttpInfo(did, wid, linkDocumentId, file, allowFaultyParts, createComposite, createDrawingIfPossible, encodedFilename, extractAssemblyHierarchy, flattenAssemblies, formatName, joinAdjacentSurfaces, locationElementId, locationGroupId, locationPosition, notifyUser, ownerId, parentId, projectId, _public, onePartPerDoc, splitAssembliesIntoMultipleDocuments, storeInDocument, translate, unit, uploadId, versionString, importAppearances, yAxisIsUp, importWithinDocument, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Update a blob element by uploading a file.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param parentChangeId The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public uploadFileUpdateElementWithHttpInfo(did: string, wid: string, eid: string, linkDocumentId?: string, parentChangeId?: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.uploadFileUpdateElement(did, wid, eid, linkDocumentId, parentChangeId, file, allowFaultyParts, createComposite, createDrawingIfPossible, encodedFilename, extractAssemblyHierarchy, flattenAssemblies, formatName, joinAdjacentSurfaces, locationElementId, locationGroupId, locationPosition, notifyUser, ownerId, parentId, projectId, _public, onePartPerDoc, splitAssembliesIntoMultipleDocuments, storeInDocument, translate, unit, uploadId, versionString, importAppearances, yAxisIsUp, importWithinDocument, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadFileUpdateElementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Request body parameters are multipart fields, so you must use `\"Content-Type\":\"multipart/form-data\"` in the request header.
     * Update a blob element by uploading a file.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param parentChangeId The id of the last change made to this application element. This can be retrieved from the response for any app element modification endpoint.
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public uploadFileUpdateElement(did: string, wid: string, eid: string, linkDocumentId?: string, parentChangeId?: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Observable<void> {
        return this.uploadFileUpdateElementWithHttpInfo(did, wid, eid, linkDocumentId, parentChangeId, file, allowFaultyParts, createComposite, createDrawingIfPossible, encodedFilename, extractAssemblyHierarchy, flattenAssemblies, formatName, joinAdjacentSurfaces, locationElementId, locationGroupId, locationPosition, notifyUser, ownerId, parentId, projectId, _public, onePartPerDoc, splitAssembliesIntoMultipleDocuments, storeInDocument, translate, unit, uploadId, versionString, importAppearances, yAxisIsUp, importWithinDocument, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { CommentApiRequestFactory, CommentApiResponseProcessor} from "../apis/CommentApi";
export class ObservableCommentApi {
    private requestFactory: CommentApiRequestFactory;
    private responseProcessor: CommentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentApiRequestFactory,
        responseProcessor?: CommentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommentApiResponseProcessor();
    }

    /**
     * Add an attachment to a comment.
     * @param cid 
     * @param file File to upload.
     */
    public addAttachmentWithHttpInfo(cid: string, file: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachment(cid, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add an attachment to a comment.
     * @param cid 
     * @param file File to upload.
     */
    public addAttachment(cid: string, file: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentWithHttpInfo(cid, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update a document with a new comment.
     * @param bTCommentParams 
     */
    public createCommentWithHttpInfo(bTCommentParams: BTCommentParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createComment(bTCommentParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a document with a new comment.
     * @param bTCommentParams 
     */
    public createComment(bTCommentParams: BTCommentParams, _options?: Configuration): Observable<void> {
        return this.createCommentWithHttpInfo(bTCommentParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete all attachments from a comment.
     * @param cid 
     */
    public deleteAttachmentsWithHttpInfo(cid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAttachments(cid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all attachments from a comment.
     * @param cid 
     */
    public deleteAttachments(cid: string, _options?: Configuration): Observable<void> {
        return this.deleteAttachmentsWithHttpInfo(cid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a comment from a document.
     * @param cid 
     */
    public deleteCommentWithHttpInfo(cid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteComment(cid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a comment from a document.
     * @param cid 
     */
    public deleteComment(cid: string, _options?: Configuration): Observable<void> {
        return this.deleteCommentWithHttpInfo(cid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns only a single attachment.
     * Get the attachment with the specified file extension that is associated with the specified comment.
     * @param cid 
     * @param fdid 
     * @param ext 
     */
    public getAttachmentWithHttpInfo(cid: string, fdid: string, ext: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAttachment(cid, fdid, ext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns only a single attachment.
     * Get the attachment with the specified file extension that is associated with the specified comment.
     * @param cid 
     * @param fdid 
     * @param ext 
     */
    public getAttachment(cid: string, fdid: string, ext: string, _options?: Configuration): Observable<void> {
        return this.getAttachmentWithHttpInfo(cid, fdid, ext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get details for a comment.
     * @param cid 
     */
    public getCommentWithHttpInfo(cid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getComment(cid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get details for a comment.
     * @param cid 
     */
    public getComment(cid: string, _options?: Configuration): Observable<void> {
        return this.getCommentWithHttpInfo(cid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of comments in a document.
     * @param did 
     * @param objectType 
     * @param pid 
     * @param eid 
     * @param filter 
     * @param resolved 
     * @param offset 
     * @param limit 
     */
    public getCommentsWithHttpInfo(did?: string, objectType?: number, pid?: string, eid?: string, filter?: number, resolved?: boolean, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getComments(did, objectType, pid, eid, filter, resolved, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCommentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of comments in a document.
     * @param did 
     * @param objectType 
     * @param pid 
     * @param eid 
     * @param filter 
     * @param resolved 
     * @param offset 
     * @param limit 
     */
    public getComments(did?: string, objectType?: number, pid?: string, eid?: string, filter?: number, resolved?: boolean, offset?: number, limit?: number, _options?: Configuration): Observable<void> {
        return this.getCommentsWithHttpInfo(did, objectType, pid, eid, filter, resolved, offset, limit, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Reopen a resolved comment.
     * @param cid 
     */
    public reopenWithHttpInfo(cid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.reopen(cid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reopenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reopen a resolved comment.
     * @param cid 
     */
    public reopen(cid: string, _options?: Configuration): Observable<void> {
        return this.reopenWithHttpInfo(cid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Resolve a comment.
     * @param cid 
     */
    public resolveWithHttpInfo(cid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resolve(cid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resolveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resolve a comment.
     * @param cid 
     */
    public resolve(cid: string, _options?: Configuration): Observable<void> {
        return this.resolveWithHttpInfo(cid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update the content of an existing comment.
     * @param cid 
     * @param bTCommentParams 
     */
    public updateCommentWithHttpInfo(cid: string, bTCommentParams: BTCommentParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateComment(cid, bTCommentParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the content of an existing comment.
     * @param cid 
     * @param bTCommentParams 
     */
    public updateComment(cid: string, bTCommentParams: BTCommentParams, _options?: Configuration): Observable<void> {
        return this.updateCommentWithHttpInfo(cid, bTCommentParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { CompanyApiRequestFactory, CompanyApiResponseProcessor} from "../apis/CompanyApi";
export class ObservableCompanyApi {
    private requestFactory: CompanyApiRequestFactory;
    private responseProcessor: CompanyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CompanyApiRequestFactory,
        responseProcessor?: CompanyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CompanyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CompanyApiResponseProcessor();
    }

    /**
     * Returns the company user info.
     * Add a user to a company.
     * @param cid 
     * @param bTCompanyUserParams 
     */
    public addUserToCompanyWithHttpInfo(cid: string, bTCompanyUserParams: BTCompanyUserParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addUserToCompany(cid, bTCompanyUserParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUserToCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the company user info.
     * Add a user to a company.
     * @param cid 
     * @param bTCompanyUserParams 
     */
    public addUserToCompany(cid: string, bTCompanyUserParams: BTCompanyUserParams, _options?: Configuration): Observable<void> {
        return this.addUserToCompanyWithHttpInfo(cid, bTCompanyUserParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * If no user is specified, will return all companies associated with the current user.
     * Get all companies to which the specified user belongs.
     * @param uid 
     * @param activeOnly 
     * @param includeAll 
     */
    public findCompanyWithHttpInfo(uid?: string, activeOnly?: boolean, includeAll?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.findCompany(uid, activeOnly, includeAll, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * If no user is specified, will return all companies associated with the current user.
     * Get all companies to which the specified user belongs.
     * @param uid 
     * @param activeOnly 
     * @param includeAll 
     */
    public findCompany(uid?: string, activeOnly?: boolean, includeAll?: boolean, _options?: Configuration): Observable<void> {
        return this.findCompanyWithHttpInfo(uid, activeOnly, includeAll, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get company information by company ID.
     * @param cid 
     */
    public getCompanyWithHttpInfo(cid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCompany(cid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get company information by company ID.
     * @param cid 
     */
    public getCompany(cid: string, _options?: Configuration): Observable<void> {
        return this.getCompanyWithHttpInfo(cid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API can only be called by company admins. Use the `name` field for the exact document name string.
     * Get document by exact document name.
     * @param cid 
     * @param name 
     */
    public getDocumentsByNameWithHttpInfo(cid: string, name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentsByName(cid, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentsByNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API can only be called by company admins. Use the `name` field for the exact document name string.
     * Get document by exact document name.
     * @param cid 
     * @param name 
     */
    public getDocumentsByName(cid: string, name: string, _options?: Configuration): Observable<void> {
        return this.getDocumentsByNameWithHttpInfo(cid, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Remove a user from a company, company teams, and all the direct shares.
     * @param cid 
     * @param uid 
     * @param removeFromTeams 
     * @param removeDirectShares 
     */
    public removeUserFromCompanyWithHttpInfo(cid: string, uid: string, removeFromTeams?: boolean, removeDirectShares?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeUserFromCompany(cid, uid, removeFromTeams, removeDirectShares, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeUserFromCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a user from a company, company teams, and all the direct shares.
     * @param cid 
     * @param uid 
     * @param removeFromTeams 
     * @param removeDirectShares 
     */
    public removeUserFromCompany(cid: string, uid: string, removeFromTeams?: boolean, removeDirectShares?: boolean, _options?: Configuration): Observable<void> {
        return this.removeUserFromCompanyWithHttpInfo(cid, uid, removeFromTeams, removeDirectShares, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns updated company user info. Global permissions can only be updated by the company admin.
     * Update the company\'s information for a user.
     * @param cid 
     * @param uid 
     * @param bTCompanyUserParams 
     */
    public updateCompanyUserWithHttpInfo(cid: string, uid: string, bTCompanyUserParams: BTCompanyUserParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateCompanyUser(cid, uid, bTCompanyUserParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCompanyUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns updated company user info. Global permissions can only be updated by the company admin.
     * Update the company\'s information for a user.
     * @param cid 
     * @param uid 
     * @param bTCompanyUserParams 
     */
    public updateCompanyUser(cid: string, uid: string, bTCompanyUserParams: BTCompanyUserParams, _options?: Configuration): Observable<void> {
        return this.updateCompanyUserWithHttpInfo(cid, uid, bTCompanyUserParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { DocumentApiRequestFactory, DocumentApiResponseProcessor} from "../apis/DocumentApi";
export class ObservableDocumentApi {
    private requestFactory: DocumentApiRequestFactory;
    private responseProcessor: DocumentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentApiRequestFactory,
        responseProcessor?: DocumentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DocumentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DocumentApiResponseProcessor();
    }

    /**
     * Copy workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTCopyDocumentParams 
     */
    public copyWorkspaceWithHttpInfo(did: string, wid: string, bTCopyDocumentParams: BTCopyDocumentParams, _options?: Configuration): Observable<HttpInfo<BTCopyDocumentInfo>> {
        const requestContextPromise = this.requestFactory.copyWorkspace(did, wid, bTCopyDocumentParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.copyWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Copy workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTCopyDocumentParams 
     */
    public copyWorkspace(did: string, wid: string, bTCopyDocumentParams: BTCopyDocumentParams, _options?: Configuration): Observable<BTCopyDocumentInfo> {
        return this.copyWorkspaceWithHttpInfo(did, wid, bTCopyDocumentParams, _options).pipe(map((apiResponse: HttpInfo<BTCopyDocumentInfo>) => apiResponse.data));
    }

    /**
     * Create and upload a document.
     * @param bTDocumentParams 
     */
    public createDocumentWithHttpInfo(bTDocumentParams: BTDocumentParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createDocument(bTDocumentParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create and upload a document.
     * @param bTDocumentParams 
     */
    public createDocument(bTDocumentParams: BTDocumentParams, _options?: Configuration): Observable<void> {
        return this.createDocumentWithHttpInfo(bTDocumentParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create version by document ID.
     * @param did 
     * @param bTVersionOrWorkspaceParams 
     */
    public createVersionWithHttpInfo(did: string, bTVersionOrWorkspaceParams: BTVersionOrWorkspaceParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createVersion(did, bTVersionOrWorkspaceParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create version by document ID.
     * @param did 
     * @param bTVersionOrWorkspaceParams 
     */
    public createVersion(did: string, bTVersionOrWorkspaceParams: BTVersionOrWorkspaceParams, _options?: Configuration): Observable<void> {
        return this.createVersionWithHttpInfo(did, bTVersionOrWorkspaceParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create workspace by document ID.
     * @param did 
     * @param bTVersionOrWorkspaceParams 
     */
    public createWorkspaceWithHttpInfo(did: string, bTVersionOrWorkspaceParams?: BTVersionOrWorkspaceParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createWorkspace(did, bTVersionOrWorkspaceParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create workspace by document ID.
     * @param did 
     * @param bTVersionOrWorkspaceParams 
     */
    public createWorkspace(did: string, bTVersionOrWorkspaceParams?: BTVersionOrWorkspaceParams, _options?: Configuration): Observable<void> {
        return this.createWorkspaceWithHttpInfo(did, bTVersionOrWorkspaceParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete document by document ID.
     * @param did 
     * @param forever 
     */
    public deleteDocumentWithHttpInfo(did: string, forever?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDocument(did, forever, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete document by document ID.
     * @param did 
     * @param forever 
     */
    public deleteDocument(did: string, forever?: boolean, _options?: Configuration): Observable<void> {
        return this.deleteDocumentWithHttpInfo(did, forever, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     */
    public deleteWorkspaceWithHttpInfo(did: string, wid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteWorkspace(did, wid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     */
    public deleteWorkspace(did: string, wid: string, _options?: Configuration): Observable<void> {
        return this.deleteWorkspaceWithHttpInfo(did, wid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve external data by document ID and foreign ID.
     * @param did 
     * @param fid 
     * @param ifNoneMatch 
     */
    public downloadExternalDataWithHttpInfo(did: string, fid: string, ifNoneMatch?: string, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.downloadExternalData(did, fid, ifNoneMatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadExternalDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve external data by document ID and foreign ID.
     * @param did 
     * @param fid 
     * @param ifNoneMatch 
     */
    public downloadExternalData(did: string, fid: string, ifNoneMatch?: string, _options?: Configuration): Observable<HttpFile> {
        return this.downloadExternalDataWithHttpInfo(did, fid, ifNoneMatch, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * Export document by document ID, workspace or version ID, and tab ID.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param bTBExportModelParams 
     */
    public export2JsonWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, bTBExportModelParams?: BTBExportModelParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.export2Json(did, wv, wvid, eid, linkDocumentId, bTBExportModelParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.export2JsonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export document by document ID, workspace or version ID, and tab ID.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param bTBExportModelParams 
     */
    public export2Json(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, bTBExportModelParams?: BTBExportModelParams, _options?: Configuration): Observable<void> {
        return this.export2JsonWithHttpInfo(did, wv, wvid, eid, linkDocumentId, bTBExportModelParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve current microversion by document ID and workspace or version ID.
     * @param did 
     * @param wv 
     * @param wvid 
     */
    public getCurrentMicroversionWithHttpInfo(did: string, wv: string, wvid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCurrentMicroversion(did, wv, wvid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCurrentMicroversionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve current microversion by document ID and workspace or version ID.
     * @param did 
     * @param wv 
     * @param wvid 
     */
    public getCurrentMicroversion(did: string, wv: string, wvid: string, _options?: Configuration): Observable<void> {
        return this.getCurrentMicroversionWithHttpInfo(did, wv, wvid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve document by document ID.
     * @param did 
     */
    public getDocumentWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<BTDocumentInfo>> {
        const requestContextPromise = this.requestFactory.getDocument(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve document by document ID.
     * @param did 
     */
    public getDocument(did: string, _options?: Configuration): Observable<BTDocumentInfo> {
        return this.getDocumentWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<BTDocumentInfo>) => apiResponse.data));
    }

    /**
     * Retrieve access control list by document ID.
     * @param did 
     */
    public getDocumentAclWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentAcl(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentAclWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve access control list by document ID.
     * @param did 
     */
    public getDocumentAcl(did: string, _options?: Configuration): Observable<void> {
        return this.getDocumentAclWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve document history by document ID and workspace or microversion ID.
     * @param did 
     * @param wm 
     * @param wmid 
     */
    public getDocumentHistoryWithHttpInfo(did: string, wm: string, wmid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentHistory(did, wm, wmid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve document history by document ID and workspace or microversion ID.
     * @param did 
     * @param wm 
     * @param wmid 
     */
    public getDocumentHistory(did: string, wm: string, wmid: string, _options?: Configuration): Observable<void> {
        return this.getDocumentHistoryWithHttpInfo(did, wm, wmid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve Document permissions by document ID.
     * @param did 
     */
    public getDocumentPermissionSetWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getDocumentPermissionSet(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentPermissionSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve Document permissions by document ID.
     * @param did 
     */
    public getDocumentPermissionSet(did: string, _options?: Configuration): Observable<Array<string>> {
        return this.getDocumentPermissionSetWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Retrieve versions by document ID.
     * @param did 
     * @param offset 
     * @param limit 
     */
    public getDocumentVersionsWithHttpInfo(did: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentVersions(did, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentVersionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve versions by document ID.
     * @param did 
     * @param offset 
     * @param limit 
     */
    public getDocumentVersions(did: string, offset?: number, limit?: number, _options?: Configuration): Observable<void> {
        return this.getDocumentVersionsWithHttpInfo(did, offset, limit, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve workspaces by document ID.
     * @param did 
     */
    public getDocumentWorkspacesWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentWorkspaces(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentWorkspacesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve workspaces by document ID.
     * @param did 
     */
    public getDocumentWorkspaces(did: string, _options?: Configuration): Observable<void> {
        return this.getDocumentWorkspacesWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a document.
     * @param q Search for documents that contain the given string in the name. Search is not case-sensitive.
     * @param filter Filter ID. Options are 0 (my documents), 1 (created), 2 (shared), 3 (trash), 4 (public), 5 (recent), 6 (by owner), 7 (by company), or 9 (by team).
     * @param owner Document owner\&#39;s ID (if the filter is 6 or 7), or Team Id (if the filter is 9) 
     * @param ownerType Type of owner. Options are 0 (user), 1 (company), 2 (onshape). If the owner is a teamId, leave this unspecified.
     * @param sortColumn Column by which to sort search results. Options are name, modifiedAt, createdAt (Default), email, modifiedBy, and promotedAt.
     * @param sortOrder Sort order. Options are desc (descending, the default), or asc (ascending).
     * @param offset Offset. Determines where search results begin. Default value is 0.
     * @param limit Maximum number of results to return per page. Default value is 20 (also the maximum). Number of results returned can be less than this value. Use the &#x60;next&#x60; URL in the response to fetch the next page.
     * @param label Label
     * @param project Project
     * @param parentId Parent Id
     */
    public getDocumentsWithHttpInfo(q?: string, filter?: number, owner?: string, ownerType?: number, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, label?: string, project?: string, parentId?: string, _options?: Configuration): Observable<HttpInfo<BTGlobalTreeNodeListResponse>> {
        const requestContextPromise = this.requestFactory.getDocuments(q, filter, owner, ownerType, sortColumn, sortOrder, offset, limit, label, project, parentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a document.
     * @param q Search for documents that contain the given string in the name. Search is not case-sensitive.
     * @param filter Filter ID. Options are 0 (my documents), 1 (created), 2 (shared), 3 (trash), 4 (public), 5 (recent), 6 (by owner), 7 (by company), or 9 (by team).
     * @param owner Document owner\&#39;s ID (if the filter is 6 or 7), or Team Id (if the filter is 9) 
     * @param ownerType Type of owner. Options are 0 (user), 1 (company), 2 (onshape). If the owner is a teamId, leave this unspecified.
     * @param sortColumn Column by which to sort search results. Options are name, modifiedAt, createdAt (Default), email, modifiedBy, and promotedAt.
     * @param sortOrder Sort order. Options are desc (descending, the default), or asc (ascending).
     * @param offset Offset. Determines where search results begin. Default value is 0.
     * @param limit Maximum number of results to return per page. Default value is 20 (also the maximum). Number of results returned can be less than this value. Use the &#x60;next&#x60; URL in the response to fetch the next page.
     * @param label Label
     * @param project Project
     * @param parentId Parent Id
     */
    public getDocuments(q?: string, filter?: number, owner?: string, ownerType?: number, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, label?: string, project?: string, parentId?: string, _options?: Configuration): Observable<BTGlobalTreeNodeListResponse> {
        return this.getDocumentsWithHttpInfo(q, filter, owner, ownerType, sortColumn, sortOrder, offset, limit, label, project, parentId, _options).pipe(map((apiResponse: HttpInfo<BTGlobalTreeNodeListResponse>) => apiResponse.data));
    }

    /**
     * Retrieve tabs by document ID and workspace or version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param elementType 
     * @param elementId 
     * @param withThumbnails 
     */
    public getElementsInDocumentWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, linkDocumentId?: string, elementType?: string, elementId?: string, withThumbnails?: boolean, _options?: Configuration): Observable<HttpInfo<Array<BTDocumentElementInfo>>> {
        const requestContextPromise = this.requestFactory.getElementsInDocument(did, wvm, wvmid, linkDocumentId, elementType, elementId, withThumbnails, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElementsInDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve tabs by document ID and workspace or version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param elementType 
     * @param elementId 
     * @param withThumbnails 
     */
    public getElementsInDocument(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, linkDocumentId?: string, elementType?: string, elementId?: string, withThumbnails?: boolean, _options?: Configuration): Observable<Array<BTDocumentElementInfo>> {
        return this.getElementsInDocumentWithHttpInfo(did, wvm, wvmid, linkDocumentId, elementType, elementId, withThumbnails, _options).pipe(map((apiResponse: HttpInfo<Array<BTDocumentElementInfo>>) => apiResponse.data));
    }

    /**
     * Retrieve insertables by document ID and workspace or version ID.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param elementId 
     * @param configuration 
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param excludeNewerFSVersions 
     * @param maxFeatureScriptVersion 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeMeshes 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeCompositeParts 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     */
    public getInsertablesWithHttpInfo(did: string, wv: string, wvid: string, elementId?: string, configuration?: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includePartStudios?: boolean, includeFeatures?: boolean, includeMeshes?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeCompositeParts?: boolean, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getInsertables(did, wv, wvid, elementId, configuration, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, excludeNewerFSVersions, maxFeatureScriptVersion, includePartStudios, includeFeatures, includeMeshes, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeCompositeParts, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInsertablesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve insertables by document ID and workspace or version ID.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param elementId 
     * @param configuration 
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param excludeNewerFSVersions 
     * @param maxFeatureScriptVersion 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeMeshes 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeCompositeParts 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     */
    public getInsertables(did: string, wv: string, wvid: string, elementId?: string, configuration?: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includePartStudios?: boolean, includeFeatures?: boolean, includeMeshes?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeCompositeParts?: boolean, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, _options?: Configuration): Observable<void> {
        return this.getInsertablesWithHttpInfo(did, wv, wvid, elementId, configuration, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, excludeNewerFSVersions, maxFeatureScriptVersion, includePartStudios, includeFeatures, includeMeshes, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeCompositeParts, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the selected units and precision by document ID and workspace or version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public getUnitInfoWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getUnitInfo(did, wvm, wvmid, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUnitInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the selected units and precision by document ID and workspace or version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public getUnitInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getUnitInfoWithHttpInfo(did, wvm, wvmid, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve version by document ID and version ID.
     * @param did 
     * @param vid 
     * @param parents 
     * @param linkDocumentId 
     */
    public getVersionWithHttpInfo(did: string, vid: string, parents?: boolean, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<BTVersionInfo>> {
        const requestContextPromise = this.requestFactory.getVersion(did, vid, parents, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve version by document ID and version ID.
     * @param did 
     * @param vid 
     * @param parents 
     * @param linkDocumentId 
     */
    public getVersion(did: string, vid: string, parents?: boolean, linkDocumentId?: string, _options?: Configuration): Observable<BTVersionInfo> {
        return this.getVersionWithHttpInfo(did, vid, parents, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<BTVersionInfo>) => apiResponse.data));
    }

    /**
     * Merge into workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTVersionOrWorkspaceMergeInfo 
     */
    public mergeIntoWorkspaceWithHttpInfo(did: string, wid: string, bTVersionOrWorkspaceMergeInfo: BTVersionOrWorkspaceMergeInfo, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.mergeIntoWorkspace(did, wid, bTVersionOrWorkspaceMergeInfo, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mergeIntoWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Merge into workspace by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTVersionOrWorkspaceMergeInfo 
     */
    public mergeIntoWorkspace(did: string, wid: string, bTVersionOrWorkspaceMergeInfo: BTVersionOrWorkspaceMergeInfo, _options?: Configuration): Observable<void> {
        return this.mergeIntoWorkspaceWithHttpInfo(did, wid, bTVersionOrWorkspaceMergeInfo, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param sourceType 
     * @param sourceId 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public mergePreviewWithHttpInfo(did: string, wid: string, sourceType: string, sourceId: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.mergePreview(did, wid, sourceType, sourceId, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mergePreviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * Merge preview of changes that will occur based on document ID, workspace ID and source workspace/version ID
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param sourceType 
     * @param sourceId 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public mergePreview(did: string, wid: string, sourceType: string, sourceId: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.mergePreviewWithHttpInfo(did, wid, sourceType, sourceId, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Move tab by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTMoveElementParams 
     */
    public moveElementsToDocumentWithHttpInfo(did: string, wid: string, bTMoveElementParams: BTMoveElementParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.moveElementsToDocument(did, wid, bTMoveElementParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveElementsToDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Move tab by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTMoveElementParams 
     */
    public moveElementsToDocument(did: string, wid: string, bTMoveElementParams: BTMoveElementParams, _options?: Configuration): Observable<void> {
        return this.moveElementsToDocumentWithHttpInfo(did, wid, bTMoveElementParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param vm 
     * @param vmid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public restoreFromHistoryWithHttpInfo(did: string, wid: string, vm: string, vmid: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.restoreFromHistory(did, wid, vm, vmid, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreFromHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restore version or microversion to workspace by document ID, workspace ID, and version or microversion ID.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param vm 
     * @param vmid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public restoreFromHistory(did: string, wid: string, vm: string, vmid: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.restoreFromHistoryWithHttpInfo(did, wid, vm, vmid, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param did 
     * @param wid 
     * @param bTRevertUnchangedParams 
     */
    public revertUnchangedToRevisionsWithHttpInfo(did: string, wid: string, bTRevertUnchangedParams?: BTRevertUnchangedParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.revertUnchangedToRevisions(did, wid, bTRevertUnchangedParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revertUnchangedToRevisionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param did 
     * @param wid 
     * @param bTRevertUnchangedParams 
     */
    public revertUnchangedToRevisions(did: string, wid: string, bTRevertUnchangedParams?: BTRevertUnchangedParams, _options?: Configuration): Observable<void> {
        return this.revertUnchangedToRevisionsWithHttpInfo(did, wid, bTRevertUnchangedParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This returns list of documents based on search parameters.
     * Search document.
     * @param bTDocumentSearchParams 
     */
    public searchWithHttpInfo(bTDocumentSearchParams: BTDocumentSearchParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.search(bTDocumentSearchParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchWithHttpInfo(rsp)));
            }));
    }

    /**
     * This returns list of documents based on search parameters.
     * Search document.
     * @param bTDocumentSearchParams 
     */
    public search(bTDocumentSearchParams: BTDocumentSearchParams, _options?: Configuration): Observable<void> {
        return this.searchWithHttpInfo(bTDocumentSearchParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Share document by document ID.
     * @param did 
     * @param bTShareParams 
     */
    public shareDocumentWithHttpInfo(did: string, bTShareParams: BTShareParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.shareDocument(did, bTShareParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.shareDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Share document by document ID.
     * @param did 
     * @param bTShareParams 
     */
    public shareDocument(did: string, bTShareParams: BTShareParams, _options?: Configuration): Observable<void> {
        return this.shareDocumentWithHttpInfo(did, bTShareParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Share document by document ID with Onshape support.
     * @param did Document ID.
     */
    public shareWithSupportWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.shareWithSupport(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.shareWithSupportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Share document by document ID with Onshape support.
     * @param did Document ID.
     */
    public shareWithSupport(did: string, _options?: Configuration): Observable<void> {
        return this.shareWithSupportWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param did 
     * @param wid 
     * @param bTSyncAppElementParams 
     */
    public syncApplicationElementsWithHttpInfo(did: string, wid: string, bTSyncAppElementParams: BTSyncAppElementParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.syncApplicationElements(did, wid, bTSyncAppElementParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.syncApplicationElementsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param did 
     * @param wid 
     * @param bTSyncAppElementParams 
     */
    public syncApplicationElements(did: string, wid: string, bTSyncAppElementParams: BTSyncAppElementParams, _options?: Configuration): Observable<void> {
        return this.syncApplicationElementsWithHttpInfo(did, wid, bTSyncAppElementParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Unshare document by document ID and tab ID.
     * @param did 
     * @param eid 
     * @param entryType 
     */
    public unShareDocumentWithHttpInfo(did: string, eid: string, entryType?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unShareDocument(did, eid, entryType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unShareDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unshare document by document ID and tab ID.
     * @param did 
     * @param eid 
     * @param entryType 
     */
    public unShareDocument(did: string, eid: string, entryType?: number, _options?: Configuration): Observable<void> {
        return this.unShareDocumentWithHttpInfo(did, eid, entryType, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Unshare document with support.
     * @param did Document ID.
     */
    public unshareFromSupportWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unshareFromSupport(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unshareFromSupportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unshare document with support.
     * @param did Document ID.
     */
    public unshareFromSupport(did: string, _options?: Configuration): Observable<void> {
        return this.unshareFromSupportWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update document attributes by document ID.
     * @param did 
     * @param bTDocumentParams 
     */
    public updateDocumentAttributesWithHttpInfo(did: string, bTDocumentParams: BTDocumentParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateDocumentAttributes(did, bTDocumentParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDocumentAttributesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update document attributes by document ID.
     * @param did 
     * @param bTDocumentParams 
     */
    public updateDocumentAttributes(did: string, bTDocumentParams: BTDocumentParams, _options?: Configuration): Observable<void> {
        return this.updateDocumentAttributesWithHttpInfo(did, bTDocumentParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update external references to latest by document ID, workspace ID, and tab ID.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTLinkToLatestDocumentParams 
     */
    public updateExternalReferencesToLatestDocumentsWithHttpInfo(did: string, wid: string, eid: string, bTLinkToLatestDocumentParams?: BTLinkToLatestDocumentParams, _options?: Configuration): Observable<HttpInfo<BTLinkToLatestDocumentInfo>> {
        const requestContextPromise = this.requestFactory.updateExternalReferencesToLatestDocuments(did, wid, eid, bTLinkToLatestDocumentParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateExternalReferencesToLatestDocumentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update external references to latest by document ID, workspace ID, and tab ID.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTLinkToLatestDocumentParams 
     */
    public updateExternalReferencesToLatestDocuments(did: string, wid: string, eid: string, bTLinkToLatestDocumentParams?: BTLinkToLatestDocumentParams, _options?: Configuration): Observable<BTLinkToLatestDocumentInfo> {
        return this.updateExternalReferencesToLatestDocumentsWithHttpInfo(did, wid, eid, bTLinkToLatestDocumentParams, _options).pipe(map((apiResponse: HttpInfo<BTLinkToLatestDocumentInfo>) => apiResponse.data));
    }

}

import { DrawingApiRequestFactory, DrawingApiResponseProcessor} from "../apis/DrawingApi";
export class ObservableDrawingApi {
    private requestFactory: DrawingApiRequestFactory;
    private responseProcessor: DrawingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DrawingApiRequestFactory,
        responseProcessor?: DrawingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DrawingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DrawingApiResponseProcessor();
    }

    /**
     * Create a new drawing in a document.
     * @param did 
     * @param wid 
     * @param bTDrawingParams 
     */
    public createDrawingAppElementWithHttpInfo(did: string, wid: string, bTDrawingParams: BTDrawingParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createDrawingAppElement(did, wid, bTDrawingParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDrawingAppElementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new drawing in a document.
     * @param did 
     * @param wid 
     * @param bTDrawingParams 
     */
    public createDrawingAppElement(did: string, wid: string, bTDrawingParams: BTDrawingParams, _options?: Configuration): Observable<void> {
        return this.createDrawingAppElementWithHttpInfo(did, wid, bTDrawingParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Export a drawing to a different format within a document. Use `getDrawingTranslatorFormats` for a list of supported translation (i.e., import/export) formats.
     * Translate (export) a drawing to a different format.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param bTTranslateFormatParams 
     */
    public createDrawingTranslationWithHttpInfo(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createDrawingTranslation(did, wv, wvid, eid, bTTranslateFormatParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDrawingTranslationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export a drawing to a different format within a document. Use `getDrawingTranslatorFormats` for a list of supported translation (i.e., import/export) formats.
     * Translate (export) a drawing to a different format.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param bTTranslateFormatParams 
     */
    public createDrawingTranslation(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Observable<void> {
        return this.createDrawingTranslationWithHttpInfo(did, wv, wvid, eid, bTTranslateFormatParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all valid formats the drawing can be translated (exported) to.
     * @param did 
     * @param wid 
     * @param eid 
     */
    public getDrawingTranslatorFormatsWithHttpInfo(did: string, wid: string, eid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDrawingTranslatorFormats(did, wid, eid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDrawingTranslatorFormatsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all valid formats the drawing can be translated (exported) to.
     * @param did 
     * @param wid 
     * @param eid 
     */
    public getDrawingTranslatorFormats(did: string, wid: string, eid: string, _options?: Configuration): Observable<void> {
        return this.getDrawingTranslatorFormatsWithHttpInfo(did, wid, eid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the status of a drawing modification operation.
     * @param mrid 
     */
    public getModificationStatusWithHttpInfo(mrid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getModificationStatus(mrid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getModificationStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the status of a drawing modification operation.
     * @param mrid 
     */
    public getModificationStatus(mrid: string, _options?: Configuration): Observable<void> {
        return this.getModificationStatusWithHttpInfo(mrid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Modify a drawing via JSON payload.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param bTDrawingModificationParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public modifyDrawingWithHttpInfo(did: string, wid: string, eid: string, bTDrawingModificationParams: BTDrawingModificationParams, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.modifyDrawing(did, wid, eid, bTDrawingModificationParams, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.modifyDrawingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify a drawing via JSON payload.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid The id of the element in which to perform the operation.
     * @param bTDrawingModificationParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public modifyDrawing(did: string, wid: string, eid: string, bTDrawingModificationParams: BTDrawingModificationParams, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.modifyDrawingWithHttpInfo(did, wid, eid, bTDrawingModificationParams, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ElementApiRequestFactory, ElementApiResponseProcessor} from "../apis/ElementApi";
export class ObservableElementApi {
    private requestFactory: ElementApiRequestFactory;
    private responseProcessor: ElementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ElementApiRequestFactory,
        responseProcessor?: ElementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ElementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ElementApiResponseProcessor();
    }

    /**
     * Copy tab by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTCopyElementParams 
     */
    public copyElementFromSourceDocumentWithHttpInfo(did: string, wid: string, bTCopyElementParams: BTCopyElementParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.copyElementFromSourceDocument(did, wid, bTCopyElementParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.copyElementFromSourceDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Copy tab by document ID and workspace ID.
     * @param did 
     * @param wid 
     * @param bTCopyElementParams 
     */
    public copyElementFromSourceDocument(did: string, wid: string, bTCopyElementParams: BTCopyElementParams, _options?: Configuration): Observable<void> {
        return this.copyElementFromSourceDocumentWithHttpInfo(did, wid, bTCopyElementParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param cid 
     * @param linkDocumentId 
     * @param includeDisplay 
     * @param configurationIsId 
     */
    public decodeConfigurationWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, cid: string, linkDocumentId?: string, includeDisplay?: boolean, configurationIsId?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.decodeConfiguration(did, wvm, wvmid, eid, cid, linkDocumentId, includeDisplay, configurationIsId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.decodeConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Decode configuration string by documentation ID, workspace or version or microversion ID, and tab ID.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param cid 
     * @param linkDocumentId 
     * @param includeDisplay 
     * @param configurationIsId 
     */
    public decodeConfiguration(did: string, wvm: string, wvmid: string, eid: string, cid: string, linkDocumentId?: string, includeDisplay?: boolean, configurationIsId?: boolean, _options?: Configuration): Observable<void> {
        return this.decodeConfigurationWithHttpInfo(did, wvm, wvmid, eid, cid, linkDocumentId, includeDisplay, configurationIsId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param did 
     * @param wid 
     * @param eid 
     */
    public deleteElementWithHttpInfo(did: string, wid: string, eid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteElement(did, wid, eid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteElementWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param did 
     * @param wid 
     * @param eid 
     */
    public deleteElement(did: string, wid: string, eid: string, _options?: Configuration): Observable<void> {
        return this.deleteElementWithHttpInfo(did, wid, eid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Encode configuration by documentation ID and tab ID.
     * @param did 
     * @param eid 
     * @param bTConfigurationParams 
     * @param versionId 
     * @param linkDocumentId 
     */
    public encodeConfigurationMapWithHttpInfo(did: string, eid: string, bTConfigurationParams: BTConfigurationParams, versionId?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.encodeConfigurationMap(did, eid, bTConfigurationParams, versionId, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.encodeConfigurationMapWithHttpInfo(rsp)));
            }));
    }

    /**
     * Encode configuration by documentation ID and tab ID.
     * @param did 
     * @param eid 
     * @param bTConfigurationParams 
     * @param versionId 
     * @param linkDocumentId 
     */
    public encodeConfigurationMap(did: string, eid: string, bTConfigurationParams: BTConfigurationParams, versionId?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.encodeConfigurationMapWithHttpInfo(did, eid, bTConfigurationParams, versionId, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public getConfigurationWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getConfiguration(did, wvm, wvmid, eid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve configuration by document ID, workspace or version or microversion ID, and tab ID.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public getConfiguration(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<void> {
        return this.getConfigurationWithHttpInfo(did, wvm, wvmid, eid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param checkContent 
     * @param configuration 
     */
    public getElementTranslatorFormatsByVersionOrWorkspaceWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, checkContent?: boolean, configuration?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getElementTranslatorFormatsByVersionOrWorkspace(did, wv, wvid, eid, linkDocumentId, checkContent, configuration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElementTranslatorFormatsByVersionOrWorkspaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param checkContent 
     * @param configuration 
     */
    public getElementTranslatorFormatsByVersionOrWorkspace(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, checkContent?: boolean, configuration?: string, _options?: Configuration): Observable<void> {
        return this.getElementTranslatorFormatsByVersionOrWorkspaceWithHttpInfo(did, wv, wvid, eid, linkDocumentId, checkContent, configuration, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update configuration by document ID, workspace or microversion ID, and tab ID.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTConfigurationUpdateCall2933 
     */
    public updateConfigurationWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, bTConfigurationUpdateCall2933?: BTConfigurationUpdateCall2933, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateConfiguration(did, wvm, wvmid, eid, bTConfigurationUpdateCall2933, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update configuration by document ID, workspace or microversion ID, and tab ID.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTConfigurationUpdateCall2933 
     */
    public updateConfiguration(did: string, wvm: string, wvmid: string, eid: string, bTConfigurationUpdateCall2933?: BTConfigurationUpdateCall2933, _options?: Configuration): Observable<void> {
        return this.updateConfigurationWithHttpInfo(did, wvm, wvmid, eid, bTConfigurationUpdateCall2933, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update or replace node references by document ID, workspace ID, and tab ID.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTUpdateReferenceParams 
     */
    public updateReferencesWithHttpInfo(did: string, wid: string, eid: string, bTUpdateReferenceParams: BTUpdateReferenceParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateReferences(did, wid, eid, bTUpdateReferenceParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateReferencesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update or replace node references by document ID, workspace ID, and tab ID.
     * @param did 
     * @param wid 
     * @param eid 
     * @param bTUpdateReferenceParams 
     */
    public updateReferences(did: string, wid: string, eid: string, bTUpdateReferenceParams: BTUpdateReferenceParams, _options?: Configuration): Observable<void> {
        return this.updateReferencesWithHttpInfo(did, wid, eid, bTUpdateReferenceParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";
export class ObservableEventApi {
    private requestFactory: EventApiRequestFactory;
    private responseProcessor: EventApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventApiRequestFactory,
        responseProcessor?: EventApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventApiResponseProcessor();
    }

    /**
     * Fire an asynchronous event.
     * @param bTEventParams 
     */
    public fireEventWithHttpInfo(bTEventParams?: BTEventParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.fireEvent(bTEventParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fireEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fire an asynchronous event.
     * @param bTEventParams 
     */
    public fireEvent(bTEventParams?: BTEventParams, _options?: Configuration): Observable<void> {
        return this.fireEventWithHttpInfo(bTEventParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ExportRuleApiRequestFactory, ExportRuleApiResponseProcessor} from "../apis/ExportRuleApi";
export class ObservableExportRuleApi {
    private requestFactory: ExportRuleApiRequestFactory;
    private responseProcessor: ExportRuleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportRuleApiRequestFactory,
        responseProcessor?: ExportRuleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExportRuleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExportRuleApiResponseProcessor();
    }

    /**
     * Does NOT get the rules themselves; it gets the information used to create them.
     *  Get a list of valid export rule options for the user or company.
     * @param cu Indicates which of company (c) or user (u) id is specified below.
     * @param cuid The id of the company or user in which the operation should be performed.
     */
    public getValidRuleOptionsWithHttpInfo(cu: 'c' | 'u', cuid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getValidRuleOptions(cu, cuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidRuleOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Does NOT get the rules themselves; it gets the information used to create them.
     *  Get a list of valid export rule options for the user or company.
     * @param cu Indicates which of company (c) or user (u) id is specified below.
     * @param cuid The id of the company or user in which the operation should be performed.
     */
    public getValidRuleOptions(cu: 'c' | 'u', cuid: string, _options?: Configuration): Observable<void> {
        return this.getValidRuleOptionsWithHttpInfo(cu, cuid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { FeatureStudioApiRequestFactory, FeatureStudioApiResponseProcessor} from "../apis/FeatureStudioApi";
export class ObservableFeatureStudioApi {
    private requestFactory: FeatureStudioApiRequestFactory;
    private responseProcessor: FeatureStudioApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FeatureStudioApiRequestFactory,
        responseProcessor?: FeatureStudioApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FeatureStudioApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FeatureStudioApiResponseProcessor();
    }

    /**
     * Specify the name for the new tab in the request body.
     * Create a new Feature Studio tab in a document.
     * @param did 
     * @param wid 
     * @param bTModelElementParams 
     */
    public createFeatureStudioWithHttpInfo(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createFeatureStudio(did, wid, bTModelElementParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFeatureStudioWithHttpInfo(rsp)));
            }));
    }

    /**
     * Specify the name for the new tab in the request body.
     * Create a new Feature Studio tab in a document.
     * @param did 
     * @param wid 
     * @param bTModelElementParams 
     */
    public createFeatureStudio(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Observable<void> {
        return this.createFeatureStudioWithHttpInfo(did, wid, bTModelElementParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the text for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public getFeatureStudioContentsWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getFeatureStudioContents(did, wvm, wvmid, eid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeatureStudioContentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the text for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public getFeatureStudioContents(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<void> {
        return this.getFeatureStudioContentsWithHttpInfo(did, wvm, wvmid, eid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the feature specs for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public getFeatureStudioSpecsWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getFeatureStudioSpecs(did, wvm, wvmid, eid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeatureStudioSpecsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the feature specs for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     */
    public getFeatureStudioSpecs(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<void> {
        return this.getFeatureStudioSpecsWithHttpInfo(did, wvm, wvmid, eid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update the text for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureStudioContents2239 
     */
    public updateFeatureStudioContentsWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, bTFeatureStudioContents2239?: BTFeatureStudioContents2239, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateFeatureStudioContents(did, wvm, wvmid, eid, bTFeatureStudioContents2239, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFeatureStudioContentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the text for a Feature Studio element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureStudioContents2239 
     */
    public updateFeatureStudioContents(did: string, wvm: string, wvmid: string, eid: string, bTFeatureStudioContents2239?: BTFeatureStudioContents2239, _options?: Configuration): Observable<void> {
        return this.updateFeatureStudioContentsWithHttpInfo(did, wvm, wvmid, eid, bTFeatureStudioContents2239, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { FolderApiRequestFactory, FolderApiResponseProcessor} from "../apis/FolderApi";
export class ObservableFolderApi {
    private requestFactory: FolderApiRequestFactory;
    private responseProcessor: FolderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FolderApiRequestFactory,
        responseProcessor?: FolderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FolderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FolderApiResponseProcessor();
    }

    /**
     * Returns the ACL of permission objects. Each object contains:  * The type of entity       * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)   * The ID of the entity for the specified type.  * The permissions for that entity.      *  OWNER (100): All permissions, including those not listed, such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Get the Access Control List (ACL) for a folder to view permissions.
     * @param fid 
     */
    public getFolderAclWithHttpInfo(fid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getFolderAcl(fid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFolderAclWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the ACL of permission objects. Each object contains:  * The type of entity       * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)   * The ID of the entity for the specified type.  * The permissions for that entity.      *  OWNER (100): All permissions, including those not listed, such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Get the Access Control List (ACL) for a folder to view permissions.
     * @param fid 
     */
    public getFolderAcl(fid: string, _options?: Configuration): Observable<void> {
        return this.getFolderAclWithHttpInfo(fid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Specify the type of entity to share with using `entries.entryType`:      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide one of the identifiers in the `entries` object in the request body.       * You can share with non-Onshape users with the `email` field when `entryType=0`.    * Provide the string for the permission set. Do not include the integer in parentheses:      * OWNER (100): Object owner. Implies all permissions including those not listed such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Share folder with an entity.
     * @param fid 
     * @param bTShareParams 
     */
    public shareWithHttpInfo(fid: string, bTShareParams: BTShareParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.share(fid, bTShareParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.shareWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Specify the type of entity to share with using `entries.entryType`:      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide one of the identifiers in the `entries` object in the request body.       * You can share with non-Onshape users with the `email` field when `entryType=0`.    * Provide the string for the permission set. Do not include the integer in parentheses:      * OWNER (100): Object owner. Implies all permissions including those not listed such as permission to transfer ownership.      * DELETE (90)      * RESHARE (80)      * WRITE (70)      * READ (60)      * LINK (50)      * COPY (30): Can copy workspace      * EXPORT (20): Can export geometry      * COMMENT (10)      * ANONYMOUS_ACCESS (5): Special, restricted read access
     * Share folder with an entity.
     * @param fid 
     * @param bTShareParams 
     */
    public share(fid: string, bTShareParams: BTShareParams, _options?: Configuration): Observable<void> {
        return this.shareWithHttpInfo(fid, bTShareParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Provide the folder ID for the folder to unshare.    * Provide the `entityType` for the type of entity to remove.      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide the entity ID in the `eid` param.
     * Remove permissions from the folder for the specified Access Control List (ACL) entry.
     * @param fid 
     * @param eid 
     * @param entryType 
     */
    public unShareWithHttpInfo(fid: string, eid: string, entryType?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unShare(fid, eid, entryType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unShareWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Provide the folder ID for the folder to unshare.    * Provide the `entityType` for the type of entity to remove.      * 0 (User)       * 1 (Company)      * 2 (Team)      * 3 (Document)      * 4 (Application)  * Provide the entity ID in the `eid` param.
     * Remove permissions from the folder for the specified Access Control List (ACL) entry.
     * @param fid 
     * @param eid 
     * @param entryType 
     */
    public unShare(fid: string, eid: string, entryType?: number, _options?: Configuration): Observable<void> {
        return this.unShareWithHttpInfo(fid, eid, entryType, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { GlobalTreeNodesApiRequestFactory, GlobalTreeNodesApiResponseProcessor} from "../apis/GlobalTreeNodesApi";
export class ObservableGlobalTreeNodesApi {
    private requestFactory: GlobalTreeNodesApiRequestFactory;
    private responseProcessor: GlobalTreeNodesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GlobalTreeNodesApiRequestFactory,
        responseProcessor?: GlobalTreeNodesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GlobalTreeNodesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GlobalTreeNodesApiResponseProcessor();
    }

    /**
     * Get Searchable Trees
     */
    public globalTreeNodesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.globalTreeNodes(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.globalTreeNodesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Searchable Trees
     */
    public globalTreeNodes(_options?: Configuration): Observable<void> {
        return this.globalTreeNodesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get Tree Node List
     * @param fid ID of the folder to traverse.
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public globalTreeNodesFolderWithHttpInfo(fid: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.globalTreeNodesFolder(fid, getPathToRoot, offset, limit, sortColumn, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.globalTreeNodesFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Tree Node List
     * @param fid ID of the folder to traverse.
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public globalTreeNodesFolder(fid: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Observable<void> {
        return this.globalTreeNodesFolderWithHttpInfo(fid, getPathToRoot, offset, limit, sortColumn, sortOrder, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve insertables by folder id.
     * @param fid 
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public globalTreeNodesFolderInsertablesWithHttpInfo(fid: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.globalTreeNodesFolderInsertables(fid, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, includePartStudios, includeFeatures, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, excludeNewerFSVersions, maxFeatureScriptVersion, includeMeshes, includeCompositeParts, getPathToRoot, offset, limit, sortColumn, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.globalTreeNodesFolderInsertablesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve insertables by folder id.
     * @param fid 
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public globalTreeNodesFolderInsertables(fid: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Observable<void> {
        return this.globalTreeNodesFolderInsertablesWithHttpInfo(fid, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, includePartStudios, includeFeatures, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, excludeNewerFSVersions, maxFeatureScriptVersion, includeMeshes, includeCompositeParts, getPathToRoot, offset, limit, sortColumn, sortOrder, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns a list of all the elements in one of several globally defined lists. Known values include: | MAGIC ID | TITLE | USAGE | |-|-|-| | 0 | Recently Opened | Most recently opened documents | | 1 | My Onshape | Root folder and contents | | 2 | Created by Me | Documents created by the logged in user | | 3 | Public | All public documents (a very long list) | | 4 | Trash | Trashcan for the logged in user | | 5 | Tutorials & Samples | Desktop Tutorials | | 6 | FeatureScript samples |  FeatureScript samples (found when you select Other documents while adding a custom feature) | | 7 | Community spotlight | Community spotlight (found when you select Other documents while adding a custom feature) | | 8 | Tutorials | IOS Tutorials | | 9 | Tutorials | Android Tutorials | | 10 | Labels | Labels created by the user  | | 11 | Teams | Teams that the user is connected to | | 12 | Shared with me | Documents shared with the user | | 13 | Cloud Storage | Visual list of cloud accounts associated with the logged in user | | 14 | Custom table samples | Custom table samples (found when you select Other documents while adding a custom table) | 
     * Get Tree Node List
     * @param mid Magic ID of list to return.
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     */
    public globalTreeNodesMagicWithHttpInfo(mid: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.globalTreeNodesMagic(mid, getPathToRoot, offset, limit, sortColumn, sortOrder, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, includePartStudios, includeFeatures, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, excludeNewerFSVersions, maxFeatureScriptVersion, includeMeshes, includeCompositeParts, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.globalTreeNodesMagicWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of all the elements in one of several globally defined lists. Known values include: | MAGIC ID | TITLE | USAGE | |-|-|-| | 0 | Recently Opened | Most recently opened documents | | 1 | My Onshape | Root folder and contents | | 2 | Created by Me | Documents created by the logged in user | | 3 | Public | All public documents (a very long list) | | 4 | Trash | Trashcan for the logged in user | | 5 | Tutorials & Samples | Desktop Tutorials | | 6 | FeatureScript samples |  FeatureScript samples (found when you select Other documents while adding a custom feature) | | 7 | Community spotlight | Community spotlight (found when you select Other documents while adding a custom feature) | | 8 | Tutorials | IOS Tutorials | | 9 | Tutorials | Android Tutorials | | 10 | Labels | Labels created by the user  | | 11 | Teams | Teams that the user is connected to | | 12 | Shared with me | Documents shared with the user | | 13 | Cloud Storage | Visual list of cloud accounts associated with the logged in user | | 14 | Custom table samples | Custom table samples (found when you select Other documents while adding a custom table) | 
     * Get Tree Node List
     * @param mid Magic ID of list to return.
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     */
    public globalTreeNodesMagic(mid: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, _options?: Configuration): Observable<void> {
        return this.globalTreeNodesMagicWithHttpInfo(mid, getPathToRoot, offset, limit, sortColumn, sortOrder, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, includePartStudios, includeFeatures, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, excludeNewerFSVersions, maxFeatureScriptVersion, includeMeshes, includeCompositeParts, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve List of folders by Team id.
     * @param teamId ID of team to get data for
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public globalTreeNodesTeamWithHttpInfo(teamId: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.globalTreeNodesTeam(teamId, getPathToRoot, offset, limit, sortColumn, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.globalTreeNodesTeamWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve List of folders by Team id.
     * @param teamId ID of team to get data for
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public globalTreeNodesTeam(teamId: string, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Observable<void> {
        return this.globalTreeNodesTeamWithHttpInfo(teamId, getPathToRoot, offset, limit, sortColumn, sortOrder, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve insertables by Team id.
     * @param teamId ID of team to get data for
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public globalTreeNodesTeamInsertablesWithHttpInfo(teamId: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.globalTreeNodesTeamInsertables(teamId, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, includePartStudios, includeFeatures, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, excludeNewerFSVersions, maxFeatureScriptVersion, includeMeshes, includeCompositeParts, getPathToRoot, offset, limit, sortColumn, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.globalTreeNodesTeamInsertablesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve insertables by Team id.
     * @param teamId ID of team to get data for
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     * @param excludeNewerFSVersions Is this actually supported?
     * @param maxFeatureScriptVersion Is this actually supported?
     * @param includeMeshes Is this actually supported?
     * @param includeCompositeParts Is this actually supported?
     * @param getPathToRoot When true, requests that the path of all nodes up to the root are to be returned.
     * @param offset Starting offset in the sorted list of items to return.
     * @param limit Maximum number of items in the list to return.
     * @param sortColumn Field to sort the items in the list by.
     * @param sortOrder Which way to sort the list (asc/desc).  Defaults to asc.
     */
    public globalTreeNodesTeamInsertables(teamId: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, includePartStudios?: boolean, includeFeatures?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includeMeshes?: boolean, includeCompositeParts?: boolean, getPathToRoot?: boolean, offset?: number, limit?: number, sortColumn?: string, sortOrder?: string, _options?: Configuration): Observable<void> {
        return this.globalTreeNodesTeamInsertablesWithHttpInfo(teamId, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, includePartStudios, includeFeatures, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, excludeNewerFSVersions, maxFeatureScriptVersion, includeMeshes, includeCompositeParts, getPathToRoot, offset, limit, sortColumn, sortOrder, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { InsertableApiRequestFactory, InsertableApiResponseProcessor} from "../apis/InsertableApi";
export class ObservableInsertableApi {
    private requestFactory: InsertableApiRequestFactory;
    private responseProcessor: InsertableApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InsertableApiRequestFactory,
        responseProcessor?: InsertableApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InsertableApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InsertableApiResponseProcessor();
    }

    /**
     * * Returns only the latest revision of released insertables.  * Use the document ID (`did`) parameter to specify the source document, not the insertion target.  * For example, you can insert a custom Feature library into another custom Feature library, insert Parts into an Assembly or a Drawing, etc.
     * Get a list of things in this document that can be inserted elsewhere.
     * @param did 
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param excludeNewerFSVersions 
     * @param maxFeatureScriptVersion 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeMeshes 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeCompositeParts 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     */
    public getLatestInDocumentWithHttpInfo(did: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includePartStudios?: boolean, includeFeatures?: boolean, includeMeshes?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeCompositeParts?: boolean, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getLatestInDocument(did, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, excludeNewerFSVersions, maxFeatureScriptVersion, includePartStudios, includeFeatures, includeMeshes, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeCompositeParts, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestInDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Returns only the latest revision of released insertables.  * Use the document ID (`did`) parameter to specify the source document, not the insertion target.  * For example, you can insert a custom Feature library into another custom Feature library, insert Parts into an Assembly or a Drawing, etc.
     * Get a list of things in this document that can be inserted elsewhere.
     * @param did 
     * @param includeParts 
     * @param includeSurfaces 
     * @param includeSketches 
     * @param includeReferenceFeatures 
     * @param includeAssemblies 
     * @param includeFeatureStudios 
     * @param includeBlobs 
     * @param allowedBlobMimeTypes 
     * @param excludeNewerFSVersions 
     * @param maxFeatureScriptVersion 
     * @param includePartStudios 
     * @param includeFeatures 
     * @param includeMeshes 
     * @param includeWires 
     * @param includeFlattenedBodies 
     * @param includeApplications 
     * @param allowedApplicationMimeTypes 
     * @param includeCompositeParts 
     * @param includeFSTables 
     * @param includeFSComputedPartPropertyFunctions 
     * @param includeVariables 
     * @param includeVariableStudios 
     * @param allowedBlobExtensions 
     */
    public getLatestInDocument(did: string, includeParts?: boolean, includeSurfaces?: boolean, includeSketches?: boolean, includeReferenceFeatures?: boolean, includeAssemblies?: boolean, includeFeatureStudios?: boolean, includeBlobs?: boolean, allowedBlobMimeTypes?: string, excludeNewerFSVersions?: boolean, maxFeatureScriptVersion?: number, includePartStudios?: boolean, includeFeatures?: boolean, includeMeshes?: boolean, includeWires?: boolean, includeFlattenedBodies?: boolean, includeApplications?: boolean, allowedApplicationMimeTypes?: string, includeCompositeParts?: boolean, includeFSTables?: boolean, includeFSComputedPartPropertyFunctions?: boolean, includeVariables?: boolean, includeVariableStudios?: boolean, allowedBlobExtensions?: string, _options?: Configuration): Observable<void> {
        return this.getLatestInDocumentWithHttpInfo(did, includeParts, includeSurfaces, includeSketches, includeReferenceFeatures, includeAssemblies, includeFeatureStudios, includeBlobs, allowedBlobMimeTypes, excludeNewerFSVersions, maxFeatureScriptVersion, includePartStudios, includeFeatures, includeMeshes, includeWires, includeFlattenedBodies, includeApplications, allowedApplicationMimeTypes, includeCompositeParts, includeFSTables, includeFSComputedPartPropertyFunctions, includeVariables, includeVariableStudios, allowedBlobExtensions, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi";
export class ObservableMetadataApi {
    private requestFactory: MetadataApiRequestFactory;
    private responseProcessor: MetadataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataApiRequestFactory,
        responseProcessor?: MetadataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetadataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetadataApiResponseProcessor();
    }

    /**
     * * Specify the part in the `pid` path parameter.  * The `configuration` and `linkDocumentId` query parameters are required.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a standard content part.
     * @param did 
     * @param vid 
     * @param eid 
     * @param pid 
     * @param configuration 
     * @param linkDocumentId 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getVEOPStandardContentMetadataWithHttpInfo(did: string, vid: string, eid: string, pid: string, configuration?: string, linkDocumentId?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getVEOPStandardContentMetadata(did, vid, eid, pid, configuration, linkDocumentId, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVEOPStandardContentMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Specify the part in the `pid` path parameter.  * The `configuration` and `linkDocumentId` query parameters are required.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a standard content part.
     * @param did 
     * @param vid 
     * @param eid 
     * @param pid 
     * @param configuration 
     * @param linkDocumentId 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getVEOPStandardContentMetadata(did: string, vid: string, eid: string, pid: string, configuration?: string, linkDocumentId?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<void> {
        return this.getVEOPStandardContentMetadataWithHttpInfo(did, vid, eid, pid, configuration, linkDocumentId, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * `linkDocumentId` can be specified where applicable and this combined with the query param `inferMetadataOwner` (default value is `false`) will be used to infer metadata owner.  * `configuration` optional query parameter defaults to default configuration.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWMVEMetadataWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getWMVEMetadata(did, wvm, wvmid, eid, linkDocumentId, configuration, inferMetadataOwner, depth, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWMVEMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * `linkDocumentId` can be specified where applicable and this combined with the query param `inferMetadataOwner` (default value is `false`) will be used to infer metadata owner.  * `configuration` optional query parameter defaults to default configuration.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWMVEMetadata(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<void> {
        return this.getWMVEMetadataWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, inferMetadataOwner, depth, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a part.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param iden Denotes whether the pid specified is a part id (p) or a part identity (pi).
     * @param pid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param inferMetadataOwner 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWMVEPMetadataWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, iden: 'p' | 'pi', pid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, inferMetadataOwner?: boolean, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getWMVEPMetadata(did, wvm, wvmid, eid, iden, pid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, inferMetadataOwner, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWMVEPMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a part.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param iden Denotes whether the pid specified is a part id (p) or a part identity (pi).
     * @param pid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param inferMetadataOwner 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWMVEPMetadata(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, iden: 'p' | 'pi', pid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, inferMetadataOwner?: boolean, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<void> {
        return this.getWMVEPMetadataWithHttpInfo(did, wvm, wvmid, eid, iden, pid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, inferMetadataOwner, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all parts in a document.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param inferMetadataOwner 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWMVEPsMetadataWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, inferMetadataOwner?: boolean, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getWMVEPsMetadata(did, wvm, wvmid, eid, linkDocumentId, configuration, inferMetadataOwner, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWMVEPsMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all parts in a document.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param inferMetadataOwner 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWMVEPsMetadata(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, inferMetadataOwner?: boolean, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<void> {
        return this.getWMVEPsMetadataWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, inferMetadataOwner, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * You can specify the optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all elements in a document.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWMVEsMetadataWithHttpInfo(did: string, wvm: string, wvmid: string, linkDocumentId?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getWMVEsMetadata(did, wvm, wvmid, linkDocumentId, inferMetadataOwner, depth, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWMVEsMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * You can specify the optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for all elements in a document.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWMVEsMetadata(did: string, wvm: string, wvmid: string, linkDocumentId?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<void> {
        return this.getWMVEsMetadataWithHttpInfo(did, wvm, wvmid, linkDocumentId, inferMetadataOwner, depth, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a workspace or version.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWVMetadataWithHttpInfo(did: string, wv: string, wvid: string, linkDocumentId?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getWVMetadata(did, wv, wvid, linkDocumentId, inferMetadataOwner, depth, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWVMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * You can specify an optional `depth` query parameter to get multiple levels in an assembly. Default `depth` is `1`.  * `includeComputedProperties` can be used to include or omit computed properties. Default value is `true`.  * `includeComputedAssemblyProperties` can be used to query computed assembly properties which are generally expensive. Default value is `false`.  * You can also choose to include a `thumbnail`. Default value is `false`.
     * Get the metadata for a workspace or version.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param linkDocumentId 
     * @param inferMetadataOwner 
     * @param depth 
     * @param includeComputedProperties 
     * @param includeComputedAssemblyProperties 
     * @param thumbnail 
     */
    public getWVMetadata(did: string, wv: string, wvid: string, linkDocumentId?: string, inferMetadataOwner?: boolean, depth?: string, includeComputedProperties?: boolean, includeComputedAssemblyProperties?: boolean, thumbnail?: boolean, _options?: Configuration): Observable<void> {
        return this.getWVMetadataWithHttpInfo(did, wv, wvid, linkDocumentId, inferMetadataOwner, depth, includeComputedProperties, includeComputedAssemblyProperties, thumbnail, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Specify the document ID to update in the `did` path param.  * Specify the document in which you have inserted the standard content part in the `linkDocumentId` query param.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a standard content part.
     * @param did 
     * @param linkDocumentId 
     * @param body 
     */
    public updateVEOPStandardContentPartMetadataWithHttpInfo(did: string, linkDocumentId: string, body: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateVEOPStandardContentPartMetadata(did, linkDocumentId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateVEOPStandardContentPartMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Specify the document ID to update in the `did` path param.  * Specify the document in which you have inserted the standard content part in the `linkDocumentId` query param.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a standard content part.
     * @param did 
     * @param linkDocumentId 
     * @param body 
     */
    public updateVEOPStandardContentPartMetadata(did: string, linkDocumentId: string, body: string, _options?: Configuration): Observable<void> {
        return this.updateVEOPStandardContentPartMetadataWithHttpInfo(did, linkDocumentId, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Microversion (`m`) in `wvm` path parameter option is not supported.  * Specify the property metadata to update in the Request body.
     * Update the metadata for an element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param body 
     * @param configuration 
     */
    public updateWVEMetadataWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, body: string, configuration?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateWVEMetadata(did, wvm, wvmid, eid, body, configuration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWVEMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Microversion (`m`) in `wvm` path parameter option is not supported.  * Specify the property metadata to update in the Request body.
     * Update the metadata for an element.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param body 
     * @param configuration 
     */
    public updateWVEMetadata(did: string, wvm: string, wvmid: string, eid: string, body: string, configuration?: string, _options?: Configuration): Observable<void> {
        return this.updateWVEMetadataWithHttpInfo(did, wvm, wvmid, eid, body, configuration, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a part.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param iden Denotes whether the pid specified is a part id (p) or a part identity (pi).
     * @param pid 
     * @param body 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     */
    public updateWVEPMetadataWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, iden: 'p' | 'pi', pid: string, body: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateWVEPMetadata(did, wvm, wvmid, eid, iden, pid, body, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWVEPMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Specify the part in the `iden` or `pid` path parameter.  * The `configuration` optional query parameter uses the default configuration unless otherwise specified.  * `linkDocumentId` can be specified where applicable. Combined with `inferMetadataOwner` (default value is `false`), this is used to infer metadata owner.  * Specify the property metadata to update in the Request body.
     * Update the metadata for a part.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param iden Denotes whether the pid specified is a part id (p) or a part identity (pi).
     * @param pid 
     * @param body 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     */
    public updateWVEPMetadata(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, iden: 'p' | 'pi', pid: string, body: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, _options?: Configuration): Observable<void> {
        return this.updateWVEPMetadataWithHttpInfo(did, wvm, wvmid, eid, iden, pid, body, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Specify the property metadata to update in the Request body.
     * Update the metadata for a workspace or version.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param body 
     */
    public updateWVMetadataWithHttpInfo(did: string, wv: string, wvid: string, body: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateWVMetadata(did, wv, wvid, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWVMetadataWithHttpInfo(rsp)));
            }));
    }

    /**
     * Specify the property metadata to update in the Request body.
     * Update the metadata for a workspace or version.
     * @param did 
     * @param wv 
     * @param wvid 
     * @param body 
     */
    public updateWVMetadata(did: string, wv: string, wvid: string, body: string, _options?: Configuration): Observable<void> {
        return this.updateWVMetadataWithHttpInfo(did, wv, wvid, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { MetadataCategoryApiRequestFactory, MetadataCategoryApiResponseProcessor} from "../apis/MetadataCategoryApi";
export class ObservableMetadataCategoryApi {
    private requestFactory: MetadataCategoryApiRequestFactory;
    private responseProcessor: MetadataCategoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetadataCategoryApiRequestFactory,
        responseProcessor?: MetadataCategoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetadataCategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetadataCategoryApiResponseProcessor();
    }

    /**
     * An object\'s category specifies its type: Part, Assembly, Drawing, etc. Available properties depend on the object\'s category.
     * Get properties associated with the specified metadata categories.
     * @param ownerId 
     * @param ownerType 
     * @param documentId 
     * @param categoryIds 
     * @param objectType 
     * @param strict 
     * @param includeObjectTypeDefaults 
     * @param includeComputedProperties 
     * @param includePartPropertiesTableOnlyProperties 
     * @param onlyActive 
     * @param onlyObjectTypeDefaults 
     */
    public getCategoryPropertiesWithHttpInfo(ownerId?: string, ownerType?: number, documentId?: string, categoryIds?: Array<string>, objectType?: number, strict?: boolean, includeObjectTypeDefaults?: boolean, includeComputedProperties?: boolean, includePartPropertiesTableOnlyProperties?: boolean, onlyActive?: boolean, onlyObjectTypeDefaults?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCategoryProperties(ownerId, ownerType, documentId, categoryIds, objectType, strict, includeObjectTypeDefaults, includeComputedProperties, includePartPropertiesTableOnlyProperties, onlyActive, onlyObjectTypeDefaults, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * An object\'s category specifies its type: Part, Assembly, Drawing, etc. Available properties depend on the object\'s category.
     * Get properties associated with the specified metadata categories.
     * @param ownerId 
     * @param ownerType 
     * @param documentId 
     * @param categoryIds 
     * @param objectType 
     * @param strict 
     * @param includeObjectTypeDefaults 
     * @param includeComputedProperties 
     * @param includePartPropertiesTableOnlyProperties 
     * @param onlyActive 
     * @param onlyObjectTypeDefaults 
     */
    public getCategoryProperties(ownerId?: string, ownerType?: number, documentId?: string, categoryIds?: Array<string>, objectType?: number, strict?: boolean, includeObjectTypeDefaults?: boolean, includeComputedProperties?: boolean, includePartPropertiesTableOnlyProperties?: boolean, onlyActive?: boolean, onlyObjectTypeDefaults?: boolean, _options?: Configuration): Observable<void> {
        return this.getCategoryPropertiesWithHttpInfo(ownerId, ownerType, documentId, categoryIds, objectType, strict, includeObjectTypeDefaults, includeComputedProperties, includePartPropertiesTableOnlyProperties, onlyActive, onlyObjectTypeDefaults, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { NumberingSchemeApiRequestFactory, NumberingSchemeApiResponseProcessor} from "../apis/NumberingSchemeApi";
export class ObservableNumberingSchemeApi {
    private requestFactory: NumberingSchemeApiRequestFactory;
    private responseProcessor: NumberingSchemeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NumberingSchemeApiRequestFactory,
        responseProcessor?: NumberingSchemeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NumberingSchemeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NumberingSchemeApiResponseProcessor();
    }

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param bTNextPartNumbersParam 
     * @param cid 
     * @param did 
     */
    public nextNumbersWithHttpInfo(bTNextPartNumbersParam: BTNextPartNumbersParam, cid?: string, did?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.nextNumbers(bTNextPartNumbersParam, cid, did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nextNumbersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param bTNextPartNumbersParam 
     * @param cid 
     * @param did 
     */
    public nextNumbers(bTNextPartNumbersParam: BTNextPartNumbersParam, cid?: string, did?: string, _options?: Configuration): Observable<void> {
        return this.nextNumbersWithHttpInfo(bTNextPartNumbersParam, cid, did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { OpenApiApiRequestFactory, OpenApiApiResponseProcessor} from "../apis/OpenApiApi";
export class ObservableOpenApiApi {
    private requestFactory: OpenApiApiRequestFactory;
    private responseProcessor: OpenApiApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OpenApiApiRequestFactory,
        responseProcessor?: OpenApiApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OpenApiApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OpenApiApiResponseProcessor();
    }

    /**
     * The Onshape API OpenAPI specification is returned in the JSON format.
     * Get the OpenAPI specification for the Onshape REST API.
     * @param forceReload Force reload the OpenApi definition. Only works when asking for the latest version.
     * @param version Specify a version of Onshape from which the OpenAPI is generated. If \&#39;*\&#39; is specified in any of the version fields, that indicates any version if acceptable.
     * @param versionAlias Version aliases based on the currently released version.
     * @param noFilter Do not filter the specification at all.
     * @param includedTags Return only operations with tags included in includedTags.
     * @param excludedTags If an operation contains an excluded tag, it is not returned from this endpoint.
     * @param includeDeprecated Include deprecated endpoints.
     * @param onlyDeprecated Only include deprecated endpoints.
     * @param documentationStatuses Only return endpoints that have the specified documentation status. Default is to return all the endpoints the user should have access to.
     * @param restUserRole The REST user role for which this spec is requested.
     * @param operationIds Only return operations with specified ids.
     * @param excludedOperationIds Do not return operations with specified ids.
     */
    public getOpenApiWithHttpInfo(forceReload?: boolean, version?: string, versionAlias?: VersionAlias, noFilter?: boolean, includedTags?: Array<string>, excludedTags?: Array<string>, includeDeprecated?: boolean, onlyDeprecated?: boolean, documentationStatuses?: Array<Status>, restUserRole?: BTRestUserRole, operationIds?: Array<string>, excludedOperationIds?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getOpenApi(forceReload, version, versionAlias, noFilter, includedTags, excludedTags, includeDeprecated, onlyDeprecated, documentationStatuses, restUserRole, operationIds, excludedOperationIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOpenApiWithHttpInfo(rsp)));
            }));
    }

    /**
     * The Onshape API OpenAPI specification is returned in the JSON format.
     * Get the OpenAPI specification for the Onshape REST API.
     * @param forceReload Force reload the OpenApi definition. Only works when asking for the latest version.
     * @param version Specify a version of Onshape from which the OpenAPI is generated. If \&#39;*\&#39; is specified in any of the version fields, that indicates any version if acceptable.
     * @param versionAlias Version aliases based on the currently released version.
     * @param noFilter Do not filter the specification at all.
     * @param includedTags Return only operations with tags included in includedTags.
     * @param excludedTags If an operation contains an excluded tag, it is not returned from this endpoint.
     * @param includeDeprecated Include deprecated endpoints.
     * @param onlyDeprecated Only include deprecated endpoints.
     * @param documentationStatuses Only return endpoints that have the specified documentation status. Default is to return all the endpoints the user should have access to.
     * @param restUserRole The REST user role for which this spec is requested.
     * @param operationIds Only return operations with specified ids.
     * @param excludedOperationIds Do not return operations with specified ids.
     */
    public getOpenApi(forceReload?: boolean, version?: string, versionAlias?: VersionAlias, noFilter?: boolean, includedTags?: Array<string>, excludedTags?: Array<string>, includeDeprecated?: boolean, onlyDeprecated?: boolean, documentationStatuses?: Array<Status>, restUserRole?: BTRestUserRole, operationIds?: Array<string>, excludedOperationIds?: Array<string>, _options?: Configuration): Observable<void> {
        return this.getOpenApiWithHttpInfo(forceReload, version, versionAlias, noFilter, includedTags, excludedTags, includeDeprecated, onlyDeprecated, documentationStatuses, restUserRole, operationIds, excludedOperationIds, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Tags are used to group operations. For example, `Document` groups operations on documents.
     * Get the list of tags in the Onshape OpenAPI specification.
     */
    public getTagsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getTags(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Tags are used to group operations. For example, `Document` groups operations on documents.
     * Get the list of tags in the Onshape OpenAPI specification.
     */
    public getTags(_options?: Configuration): Observable<void> {
        return this.getTagsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PartApiRequestFactory, PartApiResponseProcessor} from "../apis/PartApi";
export class ObservablePartApi {
    private requestFactory: PartApiRequestFactory;
    private responseProcessor: PartApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PartApiRequestFactory,
        responseProcessor?: PartApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PartApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PartApiResponseProcessor();
    }

    /**
     * Export a part as a Parasolid file.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param version 
     * @param configuration 
     * @param linkDocumentId 
     */
    public exportPSWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, partid: string, version?: string, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<HttpFile>> {
        const requestContextPromise = this.requestFactory.exportPS(did, wvm, wvmid, eid, partid, version, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportPSWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export a part as a Parasolid file.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param version 
     * @param configuration 
     * @param linkDocumentId 
     */
    public exportPS(did: string, wvm: string, wvmid: string, eid: string, partid: string, version?: string, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpFile> {
        return this.exportPSWithHttpInfo(did, wvm, wvmid, eid, partid, version, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
    }

    /**
     * Export a part as a glTF file.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param outputSeparateFaceNodes 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     */
    public exportPartGltfWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, outputSeparateFaceNodes?: boolean, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, _options?: Configuration): Observable<HttpInfo<GlTF>> {
        const requestContextPromise = this.requestFactory.exportPartGltf(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, angleTolerance, chordTolerance, precomputedLevelOfDetail, outputSeparateFaceNodes, faceId, outputFaceAppearances, maxFacetWidth, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportPartGltfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export a part as a glTF file.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param outputSeparateFaceNodes 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     */
    public exportPartGltf(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, outputSeparateFaceNodes?: boolean, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, _options?: Configuration): Observable<GlTF> {
        return this.exportPartGltfWithHttpInfo(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, angleTolerance, chordTolerance, precomputedLevelOfDetail, outputSeparateFaceNodes, faceId, outputFaceAppearances, maxFacetWidth, _options).pipe(map((apiResponse: HttpInfo<GlTF>) => apiResponse.data));
    }

    /**
     * Returns a 307 redirect.
     * Export a part to an STL file.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param mode 
     * @param grouping 
     * @param scale 
     * @param units 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param maxFacetWidth 
     * @param minFacetWidth 
     * @param configuration 
     * @param linkDocumentId 
     */
    public exportStlWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, partid: string, mode?: string, grouping?: boolean, scale?: number, units?: string, angleTolerance?: number, chordTolerance?: number, maxFacetWidth?: number, minFacetWidth?: number, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.exportStl(did, wvm, wvmid, eid, partid, mode, grouping, scale, units, angleTolerance, chordTolerance, maxFacetWidth, minFacetWidth, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportStlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a 307 redirect.
     * Export a part to an STL file.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param mode 
     * @param grouping 
     * @param scale 
     * @param units 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param maxFacetWidth 
     * @param minFacetWidth 
     * @param configuration 
     * @param linkDocumentId 
     */
    public exportStl(did: string, wvm: string, wvmid: string, eid: string, partid: string, mode?: string, grouping?: boolean, scale?: number, units?: string, angleTolerance?: number, chordTolerance?: number, maxFacetWidth?: number, minFacetWidth?: number, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.exportStlWithHttpInfo(did, wvm, wvmid, eid, partid, mode, grouping, scale, units, angleTolerance, chordTolerance, maxFacetWidth, minFacetWidth, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a part\'s sheet metal bend table.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param linkDocumentId 
     */
    public getBendTableWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, partid: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getBendTable(did, wvm, wvmid, eid, partid, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBendTableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a part\'s sheet metal bend table.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param linkDocumentId 
     */
    public getBendTable(did: string, wvm: string, wvmid: string, eid: string, partid: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getBendTableWithHttpInfo(did, wvm, wvmid, eid, partid, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * All coordinates are in meters (m).
     * Get a part\'s body details.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param includeGeometricData Whether or not geometric data should be included in the response.
     */
    public getBodyDetailsWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, includeGeometricData?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getBodyDetails(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, includeGeometricData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBodyDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * All coordinates are in meters (m).
     * Get a part\'s body details.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param includeGeometricData Whether or not geometric data should be included in the response.
     */
    public getBodyDetails(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, includeGeometricData?: boolean, _options?: Configuration): Observable<void> {
        return this.getBodyDetailsWithHttpInfo(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, includeGeometricData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a part\'s bounding box details.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param includeHidden 
     * @param configuration 
     * @param linkDocumentId 
     */
    public getBoundingBoxesWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, partid: string, includeHidden?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getBoundingBoxes(did, wvm, wvmid, eid, partid, includeHidden, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBoundingBoxesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a part\'s bounding box details.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param includeHidden 
     * @param configuration 
     * @param linkDocumentId 
     */
    public getBoundingBoxes(did: string, wvm: string, wvmid: string, eid: string, partid: string, includeHidden?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getBoundingBoxesWithHttpInfo(did, wvm, wvmid, eid, partid, includeHidden, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns the coordinates (in meters) of each edge\'s endpoints.
     * Get a list of a part\'s tessellation edges.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param edgeId 
     */
    public getEdgesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, edgeId?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getEdges(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, angleTolerance, chordTolerance, precomputedLevelOfDetail, edgeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEdgesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the coordinates (in meters) of each edge\'s endpoints.
     * Get a list of a part\'s tessellation edges.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param edgeId 
     */
    public getEdges(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, edgeId?: Array<string>, _options?: Configuration): Observable<void> {
        return this.getEdgesWithHttpInfo(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, angleTolerance, chordTolerance, precomputedLevelOfDetail, edgeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Coordinates are in meters (m).
     * Get a list of a part\'s tessellation faces.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     * @param outputVertexNormals 
     * @param outputFacetNormals 
     * @param outputTextureCoordinates 
     * @param outputIndexTable 
     * @param outputErrorFaces 
     * @param combineCompositePartConstituents 
     */
    public getFaces1WithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, outputVertexNormals?: boolean, outputFacetNormals?: boolean, outputTextureCoordinates?: boolean, outputIndexTable?: boolean, outputErrorFaces?: boolean, combineCompositePartConstituents?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getFaces1(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, angleTolerance, chordTolerance, precomputedLevelOfDetail, faceId, outputFaceAppearances, maxFacetWidth, outputVertexNormals, outputFacetNormals, outputTextureCoordinates, outputIndexTable, outputErrorFaces, combineCompositePartConstituents, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFaces1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Coordinates are in meters (m).
     * Get a list of a part\'s tessellation faces.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     * @param outputVertexNormals 
     * @param outputFacetNormals 
     * @param outputTextureCoordinates 
     * @param outputIndexTable 
     * @param outputErrorFaces 
     * @param combineCompositePartConstituents 
     */
    public getFaces1(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, outputVertexNormals?: boolean, outputFacetNormals?: boolean, outputTextureCoordinates?: boolean, outputIndexTable?: boolean, outputErrorFaces?: boolean, combineCompositePartConstituents?: boolean, _options?: Configuration): Observable<void> {
        return this.getFaces1WithHttpInfo(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, angleTolerance, chordTolerance, precomputedLevelOfDetail, faceId, outputFaceAppearances, maxFacetWidth, outputVertexNormals, outputFacetNormals, outputTextureCoordinates, outputIndexTable, outputErrorFaces, combineCompositePartConstituents, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Parts must have density. If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get a part\'s mass properties.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param inferMetadataOwner 
     * @param useMassPropertyOverrides If true, use the user mass property overrides when calculated mass properties
     */
    public getMassPropertiesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, inferMetadataOwner?: boolean, useMassPropertyOverrides?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getMassProperties(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, inferMetadataOwner, useMassPropertyOverrides, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMassPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Parts must have density. If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get a part\'s mass properties.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param partid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param inferMetadataOwner 
     * @param useMassPropertyOverrides If true, use the user mass property overrides when calculated mass properties
     */
    public getMassProperties(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, partid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, inferMetadataOwner?: boolean, useMassPropertyOverrides?: boolean, _options?: Configuration): Observable<void> {
        return this.getMassPropertiesWithHttpInfo(did, wvm, wvmid, eid, partid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, inferMetadataOwner, useMassPropertyOverrides, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a part\'s shaded views.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param viewMatrix 
     * @param outputHeight 
     * @param outputWidth 
     * @param pixelSize 
     * @param edges 
     * @param useAntiAliasing 
     * @param configuration 
     * @param linkDocumentId 
     */
    public getPartShadedViewsWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, partid: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, useAntiAliasing?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartShadedViews(did, wvm, wvmid, eid, partid, viewMatrix, outputHeight, outputWidth, pixelSize, edges, useAntiAliasing, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartShadedViewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a part\'s shaded views.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param partid 
     * @param viewMatrix 
     * @param outputHeight 
     * @param outputWidth 
     * @param pixelSize 
     * @param edges 
     * @param useAntiAliasing 
     * @param configuration 
     * @param linkDocumentId 
     */
    public getPartShadedViews(did: string, wvm: string, wvmid: string, eid: string, partid: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, useAntiAliasing?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getPartShadedViewsWithHttpInfo(did, wvm, wvmid, eid, partid, viewMatrix, outputHeight, outputWidth, pixelSize, edges, useAntiAliasing, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get all parts in a workspace, version, or microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param elementId The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param withThumbnails Whether or not to include thumbnails (not supported for microversion)
     * @param includePropertyDefaults If true, include metadata schema property defaults in response
     * @param includeFlatParts 
     */
    public getPartsWMVWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, elementId: string, linkDocumentId?: string, configuration?: string, withThumbnails?: boolean, includePropertyDefaults?: boolean, includeFlatParts?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartsWMV(did, wvm, wvmid, elementId, linkDocumentId, configuration, withThumbnails, includePropertyDefaults, includeFlatParts, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartsWMVWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all parts in a workspace, version, or microversion.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param elementId The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param withThumbnails Whether or not to include thumbnails (not supported for microversion)
     * @param includePropertyDefaults If true, include metadata schema property defaults in response
     * @param includeFlatParts 
     */
    public getPartsWMV(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, elementId: string, linkDocumentId?: string, configuration?: string, withThumbnails?: boolean, includePropertyDefaults?: boolean, includeFlatParts?: boolean, _options?: Configuration): Observable<void> {
        return this.getPartsWMVWithHttpInfo(did, wvm, wvmid, elementId, linkDocumentId, configuration, withThumbnails, includePropertyDefaults, includeFlatParts, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get all parts in an element.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param withThumbnails Whether or not to include thumbnails (not supported for microversion)
     * @param includePropertyDefaults If true, include metadata schema property defaults in response
     * @param includeFlatParts 
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public getPartsWMVEWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, withThumbnails?: boolean, includePropertyDefaults?: boolean, includeFlatParts?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartsWMVE(did, wvm, wvmid, eid, withThumbnails, includePropertyDefaults, includeFlatParts, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartsWMVEWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all parts in an element.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param withThumbnails Whether or not to include thumbnails (not supported for microversion)
     * @param includePropertyDefaults If true, include metadata schema property defaults in response
     * @param includeFlatParts 
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public getPartsWMVE(did: string, wvm: string, wvmid: string, eid: string, withThumbnails?: boolean, includePropertyDefaults?: boolean, includeFlatParts?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getPartsWMVEWithHttpInfo(did, wvm, wvmid, eid, withThumbnails, includePropertyDefaults, includeFlatParts, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PartNumberApiRequestFactory, PartNumberApiResponseProcessor} from "../apis/PartNumberApi";
export class ObservablePartNumberApi {
    private requestFactory: PartNumberApiRequestFactory;
    private responseProcessor: PartNumberApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PartNumberApiRequestFactory,
        responseProcessor?: PartNumberApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PartNumberApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PartNumberApiResponseProcessor();
    }

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param bTNextPartNumbersParam 
     * @param cid 
     * @param did 
     */
    public updateNextNumbersWithHttpInfo(bTNextPartNumbersParam: BTNextPartNumbersParam, cid?: string, did?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateNextNumbers(bTNextPartNumbersParam, cid, did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNextNumbersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send the items to generate numbers for, and return the next valid available part numbers.
     * @param bTNextPartNumbersParam 
     * @param cid 
     * @param did 
     */
    public updateNextNumbers(bTNextPartNumbersParam: BTNextPartNumbersParam, cid?: string, did?: string, _options?: Configuration): Observable<void> {
        return this.updateNextNumbersWithHttpInfo(bTNextPartNumbersParam, cid, did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PartStudioApiRequestFactory, PartStudioApiResponseProcessor} from "../apis/PartStudioApi";
export class ObservablePartStudioApi {
    private requestFactory: PartStudioApiRequestFactory;
    private responseProcessor: PartStudioApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PartStudioApiRequestFactory,
        responseProcessor?: PartStudioApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PartStudioApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PartStudioApiResponseProcessor();
    }

    /**
     * See Feature List APIs in the [developer documentation](https://onshape-public.github.io/docs/api-adv/featureaccess/) for additional information.
     * Add a feature to the Part Studio\'s Feature List.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureDefinitionCall1406 
     */
    public addPartStudioFeatureWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addPartStudioFeature(did, wvm, wvmid, eid, bTFeatureDefinitionCall1406, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addPartStudioFeatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * See Feature List APIs in the [developer documentation](https://onshape-public.github.io/docs/api-adv/featureaccess/) for additional information.
     * Add a feature to the Part Studio\'s Feature List.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param bTFeatureDefinitionCall1406 
     */
    public addPartStudioFeature(did: string, wvm: string, wvmid: string, eid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Observable<void> {
        return this.addPartStudioFeatureWithHttpInfo(did, wvm, wvmid, eid, bTFeatureDefinitionCall1406, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the differences between two Part Studios in a single document.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param workspaceId 
     * @param versionId 
     * @param microversionId 
     * @param sourceConfiguration 
     * @param targetConfiguration 
     * @param linkDocumentId 
     */
    public comparePartStudiosWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, workspaceId?: string, versionId?: string, microversionId?: string, sourceConfiguration?: string, targetConfiguration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.comparePartStudios(did, wvm, wvmid, eid, workspaceId, versionId, microversionId, sourceConfiguration, targetConfiguration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.comparePartStudiosWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the differences between two Part Studios in a single document.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param workspaceId 
     * @param versionId 
     * @param microversionId 
     * @param sourceConfiguration 
     * @param targetConfiguration 
     * @param linkDocumentId 
     */
    public comparePartStudios(did: string, wvm: string, wvmid: string, eid: string, workspaceId?: string, versionId?: string, microversionId?: string, sourceConfiguration?: string, targetConfiguration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.comparePartStudiosWithHttpInfo(did, wvm, wvmid, eid, workspaceId, versionId, microversionId, sourceConfiguration, targetConfiguration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new Part Studio in a document.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param bTModelElementParams 
     */
    public createPartStudioWithHttpInfo(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createPartStudio(did, wid, bTModelElementParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPartStudioWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Part Studio in a document.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param bTModelElementParams 
     */
    public createPartStudio(did: string, wid: string, bTModelElementParams: BTModelElementParams, _options?: Configuration): Observable<void> {
        return this.createPartStudioWithHttpInfo(did, wid, bTModelElementParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Translate (export) a Part Studio.
     * @param did Document ID.
     * @param wv One of w or v corresponding to whether a workspace or version was specified.
     * @param wvid Workspace (w) or Version (v) ID.
     * @param eid Element ID.
     * @param bTTranslateFormatParams 
     */
    public createPartStudioTranslationWithHttpInfo(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createPartStudioTranslation(did, wv, wvid, eid, bTTranslateFormatParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPartStudioTranslationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Translate (export) a Part Studio.
     * @param did Document ID.
     * @param wv One of w or v corresponding to whether a workspace or version was specified.
     * @param wvid Workspace (w) or Version (v) ID.
     * @param eid Element ID.
     * @param bTTranslateFormatParams 
     */
    public createPartStudioTranslation(did: string, wv: string, wvid: string, eid: string, bTTranslateFormatParams: BTTranslateFormatParams, _options?: Configuration): Observable<void> {
        return this.createPartStudioTranslationWithHttpInfo(did, wv, wvid, eid, bTTranslateFormatParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a Part Studio feature.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param fid The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
     */
    public deletePartStudioFeatureWithHttpInfo(did: string, wid: string, eid: string, fid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deletePartStudioFeature(did, wid, eid, fid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePartStudioFeatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Part Studio feature.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param fid The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
     */
    public deletePartStudioFeature(did: string, wid: string, eid: string, fid: string, _options?: Configuration): Observable<void> {
        return this.deletePartStudioFeatureWithHttpInfo(did, wid, eid, fid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Evaluate the FeatureScript snippet for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param bTFeatureScriptEvalCall2377 
     */
    public evalFeatureScriptWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, bTFeatureScriptEvalCall2377?: BTFeatureScriptEvalCall2377, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.evalFeatureScript(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, bTFeatureScriptEvalCall2377, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.evalFeatureScriptWithHttpInfo(rsp)));
            }));
    }

    /**
     * Evaluate the FeatureScript snippet for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param bTFeatureScriptEvalCall2377 
     */
    public evalFeatureScript(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, bTFeatureScriptEvalCall2377?: BTFeatureScriptEvalCall2377, _options?: Configuration): Observable<void> {
        return this.evalFeatureScriptWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, bTFeatureScriptEvalCall2377, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns a 307 redirect.
     * Export the Part Studio as a Parasolid file.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param partIds IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD).
     * @param version Parasolid version
     * @param includeExportIds Whether topology ids should be exported as parasolid attributes
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     * @param binaryExport Whether to use binary parasolid format instead of text
     */
    public exportParasolidWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, partIds?: string, version?: string, includeExportIds?: boolean, configuration?: string, linkDocumentId?: string, binaryExport?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.exportParasolid(did, wvm, wvmid, eid, partIds, version, includeExportIds, configuration, linkDocumentId, binaryExport, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportParasolidWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a 307 redirect.
     * Export the Part Studio as a Parasolid file.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param partIds IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD).
     * @param version Parasolid version
     * @param includeExportIds Whether topology ids should be exported as parasolid attributes
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     * @param binaryExport Whether to use binary parasolid format instead of text
     */
    public exportParasolid(did: string, wvm: string, wvmid: string, eid: string, partIds?: string, version?: string, includeExportIds?: boolean, configuration?: string, linkDocumentId?: string, binaryExport?: boolean, _options?: Configuration): Observable<void> {
        return this.exportParasolidWithHttpInfo(did, wvm, wvmid, eid, partIds, version, includeExportIds, configuration, linkDocumentId, binaryExport, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Export the Part Studio as a glTF file.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param outputSeparateFaceNodes 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     */
    public exportPartStudioGltfWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, outputSeparateFaceNodes?: boolean, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, _options?: Configuration): Observable<HttpInfo<GlTF>> {
        const requestContextPromise = this.requestFactory.exportPartStudioGltf(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partId, angleTolerance, chordTolerance, precomputedLevelOfDetail, outputSeparateFaceNodes, faceId, outputFaceAppearances, maxFacetWidth, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportPartStudioGltfWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export the Part Studio as a glTF file.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param outputSeparateFaceNodes 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     */
    public exportPartStudioGltf(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, outputSeparateFaceNodes?: boolean, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, _options?: Configuration): Observable<GlTF> {
        return this.exportPartStudioGltfWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partId, angleTolerance, chordTolerance, precomputedLevelOfDetail, outputSeparateFaceNodes, faceId, outputFaceAppearances, maxFacetWidth, _options).pipe(map((apiResponse: HttpInfo<GlTF>) => apiResponse.data));
    }

    /**
     * Export the Part Studio as an STL file.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param partIds IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD).
     * @param mode Type of file: text, binary
     * @param grouping Whether parts should be exported as a group or individually in a .zip file
     * @param scale Scale for measurements.
     * @param units Name of base unit (meter, centimeter, millimeter, inch, foot, or yard)
     * @param angleTolerance Angle tolerance (in radians). This specifies the limit on the sum of the angular deviations of a tessellation chord from the tangent vectors at two chord endpoints. The specified value must be less than PI/2. This parameter currently has a default value chosen based on the complexity of the parts being tessellated.
     * @param chordTolerance Chord tolerance (in meters). This specifies the limit on the maximum deviation of a tessellation chord from the true surface/edge. This parameter currently has a default value chosen based on the size and complexity of the parts being tessellated.
     * @param maxFacetWidth Max facet width. This specifies the limit on the size of any side of a tessellation facet.
     * @param minFacetWidth Max facet width. This specifies the limit on the size of any side of a tessellation facet.
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public exportPartStudioStlWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, partIds?: string, mode?: string, grouping?: boolean, scale?: number, units?: string, angleTolerance?: number, chordTolerance?: number, maxFacetWidth?: number, minFacetWidth?: number, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.exportPartStudioStl(did, wvm, wvmid, eid, partIds, mode, grouping, scale, units, angleTolerance, chordTolerance, maxFacetWidth, minFacetWidth, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportPartStudioStlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export the Part Studio as an STL file.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param partIds IDs of the parts to retrieve. Use comma-separated IDs for multiple parts (example: partIds&#x3D;JHK,JHD).
     * @param mode Type of file: text, binary
     * @param grouping Whether parts should be exported as a group or individually in a .zip file
     * @param scale Scale for measurements.
     * @param units Name of base unit (meter, centimeter, millimeter, inch, foot, or yard)
     * @param angleTolerance Angle tolerance (in radians). This specifies the limit on the sum of the angular deviations of a tessellation chord from the tangent vectors at two chord endpoints. The specified value must be less than PI/2. This parameter currently has a default value chosen based on the complexity of the parts being tessellated.
     * @param chordTolerance Chord tolerance (in meters). This specifies the limit on the maximum deviation of a tessellation chord from the true surface/edge. This parameter currently has a default value chosen based on the size and complexity of the parts being tessellated.
     * @param maxFacetWidth Max facet width. This specifies the limit on the size of any side of a tessellation facet.
     * @param minFacetWidth Max facet width. This specifies the limit on the size of any side of a tessellation facet.
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public exportPartStudioStl(did: string, wvm: string, wvmid: string, eid: string, partIds?: string, mode?: string, grouping?: boolean, scale?: number, units?: string, angleTolerance?: number, chordTolerance?: number, maxFacetWidth?: number, minFacetWidth?: number, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.exportPartStudioStlWithHttpInfo(did, wvm, wvmid, eid, partIds, mode, grouping, scale, units, angleTolerance, chordTolerance, maxFacetWidth, minFacetWidth, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the FeatureScript representation of a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     */
    public getFeatureScriptRepresentationWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getFeatureScriptRepresentation(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeatureScriptRepresentationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the FeatureScript representation of a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     */
    public getFeatureScriptRepresentation(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, _options?: Configuration): Observable<void> {
        return this.getFeatureScriptRepresentationWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Compute and return a FeatureScript table for a Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param tableType 
     * @param configuration 
     * @param tableNamespace 
     * @param tableParameters 
     * @param partId 
     * @param linkDocumentId 
     */
    public getFeatureScriptTableWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, tableType: string, configuration?: string, tableNamespace?: string, tableParameters?: string, partId?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getFeatureScriptTable(did, wvm, wvmid, eid, tableType, configuration, tableNamespace, tableParameters, partId, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeatureScriptTableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Compute and return a FeatureScript table for a Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param tableType 
     * @param configuration 
     * @param tableNamespace 
     * @param tableParameters 
     * @param partId 
     * @param linkDocumentId 
     */
    public getFeatureScriptTable(did: string, wvm: string, wvmid: string, eid: string, tableType: string, configuration?: string, tableNamespace?: string, tableParameters?: string, partId?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getFeatureScriptTableWithHttpInfo(did, wvm, wvmid, eid, tableType, configuration, tableNamespace, tableParameters, partId, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the body details for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partIds If specified, the response will only include body details for the specific parts as indicated here by their corresponding Id
     * @param includeSurfaces Whether or not surfaces should be included in the response.
     * @param includeCompositeParts Whether or not composite parts should be included in the response.
     * @param includeGeometricData Whether or not geometric data should be included in the response.
     */
    public getPartStudioBodyDetailsWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partIds?: Array<string>, includeSurfaces?: boolean, includeCompositeParts?: boolean, includeGeometricData?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioBodyDetails(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partIds, includeSurfaces, includeCompositeParts, includeGeometricData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioBodyDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the body details for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partIds If specified, the response will only include body details for the specific parts as indicated here by their corresponding Id
     * @param includeSurfaces Whether or not surfaces should be included in the response.
     * @param includeCompositeParts Whether or not composite parts should be included in the response.
     * @param includeGeometricData Whether or not geometric data should be included in the response.
     */
    public getPartStudioBodyDetails(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partIds?: Array<string>, includeSurfaces?: boolean, includeCompositeParts?: boolean, includeGeometricData?: boolean, _options?: Configuration): Observable<void> {
        return this.getPartStudioBodyDetailsWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partIds, includeSurfaces, includeCompositeParts, includeGeometricData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the bounding boxes for a Part Studio.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param includeHidden Whether or not to include bounding boxes for hidden parts.
     * @param includeWireBodies Whether to include wire bodies in the bounding box.
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public getPartStudioBoundingBoxesWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, includeHidden?: boolean, includeWireBodies?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioBoundingBoxes(did, wvm, wvmid, eid, includeHidden, includeWireBodies, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioBoundingBoxesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the bounding boxes for a Part Studio.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param includeHidden Whether or not to include bounding boxes for hidden parts.
     * @param includeWireBodies Whether to include wire bodies in the bounding box.
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public getPartStudioBoundingBoxes(did: string, wvm: string, wvmid: string, eid: string, includeHidden?: boolean, includeWireBodies?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getPartStudioBoundingBoxesWithHttpInfo(did, wvm, wvmid, eid, includeHidden, includeWireBodies, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns the edges as tessellated data and includes display data.  Coordinates are in meters (m).
     * Get a list of all edges in a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param edgeId 
     */
    public getPartStudioEdgesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, edgeId?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioEdges(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partId, angleTolerance, chordTolerance, precomputedLevelOfDetail, edgeId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioEdgesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the edges as tessellated data and includes display data.  Coordinates are in meters (m).
     * Get a list of all edges in a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param edgeId 
     */
    public getPartStudioEdges(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, edgeId?: Array<string>, _options?: Configuration): Observable<void> {
        return this.getPartStudioEdgesWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partId, angleTolerance, chordTolerance, precomputedLevelOfDetail, edgeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Coordinates are in meters (m).
     * Get a list of all faces in a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     * @param outputVertexNormals 
     * @param outputFacetNormals 
     * @param outputTextureCoordinates 
     * @param outputIndexTable 
     * @param outputErrorFaces 
     * @param combineCompositePartConstituents 
     */
    public getPartStudioFacesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, outputVertexNormals?: boolean, outputFacetNormals?: boolean, outputTextureCoordinates?: boolean, outputIndexTable?: boolean, outputErrorFaces?: boolean, combineCompositePartConstituents?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioFaces(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partId, angleTolerance, chordTolerance, precomputedLevelOfDetail, faceId, outputFaceAppearances, maxFacetWidth, outputVertexNormals, outputFacetNormals, outputTextureCoordinates, outputIndexTable, outputErrorFaces, combineCompositePartConstituents, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioFacesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Coordinates are in meters (m).
     * Get a list of all faces in a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param precomputedLevelOfDetail 
     * @param faceId 
     * @param outputFaceAppearances 
     * @param maxFacetWidth 
     * @param outputVertexNormals 
     * @param outputFacetNormals 
     * @param outputTextureCoordinates 
     * @param outputIndexTable 
     * @param outputErrorFaces 
     * @param combineCompositePartConstituents 
     */
    public getPartStudioFaces(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, angleTolerance?: number, chordTolerance?: number, precomputedLevelOfDetail?: string, faceId?: Array<string>, outputFaceAppearances?: boolean, maxFacetWidth?: number, outputVertexNormals?: boolean, outputFacetNormals?: boolean, outputTextureCoordinates?: boolean, outputIndexTable?: boolean, outputErrorFaces?: boolean, combineCompositePartConstituents?: boolean, _options?: Configuration): Observable<void> {
        return this.getPartStudioFacesWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partId, angleTolerance, chordTolerance, precomputedLevelOfDetail, faceId, outputFaceAppearances, maxFacetWidth, outputVertexNormals, outputFacetNormals, outputTextureCoordinates, outputIndexTable, outputErrorFaces, combineCompositePartConstituents, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the specs for a Part Studio feature.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     */
    public getPartStudioFeatureSpecsWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioFeatureSpecs(did, wvm, wvmid, eid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioFeatureSpecsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the specs for a Part Studio feature.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     */
    public getPartStudioFeatureSpecs(did: string, wvm: string, wvmid: string, eid: string, _options?: Configuration): Observable<void> {
        return this.getPartStudioFeatureSpecsWithHttpInfo(did, wvm, wvmid, eid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param includeGeometryIds 
     * @param featureId ID of a feature; repeat query param to add more than one
     * @param noSketchGeometry Whether or not to output simple sketch info without geometry
     */
    public getPartStudioFeaturesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, includeGeometryIds?: boolean, featureId?: Array<string>, noSketchGeometry?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioFeatures(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, includeGeometryIds, featureId, noSketchGeometry, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioFeaturesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a feature list of parts or a Part Studio by document ID, workspace or version or microversion ID, and tab ID.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param includeGeometryIds 
     * @param featureId ID of a feature; repeat query param to add more than one
     * @param noSketchGeometry Whether or not to output simple sketch info without geometry
     */
    public getPartStudioFeatures(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, includeGeometryIds?: boolean, featureId?: Array<string>, noSketchGeometry?: boolean, _options?: Configuration): Observable<void> {
        return this.getPartStudioFeaturesWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, includeGeometryIds, featureId, noSketchGeometry, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get the mass properties for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param massAsGroup If true, specified parts will be evaluated as a single object instead of individually
     * @param useMassPropertyOverrides If true, use the user mass property overrides when calculated mass properties
     */
    public getPartStudioMassPropertiesWithHttpInfo(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, massAsGroup?: boolean, useMassPropertyOverrides?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioMassProperties(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partId, massAsGroup, useMassPropertyOverrides, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioMassPropertiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * If three mass properties are returned, the first is the calculated mass; the second and third are the minimum and maximum possible values considering tolerance.
     * Get the mass properties for a Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wvm Indicates which of workspace (w), version (v), or document microversion (m) id is specified below.
     * @param wvmid The id of the workspace, version or document microversion in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param rollbackBarIndex Index specifying the location of the rollback bar when the call is evaluated. A -1 indicates that it should be at the end of the featurelist.
     * @param elementMicroversionId A specific element microversion in which to evaluate the request.
     * @param partId 
     * @param massAsGroup If true, specified parts will be evaluated as a single object instead of individually
     * @param useMassPropertyOverrides If true, use the user mass property overrides when calculated mass properties
     */
    public getPartStudioMassProperties(did: string, wvm: 'w' | 'v' | 'm', wvmid: string, eid: string, linkDocumentId?: string, configuration?: string, rollbackBarIndex?: number, elementMicroversionId?: string, partId?: Array<string>, massAsGroup?: boolean, useMassPropertyOverrides?: boolean, _options?: Configuration): Observable<void> {
        return this.getPartStudioMassPropertiesWithHttpInfo(did, wvm, wvmid, eid, linkDocumentId, configuration, rollbackBarIndex, elementMicroversionId, partId, massAsGroup, useMassPropertyOverrides, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns a map from view name to view data for the given element
     * Get a list of all named views that exist in the Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param eid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param skipPerspective 
     * @param includeSectionCutViews 
     */
    public getPartStudioNamedViewsWithHttpInfo(did: string, eid: string, linkDocumentId?: string, skipPerspective?: boolean, includeSectionCutViews?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioNamedViews(did, eid, linkDocumentId, skipPerspective, includeSectionCutViews, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioNamedViewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a map from view name to view data for the given element
     * Get a list of all named views that exist in the Part Studio.
     * @param did The id of the document in which to perform the operation.
     * @param eid 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param skipPerspective 
     * @param includeSectionCutViews 
     */
    public getPartStudioNamedViews(did: string, eid: string, linkDocumentId?: string, skipPerspective?: boolean, includeSectionCutViews?: boolean, _options?: Configuration): Observable<void> {
        return this.getPartStudioNamedViewsWithHttpInfo(did, eid, linkDocumentId, skipPerspective, includeSectionCutViews, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of shaded views for a Part Studio.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param viewMatrix 12-number view matrix (comma-separated), or one of the following named views: top, bottom, front, back, left, right The 12 entries in the view matrix form three rows and four columns, which is a linear transformation applied to the model itself. The matrix\&#39;s first three columns maps the coordinate axes of the model to the coordinate axes of the view, and the fourth column translates the origin (in meters). The view coordinates have x pointing right, y pointing up, and z pointing towards the viewer, while a front view of the model has x pointing right, y pointing away from the viewer, and z pointing up. For example, the identity matrix viewMatrix&#x3D;1,0,0,0,0,1,0,0,0,0,1,0 corresponds to the top view, and viewMatrix&#x3D;0.612,0.612,0,0,-0.354,0.354,0.707,0,0.707,-0.707,0.707,0 corresponds (approximately) to the isometric view. The first three columns of the view matrix should be orthonormal and have a positive determinant.  If this is not the case, view behavior may be undefined.
     * @param outputHeight Output image height (in pixels)
     * @param outputWidth Output image width (in pixels)
     * @param pixelSize Height and width represented by each pixel (in meters). If the value is 0, the display will be sized to fit the output image dimensions.
     * @param edges The treatment to be applied to edges in the display. Options are show: show visible edges, hide: hide visible edges.
     * @param showAllParts Whether or not all parts should be shown in the element, regardless of user setting. If false, the visibility setting made by the user will be reflected in the image. If true, all parts will be shown.
     * @param includeSurfaces Whether or not surfaces should be shown in the element. It is applicable only when showAllParts is true. If false, surfaces will be excluded. If true, all surfaces will be shown.
     * @param useAntiAliasing If true, an anti-aliasing factor will be used to smooth model boundaries in the final image result. If false, the image will be rasterized at the given resolution. Setting to true can have negative performance implications with respect to rendering time and memory usage. If a high-resolution image is requested and anti-aliasing is turned on, the server may not be able to fulfill the request.
     * @param includeWires 
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public getPartStudioShadedViewsWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, showAllParts?: boolean, includeSurfaces?: boolean, useAntiAliasing?: boolean, includeWires?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPartStudioShadedViews(did, wvm, wvmid, eid, viewMatrix, outputHeight, outputWidth, pixelSize, edges, showAllParts, includeSurfaces, useAntiAliasing, includeWires, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPartStudioShadedViewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of shaded views for a Part Studio.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param viewMatrix 12-number view matrix (comma-separated), or one of the following named views: top, bottom, front, back, left, right The 12 entries in the view matrix form three rows and four columns, which is a linear transformation applied to the model itself. The matrix\&#39;s first three columns maps the coordinate axes of the model to the coordinate axes of the view, and the fourth column translates the origin (in meters). The view coordinates have x pointing right, y pointing up, and z pointing towards the viewer, while a front view of the model has x pointing right, y pointing away from the viewer, and z pointing up. For example, the identity matrix viewMatrix&#x3D;1,0,0,0,0,1,0,0,0,0,1,0 corresponds to the top view, and viewMatrix&#x3D;0.612,0.612,0,0,-0.354,0.354,0.707,0,0.707,-0.707,0.707,0 corresponds (approximately) to the isometric view. The first three columns of the view matrix should be orthonormal and have a positive determinant.  If this is not the case, view behavior may be undefined.
     * @param outputHeight Output image height (in pixels)
     * @param outputWidth Output image width (in pixels)
     * @param pixelSize Height and width represented by each pixel (in meters). If the value is 0, the display will be sized to fit the output image dimensions.
     * @param edges The treatment to be applied to edges in the display. Options are show: show visible edges, hide: hide visible edges.
     * @param showAllParts Whether or not all parts should be shown in the element, regardless of user setting. If false, the visibility setting made by the user will be reflected in the image. If true, all parts will be shown.
     * @param includeSurfaces Whether or not surfaces should be shown in the element. It is applicable only when showAllParts is true. If false, surfaces will be excluded. If true, all surfaces will be shown.
     * @param useAntiAliasing If true, an anti-aliasing factor will be used to smooth model boundaries in the final image result. If false, the image will be rasterized at the given resolution. Setting to true can have negative performance implications with respect to rendering time and memory usage. If a high-resolution image is requested and anti-aliasing is turned on, the server may not be able to fulfill the request.
     * @param includeWires 
     * @param configuration Configuration string.
     * @param linkDocumentId Id of document that links to the document being accessed. This may provide additional access rights to the document. Allowed only with version (v) path parameter.
     */
    public getPartStudioShadedViews(did: string, wvm: string, wvmid: string, eid: string, viewMatrix?: string, outputHeight?: number, outputWidth?: number, pixelSize?: number, edges?: string, showAllParts?: boolean, includeSurfaces?: boolean, useAntiAliasing?: boolean, includeWires?: boolean, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getPartStudioShadedViewsWithHttpInfo(did, wvm, wvmid, eid, viewMatrix, outputHeight, outputWidth, pixelSize, edges, showAllParts, includeSurfaces, useAntiAliasing, includeWires, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Deterministic IDs are only valid for one microversion.  * This maps deterministic IDs between microversions in an attempt to find the corresponding entities in each version.
     * Find corresponding deterministic IDs from a source document microversion at the target version.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param bTIdTranslationParams 
     */
    public translateIdsWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, bTIdTranslationParams: BTIdTranslationParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.translateIds(did, wvm, wvmid, eid, bTIdTranslationParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Deterministic IDs are only valid for one microversion.  * This maps deterministic IDs between microversions in an attempt to find the corresponding entities in each version.
     * Find corresponding deterministic IDs from a source document microversion at the target version.
     * @param did Document ID.
     * @param wvm One of w or v or m corresponding to whether a workspace or version or microversion was entered.
     * @param wvmid Workspace (w), Version (v) or Microversion (m) ID.
     * @param eid Element ID.
     * @param bTIdTranslationParams 
     */
    public translateIds(did: string, wvm: string, wvmid: string, eid: string, bTIdTranslationParams: BTIdTranslationParams, _options?: Configuration): Observable<void> {
        return this.translateIdsWithHttpInfo(did, wvm, wvmid, eid, bTIdTranslationParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * You can update multiple features with a single call.
     * Update existing features\' parameters.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param bTUpdateFeaturesCall1748 feature The serialized feature definition
     */
    public updateFeaturesWithHttpInfo(did: string, wid: string, eid: string, bTUpdateFeaturesCall1748?: BTUpdateFeaturesCall1748, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateFeatures(did, wid, eid, bTUpdateFeaturesCall1748, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFeaturesWithHttpInfo(rsp)));
            }));
    }

    /**
     * You can update multiple features with a single call.
     * Update existing features\' parameters.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param bTUpdateFeaturesCall1748 feature The serialized feature definition
     */
    public updateFeatures(did: string, wid: string, eid: string, bTUpdateFeaturesCall1748?: BTUpdateFeaturesCall1748, _options?: Configuration): Observable<void> {
        return this.updateFeaturesWithHttpInfo(did, wid, eid, bTUpdateFeaturesCall1748, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update the definition of a Part Studio feature.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param fid The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
     * @param bTFeatureDefinitionCall1406 feature The serialized feature definition
     */
    public updatePartStudioFeatureWithHttpInfo(did: string, wid: string, eid: string, fid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updatePartStudioFeature(did, wid, eid, fid, bTFeatureDefinitionCall1406, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePartStudioFeatureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the definition of a Part Studio feature.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param fid The id of the feature being updated. This id should be URL encoded and must match the featureId found in the serialized structure
     * @param bTFeatureDefinitionCall1406 feature The serialized feature definition
     */
    public updatePartStudioFeature(did: string, wid: string, eid: string, fid: string, bTFeatureDefinitionCall1406?: BTFeatureDefinitionCall1406, _options?: Configuration): Observable<void> {
        return this.updatePartStudioFeatureWithHttpInfo(did, wid, eid, fid, bTFeatureDefinitionCall1406, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set to -1 to move the rollback bar to the end of the list.
     * Move the Feature List rollback bar in the Part Studio.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param body The index at which the rollback index should be placed. Features  with entry index (0-based) higher than or equal to the value are rolled back. Value of -1 is treated  as an alias for \&quot;end of feature list\&quot;. Otherwise the value must be in the range 0 to the number of  entries in the feature list
     */
    public updateRollbackWithHttpInfo(did: string, wid: string, eid: string, body: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateRollback(did, wid, eid, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRollbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set to -1 to move the rollback bar to the end of the list.
     * Move the Feature List rollback bar in the Part Studio.
     * @param did Document ID.
     * @param wid Workspace ID.
     * @param eid Element ID.
     * @param body The index at which the rollback index should be placed. Features  with entry index (0-based) higher than or equal to the value are rolled back. Value of -1 is treated  as an alias for \&quot;end of feature list\&quot;. Otherwise the value must be in the range 0 to the number of  entries in the feature list
     */
    public updateRollback(did: string, wid: string, eid: string, body: string, _options?: Configuration): Observable<void> {
        return this.updateRollbackWithHttpInfo(did, wid, eid, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PropertiesTableTemplateApiRequestFactory, PropertiesTableTemplateApiResponseProcessor} from "../apis/PropertiesTableTemplateApi";
export class ObservablePropertiesTableTemplateApi {
    private requestFactory: PropertiesTableTemplateApiRequestFactory;
    private responseProcessor: PropertiesTableTemplateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PropertiesTableTemplateApiRequestFactory,
        responseProcessor?: PropertiesTableTemplateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PropertiesTableTemplateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PropertiesTableTemplateApiResponseProcessor();
    }

    /**
     * Create a new properties table template.
     * @param bTPropertiesTableTemplateParams 
     * @param templateGroupId 
     */
    public createTableTemplateWithHttpInfo(bTPropertiesTableTemplateParams: BTPropertiesTableTemplateParams, templateGroupId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createTableTemplate(bTPropertiesTableTemplateParams, templateGroupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTableTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new properties table template.
     * @param bTPropertiesTableTemplateParams 
     * @param templateGroupId 
     */
    public createTableTemplate(bTPropertiesTableTemplateParams: BTPropertiesTableTemplateParams, templateGroupId?: string, _options?: Configuration): Observable<void> {
        return this.createTableTemplateWithHttpInfo(bTPropertiesTableTemplateParams, templateGroupId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a properties table template.
     * @param tid The id of the template in which to perform the operation.
     */
    public deleteTableTemplateWithHttpInfo(tid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTableTemplate(tid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTableTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a properties table template.
     * @param tid The id of the template in which to perform the operation.
     */
    public deleteTableTemplate(tid: string, _options?: Configuration): Observable<void> {
        return this.deleteTableTemplateWithHttpInfo(tid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get all properties table templates available for a company.
     * @param cid The id of the company in which to perform the operation.
     * @param templateType Indicates filter for table templates: 0 (BOM) or 1 (Revision Table).
     * @param onlyActive 
     * @param includeDefaults 
     */
    public getByCompanyIdWithHttpInfo(cid: string, templateType?: BTPropertiesTableTemplateType, onlyActive?: boolean, includeDefaults?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getByCompanyId(cid, templateType, onlyActive, includeDefaults, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByCompanyIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all properties table templates available for a company.
     * @param cid The id of the company in which to perform the operation.
     * @param templateType Indicates filter for table templates: 0 (BOM) or 1 (Revision Table).
     * @param onlyActive 
     * @param includeDefaults 
     */
    public getByCompanyId(cid: string, templateType?: BTPropertiesTableTemplateType, onlyActive?: boolean, includeDefaults?: boolean, _options?: Configuration): Observable<void> {
        return this.getByCompanyIdWithHttpInfo(cid, templateType, onlyActive, includeDefaults, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get all table templates that are available to use on the provided document.
     * @param did The id of the document in which to perform the operation.
     * @param templateType Indicates filter for table templates: 0 (BOM) or 1 (Revision Table).
     * @param onlyActive 
     * @param includeDefaults 
     */
    public getByDocumentIdWithHttpInfo(did: string, templateType?: BTPropertiesTableTemplateType, onlyActive?: boolean, includeDefaults?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getByDocumentId(did, templateType, onlyActive, includeDefaults, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByDocumentIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all table templates that are available to use on the provided document.
     * @param did The id of the document in which to perform the operation.
     * @param templateType Indicates filter for table templates: 0 (BOM) or 1 (Revision Table).
     * @param onlyActive 
     * @param includeDefaults 
     */
    public getByDocumentId(did: string, templateType?: BTPropertiesTableTemplateType, onlyActive?: boolean, includeDefaults?: boolean, _options?: Configuration): Observable<void> {
        return this.getByDocumentIdWithHttpInfo(did, templateType, onlyActive, includeDefaults, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a properties table template by template ID.
     * @param tid The id of the template in which to perform the operation.
     */
    public getTableTemplateWithHttpInfo(tid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getTableTemplate(tid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTableTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a properties table template by template ID.
     * @param tid The id of the template in which to perform the operation.
     */
    public getTableTemplate(tid: string, _options?: Configuration): Observable<void> {
        return this.getTableTemplateWithHttpInfo(tid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PublicationApiRequestFactory, PublicationApiResponseProcessor} from "../apis/PublicationApi";
export class ObservablePublicationApi {
    private requestFactory: PublicationApiRequestFactory;
    private responseProcessor: PublicationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicationApiRequestFactory,
        responseProcessor?: PublicationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicationApiResponseProcessor();
    }

    /**
     * Get all items in a publication.
     * @param pid 
     */
    public getPublicationItemsWithHttpInfo(pid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getPublicationItems(pid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPublicationItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all items in a publication.
     * @param pid 
     */
    public getPublicationItems(pid: string, _options?: Configuration): Observable<void> {
        return this.getPublicationItemsWithHttpInfo(pid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ReleasePackageApiRequestFactory, ReleasePackageApiResponseProcessor} from "../apis/ReleasePackageApi";
export class ObservableReleasePackageApi {
    private requestFactory: ReleasePackageApiRequestFactory;
    private responseProcessor: ReleasePackageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReleasePackageApiRequestFactory,
        responseProcessor?: ReleasePackageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReleasePackageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReleasePackageApiResponseProcessor();
    }

    /**
     * Create an obsoletion package to make an existing revision obsolete.
     * @param wfid 
     * @param revisionId 
     * @param debugMode 
     */
    public createObsoletionPackageWithHttpInfo(wfid: string, revisionId: string, debugMode?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createObsoletionPackage(wfid, revisionId, debugMode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createObsoletionPackageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an obsoletion package to make an existing revision obsolete.
     * @param wfid 
     * @param revisionId 
     * @param debugMode 
     */
    public createObsoletionPackage(wfid: string, revisionId: string, debugMode?: boolean, _options?: Configuration): Observable<void> {
        return this.createObsoletionPackageWithHttpInfo(wfid, revisionId, debugMode, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * All revisionable items must be from the same document. Once a release package is successfully created, use `updateReleasePackage` to update all desired item/package properties, and transition it to the desired state.
     * Create a new release package for one or more items.
     * @param wfid 
     * @param bTReleasePackageParams 
     * @param debugMode 
     */
    public createReleasePackageWithHttpInfo(wfid: string, bTReleasePackageParams: BTReleasePackageParams, debugMode?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createReleasePackage(wfid, bTReleasePackageParams, debugMode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createReleasePackageWithHttpInfo(rsp)));
            }));
    }

    /**
     * All revisionable items must be from the same document. Once a release package is successfully created, use `updateReleasePackage` to update all desired item/package properties, and transition it to the desired state.
     * Create a new release package for one or more items.
     * @param wfid 
     * @param bTReleasePackageParams 
     * @param debugMode 
     */
    public createReleasePackage(wfid: string, bTReleasePackageParams: BTReleasePackageParams, debugMode?: boolean, _options?: Configuration): Observable<void> {
        return this.createReleasePackageWithHttpInfo(wfid, bTReleasePackageParams, debugMode, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get information about the release/obsoletion workflow for a company-owned document.
     * @param documentId 
     */
    public getCompanyReleaseWorkflowWithHttpInfo(documentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getCompanyReleaseWorkflow(documentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompanyReleaseWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information about the release/obsoletion workflow for a company-owned document.
     * @param documentId 
     */
    public getCompanyReleaseWorkflow(documentId?: string, _options?: Configuration): Observable<void> {
        return this.getCompanyReleaseWorkflowWithHttpInfo(documentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get details about the specified release package.
     * @param rpid 
     * @param detailed 
     */
    public getReleasePackageWithHttpInfo(rpid: string, detailed?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getReleasePackage(rpid, detailed, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getReleasePackageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get details about the specified release package.
     * @param rpid 
     * @param detailed 
     */
    public getReleasePackage(rpid: string, detailed?: boolean, _options?: Configuration): Observable<void> {
        return this.getReleasePackageWithHttpInfo(rpid, detailed, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Use the `wfaction` query param to also perform a workflow transition.
     * Update the release/obsoletion package/item properties.
     * @param rpid 
     * @param bTUpdateReleasePackageParams 
     * @param action 
     * @param wfaction 
     */
    public updateReleasePackageWithHttpInfo(rpid: string, bTUpdateReleasePackageParams: BTUpdateReleasePackageParams, action?: string, wfaction?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateReleasePackage(rpid, bTUpdateReleasePackageParams, action, wfaction, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateReleasePackageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use the `wfaction` query param to also perform a workflow transition.
     * Update the release/obsoletion package/item properties.
     * @param rpid 
     * @param bTUpdateReleasePackageParams 
     * @param action 
     * @param wfaction 
     */
    public updateReleasePackage(rpid: string, bTUpdateReleasePackageParams: BTUpdateReleasePackageParams, action?: string, wfaction?: string, _options?: Configuration): Observable<void> {
        return this.updateReleasePackageWithHttpInfo(rpid, bTUpdateReleasePackageParams, action, wfaction, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { RevisionApiRequestFactory, RevisionApiResponseProcessor} from "../apis/RevisionApi";
export class ObservableRevisionApi {
    private requestFactory: RevisionApiRequestFactory;
    private responseProcessor: RevisionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RevisionApiRequestFactory,
        responseProcessor?: RevisionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RevisionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RevisionApiResponseProcessor();
    }

    /**
     * Only company admins can call this API. All documents that contain or use the part number must be deleted first. This operation cannot be undone.
     * Delete all revisions for a part number.
     * @param cid 
     * @param pnum 
     * @param et 
     * @param ignoreLinkedDocuments 
     */
    public deleteRevisionHistoryWithHttpInfo(cid: string, pnum: string, et: string, ignoreLinkedDocuments?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteRevisionHistory(cid, pnum, et, ignoreLinkedDocuments, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRevisionHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Only company admins can call this API. All documents that contain or use the part number must be deleted first. This operation cannot be undone.
     * Delete all revisions for a part number.
     * @param cid 
     * @param pnum 
     * @param et 
     * @param ignoreLinkedDocuments 
     */
    public deleteRevisionHistory(cid: string, pnum: string, et: string, ignoreLinkedDocuments?: boolean, _options?: Configuration): Observable<void> {
        return this.deleteRevisionHistoryWithHttpInfo(cid, pnum, et, ignoreLinkedDocuments, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Returns a slice of all revisions per API call.  * To get the next set of results, use the `next` URL from the response body.  * This API can only be called by company admins.
     * Enumerate all of a company\'s revisions.
     * @param cid The company or enterprise ID that owns the resource.
     * @param elementType 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     * @param limit The number of items to return in a single API call
     * @param latestOnly Whether to limit search to only latest revisions.
     * @param after The earliest creation date of the revision to find.
     */
    public enumerateRevisionsWithHttpInfo(cid: string, elementType?: number, limit?: number, latestOnly?: boolean, after?: Date, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.enumerateRevisions(cid, elementType, limit, latestOnly, after, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enumerateRevisionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Returns a slice of all revisions per API call.  * To get the next set of results, use the `next` URL from the response body.  * This API can only be called by company admins.
     * Enumerate all of a company\'s revisions.
     * @param cid The company or enterprise ID that owns the resource.
     * @param elementType 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     * @param limit The number of items to return in a single API call
     * @param latestOnly Whether to limit search to only latest revisions.
     * @param after The earliest creation date of the revision to find.
     */
    public enumerateRevisions(cid: string, elementType?: number, limit?: number, latestOnly?: boolean, after?: Date, _options?: Configuration): Observable<void> {
        return this.enumerateRevisionsWithHttpInfo(cid, elementType, limit, latestOnly, after, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
     * Get all revisions for the specified document.
     * @param did 
     */
    public getAllInDocumentWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAllInDocument(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of all revisions that exist in a document and are owned by the document\'s owning company.
     * Get all revisions for the specified document.
     * @param did 
     */
    public getAllInDocument(did: string, _options?: Configuration): Observable<void> {
        return this.getAllInDocumentWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
     * Get all revisions for a version.
     * @param did 
     * @param vid 
     */
    public getAllInDocumentVersionWithHttpInfo(did: string, vid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAllInDocumentVersion(did, vid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInDocumentVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of all revisions that exist in a document version and are owned by the document\'s owning company.
     * Get all revisions for a version.
     * @param did 
     * @param vid 
     */
    public getAllInDocumentVersion(did: string, vid: string, _options?: Configuration): Observable<void> {
        return this.getAllInDocumentVersionWithHttpInfo(did, vid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns 204 if no revisions are found.
     * Get the latest revision for a part number in a document or company.
     * @param cd 
     * @param cdid 
     * @param pnum 
     * @param et 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     */
    public getLatestInDocumentOrCompanyWithHttpInfo(cd: string, cdid: string, pnum: string, et: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getLatestInDocumentOrCompany(cd, cdid, pnum, et, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestInDocumentOrCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns 204 if no revisions are found.
     * Get the latest revision for a part number in a document or company.
     * @param cd 
     * @param cdid 
     * @param pnum 
     * @param et 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     */
    public getLatestInDocumentOrCompany(cd: string, cdid: string, pnum: string, et: string, _options?: Configuration): Observable<void> {
        return this.getLatestInDocumentOrCompanyWithHttpInfo(cd, cdid, pnum, et, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of revisions by part number.
     * @param cid Company id
     * @param pnum Part Number
     * @param revision Revision
     * @param elementType 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     */
    public getRevisionByPartNumberWithHttpInfo(cid: string, pnum: string, revision?: string, elementType?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getRevisionByPartNumber(cid, pnum, revision, elementType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevisionByPartNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of revisions by part number.
     * @param cid Company id
     * @param pnum Part Number
     * @param revision Revision
     * @param elementType 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     */
    public getRevisionByPartNumber(cid: string, pnum: string, revision?: string, elementType?: number, _options?: Configuration): Observable<void> {
        return this.getRevisionByPartNumberWithHttpInfo(cid, pnum, revision, elementType, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all revisions for an element in a company-owned document.
     * @param cid 
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param elementType 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public getRevisionHistoryInCompanyByElementIdWithHttpInfo(cid: string, did: string, wv: 'w' | 'v', wvid: string, eid: string, elementType: string, linkDocumentId?: string, configuration?: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getRevisionHistoryInCompanyByElementId(cid, did, wv, wvid, eid, elementType, linkDocumentId, configuration, fillApprovers, fillExportPermission, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevisionHistoryInCompanyByElementIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all revisions for an element in a company-owned document.
     * @param cid 
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param elementType 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public getRevisionHistoryInCompanyByElementId(cid: string, did: string, wv: 'w' | 'v', wvid: string, eid: string, elementType: string, linkDocumentId?: string, configuration?: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Observable<void> {
        return this.getRevisionHistoryInCompanyByElementIdWithHttpInfo(cid, did, wv, wvid, eid, elementType, linkDocumentId, configuration, fillApprovers, fillExportPermission, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all revisions for a part in a company-owned document by part ID.
     * @param cid 
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param pid 
     * @param configuration 
     * @param linkDocumentId 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public getRevisionHistoryInCompanyByPartIdWithHttpInfo(cid: string, did: string, wv: string, wvid: string, eid: string, pid: string, configuration?: string, linkDocumentId?: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getRevisionHistoryInCompanyByPartId(cid, did, wv, wvid, eid, pid, configuration, linkDocumentId, fillApprovers, fillExportPermission, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevisionHistoryInCompanyByPartIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all revisions for a part in a company-owned document by part ID.
     * @param cid 
     * @param did 
     * @param wv 
     * @param wvid 
     * @param eid 
     * @param pid 
     * @param configuration 
     * @param linkDocumentId 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public getRevisionHistoryInCompanyByPartId(cid: string, did: string, wv: string, wvid: string, eid: string, pid: string, configuration?: string, linkDocumentId?: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Observable<void> {
        return this.getRevisionHistoryInCompanyByPartIdWithHttpInfo(cid, did, wv, wvid, eid, pid, configuration, linkDocumentId, fillApprovers, fillExportPermission, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * You can also request `elementType` in addition to `partNumber` since companies may or may not allow drawings to share part numbers with their parts/assemblies. 
     * Get a list of all revisions for a part or element in a company-owned document by part number.
     * @param cid 
     * @param pnum 
     * @param elementType 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public getRevisionHistoryInCompanyByPartNumberWithHttpInfo(cid: string, pnum: string, elementType: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getRevisionHistoryInCompanyByPartNumber(cid, pnum, elementType, fillApprovers, fillExportPermission, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevisionHistoryInCompanyByPartNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * You can also request `elementType` in addition to `partNumber` since companies may or may not allow drawings to share part numbers with their parts/assemblies. 
     * Get a list of all revisions for a part or element in a company-owned document by part number.
     * @param cid 
     * @param pnum 
     * @param elementType 
     * @param fillApprovers 
     * @param fillExportPermission 
     */
    public getRevisionHistoryInCompanyByPartNumber(cid: string, pnum: string, elementType: string, fillApprovers?: boolean, fillExportPermission?: boolean, _options?: Configuration): Observable<void> {
        return this.getRevisionHistoryInCompanyByPartNumberWithHttpInfo(cid, pnum, elementType, fillApprovers, fillExportPermission, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SketchApiRequestFactory, SketchApiResponseProcessor} from "../apis/SketchApi";
export class ObservableSketchApi {
    private requestFactory: SketchApiRequestFactory;
    private responseProcessor: SketchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SketchApiRequestFactory,
        responseProcessor?: SketchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SketchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SketchApiResponseProcessor();
    }

    /**
     * Get all bounding boxes for a sketch.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param sid 
     * @param configuration 
     * @param linkDocumentId 
     */
    public getSketchBoundingBoxesWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, sid: string, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getSketchBoundingBoxes(did, wvm, wvmid, eid, sid, configuration, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSketchBoundingBoxesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all bounding boxes for a sketch.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param sid 
     * @param configuration 
     * @param linkDocumentId 
     */
    public getSketchBoundingBoxes(did: string, wvm: string, wvmid: string, eid: string, sid: string, configuration?: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getSketchBoundingBoxesWithHttpInfo(did, wvm, wvmid, eid, sid, configuration, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get information for all sketches in Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param configuration 
     * @param sketchId 
     * @param output3D 
     * @param curvePoints 
     * @param includeGeometry 
     * @param linkDocumentId 
     */
    public getSketchInfoWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, configuration?: string, sketchId?: Array<string>, output3D?: boolean, curvePoints?: boolean, includeGeometry?: boolean, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getSketchInfo(did, wvm, wvmid, eid, configuration, sketchId, output3D, curvePoints, includeGeometry, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSketchInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information for all sketches in Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param configuration 
     * @param sketchId 
     * @param output3D 
     * @param curvePoints 
     * @param includeGeometry 
     * @param linkDocumentId 
     */
    public getSketchInfo(did: string, wvm: string, wvmid: string, eid: string, configuration?: string, sketchId?: Array<string>, output3D?: boolean, curvePoints?: boolean, includeGeometry?: boolean, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getSketchInfoWithHttpInfo(did, wvm, wvmid, eid, configuration, sketchId, output3D, curvePoints, includeGeometry, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances.
     * Get the tessellations of a sketch in a Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param sid 
     * @param configuration 
     * @param entityId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param linkDocumentId 
     */
    public getTessellatedEntitiesWithHttpInfo(did: string, wvm: string, wvmid: string, eid: string, sid: string, configuration?: string, entityId?: Array<string>, angleTolerance?: number, chordTolerance?: number, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getTessellatedEntities(did, wvm, wvmid, eid, sid, configuration, entityId, angleTolerance, chordTolerance, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTessellatedEntitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * The accuracy of the tessellation to exact geometry is controlled by the `angleTolerance` and `chordTolerance` parameters. The tessellation points are computed closely enough so that neither the angle tolerance nor the chord tolerance are exceeded. For most parts, the angular tolerance is the most restrictive of the two default tolerances.
     * Get the tessellations of a sketch in a Part Studio.
     * @param did 
     * @param wvm 
     * @param wvmid 
     * @param eid 
     * @param sid 
     * @param configuration 
     * @param entityId 
     * @param angleTolerance 
     * @param chordTolerance 
     * @param linkDocumentId 
     */
    public getTessellatedEntities(did: string, wvm: string, wvmid: string, eid: string, sid: string, configuration?: string, entityId?: Array<string>, angleTolerance?: number, chordTolerance?: number, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getTessellatedEntitiesWithHttpInfo(did, wvm, wvmid, eid, sid, configuration, entityId, angleTolerance, chordTolerance, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TeamApiRequestFactory, TeamApiResponseProcessor} from "../apis/TeamApi";
export class ObservableTeamApi {
    private requestFactory: TeamApiRequestFactory;
    private responseProcessor: TeamApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamApiRequestFactory,
        responseProcessor?: TeamApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamApiResponseProcessor();
    }

    /**
     * Get a list of all teams the current user belongs to.
     * @param prefix 
     * @param uid 
     * @param companyId 
     * @param includeCompanyOwnedTeams 
     */
    public findWithHttpInfo(prefix?: string, uid?: string, companyId?: string, includeCompanyOwnedTeams?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.find(prefix, uid, companyId, includeCompanyOwnedTeams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.findWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all teams the current user belongs to.
     * @param prefix 
     * @param uid 
     * @param companyId 
     * @param includeCompanyOwnedTeams 
     */
    public find(prefix?: string, uid?: string, companyId?: string, includeCompanyOwnedTeams?: boolean, _options?: Configuration): Observable<void> {
        return this.findWithHttpInfo(prefix, uid, companyId, includeCompanyOwnedTeams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns a maximum of 20 per page.
     * Get a list of a team\'s members.
     * @param tid 
     * @param sortColumn 
     * @param sortOrder 
     * @param offset 
     * @param limit 
     * @param q 
     */
    public getMembersWithHttpInfo(tid: string, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, q?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getMembers(tid, sortColumn, sortOrder, offset, limit, q, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMembersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a maximum of 20 per page.
     * Get a list of a team\'s members.
     * @param tid 
     * @param sortColumn 
     * @param sortOrder 
     * @param offset 
     * @param limit 
     * @param q 
     */
    public getMembers(tid: string, sortColumn?: string, sortOrder?: string, offset?: number, limit?: number, q?: string, _options?: Configuration): Observable<void> {
        return this.getMembersWithHttpInfo(tid, sortColumn, sortOrder, offset, limit, q, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get team information by team ID.
     * @param tid 
     */
    public getTeamWithHttpInfo(tid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getTeam(tid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get team information by team ID.
     * @param tid 
     */
    public getTeam(tid: string, _options?: Configuration): Observable<void> {
        return this.getTeamWithHttpInfo(tid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ThumbnailApiRequestFactory, ThumbnailApiResponseProcessor} from "../apis/ThumbnailApi";
export class ObservableThumbnailApi {
    private requestFactory: ThumbnailApiRequestFactory;
    private responseProcessor: ThumbnailApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ThumbnailApiRequestFactory,
        responseProcessor?: ThumbnailApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ThumbnailApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ThumbnailApiResponseProcessor();
    }

    /**
     * Deletes an application element\'s thumbnail and images for the given document, workspace or version, and element combination.
     * Delete an element\'s thumbnail.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public deleteApplicationThumbnailsWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteApplicationThumbnails(did, wv, wvid, eid, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApplicationThumbnailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an application element\'s thumbnail and images for the given document, workspace or version, and element combination.
     * Delete an element\'s thumbnail.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public deleteApplicationThumbnails(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.deleteApplicationThumbnailsWithHttpInfo(did, wv, wvid, eid, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve default thumbnail information for a document, with a specified size in pixels by document ID.
     * @param did 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     */
    public getDocumentDefaultThumbnailWithSizeWithHttpInfo(did: string, sz: string, t?: string, skipDefaultImage?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentDefaultThumbnailWithSize(did, sz, t, skipDefaultImage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentDefaultThumbnailWithSizeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve default thumbnail information for a document, with a specified size in pixels by document ID.
     * @param did 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     */
    public getDocumentDefaultThumbnailWithSize(did: string, sz: string, t?: string, skipDefaultImage?: string, _options?: Configuration): Observable<void> {
        return this.getDocumentDefaultThumbnailWithSizeWithHttpInfo(did, sz, t, skipDefaultImage, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a workspace.
     * @param did 
     * @param wid 
     */
    public getDocumentThumbnailWithHttpInfo(did: string, wid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentThumbnail(did, wid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentThumbnailWithHttpInfo(rsp)));
            }));
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a workspace.
     * @param did 
     * @param wid 
     */
    public getDocumentThumbnail(did: string, wid: string, _options?: Configuration): Observable<void> {
        return this.getDocumentThumbnailWithHttpInfo(did, wid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * By default, returns thumbnail image for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail image with the given size for a document.
     * @param did 
     * @param wid 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     */
    public getDocumentThumbnailWithSizeWithHttpInfo(did: string, wid: string, sz: string, t?: string, skipDefaultImage?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentThumbnailWithSize(did, wid, sz, t, skipDefaultImage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentThumbnailWithSizeWithHttpInfo(rsp)));
            }));
    }

    /**
     * * By default, returns thumbnail image for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail image with the given size for a document.
     * @param did 
     * @param wid 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     */
    public getDocumentThumbnailWithSize(did: string, wid: string, sz: string, t?: string, skipDefaultImage?: string, _options?: Configuration): Observable<void> {
        return this.getDocumentThumbnailWithSizeWithHttpInfo(did, wid, sz, t, skipDefaultImage, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns thumbnail info for the given document, workspace or version, and element.
     * Get the thumbnail info structure for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public getElementThumbnailWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getElementThumbnail(did, wv, wvid, eid, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElementThumbnailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns thumbnail info for the given document, workspace or version, and element.
     * Get the thumbnail info structure for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public getElementThumbnail(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getElementThumbnailWithHttpInfo(did, wv, wvid, eid, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns the thumbnail image for an element at a specified version, with the given configuration.
     * Get the thumbnail image with the given configuration for an element.
     * @param did 
     * @param wid 
     * @param eid 
     * @param cid 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     * @param rejectEmpty 
     * @param requireConfigMatch 
     */
    public getElementThumbnailWithApiConfigurationWithHttpInfo(did: string, wid: string, eid: string, cid: string, sz: string, t?: string, skipDefaultImage?: string, rejectEmpty?: boolean, requireConfigMatch?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getElementThumbnailWithApiConfiguration(did, wid, eid, cid, sz, t, skipDefaultImage, rejectEmpty, requireConfigMatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElementThumbnailWithApiConfigurationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the thumbnail image for an element at a specified version, with the given configuration.
     * Get the thumbnail image with the given configuration for an element.
     * @param did 
     * @param wid 
     * @param eid 
     * @param cid 
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     * @param rejectEmpty 
     * @param requireConfigMatch 
     */
    public getElementThumbnailWithApiConfiguration(did: string, wid: string, eid: string, cid: string, sz: string, t?: string, skipDefaultImage?: string, rejectEmpty?: boolean, requireConfigMatch?: boolean, _options?: Configuration): Observable<void> {
        return this.getElementThumbnailWithApiConfigurationWithHttpInfo(did, wid, eid, cid, sz, t, skipDefaultImage, rejectEmpty, requireConfigMatch, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the thumbnail image with the given size for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     * @param rejectEmpty 
     */
    public getElementThumbnailWithSizeWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, sz: string, linkDocumentId?: string, t?: string, skipDefaultImage?: string, rejectEmpty?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getElementThumbnailWithSize(did, wv, wvid, eid, sz, linkDocumentId, t, skipDefaultImage, rejectEmpty, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElementThumbnailWithSizeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the thumbnail image with the given size for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param sz the generated thumbnail size in pixels, widthxheigth
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param t Cache Control key. If specified, the response header returned will tell the client to use cached thumbnails.
     * @param skipDefaultImage Controls the return of the default image, if thumbnail is not available
     * @param rejectEmpty 
     */
    public getElementThumbnailWithSize(did: string, wv: 'w' | 'v', wvid: string, eid: string, sz: string, linkDocumentId?: string, t?: string, skipDefaultImage?: string, rejectEmpty?: boolean, _options?: Configuration): Observable<void> {
        return this.getElementThumbnailWithSizeWithHttpInfo(did, wv, wvid, eid, sz, linkDocumentId, t, skipDefaultImage, rejectEmpty, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * The default workspace may vary by user; the image served depends on the signed-in user. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a document in the default workspace.
     * @param did 
     */
    public getThumbnailForDocumentWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getThumbnailForDocument(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getThumbnailForDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * The default workspace may vary by user; the image served depends on the signed-in user. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a document in the default workspace.
     * @param did 
     */
    public getThumbnailForDocument(did: string, _options?: Configuration): Observable<void> {
        return this.getThumbnailForDocumentWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a version of a document.
     * @param did 
     * @param vid 
     * @param linkDocumentId 
     */
    public getThumbnailForDocumentAndVersionWithHttpInfo(did: string, vid: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getThumbnailForDocumentAndVersion(did, vid, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getThumbnailForDocumentAndVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * * By default, returns thumbnail info for the element with the most-recently generated image. If you pinned an element for the document thumbnail, that element will always be used for the document-level thumbnail, if it exists in the workspace. * See also: [Tech tip on how to change a document thumbnail in onshape](https://www.onshape.com/en/resource-center/tech-tips/tech-tip-how-to-change-a-document-thumbnail-in-onshape)
     * Get the thumbnail info for a version of a document.
     * @param did 
     * @param vid 
     * @param linkDocumentId 
     */
    public getThumbnailForDocumentAndVersion(did: string, vid: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getThumbnailForDocumentAndVersionWithHttpInfo(did, vid, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocumentAndVersion` instead.
     * @param did 
     * @param vid 
     */
    public getThumbnailForDocumentAndVersionOldWithHttpInfo(did: string, vid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getThumbnailForDocumentAndVersionOld(did, vid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getThumbnailForDocumentAndVersionOldWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocumentAndVersion` instead.
     * @param did 
     * @param vid 
     */
    public getThumbnailForDocumentAndVersionOld(did: string, vid: string, _options?: Configuration): Observable<void> {
        return this.getThumbnailForDocumentAndVersionOldWithHttpInfo(did, vid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocument` instead.
     * @param did 
     */
    public getThumbnailForDocumentOldWithHttpInfo(did: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getThumbnailForDocumentOld(did, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getThumbnailForDocumentOldWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API exists for historical reasons. It uses `/document/` in the path, rather than the standard `/d/` to specify the document.
     * This endpoint will be deprecated soon. Use `getThumbnailForDocument` instead.
     * @param did 
     */
    public getThumbnailForDocumentOld(did: string, _options?: Configuration): Observable<void> {
        return this.getThumbnailForDocumentOldWithHttpInfo(did, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Allows 3rd-party applications to set thumbnails for their elements.  * Application elements can have both primary and secondary thumbnails. A primary thumbnail represents the top-level of the element. A secondary thumbnail can represent sub-components of the element (e.g., a drawing sheet). * To update one or more thumbnails, you must set the overwrite query param to `true` and supply the entire set of thumbnails. All previous thumbnails will be deleted prior to updating the element with the latest images.
     * Set the thumbnail image for an application element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param bTApplicationElementThumbnailParamsArray 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param overwrite 
     */
    public setApplicationElementThumbnailWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, bTApplicationElementThumbnailParamsArray: BTApplicationElementThumbnailParamsArray, linkDocumentId?: string, overwrite?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setApplicationElementThumbnail(did, wv, wvid, eid, bTApplicationElementThumbnailParamsArray, linkDocumentId, overwrite, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setApplicationElementThumbnailWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Allows 3rd-party applications to set thumbnails for their elements.  * Application elements can have both primary and secondary thumbnails. A primary thumbnail represents the top-level of the element. A secondary thumbnail can represent sub-components of the element (e.g., a drawing sheet). * To update one or more thumbnails, you must set the overwrite query param to `true` and supply the entire set of thumbnails. All previous thumbnails will be deleted prior to updating the element with the latest images.
     * Set the thumbnail image for an application element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param bTApplicationElementThumbnailParamsArray 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param overwrite 
     */
    public setApplicationElementThumbnail(did: string, wv: 'w' | 'v', wvid: string, eid: string, bTApplicationElementThumbnailParamsArray: BTApplicationElementThumbnailParamsArray, linkDocumentId?: string, overwrite?: boolean, _options?: Configuration): Observable<void> {
        return this.setApplicationElementThumbnailWithHttpInfo(did, wv, wvid, eid, bTApplicationElementThumbnailParamsArray, linkDocumentId, overwrite, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TranslationApiRequestFactory, TranslationApiResponseProcessor} from "../apis/TranslationApi";
export class ObservableTranslationApi {
    private requestFactory: TranslationApiRequestFactory;
    private responseProcessor: TranslationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TranslationApiRequestFactory,
        responseProcessor?: TranslationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TranslationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TranslationApiResponseProcessor();
    }

    /**
     * The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either DONE or FAILED. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`).
     * Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies.
     * @param did 
     * @param wid 
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public createTranslationWithHttpInfo(did: string, wid: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createTranslation(did, wid, file, allowFaultyParts, createComposite, createDrawingIfPossible, encodedFilename, extractAssemblyHierarchy, flattenAssemblies, formatName, joinAdjacentSurfaces, locationElementId, locationGroupId, locationPosition, notifyUser, ownerId, parentId, projectId, _public, onePartPerDoc, splitAssembliesIntoMultipleDocuments, storeInDocument, translate, unit, uploadId, versionString, importAppearances, yAxisIsUp, importWithinDocument, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTranslationWithHttpInfo(rsp)));
            }));
    }

    /**
     * The API call may complete before the translation is finished. If `requestState = ACTIVE`, the translation can be polled until the state is either DONE or FAILED. Alternatively, a webhook callback can be registered for notification of translation completion (requires `Write` scope if `storeInDocument` is `true`).
     * Upload a foreign file into Onshape and translate the data into parts, Part Studios, assemblies, and subassemblies.
     * @param did 
     * @param wid 
     * @param file File to upload.
     * @param allowFaultyParts If true, and a part doesn\\\&#39;t pass Onshape validation, it will be imported with faults.
     * @param createComposite 
     * @param createDrawingIfPossible 
     * @param encodedFilename If the filename contains non-ASCII characters. Use this field to store the filename.
     * @param extractAssemblyHierarchy 
     * @param flattenAssemblies If the file is an assembly, or contains an assembly, setting this to True will import it as a Part Studio. In this case the assembly will be flattened to a set of parts in a Part Studio. There will be duplicate parts created whenever a part is instanced more than once. If False, it will be imported as an Assembly.
     * @param formatName 
     * @param joinAdjacentSurfaces 
     * @param locationElementId 
     * @param locationGroupId 
     * @param locationPosition 
     * @param notifyUser 
     * @param ownerId 
     * @param parentId 
     * @param projectId 
     * @param _public 
     * @param onePartPerDoc 
     * @param splitAssembliesIntoMultipleDocuments 
     * @param storeInDocument 
     * @param translate 
     * @param unit 
     * @param uploadId 
     * @param versionString 
     * @param importAppearances Face appearances defined on models will be imported.
     * @param yAxisIsUp If the file was created in a system that orients with Y Axis Up, the models would by default be brought into Onshape (a Z Axis Up system) with a flipped coordinate system. Toggle this value to reorient the axis system to match Onshape and display the model with the coordinates you expect.
     * @param importWithinDocument 
     */
    public createTranslation(did: string, wid: string, file?: HttpFile, allowFaultyParts?: boolean, createComposite?: boolean, createDrawingIfPossible?: boolean, encodedFilename?: string, extractAssemblyHierarchy?: boolean, flattenAssemblies?: boolean, formatName?: string, joinAdjacentSurfaces?: boolean, locationElementId?: string, locationGroupId?: string, locationPosition?: number, notifyUser?: boolean, ownerId?: string, parentId?: string, projectId?: string, _public?: boolean, onePartPerDoc?: boolean, splitAssembliesIntoMultipleDocuments?: boolean, storeInDocument?: boolean, translate?: boolean, unit?: string, uploadId?: string, versionString?: string, importAppearances?: boolean, yAxisIsUp?: boolean, importWithinDocument?: boolean, _options?: Configuration): Observable<void> {
        return this.createTranslationWithHttpInfo(did, wid, file, allowFaultyParts, createComposite, createDrawingIfPossible, encodedFilename, extractAssemblyHierarchy, flattenAssemblies, formatName, joinAdjacentSurfaces, locationElementId, locationGroupId, locationPosition, notifyUser, ownerId, parentId, projectId, _public, onePartPerDoc, splitAssembliesIntoMultipleDocuments, storeInDocument, translate, unit, uploadId, versionString, importAppearances, yAxisIsUp, importWithinDocument, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a translation request.
     * @param tid 
     */
    public deleteTranslationWithHttpInfo(tid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTranslation(tid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTranslationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a translation request.
     * @param tid 
     */
    public deleteTranslation(tid: string, _options?: Configuration): Observable<void> {
        return this.deleteTranslationWithHttpInfo(tid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Note that we don\'t necessarily support both import and export for any given format. Please use specific export APIs, such as `exportPartStudioStl`, for STL and Parasolid exports.
     * Get a list of formats this translation can use.
     */
    public getAllTranslatorFormatsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAllTranslatorFormats(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTranslatorFormatsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Note that we don\'t necessarily support both import and export for any given format. Please use specific export APIs, such as `exportPartStudioStl`, for STL and Parasolid exports.
     * Get a list of formats this translation can use.
     */
    public getAllTranslatorFormats(_options?: Configuration): Observable<void> {
        return this.getAllTranslatorFormatsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get information on an in-progress or completed translation by document ID.
     * @param did 
     * @param offset 
     * @param limit 
     */
    public getDocumentTranslationsWithHttpInfo(did: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDocumentTranslations(did, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDocumentTranslationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information on an in-progress or completed translation by document ID.
     * @param did 
     * @param offset 
     * @param limit 
     */
    public getDocumentTranslations(did: string, offset?: number, limit?: number, _options?: Configuration): Observable<void> {
        return this.getDocumentTranslationsWithHttpInfo(did, offset, limit, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get information on an in-progress or completed translation by translation ID.
     * @param tid 
     */
    public getTranslationWithHttpInfo(tid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getTranslation(tid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTranslationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information on an in-progress or completed translation by translation ID.
     * @param tid 
     */
    public getTranslation(tid: string, _options?: Configuration): Observable<void> {
        return this.getTranslationWithHttpInfo(tid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.
     * Get the user settings for any user in your organization (admins only).
     * @param uid 
     * @param includematerials 
     */
    public getUserSettingsWithHttpInfo(uid: string, includematerials?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getUserSettings(uid, includematerials, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.
     * Get the user settings for any user in your organization (admins only).
     * @param uid 
     * @param includematerials 
     */
    public getUserSettings(uid: string, includematerials?: boolean, _options?: Configuration): Observable<void> {
        return this.getUserSettingsWithHttpInfo(uid, includematerials, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Non-admins can call this API for their own user ID.  * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.
     * Get the user settings for the signed-in user (i.e., you) for the current session.
     * @param includematerials 
     */
    public getUserSettingsCurrentLoggedInUserWithHttpInfo(includematerials?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getUserSettingsCurrentLoggedInUser(includematerials, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserSettingsCurrentLoggedInUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Non-admins can call this API for their own user ID.  * Mouse button settings are contained in `reverseScrollWheelZoomDirection` and `viewManipulationMouseKeyMapping`.  * For each action in `viewManipulationMouseKeyMapping`, an array of modifier key/mouse combos is provided that performs that action.  * Possible modifier keys include `SHIFT` and `CTRL`.  * Possible mouse buttons include `MMB` (middle mouse button), `RMB` (right mouse button), and `SCROLLWHEEL`.  * Scrolling forward zooms in, unless `reverseScrollWheelZoomDirection` is set to `true`.
     * Get the user settings for the signed-in user (i.e., you) for the current session.
     * @param includematerials 
     */
    public getUserSettingsCurrentLoggedInUser(includematerials?: boolean, _options?: Configuration): Observable<void> {
        return this.getUserSettingsCurrentLoggedInUserWithHttpInfo(includematerials, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returned information depends on caller\'s `OAuth2ReadPll` scope.
     * Authenticate a user\'s Onshape credentials, and create a session.
     * @param bTLoginParams 
     */
    public sessionWithHttpInfo(bTLoginParams: BTLoginParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.session(bTLoginParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sessionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returned information depends on caller\'s `OAuth2ReadPll` scope.
     * Authenticate a user\'s Onshape credentials, and create a session.
     * @param bTLoginParams 
     */
    public session(bTLoginParams: BTLoginParams, _options?: Configuration): Observable<void> {
        return this.sessionWithHttpInfo(bTLoginParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returned information depends on caller\'s `OAuth2ReadPll` scope.
     * Get the session information for an authenticated (signed-in) user.
     */
    public sessionInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.sessionInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sessionInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returned information depends on caller\'s `OAuth2ReadPll` scope.
     * Get the session information for an authenticated (signed-in) user.
     */
    public sessionInfo(_options?: Configuration): Observable<void> {
        return this.sessionInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { VariablesApiRequestFactory, VariablesApiResponseProcessor} from "../apis/VariablesApi";
export class ObservableVariablesApi {
    private requestFactory: VariablesApiRequestFactory;
    private responseProcessor: VariablesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VariablesApiRequestFactory,
        responseProcessor?: VariablesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VariablesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VariablesApiResponseProcessor();
    }

    /**
     * Create a new Variable Studio in a document and workspace.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTModelElementParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public createVariableStudioWithHttpInfo(did: string, wid: string, bTModelElementParams: BTModelElementParams, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createVariableStudio(did, wid, bTModelElementParams, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createVariableStudioWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Variable Studio in a document and workspace.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param bTModelElementParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public createVariableStudio(did: string, wid: string, bTModelElementParams: BTModelElementParams, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.createVariableStudioWithHttpInfo(did, wid, bTModelElementParams, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the Variable Studio references for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public getVariableStudioReferencesWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getVariableStudioReferences(did, wv, wvid, eid, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVariableStudioReferencesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the Variable Studio references for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public getVariableStudioReferences(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getVariableStudioReferencesWithHttpInfo(did, wv, wvid, eid, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the scope of a Variable Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public getVariableStudioScopeWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getVariableStudioScope(did, wv, wvid, eid, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVariableStudioScopeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the scope of a Variable Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public getVariableStudioScope(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.getVariableStudioScopeWithHttpInfo(did, wv, wvid, eid, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get the contents of all variable tables in an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param includeValuesAndReferencedVariables 
     */
    public getVariablesWithHttpInfo(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, configuration?: string, includeValuesAndReferencedVariables?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getVariables(did, wv, wvid, eid, linkDocumentId, configuration, includeValuesAndReferencedVariables, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVariablesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the contents of all variable tables in an element.
     * @param did The id of the document in which to perform the operation.
     * @param wv Indicates which of workspace (w) or version (v) id is specified below.
     * @param wvid The id of the workspace, version in which the operation should be performed.
     * @param eid The id of the element in which to perform the operation.
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @param configuration 
     * @param includeValuesAndReferencedVariables 
     */
    public getVariables(did: string, wv: 'w' | 'v', wvid: string, eid: string, linkDocumentId?: string, configuration?: string, includeValuesAndReferencedVariables?: boolean, _options?: Configuration): Observable<void> {
        return this.getVariablesWithHttpInfo(did, wv, wvid, eid, linkDocumentId, configuration, includeValuesAndReferencedVariables, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set the Variable Studio references for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid 
     * @param bTVariableStudioReferenceListInfo 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public setVariableStudioReferencesWithHttpInfo(did: string, wid: string, eid: string, bTVariableStudioReferenceListInfo: BTVariableStudioReferenceListInfo, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setVariableStudioReferences(did, wid, eid, bTVariableStudioReferenceListInfo, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setVariableStudioReferencesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set the Variable Studio references for an element.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid 
     * @param bTVariableStudioReferenceListInfo 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public setVariableStudioReferences(did: string, wid: string, eid: string, bTVariableStudioReferenceListInfo: BTVariableStudioReferenceListInfo, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.setVariableStudioReferencesWithHttpInfo(did, wid, eid, bTVariableStudioReferenceListInfo, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set the scope the Variable Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid 
     * @param bTVariableStudioScopeInfo 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public setVariableStudioScopeWithHttpInfo(did: string, wid: string, eid: string, bTVariableStudioScopeInfo: BTVariableStudioScopeInfo, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setVariableStudioScope(did, wid, eid, bTVariableStudioScopeInfo, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setVariableStudioScopeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set the scope the Variable Studio.
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid 
     * @param bTVariableStudioScopeInfo 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public setVariableStudioScope(did: string, wid: string, eid: string, bTVariableStudioScopeInfo: BTVariableStudioScopeInfo, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.setVariableStudioScopeWithHttpInfo(did, wid, eid, bTVariableStudioScopeInfo, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Assign variables to a Variable Studio
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid 
     * @param bTVariableParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public setVariablesWithHttpInfo(did: string, wid: string, eid: string, bTVariableParams: Array<BTVariableParams>, linkDocumentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setVariables(did, wid, eid, bTVariableParams, linkDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setVariablesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign variables to a Variable Studio
     * @param did The id of the document in which to perform the operation.
     * @param wid The id of the workspace in which to perform the operation.
     * @param eid 
     * @param bTVariableParams 
     * @param linkDocumentId The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     */
    public setVariables(did: string, wid: string, eid: string, bTVariableParams: Array<BTVariableParams>, linkDocumentId?: string, _options?: Configuration): Observable<void> {
        return this.setVariablesWithHttpInfo(did, wid, eid, bTVariableParams, linkDocumentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { VersionApiRequestFactory, VersionApiResponseProcessor} from "../apis/VersionApi";
export class ObservableVersionApi {
    private requestFactory: VersionApiRequestFactory;
    private responseProcessor: VersionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VersionApiRequestFactory,
        responseProcessor?: VersionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VersionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VersionApiResponseProcessor();
    }

    /**
     * Get all versions of the Onshape REST APIs.
     */
    public getAllVersionsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAllVersions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllVersionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all versions of the Onshape REST APIs.
     */
    public getAllVersions(_options?: Configuration): Observable<void> {
        return this.getAllVersionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";
export class ObservableWebhookApi {
    private requestFactory: WebhookApiRequestFactory;
    private responseProcessor: WebhookApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookApiRequestFactory,
        responseProcessor?: WebhookApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookApiResponseProcessor();
    }

    /**
     * Create a new webhook.
     * @param bTWebhookParams 
     */
    public createWebhookWithHttpInfo(bTWebhookParams?: BTWebhookParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createWebhook(bTWebhookParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new webhook.
     * @param bTWebhookParams 
     */
    public createWebhook(bTWebhookParams?: BTWebhookParams, _options?: Configuration): Observable<void> {
        return this.createWebhookWithHttpInfo(bTWebhookParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get webhook info by webhook ID.
     * @param webhookid 
     */
    public getWebhookWithHttpInfo(webhookid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getWebhook(webhookid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get webhook info by webhook ID.
     * @param webhookid 
     */
    public getWebhook(webhookid: string, _options?: Configuration): Observable<void> {
        return this.getWebhookWithHttpInfo(webhookid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a list of all webhooks registered by a user or company.
     * @param company 
     * @param user 
     * @param offset 
     * @param limit 
     */
    public getWebhooksWithHttpInfo(company?: string, user?: string, offset?: number, limit?: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getWebhooks(company, user, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all webhooks registered by a user or company.
     * @param company 
     * @param user 
     * @param offset 
     * @param limit 
     */
    public getWebhooks(company?: string, user?: string, offset?: number, limit?: number, _options?: Configuration): Observable<void> {
        return this.getWebhooksWithHttpInfo(company, user, offset, limit, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Ping a webhook.
     * @param webhookid 
     */
    public pingWebhookWithHttpInfo(webhookid: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pingWebhook(webhookid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pingWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Ping a webhook.
     * @param webhookid 
     */
    public pingWebhook(webhookid: string, _options?: Configuration): Observable<void> {
        return this.pingWebhookWithHttpInfo(webhookid, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Unregister a webhook.
     * @param webhookid 
     * @param blockNotification 
     */
    public unregisterWebhookWithHttpInfo(webhookid: string, blockNotification?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unregisterWebhook(webhookid, blockNotification, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unregisterWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unregister a webhook.
     * @param webhookid 
     * @param blockNotification 
     */
    public unregisterWebhook(webhookid: string, blockNotification?: boolean, _options?: Configuration): Observable<void> {
        return this.unregisterWebhookWithHttpInfo(webhookid, blockNotification, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update a webhook
     * Update a webhook.
     * @param webhookid 
     * @param bTWebhookParams 
     */
    public updateWebhookWithHttpInfo(webhookid: string, bTWebhookParams?: BTWebhookParams, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateWebhook(webhookid, bTWebhookParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a webhook
     * Update a webhook.
     * @param webhookid 
     * @param bTWebhookParams 
     */
    public updateWebhook(webhookid: string, bTWebhookParams?: BTWebhookParams, _options?: Configuration): Observable<void> {
        return this.updateWebhookWithHttpInfo(webhookid, bTWebhookParams, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { WorkflowApiRequestFactory, WorkflowApiResponseProcessor} from "../apis/WorkflowApi";
export class ObservableWorkflowApi {
    private requestFactory: WorkflowApiRequestFactory;
    private responseProcessor: WorkflowApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkflowApiRequestFactory,
        responseProcessor?: WorkflowApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WorkflowApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WorkflowApiResponseProcessor();
    }

    /**
     * * For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time.  * Caller must be a company admin.  * Specify `modifiedAfter` and use the `next` URI for complete enumeration.
     * Enumerate all of a company\'s workflowable objects.
     * @param cid The company or enterprise ID that owns the resource.
     * @param objectTypes Optionally filter for specific workflowable types. Defaults to RELEASE and OBSOLETION
     * @param states Optionally filter for specific workflow states like PENDING, RELEASED
     * @param limit The number of items to return in a single API call
     * @param modifiedAfter The earliest modification date of workflowable object to find.
     */
    public enumerateObjectWorkflowsWithHttpInfo(cid: string, objectTypes?: Array<BTAPIWorkflowableType>, states?: Set<string>, limit?: number, modifiedAfter?: Date, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.enumerateObjectWorkflows(cid, objectTypes, states, limit, modifiedAfter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enumerateObjectWorkflowsWithHttpInfo(rsp)));
            }));
    }

    /**
     * * For example, you can enumerate RELEASES, TASKS, etc in a company by last modified time.  * Caller must be a company admin.  * Specify `modifiedAfter` and use the `next` URI for complete enumeration.
     * Enumerate all of a company\'s workflowable objects.
     * @param cid The company or enterprise ID that owns the resource.
     * @param objectTypes Optionally filter for specific workflowable types. Defaults to RELEASE and OBSOLETION
     * @param states Optionally filter for specific workflow states like PENDING, RELEASED
     * @param limit The number of items to return in a single API call
     * @param modifiedAfter The earliest modification date of workflowable object to find.
     */
    public enumerateObjectWorkflows(cid: string, objectTypes?: Array<BTAPIWorkflowableType>, states?: Set<string>, limit?: number, modifiedAfter?: Date, _options?: Configuration): Observable<void> {
        return this.enumerateObjectWorkflowsWithHttpInfo(cid, objectTypes, states, limit, modifiedAfter, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Optionally takes a document ID to return all workflows for that document\'s owning company.
     * Get all active workflows for the currently logged in user\'s company.
     * @param documentId 
     */
    public getActiveWorkflowsWithHttpInfo(documentId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getActiveWorkflows(documentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getActiveWorkflowsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Optionally takes a document ID to return all workflows for that document\'s owning company.
     * Get all active workflows for the currently logged in user\'s company.
     * @param documentId 
     */
    public getActiveWorkflows(documentId?: string, _options?: Configuration): Observable<void> {
        return this.getActiveWorkflowsWithHttpInfo(documentId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * * Identities can be users and/or teams.  * For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams.  * Not object- or property-specific.  * Used for delegation and company settings.
     * Get all identities allowed to be approvers on a workflow object.
     * @param companyId 
     * @param q 
     * @param expandTeams 
     * @param includeSelf 
     */
    public getAllowedApproversWithHttpInfo(companyId: string, q?: string, expandTeams?: boolean, includeSelf?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAllowedApprovers(companyId, q, expandTeams, includeSelf, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllowedApproversWithHttpInfo(rsp)));
            }));
    }

    /**
     * * Identities can be users and/or teams.  * For Enterprise accounts, also includes roles and any aliases that contain allowed users/teams.  * Not object- or property-specific.  * Used for delegation and company settings.
     * Get all identities allowed to be approvers on a workflow object.
     * @param companyId 
     * @param q 
     * @param expandTeams 
     * @param includeSelf 
     */
    public getAllowedApprovers(companyId: string, q?: string, expandTeams?: boolean, includeSelf?: boolean, _options?: Configuration): Observable<void> {
        return this.getAllowedApproversWithHttpInfo(companyId, q, expandTeams, includeSelf, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     * Get all audit log entries for a workflowable object.
     * @param objectId 
     */
    public getAuditLogWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getAuditLog(objectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuditLogWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     * Get all audit log entries for a workflowable object.
     * @param objectId 
     */
    public getAuditLog(objectId: string, _options?: Configuration): Observable<void> {
        return this.getAuditLogWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
