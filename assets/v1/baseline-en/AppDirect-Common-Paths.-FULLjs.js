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
			'base-components': 'https://skin.byappdirect.com/portals/common/components/base',
			'boilerplate-module': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate',
			'boilerplate': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/boilerplate',
			'utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils',
			'segment-io': 'https://skin.byappdirect.com/spa/themes/base/js/analytics/segment-io',
			'segment-wrapper': 'https://skin.byappdirect.com/spa/themes/base/js/analytics/segment-wrapper',
			'google-analytics-wrapper': 'https://skin.byappdirect.com/spa/themes/base/js/analytics/google-analytics-wrapper',
			'ad-analytics': 'https://skin.byappdirect.com/spa/themes/base/js/analytics/ad-analytics',
			'url-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/url-utils',
			'date-picker': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/date-picker',
			'date-input': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/date-input',
			'moment-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/moment-utils',
			'bootstrap-datepicker-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/bootstrap-datepicker-utils',
			'price-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/price-utils',
			'locale-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/locale-utils',
			'phone-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/phone-utils',
			'date-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/date-utils',
			'validation-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/validation-utils',
			'i18n': 'https://skin.byappdirect.com/spa/themes/base/js/i18n',
			'common-components': 'https://skin.byappdirect.com/portals/common/components',
			'common-baseObjects': 'https://skin.byappdirect.com/portals/common/baseobjects',
			'common-models': 'https://skin.byappdirect.com/portals/common/models',
			'common-utils': 'https://skin.byappdirect.com/portals/common/utils',
			'app-domains': 'https://skin.byappdirect.com/spa/themes/base/js/common/domains',
			'app-models': 'https://skin.byappdirect.com/spa/themes/base/js/common/models/applications',
			'app-models-core': 'https://skin.byappdirect.com/spa/themes/base/js/common/models/core',
			'forms-models': 'https://skin.byappdirect.com/spa/themes/base/js/common/models/forms',
			'user-models': 'https://skin.byappdirect.com/spa/themes/base/js/common/models/users',
			'app-constants': 'https://skin.byappdirect.com/spa/themes/base/js/common/constants',
			'app-helpers': 'https://skin.byappdirect.com/spa/themes/base/js/common/helpers',
			'spa-themes': 'https://skin.byappdirect.com/spa/themes',
			'spa': 'https://skin.byappdirect.com/spa',
			'cookies': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/cookies',
			'uuid-utils': 'https://skin.byappdirect.com/spa/themes/base/js/boilerplate/utils/uuid-utils',

			// ***************************************************
			// Portal paths
			// (i.e. Account, Developer, Channel, Superuser, etc
			// ***************************************************
			'account': 'https://skin.byappdirect.com/portals/account',
			'channel': 'https://skin.byappdirect.com/portals/channel',
			'superuser': 'https://skin.byappdirect.com/portals/superuser',
			'devcenterjs': 'https://skin.byappdirect.com/themesbase/standard/devcenter/js',
			'devcentertpl': 'https://skin.byappdirect.com/themesbase/standard/devcenter/templates',
			'channelproductsjs': 'https://skin.byappdirect.com/themesbase/standard/channel/products/js',
			'channelproductstpl': 'https://skin.byappdirect.com/themesbase/standard/channel/products/templates',
			'commonproductsjs': 'https://skin.byappdirect.com/themesbase/standard/common/products/js',
			'commonproductstpl': 'https://skin.byappdirect.com/themesbase/standard/common/products/templates',
			'domains': 'https://skin.byappdirect.com/portals/account/apps/domains',
			'groups': 'https://skin.byappdirect.com/portals/account/groups',
			'reseller': 'https://skin.byappdirect.com/portals/reseller',
			'marketplace': 'https://skin.byappdirect.com/portals/marketplace',
			'groupdetails': 'https://skin.byappdirect.com/portals/account/groupdetails',
			'import-manager': 'https://skin.byappdirect.com/portals/superuser/importmanager',
			'importapps': 'https://skin.byappdirect.com/portals/account/importapps',
			'keychain-app': 'https://skin.byappdirect.com/themesbase/standard/keychain',
			'myapps': 'https://skin.byappdirect.com/themesbase/standard/myapps/js',
			'myappsTpl': 'https://skin.byappdirect.com/themesbase/standard/myapps/templates',
			'setupguide': 'https://skin.byappdirect.com/portals/channel/setupguide',
			'leftronic-account-setup': 'https://skin.byappdirect.com/portals/account/leftronic.accountSetup',
			'userdetail': 'https://skin.byappdirect.com/portals/account/userdetail',
			'app-users': 'https://skin.byappdirect.com/portals/account/apps/users',
			'app-voice-connections': 'https://skin.byappdirect.com/portals/account/apps/voiceConnections',
			'common-leads': 'https://skin.byappdirect.com/portals/common/leads',
			'reseller-leads': 'https://skin.byappdirect.com/portals/reseller/leads',
			'channel-leads': 'https://skin.byappdirect.com/portals/channel/leads',
			'channel-customize-app': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/customize/application',
			'channel-customize': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/customize',
			'checkout-custom-attributes': 'https://skin.byappdirect.com/spa/themes/base/js/pages/checkout/custom/attributes',
			'checkout-additional-information': 'https://skin.byappdirect.com/spa/themes/base/js/pages/checkout/additional-information/webapps',
			'platforms': 'https://skin.byappdirect.com/portals/common/platforms',
			'product-versions': 'https://skin.byappdirect.com/portals/common/product-versions',
			'channel-platforms': 'https://skin.byappdirect.com/portals/channel/platforms',
			'dev-platforms': 'https://skin.byappdirect.com/portals/developer/platforms',
			'dev-products': 'https://skin.byappdirect.com/portals/developer/products',
			'cor-rev-shares': 'https://skin.byappdirect.com/portals/corporate/revenue_shares',
			'devices': 'https://skin.byappdirect.com/portals/common/devices',
			'channel-devices': 'https://skin.byappdirect.com/portals/channel/devices',
			'user-devices': 'https://skin.byappdirect.com/portals/account/devices',
			'push-distributions': 'https://skin.byappdirect.com/portals/common/push-distributions',
			'channel-push-distributions': 'https://skin.byappdirect.com/portals/channel/push-distributions',
			'vendor-leads': 'https://skin.byappdirect.com/portals/developer/leads',
			'reseller-common': 'https://skin.byappdirect.com/spa/themes/base/js/pages/reseller/common',
			'reseller-signup': 'https://skin.byappdirect.com/spa/themes/base/js/pages/reseller/signup',
			'reseller-signup-requests': 'https://skin.byappdirect.com/portals/reseller/signup-requests',
			'myappsv2': 'https://skin.byappdirect.com/portals/myapps',
			'custom-attributes': 'https://skin.byappdirect.com/portals/channel/customAttributes',
			'tld-pricing': 'https://skin.byappdirect.com/portals/channel/edit-app/tld-pricing',
			'common-migration-panel': 'https://skin.byappdirect.com/portals/common/migration',
			'webhooks-config': 'https://skin.byappdirect.com/portals/channel/webhooks-config',
			'account-app': 'https://skin.byappdirect.com/spa/themes/base/js/pages/account',
			'account-manage-apps': 'https://skin.byappdirect.com/spa/themes/base/js/pages/account/applications',
			'onboard-csp': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/settings/onboardCSP',
			'pso-bridge': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/settings/psoBridge',
			'pending-order-validation': 'https://skin.byappdirect.com/portals/superuser/pendingOrderValidation',
			'pending-subscription-management': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/pending-subscription-management',
			'channel-settings': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/settings',
			'channel-products': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/products',
			'default-products-catalog': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/products/default-products-catalog',
			'account-dashboard-page': 'https://skin.byappdirect.com/spa/themes/base/js/pages/account/dashboard',
			'account-assign-apps': 'https://skin.byappdirect.com/spa/themes/base/js/pages/account/assign-apps',
			'account-odai': 'https://skin.byappdirect.com/spa/themes/base/js/pages/account/odai-setup',
			'channel-app': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel',
			'channel-bundles': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/bundles',
			'company-details': 'https://skin.byappdirect.com/spa/themes/base/js/pages/company/details',
			'listing-page': 'https://skin.byappdirect.com/spa/themes/base/js/pages/listing',
			'profile-page': 'https://skin.byappdirect.com/spa/themes/base/js/pages/profile',
			'product-line': 'https://skin.byappdirect.com/spa/themes/base/js/pages/product-line',
			'reseller-profile': 'https://skin.byappdirect.com/spa/themes/base/js/pages/reseller/profile',
			'manage-catalog': 'https://skin.byappdirect.com/portals/channel/manage-catalog',
			'manage-sales-catalog': 'https://skin.byappdirect.com/portals/channel/manage-sales-catalog',
			'manage-reseller-catalog': 'https://skin.byappdirect.com/portals/reseller/manage-reseller-catalog',
			'reseller-linking': 'https://skin.byappdirect.com/portals/reseller/linking',
			'roles': 'https://skin.byappdirect.com/portals/channel/roles',
			'common-apiclients-panel': 'https://skin.byappdirect.com/spa/themes/base/js/common/settings/apiclients',
			'apiclients-panel': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/settings/apiclients',
			'reseller-apiclients-panel': 'https://skin.byappdirect.com/spa/themes/base/js/pages/reseller/apiclients',
			'custom-attributes-panel': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/settings/customAttributes',
			'media-sources': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/media-sources',
			'featured-customers': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/featured-customers',
			'user-invite': 'https://skin.byappdirect.com/spa/themes/base/js/common/invitation',
			'repositories': 'https://skin.byappdirect.com/portals/superuser/support/repositories',
			'app-profiles': 'https://skin.byappdirect.com/portals/superuser/support/app-profiles',
			'app-transfer': 'https://skin.byappdirect.com/portals/superuser/support/app-transfer',
			'baas': 'https://skin.byappdirect.com/spa/themes/base/js/pages/baas',
			'quotes': 'https://skin.byappdirect.com/portals/common/quotes',
			'odai': 'https://skin.byappdirect.com/portals/common/odai',
			'order-carts' : 'https://skin.byappdirect.com/portals/common/ordercart',
			'reseller-quotes': 'https://skin.byappdirect.com/spa/themes/base/js/pages/reseller/quotes',
			'reseller-webhooks': 'https://skin.byappdirect.com/spa/themes/base/js/pages/reseller/webhooks',
			'reseller-reconciliation': 'https://skin.byappdirect.com/spa/themes/base/js/pages/reseller/reconciliation',
			'reseller-manager-quotes': 'https://skin.byappdirect.com/spa/themes/base/js/pages/reseller-manager/quotes',
			'quote-edit': 'https://skin.byappdirect.com/portals/common/quote-edit',
			'credits': 'https://skin.byappdirect.com/portals/channel/credits',
			'baas-guide': 'https://skin.byappdirect.com/portals/baas/guide',
			'developer': 'https://skin.byappdirect.com/portals/developer',
			'two-factor-setup-page': 'https://skin.byappdirect.com/spa/themes/base/js/pages/twofactor/setup',
			'two-factor-login-page': 'https://skin.byappdirect.com/spa/themes/base/js/pages/twofactor/login',
			'tc5k': 'https://skin.byappdirect.com/spa/themes/base/js/common/tc5k',
			'common-customer-notifications': 'https://skin.byappdirect.com/portals/common/customer-notifications',
			'channel-customer-notifications': 'https://skin.byappdirect.com/portals/channel/customer-notifications',
			'developer-customer-notifications': 'https://skin.byappdirect.com/portals/developer/customer-notifications',
			'developer-webhooks': 'https://skin.byappdirect.com/portals/developer/webhooks-dev',
			'developer-products-edit-integration-authentication': 'https://skin.byappdirect.com/spa/themes/base/js/pages/developer/products/edit/integration/authentication',
			'supersupport-customer-notifications': 'https://skin.byappdirect.com/portals/superuser/support/customer-notifications',
			'customer-notification-edit': 'https://skin.byappdirect.com/portals/common/customer-notification-edit',
			'partner-integrations': 'https://skin.byappdirect.com/spa/themes/base/js/pages/integrations',
			'customizer': 'https://skin.byappdirect.com/spa/themes/base/js/pages/customizer',
			'su-sso': 'https://skin.byappdirect.com/portals/superuser/sso',
			'createusers': 'https://skin.byappdirect.com/portals/account/createusers',
			'customers': 'https://skin.byappdirect.com/themesbase/standard/cms/customers',
			'channel-marketplace': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/marketplace',
			'channel-quotes': 'https://skin.byappdirect.com/spa/themes/base/js/pages/channel/quotes',
			'payout-configuration': 'https://skin.byappdirect.com/spa/themes/base/js/pages/payout',

			// ******************
			// Marketplace paths
			// ******************
			'backbone-path': 'https://skin.byappdirect.com/common/js/backbonemvc',
			'dashboard': 'https://skin.byappdirect.com/themesbase/standard/dashboard',
			'checkout': 'https://skin.byappdirect.com/themesbase/standard/checkout',
			'designerTpl': 'https://skin.byappdirect.com/themesbase/standard/designer/templates',
			'paymentGateways': 'https://skin.byappdirect.com/portals/developer/settings/paymentGateways',
			'listing': 'https://skin.byappdirect.com/themesbase/standard/listing/js',
			'listingTpl': 'https://skin.byappdirect.com/themesbase/standard/listing/templates',
			'profile': 'https://skin.byappdirect.com/themesbase/standard/profile/js',
			'profileTpl': 'https://skin.byappdirect.com/themesbase/standard/profile/templates',
			'purchase': 'https://skin.byappdirect.com/themesbase/standard/purchase',
			'purchasejs': 'https://skin.byappdirect.com/themesbase/standard/purchase/js',
			'purchaseTpl': 'https://skin.byappdirect.com/themesbase/standard/purchase/templates',
			'widgetjs': 'https://skin.byappdirect.com/themesbase/standard/widgets/js',
			'widgetTpl': 'https://skin.byappdirect.com/themesbase/standard/widgets/templates',
			'models': 'https://skin.byappdirect.com/themesbase/standard/models',
			'lib': 'https://skin.byappdirect.com/themesbase/standard/lib',

			// ******************
			// Wicket-panel paths
			// *******************
			'wicketpanels': 'https://skin.byappdirect.com/wicket-panels/js',
			'wicketpanelsTpl': 'https://skin.byappdirect.com/wicket-panels/templates',

			// **************************
			// Third-party software paths
			// **************************
			'ace': 'https://skin.byappdirect.com/common/js/vendor/ace/src-min',
			'backbone': 'common/js/common/amdshims/backbone',
			'backbone-forms': 'https://skin.byappdirect.com/common/js/vendor/backbone-forms/distribution.amd/backbone-forms',
			'moment': 'common/js/common/amdshims/moment',
			'moment-with-locales': 'common/js/common/amdshims/moment-with-locales',
			'backgrid': 'https://skin.byappdirect.com/common/js/vendor/backgrid/lib/backgrid',
			'common-vendor': 'https://skin.byappdirect.com/common/js/vendor',
			'common-thirdparty': 'https://skin.byappdirect.com/common/js/thirdparty',
			'jquery': 'https://skin.byappdirect.com/common/js/common/amdshims/jquery',
			'text': 'https://skin.byappdirect.com/common/js/vendor/text/text',
			'underscore': 'common/js/vendor/underscore/underscore',
			'node-modules': 'https://skin.byappdirect.com/common/js/node-modules',

			// ****************
			// common js files
			// ****************
			'analytics': 'https://skin.byappdirect.com/common/js/analytics',
			'baseIcons': 'https://skin.byappdirect.com/common/js/common/baseIcons',
			'BasicObject': 'https://skin.byappdirect.com/common/js/common/BasicObject',
			'common': 'https://skin.byappdirect.com/common/js/common',
			'shams': 'https://skin.byappdirect.com/common/js/shams',
			'local-storage': 'https://skin.byappdirect.com/common/js/shams/local-storage',
			'credit-card': 'https://skin.byappdirect.com/common/js/common/creditcard',
			'functions': 'https://skin.byappdirect.com/common/js/common/functions',
			'ga-v1-tracking': 'https://skin.byappdirect.com/common/js/common/ga-v1-tracking',
			'GoogleCheckoutAccountPage': 'https://skin.byappdirect.com/common/js/common/GoogleCheckoutAccountPage',
			'HtmlEditor': 'https://skin.byappdirect.com/common/js/common/HtmlEditor',
			'icons': 'https://skin.byappdirect.com/common/js/common/icons',
			'noconflict-bootstrap-tooltip': 'https://skin.byappdirect.com/common/js/common/noconflict-bootstrap-tooltip',
			'packs-path': 'https://skin.byappdirect.com/common/js/packages',
			'purchase-analytics': 'https://skin.byappdirect.com/common/js/analytics/panels/purchase',
			'Server': 'https://skin.byappdirect.com/common/js/common/Server',
			'sso': 'https://skin.byappdirect.com/common/js/common/sso',
			'templates.amd': 'https://skin.byappdirect.com/common/js/common/templates.amd',
			'tooltips': 'https://skin.byappdirect.com/common/js/common/tooltips',
			'WicketFixes': 'https://skin.byappdirect.com/common/js/common/WicketFixes',
			'kraken': 'https://skin.byappdirect.com/common/js/node-modules/kraken',
			'tinyMCE': 'https://skin.byappdirect.com/common/js/thirdparty/tiny_mce/tiny_mce_src',

			// **************
			// Partner paths
			// **************
			'integration': 'https://skin.byappdirect.com/portals/integration',
			'tbill': 'https://skin.byappdirect.com/portals/integration/tbill',
			'bulk': 'https://skin.byappdirect.com/portals/integration/bulkMgmt/js',
			'bulkTpl': 'https://skin.byappdirect.com/portals/integration/bulkMgmt/templates'
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
