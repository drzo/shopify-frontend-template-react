(function() {
	'use strict';
	var config = {
		paths: {
			// ************************************************************************
			// Resource.java and ResourceLoader.java help load our most used libraries.
			//
			// Wicket loads common-pack.js via the header to all pages:
			// jQuery, underscore
			//
			// Wicket can selectively load backbone-pack.js via the footer:
			// Backbone, Marionette
			// ************************************************************************

			// ************************
			// Common components paths
			// ************************
			'base-components': './portals/common/components/base',
			'boilerplate-module': './spa/themes/base/js/boilerplate',
			'boilerplate': './spa/themes/base/js/boilerplate/boilerplate',
			'utils': './spa/themes/base/js/boilerplate/utils',
			'segment-io': './spa/themes/base/js/analytics/segment-io',
			'segment-wrapper': './spa/themes/base/js/analytics/segment-wrapper',
			'google-analytics-wrapper': './spa/themes/base/js/analytics/google-analytics-wrapper',
			'ad-analytics': './spa/themes/base/js/analytics/ad-analytics',
			'url-utils': './spa/themes/base/js/boilerplate/utils/url-utils',
			'date-picker': './spa/themes/base/js/boilerplate/utils/date-picker',
			'date-input': './spa/themes/base/js/boilerplate/utils/date-input',
			'moment-utils': './spa/themes/base/js/boilerplate/utils/moment-utils',
			'bootstrap-datepicker-utils': './spa/themes/base/js/boilerplate/utils/bootstrap-datepicker-utils',
			'price-utils': './spa/themes/base/js/boilerplate/utils/price-utils',
			'locale-utils': './spa/themes/base/js/boilerplate/utils/locale-utils',
			'phone-utils': './spa/themes/base/js/boilerplate/utils/phone-utils',
			'date-utils': './spa/themes/base/js/boilerplate/utils/date-utils',
			'validation-utils': './spa/themes/base/js/boilerplate/utils/validation-utils',
			'i18n': './spa/themes/base/js/i18n',
			'common-components': './portals/common/components',
			'common-baseObjects': './portals/common/baseobjects',
			'common-models': './portals/common/models',
			'common-utils': './portals/common/utils',
			'app-domains': './spa/themes/base/js/common/domains',
			'app-models': './spa/themes/base/js/common/models/applications',
			'app-models-core': './spa/themes/base/js/common/models/core',
			'forms-models': './spa/themes/base/js/common/models/forms',
			'user-models': './spa/themes/base/js/common/models/users',
			'app-constants': './spa/themes/base/js/common/constants',
			'app-helpers': './spa/themes/base/js/common/helpers',
			'spa-themes': './spa/themes',
			'spa': './spa',
			'cookies': './spa/themes/base/js/boilerplate/utils/cookies',
			'uuid-utils': './spa/themes/base/js/boilerplate/utils/uuid-utils',

			// ***************************************************
			// Portal paths
			// (i.e. Account, Developer, Channel, Superuser, etc
			// ***************************************************
			'account': './portals/account',
			'channel': './portals/channel',
			'superuser': './portals/superuser',
			'devcenterjs': './themesbase/standard/devcenter/js',
			'devcentertpl': './themesbase/standard/devcenter/templates',
			'channelproductsjs': './themesbase/standard/channel/products/js',
			'channelproductstpl': './themesbase/standard/channel/products/templates',
			'commonproductsjs': './themesbase/standard/common/products/js',
			'commonproductstpl': './themesbase/standard/common/products/templates',
			'domains': './portals/account/apps/domains',
			'groups': './portals/account/groups',
			'reseller': './portals/reseller',
			'marketplace': './portals/marketplace',
			'groupdetails': './portals/account/groupdetails',
			'import-manager': './portals/superuser/importmanager',
			'importapps': './portals/account/importapps',
			'keychain-app': './themesbase/standard/keychain',
			'myapps': './themesbase/standard/myapps/js',
			'myappsTpl': './themesbase/standard/myapps/templates',
			'setupguide': './portals/channel/setupguide',
			'leftronic-account-setup': './portals/account/leftronic.accountSetup',
			'userdetail': './portals/account/userdetail',
			'app-users': './portals/account/apps/users',
			'app-voice-connections': './portals/account/apps/voiceConnections',
			'common-leads': './portals/common/leads',
			'reseller-leads': './portals/reseller/leads',
			'channel-leads': './portals/channel/leads',
			'channel-customize-app': './spa/themes/base/js/pages/channel/customize/application',
			'channel-customize': './spa/themes/base/js/pages/channel/customize',
			'checkout-custom-attributes': './spa/themes/base/js/pages/checkout/custom/attributes',
			'checkout-additional-information': './spa/themes/base/js/pages/checkout/additional-information/webapps',
			'platforms': './portals/common/platforms',
			'product-versions': './portals/common/product-versions',
			'channel-platforms': './portals/channel/platforms',
			'dev-platforms': './portals/developer/platforms',
			'dev-products': './portals/developer/products',
			'cor-rev-shares': './portals/corporate/revenue_shares',
			'devices': './portals/common/devices',
			'channel-devices': './portals/channel/devices',
			'user-devices': './portals/account/devices',
			'push-distributions': './portals/common/push-distributions',
			'channel-push-distributions': './portals/channel/push-distributions',
			'vendor-leads': './portals/developer/leads',
			'reseller-common': './spa/themes/base/js/pages/reseller/common',
			'reseller-signup': './spa/themes/base/js/pages/reseller/signup',
			'reseller-signup-requests': './portals/reseller/signup-requests',
			'myappsv2': './portals/myapps',
			'custom-attributes': './portals/channel/customAttributes',
			'tld-pricing': './portals/channel/edit-app/tld-pricing',
			'common-migration-panel': './portals/common/migration',
			'webhooks-config': './portals/channel/webhooks-config',
			'account-app': './spa/themes/base/js/pages/account',
			'account-manage-apps': './spa/themes/base/js/pages/account/applications',
			'onboard-csp': './spa/themes/base/js/pages/channel/settings/onboardCSP',
			'pso-bridge': './spa/themes/base/js/pages/channel/settings/psoBridge',
			'pending-order-validation': './portals/superuser/pendingOrderValidation',
			'pending-subscription-management': './spa/themes/base/js/pages/channel/pending-subscription-management',
			'channel-settings': './spa/themes/base/js/pages/channel/settings',
			'channel-products': './spa/themes/base/js/pages/channel/products',
			'default-products-catalog': './spa/themes/base/js/pages/channel/products/default-products-catalog',
			'account-dashboard-page': './spa/themes/base/js/pages/account/dashboard',
			'account-assign-apps': './spa/themes/base/js/pages/account/assign-apps',
			'account-odai': './spa/themes/base/js/pages/account/odai-setup',
			'channel-app': './spa/themes/base/js/pages/channel',
			'channel-bundles': './spa/themes/base/js/pages/channel/bundles',
			'company-details': './spa/themes/base/js/pages/company/details',
			'listing-page': './spa/themes/base/js/pages/listing',
			'profile-page': './spa/themes/base/js/pages/profile',
			'product-line': './spa/themes/base/js/pages/product-line',
			'reseller-profile': './spa/themes/base/js/pages/reseller/profile',
			'manage-catalog': './portals/channel/manage-catalog',
			'manage-sales-catalog': './portals/channel/manage-sales-catalog',
			'manage-reseller-catalog': './portals/reseller/manage-reseller-catalog',
			'reseller-linking': './portals/reseller/linking',
			'roles': './portals/channel/roles',
			'common-apiclients-panel': './spa/themes/base/js/common/settings/apiclients',
			'apiclients-panel': './spa/themes/base/js/pages/channel/settings/apiclients',
			'reseller-apiclients-panel': './spa/themes/base/js/pages/reseller/apiclients',
			'custom-attributes-panel': './spa/themes/base/js/pages/channel/settings/customAttributes',
			'media-sources': './spa/themes/base/js/pages/channel/media-sources',
			'featured-customers': './spa/themes/base/js/pages/channel/featured-customers',
			'user-invite': './spa/themes/base/js/common/invitation',
			'repositories': './portals/superuser/support/repositories',
			'app-profiles': './portals/superuser/support/app-profiles',
			'app-transfer': './portals/superuser/support/app-transfer',
			'baas': './spa/themes/base/js/pages/baas',
			'quotes': './portals/common/quotes',
			'odai': './portals/common/odai',
			'order-carts' : './portals/common/ordercart',
			'reseller-quotes': './spa/themes/base/js/pages/reseller/quotes',
			'reseller-webhooks': './spa/themes/base/js/pages/reseller/webhooks',
			'reseller-reconciliation': './spa/themes/base/js/pages/reseller/reconciliation',
			'reseller-manager-quotes': './spa/themes/base/js/pages/reseller-manager/quotes',
			'quote-edit': './portals/common/quote-edit',
			'credits': './portals/channel/credits',
			'baas-guide': './portals/baas/guide',
			'developer': './portals/developer',
			'two-factor-setup-page': './spa/themes/base/js/pages/twofactor/setup',
			'two-factor-login-page': './spa/themes/base/js/pages/twofactor/login',
			'tc5k': './spa/themes/base/js/common/tc5k',
			'common-customer-notifications': './portals/common/customer-notifications',
			'channel-customer-notifications': './portals/channel/customer-notifications',
			'developer-customer-notifications': './portals/developer/customer-notifications',
			'developer-webhooks': './portals/developer/webhooks-dev',
			'developer-products-edit-integration-authentication': './spa/themes/base/js/pages/developer/products/edit/integration/authentication',
			'supersupport-customer-notifications': './portals/superuser/support/customer-notifications',
			'customer-notification-edit': './portals/common/customer-notification-edit',
			'partner-integrations': './spa/themes/base/js/pages/integrations',
			'customizer': './spa/themes/base/js/pages/customizer',
			'su-sso': './portals/superuser/sso',
			'createusers': './portals/account/createusers',
			'customers': './themesbase/standard/cms/customers',
			'channel-marketplace': './spa/themes/base/js/pages/channel/marketplace',
			'channel-quotes': './spa/themes/base/js/pages/channel/quotes',
			'payout-configuration': './spa/themes/base/js/pages/payout',

			// ******************
			// Marketplace paths
			// ******************
			'backbone-path': './common/js/backbonemvc',
			'dashboard': './themesbase/standard/dashboard',
			'checkout': './themesbase/standard/checkout',
			'designerTpl': './themesbase/standard/designer/templates',
			'paymentGateways': './portals/developer/settings/paymentGateways',
			'listing': './themesbase/standard/listing/js',
			'listingTpl': './themesbase/standard/listing/templates',
			'profile': './themesbase/standard/profile/js',
			'profileTpl': './themesbase/standard/profile/templates',
			'purchase': './themesbase/standard/purchase',
			'purchasejs': './themesbase/standard/purchase/js',
			'purchaseTpl': './themesbase/standard/purchase/templates',
			'widgetjs': './themesbase/standard/widgets/js',
			'widgetTpl': './themesbase/standard/widgets/templates',
			'models': './themesbase/standard/models',
			'lib': './themesbase/standard/lib',

			// ******************
			// Wicket-panel paths
			// *******************
			'wicketpanels': './wicket-panels/js',
			'wicketpanelsTpl': './wicket-panels/templates',

			// **************************
			// Third-party software paths
			// **************************
			'ace': './common/js/vendor/ace/src-min',
			'backbone': 'common/js/common/amdshims/backbone',
			'backbone-forms': './common/js/vendor/backbone-forms/distribution.amd/backbone-forms',
			'moment': 'common/js/common/amdshims/moment',
			'moment-with-locales': 'common/js/common/amdshims/moment-with-locales',
			'backgrid': './common/js/vendor/backgrid/lib/backgrid',
			'common-vendor': './common/js/vendor',
			'common-thirdparty': './common/js/thirdparty',
			'jquery': './common/js/common/amdshims/jquery',
			'text': './common/js/vendor/text/text',
			'underscore': 'common/js/vendor/underscore/underscore',
			'node-modules': './common/js/node-modules',

			// ****************
			// common js files
			// ****************
			'analytics': './common/js/analytics',
			'baseIcons': './common/js/common/baseIcons',
			'BasicObject': './common/js/common/BasicObject',
			'common': './common/js/common',
			'shams': './common/js/shams',
			'local-storage': './common/js/shams/local-storage',
			'credit-card': './common/js/common/creditcard',
			'functions': './common/js/common/functions',
			'ga-v1-tracking': './common/js/common/ga-v1-tracking',
			'GoogleCheckoutAccountPage': './common/js/common/GoogleCheckoutAccountPage',
			'HtmlEditor': './common/js/common/HtmlEditor',
			'icons': './common/js/common/icons',
			'noconflict-bootstrap-tooltip': './common/js/common/noconflict-bootstrap-tooltip',
			'packs-path': './common/js/packages',
			'purchase-analytics': './common/js/analytics/panels/purchase',
			'Server': './common/js/common/Server',
			'sso': './common/js/common/sso',
			'templates.amd': './common/js/common/templates.amd',
			'tooltips': './common/js/common/tooltips',
			'WicketFixes': './common/js/common/WicketFixes',
			'kraken': './common/js/node-modules/kraken',
			'tinyMCE': './common/js/thirdparty/tiny_mce/tiny_mce_src',

			// **************
			// Partner paths
			// **************
			'integration': './portals/integration',
			'tbill': './portals/integration/tbill',
			'bulk': './portals/integration/bulkMgmt/js',
			'bulkTpl': './portals/integration/bulkMgmt/templates'
		},
		shim: {
			'packs-path/common-pack': ['common-vendor/requirejs/require', 'common/debug'],
			backgrid: {
				exports: 'Backgrid'
			},
			backbone: {
				exports: 'Backbone'
			},
			tinyMCE: {
				exports: 'tinyMCE'
			}
		}
	};
	if (typeof module !== 'undefined') {
		module.exports = config;
	} else if (typeof require.config !== 'undefined') {
		require.config(config);
	}
})();
