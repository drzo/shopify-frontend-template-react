/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ({

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_to_figma_1 = __webpack_require__(118);
var layers = html_to_figma_1.htmlToFigma("body", location.hash.includes("useFrames=true"));
var json = JSON.stringify({ layers: layers });
var blob = new Blob([json], {
    type: "application/json",
});
var link = document.createElement("a");
link.setAttribute("href", URL.createObjectURL(blob));
link.setAttribute("download", "page.figma.json");
document.body.appendChild(link);
link.click();
document.body.removeChild(link);


/***/ }),

/***/ 118:
/***/ (function(module, exports) {

exports["htmlToFigma"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/dimensions.ts
function getDirectionMostOfElements(direction, elements) {
    if (elements.length === 1) {
        return elements[0];
    }
    return elements.reduce((memo, value) => {
        if (!memo) {
            return value;
        }
        const valueDirection = getBoundingClientRect(value)[direction];
        const memoDirection = getBoundingClientRect(memo)[direction];
        if (direction === "left" || direction === "top") {
            if (valueDirection < memoDirection) {
                return value;
            }
        }
        else {
            if (valueDirection > memoDirection) {
                return value;
            }
        }
        return memo;
    }, null);
}
function getAggregateRectOfElements(elements) {
    if (!elements.length) {
        return null;
    }
    const { top } = getBoundingClientRect(getDirectionMostOfElements("top", elements));
    const { left } = getBoundingClientRect(getDirectionMostOfElements("left", elements));
    const { bottom } = getBoundingClientRect(getDirectionMostOfElements("bottom", elements));
    const { right } = getBoundingClientRect(getDirectionMostOfElements("right", elements));
    const width = right - left;
    const height = bottom - top;
    return {
        top,
        left,
        bottom,
        right,
        width,
        height,
    };
}
function getBoundingClientRect(el) {
    const computed = getComputedStyle(el);
    const display = computed.display;
    if (display.includes("inline") && el.children.length) {
        const elRect = el.getBoundingClientRect();
        const aggregateRect = getAggregateRectOfElements(Array.from(el.children));
        if (elRect.width > aggregateRect.width) {
            return Object.assign(Object.assign({}, aggregateRect), { width: elRect.width, left: elRect.left, right: elRect.right });
        }
        return aggregateRect;
    }
    return el.getBoundingClientRect();
}

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/image.ts
const getImagePaintWithUrl = ({ computedStyle, el, }) => {
    if (el instanceof SVGSVGElement) {
        const url = `data:image/svg+xml,${encodeURIComponent(el.outerHTML.replace(/\s+/g, " "))}`;
        return {
            url,
            type: "IMAGE",
            // TODO: object fit, position
            scaleMode: "FILL",
            imageHash: null,
        };
    }
    else {
        const baseImagePaint = {
            type: "IMAGE",
            // TODO: object fit, position
            scaleMode: computedStyle.objectFit === "contain" ? "FIT" : "FILL",
            imageHash: null,
        };
        if (el instanceof HTMLImageElement) {
            // we use `currentSrc` instead of `src` as that will be the accurate value in dynamic contexts:
            // when the img is a child of a picture element, or it has `sizes`/`srcSet` attributes, etc.
            const url = el.currentSrc;
            if (url) {
                return Object.assign({ url }, baseImagePaint);
            }
        }
        else if (el instanceof HTMLVideoElement) {
            const url = el.poster;
            if (url) {
                return Object.assign({ url }, baseImagePaint);
            }
        }
    }
    // can this be true _and_ one of the previous IFs?
    // i.e. could an element have a computed bg image and be an SVG/img/picture/video element?
    // probably not, we can likely avoid returning this fill _and_ the previous ones.
    // TO-DO: what happens if this is in the fills array, along with something else e.g. an img?
    if (computedStyle.backgroundImage &&
        computedStyle.backgroundImage !== "none") {
        const urlMatch = computedStyle.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
        const url = urlMatch === null || urlMatch === void 0 ? void 0 : urlMatch[1];
        if (url) {
            return {
                url,
                type: "IMAGE",
                // TODO: background size, position
                scaleMode: computedStyle.backgroundSize === "contain" ? "FIT" : "FILL",
                imageHash: null,
            };
        }
    }
    return undefined;
};

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/nodes.ts
const hasChildren = (node) => node && Array.isArray(node.children);
function traverse(layer, cb, parent) {
    if (layer) {
        cb(layer, parent);
        if (hasChildren(layer)) {
            layer.children.forEach((child) => traverse(child, cb, layer));
        }
    }
}
function textNodesUnder(el) {
    let n = null;
    const a = [];
    const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    while ((n = walk.nextNode())) {
        a.push(n);
    }
    return a;
}
function isHidden(element) {
    let el = element;
    do {
        const computed = getComputedStyle(el);
        if (
        // computed.opacity === '0' ||
        computed.display === "none" ||
            computed.visibility === "hidden") {
            return true;
        }
        // Some sites hide things by having overflow: hidden and height: 0, e.g. dropdown menus that animate height in
        if (computed.overflow !== "visible" &&
            el.getBoundingClientRect().height < 1) {
            return true;
        }
    } while ((el = el.parentElement));
    return false;
}
function getParents(node) {
    let el = node instanceof Node && node.nodeType === Node.TEXT_NODE
        ? node.parentElement
        : node;
    const parents = [];
    while (el && (el = el.parentElement)) {
        parents.push(el);
    }
    return parents;
}
function getDepth(node) {
    return getParents(node).length;
}

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/object.ts
function size(obj) {
    return Object.keys(obj).length;
}
const fastClone = (data) => typeof data === "symbol" ? null : JSON.parse(JSON.stringify(data));

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/parsers.ts
const parseUnits = (str) => {
    if (!str) {
        return null;
    }
    const match = str.match(/([\d\.]+)px/);
    const val = match === null || match === void 0 ? void 0 : match[1];
    if (val) {
        return {
            unit: "PIXELS",
            value: parseFloat(val),
        };
    }
    return null;
};
function getRgb(colorString) {
    if (!colorString) {
        return null;
    }
    const [_1, r, g, b, _2, a] = (colorString.match(/rgba?\(([\d\.]+), ([\d\.]+), ([\d\.]+)(, ([\d\.]+))?\)/) || []);
    const none = a && parseFloat(a) === 0;
    if (r && g && b && !none) {
        return {
            r: parseInt(r) / 255,
            g: parseInt(g) / 255,
            b: parseInt(b) / 255,
            a: a ? parseFloat(a) : 1,
        };
    }
    return null;
}
const LENGTH_REG = /^[0-9]+[a-zA-Z%]+?$/;
const toNum = (v) => {
    // if (!/px$/.test(v) && v !== '0') return v;
    if (!/px$/.test(v) && v !== "0")
        return 0;
    const n = parseFloat(v);
    // return !isNaN(n) ? n : v;
    return !isNaN(n) ? n : 0;
};
const isLength = (v) => v === "0" || LENGTH_REG.test(v);
const parseBoxShadowStr = (str) => {
    // TODO: this is broken for multiple box shadows
    if (str.startsWith("rgb")) {
        // Werid computed style thing that puts the color in the front not back
        const colorMatch = str.match(/(rgba?\(.+?\))(.+)/);
        if (colorMatch) {
            str = (colorMatch[2] + " " + colorMatch[1]).trim();
        }
    }
    const PARTS_REG = /\s(?![^(]*\))/;
    const parts = str.split(PARTS_REG);
    const inset = parts.includes("inset");
    const last = parts.slice(-1)[0];
    const color = !isLength(last) ? last : "rgba(0, 0, 0, 1)";
    const nums = parts
        .filter((n) => n !== "inset")
        .filter((n) => n !== color)
        .map(toNum);
    const [offsetX, offsetY, blurRadius, spreadRadius] = nums;
    return {
        inset,
        offsetX,
        offsetY,
        blurRadius,
        spreadRadius,
        color,
    };
};

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/styles.ts


function setData(node, key, value) {
    if (!node.data) {
        node.data = {};
    }
    node.data[key] = value;
}
const list = [
    "opacity",
    "backgroundColor",
    "border",
    "borderTop",
    "borderLeft",
    "borderRight",
    "borderBottom",
    "borderRadius",
    "backgroundImage",
    "borderColor",
    "boxShadow",
];
function getAppliedComputedStyles(element, pseudo) {
    if (!(element instanceof HTMLElement || element instanceof SVGElement)) {
        return {};
    }
    const styles = getComputedStyle(element, pseudo);
    const color = styles.color;
    const defaults = {
        transform: "none",
        opacity: "1",
        borderRadius: "0px",
        backgroundImage: "none",
        backgroundPosition: "0% 0%",
        backgroundSize: "auto",
        backgroundColor: "rgba(0, 0, 0, 0)",
        backgroundAttachment: "scroll",
        border: "0px none " + color,
        borderTop: "0px none " + color,
        borderBottom: "0px none " + color,
        borderLeft: "0px none " + color,
        borderRight: "0px none " + color,
        borderWidth: "0px",
        borderColor: color,
        borderStyle: "none",
        boxShadow: "none",
        fontWeight: "400",
        textAlign: "start",
        justifyContent: "normal",
        alignItems: "normal",
        alignSelf: "auto",
        flexGrow: "0",
        textDecoration: "none solid " + color,
        lineHeight: "normal",
        letterSpacing: "normal",
        backgroundRepeat: "repeat",
        zIndex: "auto",
    };
    function pick(object, paths) {
        const newObject = {};
        paths.forEach((path) => {
            if (object[path]) {
                if (object[path] !== defaults[path]) {
                    newObject[path] = object[path];
                }
            }
        });
        return newObject;
    }
    return pick(styles, list);
}
function addConstraints(layers) {
    layers.forEach((layer) => {
        traverse(layer, (child) => {
            if (child.type === "SVG") {
                child.constraints = {
                    horizontal: "CENTER",
                    vertical: "MIN",
                };
            }
            else {
                const ref = child.ref;
                if (ref) {
                    const el = ref instanceof HTMLElement ? ref : ref.parentElement;
                    const parent = el === null || el === void 0 ? void 0 : el.parentElement;
                    if (el && parent) {
                        const currentDisplay = el.style.display;
                        el.style.setProperty("display", "none", "!important");
                        let computed = getComputedStyle(el);
                        const hasFixedWidth = computed === null || computed === void 0 ? void 0 : computed.width.trim().endsWith("px");
                        const hasFixedHeight = computed === null || computed === void 0 ? void 0 : computed.height.trim().endsWith("px");
                        el.style.display = currentDisplay;
                        const parentStyle = getComputedStyle(parent);
                        let hasAutoMarginLeft = computed.marginLeft === "auto";
                        let hasAutoMarginRight = computed.marginRight === "auto";
                        let hasAutoMarginTop = computed.marginTop === "auto";
                        let hasAutoMarginBottom = computed.marginBottom === "auto";
                        computed = getComputedStyle(el);
                        if (["absolute", "fixed"].includes(computed.position)) {
                            setData(child, "position", computed.position);
                        }
                        if (hasFixedHeight) {
                            setData(child, "heightType", "fixed");
                        }
                        if (hasFixedWidth) {
                            setData(child, "widthType", "fixed");
                        }
                        const isInline = computed.display && computed.display.includes("inline");
                        if (isInline) {
                            const parentTextAlign = parentStyle.textAlign;
                            if (parentTextAlign === "center") {
                                hasAutoMarginLeft = true;
                                hasAutoMarginRight = true;
                            }
                            else if (parentTextAlign === "right") {
                                hasAutoMarginLeft = true;
                            }
                            if (computed.verticalAlign === "middle") {
                                hasAutoMarginTop = true;
                                hasAutoMarginBottom = true;
                            }
                            else if (computed.verticalAlign === "bottom") {
                                hasAutoMarginTop = true;
                                hasAutoMarginBottom = false;
                            }
                            setData(child, "widthType", "shrink");
                        }
                        const parentJustifyContent = parentStyle.display === "flex" &&
                            ((parentStyle.flexDirection === "row" &&
                                parentStyle.justifyContent) ||
                                (parentStyle.flexDirection === "column" &&
                                    parentStyle.alignItems));
                        if (parentJustifyContent === "center") {
                            hasAutoMarginLeft = true;
                            hasAutoMarginRight = true;
                        }
                        else if (parentJustifyContent &&
                            (parentJustifyContent.includes("end") ||
                                parentJustifyContent.includes("right"))) {
                            hasAutoMarginLeft = true;
                            hasAutoMarginRight = false;
                        }
                        const parentAlignItems = parentStyle.display === "flex" &&
                            ((parentStyle.flexDirection === "column" &&
                                parentStyle.justifyContent) ||
                                (parentStyle.flexDirection === "row" &&
                                    parentStyle.alignItems));
                        if (parentAlignItems === "center") {
                            hasAutoMarginTop = true;
                            hasAutoMarginBottom = true;
                        }
                        else if (parentAlignItems &&
                            (parentAlignItems.includes("end") ||
                                parentAlignItems.includes("bottom"))) {
                            hasAutoMarginTop = true;
                            hasAutoMarginBottom = false;
                        }
                        if (child.type === "TEXT") {
                            if (computed.textAlign === "center") {
                                hasAutoMarginLeft = true;
                                hasAutoMarginRight = true;
                            }
                            else if (computed.textAlign === "right") {
                                hasAutoMarginLeft = true;
                                hasAutoMarginRight = false;
                            }
                        }
                        child.constraints = {
                            horizontal: hasAutoMarginLeft && hasAutoMarginRight
                                ? "CENTER"
                                : hasAutoMarginLeft
                                    ? "MAX"
                                    : "SCALE",
                            vertical: hasAutoMarginBottom && hasAutoMarginTop
                                ? "CENTER"
                                : hasAutoMarginTop
                                    ? "MAX"
                                    : "MIN",
                        };
                    }
                }
                else {
                    child.constraints = {
                        horizontal: "SCALE",
                        vertical: "MIN",
                    };
                }
            }
        });
    });
}
const getBorderRadii = ({ computedStyle, }) => {
    const topLeft = parseUnits(computedStyle.borderTopLeftRadius);
    const topRight = parseUnits(computedStyle.borderTopRightRadius);
    const bottomRight = parseUnits(computedStyle.borderBottomRightRadius);
    const bottomLeft = parseUnits(computedStyle.borderBottomLeftRadius);
    const borderRadii = Object.assign(Object.assign(Object.assign(Object.assign({}, (topLeft ? { topLeftRadius: topLeft.value } : {})), (topRight ? { topRightRadius: topRight.value } : {})), (bottomRight ? { bottomRightRadius: bottomRight.value } : {})), (bottomLeft ? { bottomLeftRadius: bottomLeft.value } : {}));
    return borderRadii;
};
const capitalize = (str) => str[0].toUpperCase() + str.substring(1);
const hasBorder = ({ borderWidth, borderType, borderColor, }) => borderWidth && borderWidth !== "0" && borderType !== "none" && borderColor;
function getStrokesRectangle({ dir, rect, computedStyle, el, }) {
    const computed = computedStyle[("border" + capitalize(dir))];
    if (computed) {
        const parsed = computed.match(/^([\d\.]+)px\s*(\w+)\s*(.*)$/);
        if (parsed) {
            const [_match, borderWidth, borderType, borderColor] = parsed;
            if (hasBorder({ borderWidth, borderType, borderColor })) {
                const rgb = getRgb(borderColor);
                if (rgb) {
                    const width = ["top", "bottom"].includes(dir)
                        ? rect.width
                        : parseFloat(borderWidth);
                    const height = ["left", "right"].includes(dir)
                        ? rect.height
                        : parseFloat(borderWidth);
                    const fill = {
                        type: "SOLID",
                        color: { r: rgb.r, b: rgb.b, g: rgb.g },
                        opacity: rgb.a || 1,
                    };
                    const layer = {
                        ref: el,
                        type: "RECTANGLE",
                        x: dir === "left"
                            ? rect.left - width
                            : dir === "right"
                                ? rect.right
                                : rect.left,
                        y: dir === "top"
                            ? rect.top - height
                            : dir === "bottom"
                                ? rect.bottom
                                : rect.top,
                        width,
                        height,
                        fills: [fill],
                    };
                    return layer;
                }
            }
        }
    }
    return undefined;
}
const addStrokesFromBorder = ({ computedStyle: { border }, }) => {
    if (border) {
        const parsed = border.match(/^([\d\.]+)px\s*(\w+)\s*(.*)$/);
        if (parsed) {
            const [_match, borderWidth, borderType, borderColor] = parsed;
            if (hasBorder({ borderWidth, borderType, borderColor })) {
                const rgb = getRgb(borderColor);
                if (rgb) {
                    return {
                        strokes: [
                            {
                                type: "SOLID",
                                color: { r: rgb.r, b: rgb.b, g: rgb.g },
                                opacity: rgb.a || 1,
                            },
                        ],
                        strokeWeight: Math.round(parseFloat(borderWidth)),
                    };
                }
            }
        }
    }
    return undefined;
};
const getShadowEffects = ({ computedStyle: { boxShadow }, }) => {
    if (boxShadow && boxShadow !== "none") {
        const parsed = parseBoxShadowStr(boxShadow);
        const color = getRgb(parsed.color);
        if (color) {
            const shadowEffect = {
                color,
                type: "DROP_SHADOW",
                radius: parsed.blurRadius,
                blendMode: "NORMAL",
                visible: true,
                offset: {
                    x: parsed.offsetX,
                    y: parsed.offsetY,
                },
            };
            return [shadowEffect];
        }
    }
    return undefined;
};

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/svg.ts
const processSvgUseElements = (el) => {
    // Process SVG <use> elements
    for (const use of Array.from(el.querySelectorAll("use"))) {
        try {
            const symbolSelector = use.href.baseVal;
            const symbol = document.querySelector(symbolSelector);
            if (symbol) {
                use.outerHTML = symbol.innerHTML;
            }
        }
        catch (err) {
            console.warn("Error querying <use> tag href", err);
        }
    }
};
const createSvgLayer = (el) => {
    const rect = el.getBoundingClientRect();
    // TODO: pull in CSS/computed styles
    // TODO: may need to pull in layer styles too like shadow, bg color, etc
    const layer = {
        type: "SVG",
        ref: el,
        svg: el.outerHTML,
        x: Math.round(rect.left),
        y: Math.round(rect.top),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
    };
    return layer;
};

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/text.ts



const buildTextNode = ({ node, }) => {
    var _a;
    const trimmedText = ((_a = node.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    if (!trimmedText.length) {
        return undefined;
    }
    const parent = node.parentElement;
    if (parent) {
        if (isHidden(parent)) {
            return undefined;
        }
        const computedStyles = getComputedStyle(parent);
        const range = document.createRange();
        range.selectNode(node);
        const rect = fastClone(range.getBoundingClientRect());
        const lineHeight = parseUnits(computedStyles.lineHeight);
        range.detach();
        if (lineHeight && rect.height < lineHeight.value) {
            const delta = lineHeight.value - rect.height;
            rect.top -= delta / 2;
            rect.height = lineHeight.value;
        }
        if (rect.height < 1 || rect.width < 1) {
            return undefined;
        }
        const textNode = {
            x: Math.round(rect.left),
            ref: node,
            y: Math.round(rect.top),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            type: "TEXT",
            characters: trimmedText.replace(/\s+/g, " "),
        };
        const fills = [];
        const rgb = getRgb(computedStyles.color);
        if (rgb) {
            fills.push({
                type: "SOLID",
                color: {
                    r: rgb.r,
                    g: rgb.g,
                    b: rgb.b,
                },
                opacity: rgb.a || 1,
            });
        }
        if (fills.length) {
            textNode.fills = fills;
        }
        const letterSpacing = parseUnits(computedStyles.letterSpacing);
        if (letterSpacing) {
            textNode.letterSpacing = letterSpacing;
        }
        if (lineHeight) {
            textNode.lineHeight = lineHeight;
        }
        const { textTransform } = computedStyles;
        switch (textTransform) {
            case "uppercase": {
                textNode.textCase = "UPPER";
                break;
            }
            case "lowercase": {
                textNode.textCase = "LOWER";
                break;
            }
            case "capitalize": {
                textNode.textCase = "TITLE";
                break;
            }
        }
        const fontSize = parseUnits(computedStyles.fontSize);
        if (fontSize) {
            textNode.fontSize = Math.round(fontSize.value);
        }
        if (computedStyles.fontFamily) {
            // const font = computedStyles.fontFamily.split(/\s*,\s*/);
            textNode.fontFamily = computedStyles.fontFamily;
        }
        if (["underline", "strikethrough"].includes(computedStyles.textDecoration)) {
            textNode.textDecoration =
                computedStyles.textDecoration.toUpperCase();
        }
        if (["left", "center", "right", "justified"].includes(computedStyles.textAlign)) {
            textNode.textAlignHorizontal =
                computedStyles.textAlign.toUpperCase();
        }
        return textNode;
    }
};

// CONCATENATED MODULE: ./lib/html-to-figma/helpers/frames.ts



const getParent = ({ layer, root, }) => {
    let response = null;
    try {
        traverse(root, (child) => {
            if (child &&
                child.children &&
                child.children.includes(layer)) {
                response = child;
                // Deep traverse short circuit hack
                throw "DONE";
            }
        });
    }
    catch (err) {
        if (err === "DONE") {
            // Do nothing
        }
        else {
            console.error(err instanceof Error ? err.message : err);
        }
    }
    return response;
};
const makeTree = ({ root, layers, }) => {
    const refMap = new WeakMap();
    layers.forEach((layer) => {
        if (layer.ref) {
            refMap.set(layer.ref, layer);
        }
    });
    let updated = true;
    let iterations = 0;
    while (updated) {
        updated = false;
        if (iterations++ > 10000) {
            console.error("Too many tree iterations 1");
            break;
        }
        traverse(root, (layer, originalParent) => {
            // const node = layer.ref!;
            const node = layer.ref;
            let parentElement = (node && node.parentElement) || null;
            do {
                if (parentElement === document.body) {
                    break;
                }
                if (parentElement && parentElement !== document.body) {
                    // Get least common demoninator shared parent and make a group
                    const parentLayer = refMap.get(parentElement);
                    if (parentLayer === originalParent) {
                        break;
                    }
                    if (parentLayer && parentLayer !== root) {
                        if (hasChildren(parentLayer)) {
                            if (originalParent) {
                                const index = originalParent.children.indexOf(layer);
                                originalParent.children.splice(index, 1);
                                parentLayer.children.push(layer);
                                updated = true;
                                return;
                            }
                        }
                        else {
                            let parentRef = parentLayer.ref;
                            if (parentRef &&
                                parentRef instanceof Node &&
                                parentRef.nodeType === Node.TEXT_NODE) {
                                parentRef = parentRef.parentElement;
                            }
                            const overflowHidden = parentRef instanceof Element &&
                                getComputedStyle(parentRef).overflow !== "visible";
                            const newParent = {
                                type: "FRAME",
                                clipsContent: !!overflowHidden,
                                // type: 'GROUP',
                                x: parentLayer.x,
                                y: parentLayer.y,
                                width: parentLayer.width,
                                height: parentLayer.height,
                                ref: parentLayer.ref,
                                backgrounds: [],
                                children: [parentLayer, layer],
                            };
                            const parent = getParent({ layer: parentLayer, root });
                            if (!parent) {
                                console.warn("\n\nCANT FIND PARENT\n", JSON.stringify(Object.assign(Object.assign({}, parentLayer), { ref: null })));
                                continue;
                            }
                            if (originalParent) {
                                const index = originalParent.children.indexOf(layer);
                                originalParent.children.splice(index, 1);
                            }
                            delete parentLayer.ref;
                            const newIndex = parent.children.indexOf(parentLayer);
                            refMap.set(parentElement, newParent);
                            parent.children.splice(newIndex, 1, newParent);
                            updated = true;
                            return;
                        }
                    }
                }
            } while (parentElement && (parentElement = parentElement.parentElement));
        });
    }
    // Collect tree of depeest common parents and make groups
    let secondUpdate = true;
    let secondIterations = 0;
    while (secondUpdate) {
        if (secondIterations++ > 10000) {
            console.error("Too many tree iterations 2");
            break;
        }
        secondUpdate = false;
        traverse(root, (layer, parent) => {
            if (secondUpdate) {
                return;
            }
            if (layer.type === "FRAME") {
                // Final all child elements with layers, and add groups around  any with a shared parent not shared by another
                const ref = layer.ref;
                if (layer.children && layer.children.length > 2) {
                    const childRefs = layer.children &&
                        layer.children.map((child) => child.ref);
                    let lowestCommonDenominator = layer.ref;
                    let lowestCommonDenominatorDepth = getDepth(lowestCommonDenominator);
                    // Find lowest common demoninator with greatest depth
                    for (const childRef of childRefs) {
                        const otherChildRefs = childRefs.filter((item) => item !== childRef);
                        const childParents = getParents(childRef);
                        for (const otherChildRef of otherChildRefs) {
                            const otherParents = getParents(otherChildRef);
                            for (const parent of otherParents) {
                                if (childParents.includes(parent) &&
                                    layer.ref.contains(parent)) {
                                    const depth = getDepth(parent);
                                    if (depth > lowestCommonDenominatorDepth) {
                                        lowestCommonDenominator = parent;
                                        lowestCommonDenominatorDepth = depth;
                                    }
                                }
                            }
                        }
                    }
                    if (lowestCommonDenominator &&
                        lowestCommonDenominator !== layer.ref) {
                        // Make a group around all children elements
                        const newChildren = layer.children.filter((item) => lowestCommonDenominator.contains(item.ref));
                        if (newChildren.length !== layer.children.length) {
                            const lcdRect = getBoundingClientRect(lowestCommonDenominator);
                            const overflowHidden = lowestCommonDenominator instanceof Element &&
                                getComputedStyle(lowestCommonDenominator).overflow !==
                                    "visible";
                            const newParent = {
                                type: "FRAME",
                                clipsContent: !!overflowHidden,
                                ref: lowestCommonDenominator,
                                x: lcdRect.left,
                                y: lcdRect.top,
                                width: lcdRect.width,
                                height: lcdRect.height,
                                backgrounds: [],
                                children: newChildren,
                            };
                            refMap.set(lowestCommonDenominator, ref);
                            let firstIndex = layer.children.length - 1;
                            for (const child of newChildren) {
                                const childIndex = layer.children.indexOf(child);
                                if (childIndex > -1 && childIndex < firstIndex) {
                                    firstIndex = childIndex;
                                }
                            }
                            layer.children.splice(firstIndex, 0, newParent);
                            for (const child of newChildren) {
                                const index = layer.children.indexOf(child);
                                if (index > -1) {
                                    layer.children.splice(index, 1);
                                }
                            }
                            secondUpdate = true;
                        }
                    }
                }
            }
        });
    }
    // Update all positions
    traverse(root, (layer) => {
        if (layer.type === "FRAME" || layer.type === "GROUP") {
            const { x, y } = layer;
            if (x || y) {
                traverse(layer, (child) => {
                    if (child === layer) {
                        return;
                    }
                    child.x = child.x - x;
                    child.y = child.y - y;
                });
            }
        }
    });
};
const getLayersForFrames = ({ root, layers, }) => {
    root.children = layers.slice(1);
    makeTree({ root, layers });
    const framesLayers = [root];
    addConstraints(framesLayers);
    return framesLayers;
};

// CONCATENATED MODULE: ./lib/html-to-figma/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlToFigma", function() { return htmlToFigma; });









const generateElements = (el) => {
    const getShadowEls = (el) => {
        var _a;
        return Array.from(((_a = el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("*")) || []).reduce((memo, el) => [...memo, el, ...getShadowEls(el)], []);
    };
    const els = Array.from(el.querySelectorAll("*")).reduce((memo, el) => [...memo, el, ...getShadowEls(el)], []);
    return els;
};
function removeRefs({ layers, root, }) {
    layers.concat([root]).forEach((layer) => {
        traverse(layer, (child) => {
            delete child.ref;
        });
    });
}
const getLayersForElement = (el) => {
    const elementLayers = [];
    if (isHidden(el)) {
        return [];
    }
    if (el instanceof SVGSVGElement) {
        elementLayers.push(createSvgLayer(el));
        return elementLayers;
    }
    // Sub SVG Eleemnt
    else if (el instanceof SVGElement) {
        return [];
    }
    // for `picture`, we only need the `image` element. We can ignore the parent `picture` and
    // `source` sibling elements.
    if ((el.parentElement instanceof HTMLPictureElement &&
        el instanceof HTMLSourceElement) ||
        el instanceof HTMLPictureElement) {
        return [];
    }
    // TO-DO: what does `appliedStyles` do here? All we do is check that it's non-empty
    const appliedStyles = getAppliedComputedStyles(el);
    const computedStyle = getComputedStyle(el);
    if ((size(appliedStyles) ||
        el instanceof HTMLImageElement ||
        el instanceof HTMLVideoElement) &&
        computedStyle.display !== "none") {
        const rect = getBoundingClientRect(el);
        if (rect.width >= 1 && rect.height >= 1) {
            const fills = [];
            const color = getRgb(computedStyle.backgroundColor);
            if (color) {
                const solidPaint = {
                    type: "SOLID",
                    color: {
                        r: color.r,
                        g: color.g,
                        b: color.b,
                    },
                    opacity: color.a || 1,
                };
                fills.push(solidPaint);
            }
            const rectNode = {
                type: "RECTANGLE",
                ref: el,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                fills,
            };
            const strokes = addStrokesFromBorder({ computedStyle });
            if (strokes) {
                Object.assign(rectNode, strokes);
            }
            if (!rectNode.strokes) {
                for (const dir of ["top", "left", "right", "bottom"]) {
                    const strokesLayer = getStrokesRectangle({
                        dir,
                        rect,
                        computedStyle,
                        el,
                    });
                    if (strokesLayer) {
                        elementLayers.push(strokesLayer);
                    }
                }
            }
            const imagePaint = getImagePaintWithUrl({ computedStyle, el });
            if (imagePaint) {
                fills.push(imagePaint);
                rectNode.name = "IMAGE";
            }
            const shadowEffects = getShadowEffects({ computedStyle });
            if (shadowEffects) {
                rectNode.effects = shadowEffects;
            }
            const borderRadii = getBorderRadii({ computedStyle });
            Object.assign(rectNode, borderRadii);
            elementLayers.push(rectNode);
        }
    }
    return elementLayers;
};
function htmlToFigma(selector = "body", useFrames = false, time = false) {
    if (time) {
        console.time("Parse dom");
    }
    const layers = [];
    const el = selector instanceof HTMLElement
        ? selector
        : document.querySelector(selector || "body");
    if (el) {
        processSvgUseElements(el);
        const els = generateElements(el);
        els.forEach((el) => {
            const elLayers = getLayersForElement(el);
            layers.push(...elLayers);
        });
        const textNodes = textNodesUnder(el);
        for (const node of textNodes) {
            const textNode = buildTextNode({ node });
            if (textNode) {
                layers.push(textNode);
            }
        }
    }
    // TODO: send frame: { children: []}
    const root = {
        type: "FRAME",
        width: Math.round(window.innerWidth),
        height: Math.round(document.documentElement.scrollHeight),
        x: 0,
        y: 0,
        ref: document.body,
    };
    layers.unshift(root);
    const framesLayers = useFrames
        ? getLayersForFrames({ layers, root })
        : layers;
    removeRefs({ layers: framesLayers, root });
    if (time) {
        console.info("\n");
        console.timeEnd("Parse dom");
    }
    return framesLayers;
}


/***/ })
/******/ ])["htmlToFigma"];

/***/ })

/******/ });