/**
 * Channel Model
 *
 * Reads the CHANNEL_SETTINGS object injected in the page by wicket
 * @module boilerplate-module/models/channel
 */
define([
	'utils/window-sync',
	'price-utils',
	'boilerplate-module/models/capability'
], function(windowSync, PriceUtils, Capability) {
	'use strict';

	return Backbone.Model.extend({
		defaults: {
			guideProgresses: {}
		},

		sync: windowSync,
		globalVar: 'CHANNEL_SETTINGS',
		url: '/api/channel/v1/settings',

		isBaas: function() {
			return !!this.get('baas');
		},

		isSelfserve: function() {
			return !!this.get('accountEdition');
		},

		isShowProfiles: function() {
			return !!this.get('showProfiles');
		},

		isEnableMySettingsUnderMyProfile: function() {
			return !!this.get('enableMySettingsUnderMyProfile');
		},

		hideSignupLinks: function() {
			return !!this.get('hideSignupLinks');
		},

		hasCapability: function(capability) {
			return _(this.get('capabilities')).contains(capability);
		},

		hasCapabilities: function(capabilities) {
			return _.size(_.intersection(capabilities, this.get('capabilities'))) === _.size(capabilities);
		},

		hasCompletedSetupGuide: function(guideType) {
			if (guideType.type === 'CHANNEL' && !!this.get('walkMeEnabled')) {
				return true;
			}
			return this.get('guideProgresses')[guideType.type] >= guideType.maxSteps;
		},

		isOneOfEditions: function() {
			return _.contains(arguments, this.get('accountEdition'));
		},

		hasPurchaseCapability: function() {
			return this.hasCapability(Capability.PRODUCT_PURCHASE);
		},

		hasAssistedSalesEnabled: function() {
			return !!this.get('assistedSalesEnabled');
		},

		hasSalesOpportunitiesEnabled: function() {
			return !!this.get('salesOpportunitiesEnabled');
		},

		hasResellerTermsUrl: function() {
			return !!this.get('resellerTermsUrl');
		},

		hasResellerLeadsTermsUrl: function() {
			return !!this.get('resellerLeadsTermsUrl');
		},

		hasSalesLeadsEnabled: function() {
			return !!this.get('salesLeadsEnabled');
		},

		isResellerEnabled: function() {
			return !!this.hasCapability(Capability.RESELLER);
		},

		isProductTypeSupported: function(productType) {
			return _.contains(this.get('supportedProductTypes'), productType);
		},

		isAccountPaid: function() {
			return this.get('accountStatus') === 'PAID';
		},

		hasResellerSignupEnabled: function() {
			return !!this.hasCapability(Capability.RESELLER_SIGNUP);
		},

		/**
		 * @return array of objects corresponding to marketplace currencies. Each object has properties:
		 * - tla: {String} corresponds to currency passed in
		 * - localizedString: {String} localized string for currency if it's valid. Otherwise, same as currency value
		*/
		getCurrencyStrings: function() {
			return PriceUtils.getCurrencyStrings(this.get('currencies'));
		},

		isBetaWholesaleQuotesEnabled: function() {
			return !!this.get('betaWholesaleQuotesEnabled');
		},

		isResellerProfilesEnabled: function() {
			return !!this.get('resellerProfilesEnabled');
		},

		isBetaResellerProfileV2Enabled: function() {
			return !!this.get('betaResellerProfileV2Enabled');
		},

		isProductVersionSupportEnabled: function() {
			return !!this.get('productVersionsEnabled');
		},

		isExportReconciliationLinesEnabled: function() {
			return !!this.get('exportReconciliationLinesEnabled');
		},

		isBetaAppleDepEnabled: function() {
			return !!this.get('betaAppleDepEnabled');
		},

		isBetaLeadToOrderMultiProductEnabled: function() {
			return !!this.get('betaLeadToOrderMultiProductEnabled');
		},

		isBetaReferralCompaniesEnabled: function() {
			return !!this.get('betaReferralCompaniesEnabled');
		},

		isResellerInvoiceTemplatesEnabled: function() {
			return !!this.get('resellerInvoiceTemplatesEnabled');
		},

		isDocumentBuilderEnabledForReseller: function() {
			return !!this.get('documentBuilderEnabledForReseller');
		},

		isDocumentBuilderEnabled: function() {
			return !!this.get('documentBuilderEnabled');
		},

		isResellerInvoiceSettingsEnabled: function() {
			return !!this.get('resellerInvoiceSettingsEnabled');
		},

		isQuoteConfiguredForResellers: function() {
			return !!this.get('quoteConfiguredForResellers');
		},

		isBetaResellerDashboardEnabled: function() {
			return !!this.get('betaResellerDashboardEnabled');
		},

		isBetaPurchaseSetupEnabled: function() {
			return !!this.get('betaPurchaseSetupEnabled');
		},

		isBetaOpportunitiesEnabled: function() {
			return !!this.get('betaOpportunitiesEnabled');
		},

		isManagePaymentsOnBehalfOf: function() {
			return !!this.get('managePaymentsOfBehalfOfEnabled');
		},

		isBetaShippingSettingsEnabled: function() {
			return !!this.get('betaShippingSettingsEnabled');
		},

		isInventorySyncEnabled: function() {
			return !!this.get('inventorySyncEnabled');
		},

		isHidePricingsEnabledFromUnauthenticatedUser: function() {
			return ((this.get('hidePricingsFromUnauthenticatedUserEnabled')) && (window.UserInfo === null));
		},

		isMeteredUsageV2Enabled: function() {
			return !!this.get('meteredUsageV2Enabled');
		},

		isManageCompanyOnBehalfOf: function() {
			return !!this.get('manageCompanyOnBehalfOf');
		},

		isSaveExternalCompanyIdOnCompanyCreation: function() {
			return !!this.get('saveExternalCompanyIdOnCompanyCreation');
		},

		isShowCompanyExternalIdOnList: function() {
			return !!this.get('showCompanyExternalIdOnList');
		},

		isCompanyNotesEnabled: function() {
			return !!this.get('companyNotesEnabled');
		},

		isFulfillmentActionsEnabled: function() {
			return !!this.get('fulfillmentActionsEnabled');
		},

		isAutomatedFulfillmentEnabled: function() {
			return !!this.get('automatedFulfillmentEnabled');
		},

		isOffOrderChargeEnabled: function() {
			return !!this.get('offOrderChargeEnabled');
		},

		isShowWholesalePriceForMarketplaceEnabled: function () {
			return !!this.get('showWholesalePriceForMarketplace');
		},

		canEnableSSRMigrationCompanyAccess : function () {
			return !!this.get('canEnableSSRMigrationCompanyAccess');
		},

		isProviderQuotesEnabled: function () {
			return !!this.get('providerQuotesEnabled');
		},

		isEnableDomainVerification: function() {
			return !!this.get('enableDomainVerification');
		},

		isResellerPurchaseUIEnabled: function() {
			return !!this.get('resellerPurchaseUIEnabled');
		},

		isPaymentsHandledFullyOffPlatformEnabled: function() {
			return this.get('paymentsHandledFullyOffPlatform') && this.get('usePaymentsFramework');
		},

		isPaymentsHandledFullyOffPlatformDisabled: function() {
			return !this.isPaymentsHandledFullyOffPlatformEnabled();
		},

		isAlwaysUseManualPaymentForCustomerOrdersEnabled: function() {
			return this.get('alwaysUseManualPaymentForCustomerOrders');
		},

		isAlwaysUseManualPaymentForCustomerOrdersDisabled: function() {
			return !this.isAlwaysUseManualPaymentForCustomerOrdersEnabled();
		},

		showBillingDetailsForCustomerOrders: function() {
			return this.collectBillingAddressForOffPlatformPaymentMethodEnabled()
				|| (this.isPaymentsHandledFullyOffPlatformDisabled() && this.isAlwaysUseManualPaymentForCustomerOrdersDisabled());
		},

		collectBillingAddressForOffPlatformPaymentMethodEnabled: function() {
			return this.get('collectBillingAddressForOffPlatformPaymentMethodEnabled')
				&& (this.isPaymentsHandledFullyOffPlatformEnabled() || this.isAlwaysUseManualPaymentForCustomerOrdersEnabled());
		},

		/**
		 * Patches a given set of fields from the channel model. Since the channel model is pretty huge,
		 * the API supports a list of key / value changes, instead of the traditional object format. It
		 * also only supports a limited subset of all the available channel fields.
		 * @param  {String[]} fields The object keys to update
		 * @return {Promise}
		 */
		patch: function(fields) {
			if (!fields) {
				return $.Deferred().resolve();
			}

			if (!_.isArray(fields)) {
				fields = [fields];
			}

			return this.sync('patch', this, {
				attrs: _(this.pick(fields)).map(function(value, key) {
					return {
						setting: key,
						value: value
					};
				})
			});
		}
	}, {
		fromBootstrap: function() {
			return new this(window.CHANNEL_SETTINGS);
		}
	});
});
