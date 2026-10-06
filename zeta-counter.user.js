// ==UserScript==
// @name         제타 글자수 카운터
// @namespace    zeta-raw-counter
// @version      1.0.0
// @description  AI 답변 원문 글자수 + 수정 중 실시간 글자수를 카운트함.
// @author       제타 여성향 갤러리 ㅇㅇ
// @homepageURL  https://github.com/imlikedott/zeta-counter
// @updateURL    https://github.com/imlikedott/zeta-counter/raw/refs/heads/main/zeta-counter.user.js
// @downloadURL  https://github.com/imlikedott/zeta-counter/raw/refs/heads/main/zeta-counter.user.js
// @match        https://zeta-ai.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
'use strict';const _0x8bd2=["5a665a675a785a695a7c5a1d5a7e5a725a685a735a695a785a6f5a60","5a4b5a0c5a135a0d5a135a0d5a1d98e19dac","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a7f5a525a595a445a6b5a545a585a4a5a1f5a60","5a665a5c5a4f5a545a5c5a105a555a545a595a595a585a535a005a1f5a495a4f5a485a585a1f5a605a115a1d5a665a545a535a585a4f5a495a60","5a555a545a595a595a585a53","5a0d","5a4b5a545a4e5a545a5f5a515a58","","5a37","","","5a735a7c5a6f5a6f5a7c5a695a725a6f","","","","5a5d5a5d5a5d5a745a535a5b5a525a7f5a525a45","5a5d5a5d5a5d","5a37","","5a695a785a655a69","5a695a785a655a69","5a745a735a7b5a725a625a7f5a725a65","5a745a735a7b5a725a625a7f5a725a65","","5a37","","5a735a7b5a7e","","","5a07","5a695a785a655a69","5a495a585a455a49","5a745a735a7b5a725a625a7f5a725a65","5a545a535a5b5a52","5a545a535a5b5a52","5a545a535a5b5a52","5a545a535a5b5a52","5a545a535a5b5a52","5a495a585a455a49","5a495a585a455a49","5a525a5f5a575a585a5e5a49","5a695a785a655a69","5a745a735a7b5a725a625a7f5a725a65","5a685a6e5a785a6f","5a525a5f5a575a585a5e5a49","5a595a5c5a495a5c5a07","5a595a5c5a495a5c5a07","5a4e5a495a4f5a545a535a5a","","5a5c5a4d5a545a135a475a585a495a5c5a105a5c5a545a135a545a52","","5a5c5a4d5a545a135a475a585a495a5c5a105a5c5a545a135a545a52","5a515a525a5c5a59","","5a495a585a455a49","5a475a585a495a5c5a7e5a525a485a535a495a585a4f5a7e5a5c5a5e5a555a585a625a4b5a0c5a0c","5a475a585a495a5c5a7e5a525a485a535a495a585a4f5a7e5a5c5a5e5a555a585a625a4b5a0b","5a475a585a495a5c5a7e5a525a485a535a495a585a4f5a7e5a5c5a5e5a555a585a625a4b5a0a","5a475a585a495a5c5a7e5a525a485a535a495a585a4f5a7e5a5c5a5e5a555a585a625a4b5a05","5a475a585a495a5c5a7e5a525a485a535a495a585a4f5a7e5a5c5a5e5a555a585a625a4b5a04","5a475a585a495a5c5a7e5a525a485a535a495a585a4f5a7e5a5c5a5e5a555a585a625a4b5a0c5a0d","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4a5a4f5a5c5a4d5a115a1d5a135a475a585a495a5c5a105a585a595a545a495a105a515a545a4b5a585a105a5e5a525a485a535a495a585a4f","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4a5a4f5a5c5a4d5a115a1d5a135a475a585a495a5c5a105a585a595a545a495a105a515a545a4b5a585a105a5e5a525a485a535a495a585a4f","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a715a585a5b5a495a695a585a455a495a7e5a525a535a495a585a535a495a1f5a605a115a1d","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a735a5c5a4f5a4f5a5c5a495a525a4f5a7f5a485a5f5a5f5a515a585a1f5a605a115a1d","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a745a535a5b5a525a7f5a525a455a7e5a525a535a495a585a535a495a1f5a60","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a6f5a545a5a5a555a495a695a585a455a495a7e5a525a535a495a585a535a495a1f5a60","5a665a595a5c5a495a5c5a105a545a535a595a585a455a60","5a595a5c5a495a5c5a105a545a535a595a585a45","5a665a595a5c5a495a5c5a105a545a535a595a585a455a60","5a665a595a5c5a495a5c5a105a545a535a595a585a455a60","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4a5a4f5a5c5a4d","5a5f5a485a495a495a525a53","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a715a585a5b5a495a695a585a455a495a7e5a525a535a495a585a535a495a1f5a60","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a745a535a5b5a525a7f5a525a455a7e5a525a535a495a585a535a495a1f5a60","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4a5a4f5a5c5a4d","8200871f","5a475a585a495a5c5a7e5a525a485a535a495a585a4f5a745a5e5a525a53","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a545a5e5a525a53","5a0c","5a535a525a4a5a4f5a5c5a4d","5a4d5a45","","","5a4d5a45","5a5c5a485a495a52","5a4d5a45","5a4d5a45","5a4d5a45","5a5e5a515a5c5a4e5a4e","5a4e5a495a445a515a58","5a665a545a595a60","5a545a59","5a4e5a4d5a5c5a53","5a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a545a5e5a525a53","5a4e5a4b5a5a5a115a1d5a545a505a5a","5a4e5a4b5a5a5a115a1d5a545a505a5a","","9af55a1d9f799d4995659d795a1d9db8e2188f659b059ca95a1d5a159d49e09593fd5a115a1df43d9dad5a115a1d94499c19e09593fd5a1deecc5a1d9761e93d5a1d5a0f5a0df43d9dad5a145a37e4799cf1ee6df6dd5a1d8c689d459d795a1de839e349e0495a1df40de6c55a1d9f799d4995655a158200871f5a149d01e2615a1de9f19f79f63d9ca9","","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a5f5a495a53","5a595a545a4b","5a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4a5a4f5a5c5a4d","5a0d","5a5f5a485a495a495a525a53","5a5f5a485a495a495a525a53","5a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a5f5a495a53","9cede1055a1df43d9dad98255a1d5a159c19e34590805a1d8a49e3905a075a1de069e8495a14","5a5c5a4f5a545a5c5a105a515a5c5a5f5a585a51","9cede1055a1df43d9dad9825","5a5e5a525a535a495a585a455a495a505a585a535a48","5a595a545a4b","5a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4d5a525a4d5a485a4d","5a5e5a515a545a5e5a56","5a535a525a535a58","5a5f5a515a525a5e5a56","5a535a525a535a58","5a5b5a515a525a5c5a49","9f799d4995655a1de629f585f40d","9d3994655a1d9c13f40df40d5a1d5a159c13f40de8a95a1d932c5a14","9d3994655a1d9c13f40df40d","9d3994655a1df6dd9228","9d3994655a1d9cededa5e93de261","5a595a545a4b","5a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a505a585a535a48","5a5f5a485a495a495a525a53","5a5f5a485a495a495a525a53","5a1e5a5b5a5b5a5b","5a4f5a5a5a5f5a5c5a155a0f5a085a085a115a0f5a085a085a115a0f5a085a085a115a135a0e5a14","5a4d5a525a545a535a495a585a4f","5a595a585a5b5a5c5a485a515a49","5a505a525a485a4e5a585a585a535a495a585a4f","5a4f5a5a5a5f5a5c5a155a0f5a085a085a115a0f5a085a085a115a0f5a085a085a115a135a0c5a14","5a505a525a485a4e5a585a515a585a5c5a4b5a58","5a495a4f5a5c5a535a4e5a4d5a5c5a4f5a585a535a49","5a5e5a515a545a5e5a56","5a4d5a45","5a4d5a45","5a4d5a525a545a535a495a585a4f5a595a525a4a5a53","5a565a585a445a595a525a4a5a53","5a785a4e5a5e5a5c5a4d5a58","5a4e5a5e5a4f5a525a515a51","5a595a545a4b","5a475a585a495a5c5a7e5a525a485a535a495a585a4f5a6d5a525a4e","5a5f5a5c5a4f","5a5f5a5c5a4f","5a5f5a5c5a4f","5a5b5a515a525a5c5a49","5a5b5a515a525a5c5a49","ea719f899b215a1d9ced8f65e8a95a1df6ce9fed5a1debaef6dd5a115a1d9c19e34590805a1d8a49e3905a1d7baf5a1d5a1f9d3994655a1df6dd92285a1f9d795a1de831edd192c19b059ca9","9d399465e3415a1df6dd92288fb59f899ca9","5a5f5a5c5a4f","9cededa55a1d9dade391e2615a1de9f1e219eb959f899ca9","5a4d5a45","5a4d5a45","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4d5a525a4d5a485a4d","5a095a095a4d5a45","5a5c5a485a495a52","5a095a095a4d5a45","5a5c5a485a495a52","5a0d","5a5c5a485a495a52","5a0d","5a5c5a485a495a52","5a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a5b5a515a525a5c5a49","5a5b5a545a455a585a59","5a045a045a045a045a05","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a5f5a495a53","5a4d5a525a545a535a495a585a4f5a595a525a4a5a53","5a4d5a525a545a535a495a585a4f5a505a525a4b5a58","5a4d5a525a545a535a495a585a4f5a485a4d","5a5e5a515a545a5e5a56","5a5b5a515a525a5c5a49","5a475a585a495a5c5a105a5b5a515a525a5c5a495a105a525a53","5a475a585a495a5c5a105a5b5a515a525a5c5a495a105a525a53","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a5f5a495a53","5a535a525a535a58","5a0f5a4d5a455a1d5a595a5c5a4e5a555a585a595a1d5a4f5a5a5a5f5a5c5a155a0f5a085a085a115a0f5a085a085a115a0f5a085a085a115a135a0b5a14","5a4d5a525a545a535a495a585a4f","5a505a525a4b5a58","5a5c5a485a495a52","5a535a525a535a58","5a535a525a535a58","5a535a525a535a58","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4d5a525a4d5a485a4d","9f7993fc5a1df43d9dad98255a1d9228e6c9f63d5a1d9ffb9f899ca9","5a4f5a585a4e5a545a475a58","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4d5a525a4d5a485a4d","5a5f5a485a495a495a525a53","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4a5a4f5a5c5a4d","5a18","5a1d5a125a1d","5a595a5c5a495a5c5a105a565a585a44","5a595a5c5a495a5c5a105a545a535a595a585a45","5a595a5c5a495a5c5a105a565a585a44","9b21e6b95a1de94d9d498b0de2615a1df43d9dad98255a1d96039d71","5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4a5a4f5a5c5a4d","5a665a595a5c5a495a5c5a105a545a535a595a585a455a60","5a5e5a515a545a5e5a56","5a5f5a485a495a495a525a535a665a5c5a4f5a545a5c5a105a515a5c5a5f5a585a515a005a1f5a785a595a545a495a1d5a505a585a4e5a4e5a5c5a5a5a585a1f5a60","5a665a595a5c5a495a5c5a105a545a535a595a585a455a60","5a595a5c5a495a5c5a105a565a585a44","5a595a5c5a495a5c5a105a545a535a595a585a45","5a5f5a485a495a495a525a53","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a785a595a545a495a705a525a595a585a745a535a4d5a485a495a6d5a5c5a535a585a515a7e5a525a535a495a585a535a495a1f5a60","5a5f5a485a495a495a525a535a665a5c5a4f5a545a5c5a105a515a5c5a5f5a585a515a005a1f5a6e5a5c5a4b5a585a1d5a585a595a545a495a1f5a60","","5a5f5a485a495a495a525a535a665a5c5a4f5a545a5c5a105a515a5c5a5f5a585a515a005a1f5a7e5a5c5a535a5e5a585a515a1d5a585a595a545a495a545a535a5a5a1f5a60","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a785a595a545a495a705a525a595a585a745a535a4d5a485a495a6d5a5c5a535a585a515a7e5a525a535a495a585a535a495a1f5a60","5a5f5a485a495a495a525a535a665a5c5a4f5a545a5c5a105a515a5c5a5f5a585a515a005a1f5a7e5a5c5a535a5e5a585a515a1d5a585a595a545a495a545a535a5a5a1f5a60","5a5f5a485a495a495a525a535a665a5c5a4f5a545a5c5a105a515a5c5a5f5a585a515a005a1f5a6e5a5c5a4b5a585a1d5a585a595a545a495a1f5a60","5a495a585a455a495a5c5a4f5a585a5c5a665a535a5c5a505a585a005a1f5a505a585a4e5a4e5a5c5a5a5a585a1f5a605a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a695a585a455a495a5c5a4f5a585a5c5a1f5a60","5a665a595a5c5a495a5c5a105a4e5a585a535a495a4f5a445a105a5e5a525a505a4d5a525a535a585a535a495a005a1f5a785a595a545a495a705a525a595a585a745a535a4d5a485a495a6d5a5c5a535a585a515a7e5a525a535a495a585a535a495a1f5a60","5a5f5a485a495a495a525a535a665a5c5a4f5a545a5c5a105a515a5c5a5f5a585a515a005a1f5a7e5a5c5a535a5e5a585a515a1d5a585a595a545a495a545a535a5a5a1f5a60","5a595a545a4b","5a475a585a495a5c5a105a585a595a545a495a105a515a545a4b5a585a105a5e5a525a485a535a495a585a4f","5a5c5a5b5a495a585a4f5a585a535a59","5a375a1d5a1d97a992285a07","5a375a1d5a1d98d992215a07","5a375a1d5a1d5a6697a992285a1d923996895a60","5a375a1d5a1d5a6698d992215a1d923996895a60","5a669b21e6b95a1de94d9d498b0d5a60","","","5a545a535a4d5a485a49","982592285a1d932c5a1d94499c898b0d5a1d98e19dac","5a545a535a4d5a485a49","982592285a1d97d59bb1","982592285a1d9c79e2f1","5a4e5a495a445a515a58","5a555a495a505a515a135a475a585a495a5c5a105a5b5a515a525a5c5a495a105a525a535a1d5a135a475a585a495a5c5a105a5e5a525a485a535a495a585a4f5a105a4a5a4f5a5c5a4d5a1d5a465a1d5a595a545a4e5a4d5a515a5c5a445a075a1d5a535a525a535a585a1d5a1c5a545a505a4d5a525a4f5a495a5c5a535a495a065a1d5a40","5a515a525a5c5a595a545a535a5a","5a795a725a705a7e5a525a535a495a585a535a495a715a525a5c5a595a585a59"];function _0x7ac1(i){let s=_0x8bd2[i],r='';for(let j=0;j<s.length;j+=4)r+=String.fromCharCode(parseInt(s.slice(j,j+4),16)^23101);return r;}
const TAG = _0x7ac1(0);
console.log(TAG, _0x7ac1(1));
const SEL_BODY = _0x7ac1(2);
function visibleRatio(el) {
if (!el.getClientRects().length) return 0;
if (el.closest(_0x7ac1(3))) return 0;
const r = el.getBoundingClientRect();
if (r.width <= 0 || r.height <= 0) return 0;
let left = Math.max(r.left, 0);
let right = Math.min(r.right, window.innerWidth);
for (let a = el; a && a !== document.documentElement; a = a.parentElement) {
const cs = getComputedStyle(a);
if (cs.visibility === _0x7ac1(4) || cs.opacity === _0x7ac1(5)) return 0;
if (a !== el && cs.overflowX !== _0x7ac1(6)) {
const ar = a.getBoundingClientRect();
left = Math.max(left, ar.left);
right = Math.min(right, ar.right);
}
}
return Math.max(0, right - left) / r.width;
}
function isVisible(el) {
return visibleRatio(el) > 0.5;
}
function visibleBodyIn(root) {
let best = null;
let bestRatio = 0.5;
for (const b of root.querySelectorAll(SEL_BODY)) {
const ratio = visibleRatio(b);
if (ratio > bestRatio) { best = b; bestRatio = ratio; }
}
return best;
}
function cleanRaw(raw) {
return String(raw ?? _0x7ac1(7)).replace(/\r\n?/g, _0x7ac1(8)).trim();
}
function countRaw(raw) {
const s = cleanRaw(raw);
return {
withSpaces: s.length,
withoutSpaces: s.replace(/\s/g, _0x7ac1(9)).length
};
}
function buildTextContent(content) {
const text = content?.text ?? _0x7ac1(10);
if (content?.position === _0x7ac1(11)) return `@: ${text}`;
const speaker = content?.speakerName ?? _0x7ac1(12);
return speaker ? `@${speaker}: ${text}` : text;
}
function pushLabelValue(lines, obj) {
const label = obj.label ?? _0x7ac1(13);
const value = obj.value ?? _0x7ac1(14);
if (label) lines.push(`${label}: ${value}`);
else if (value) lines.push(String(value));
}
function buildInfoBox(content) {
const lines = [_0x7ac1(15)];
for (const scene of content?.scenes || []) {
if (scene) pushLabelValue(lines, scene);
}
for (const ch of content?.characters || []) {
if (!ch) continue;
if (ch.name) lines.push(`[${ch.name}]`);
for (const item of ch.items || []) {
if (item) pushLabelValue(lines, item);
}
}
lines.push(_0x7ac1(16));
return lines.join(_0x7ac1(17));
}
function reconstructRaw(contents) {
if (!Array.isArray(contents)) return _0x7ac1(18);
const blocks = [];
for (const c of contents) {
if (!c) continue;
if (c.type === _0x7ac1(19)) {
blocks.push({ type: _0x7ac1(20), text: buildTextContent(c) });
} else if (c.type === _0x7ac1(21)) {
blocks.push({ type: _0x7ac1(22), text: buildInfoBox(c).replace(/\n+$/g, _0x7ac1(23)) });
}
}
const raw = blocks.map(b => b.text).join(_0x7ac1(24));
return raw;
}
function norm(s) {
return String(s ?? _0x7ac1(25)).normalize(_0x7ac1(26))
.replace(/\p{Extended_Pictographic}|[\u200b-\u200d\ufe0e\ufe0f]/gu, _0x7ac1(27))
.replace(/[\s*_`~#>]/g, _0x7ac1(28));
}
function hash(s) {
let h = 5381;
for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
return s.length + _0x7ac1(29) + (h >>> 0).toString(36);
}
function textPieces(contents) {
const out = [];
const add = (kind, v) => { if (v) out.push({ kind, s: String(v) }); };
for (const c of contents || []) {
if (!c) continue;
if (c.type === _0x7ac1(30)) add(_0x7ac1(31), c.text);
else if (c.type === _0x7ac1(32)) {
for (const sc of c.scenes || []) if (sc) { add(_0x7ac1(33), sc.label); add(_0x7ac1(34), sc.value); }
for (const ch of c.characters || []) {
if (!ch) continue;
add(_0x7ac1(35), ch.name);
for (const it of ch.items || []) if (it) { add(_0x7ac1(36), it.label); add(_0x7ac1(37), it.value); }
}
}
}
return out;
}
const candidates = [];
function addCandidate(contents) {
const raw = reconstructRaw(contents);
if (!raw) return;
const pieces = textPieces(contents)
.map(p => ({ kind: p.kind, s: norm(p.s) }))
.filter(p => p.s.length > 0);
const joinedLen = pieces.reduce((n, p) => n + p.s.length, 0);
if (joinedLen < 5) return;
const old = candidates.findIndex(c => c.raw === raw);
if (old >= 0) candidates.splice(old, 1);
candidates.push({ raw, pieces, joinedLen, contents });
if (candidates.length > 300) candidates.shift();
}
function findPiece(p, text, pos) {
const front = p.slice(0, 15);
const back = p.slice(-15);
const i = text.indexOf(front, pos);
if (i < 0) return -1;
const j = text.indexOf(back, i);
if (j < 0) return -1;
return j + back.length;
}
function matches(c, text) {
let pos = 0;
let found = 0;
let textPieceCount = 0;
for (const p of c.pieces) {
if (p.kind === _0x7ac1(38)) textPieceCount++;
const end = findPiece(p.s, text, pos);
if (end < 0) {
if (p.kind === _0x7ac1(39)) return false;
continue;
}
pos = end;
found += p.s.length;
}
if (textPieceCount === 0 && found === 0) return false;
return found >= text.length * 0.6;
}
function findCandidate(text) {
let best = null;
for (const c of candidates) {
if (!matches(c, text)) continue;
if (!best || c.joinedLen > best.joinedLen) best = c;
}
return best;
}
function scan(node, depth = 0) {
if (!node || typeof node !== _0x7ac1(40) || depth > 12) return;
if (Array.isArray(node)) {
for (const x of node) scan(x, depth + 1);
return;
}
if (
Array.isArray(node.contents) &&
node.contents.some(c => c && (c.type === _0x7ac1(41) || c.type === _0x7ac1(42))) &&
node.sender?.type !== _0x7ac1(43)
) {
addCandidate(node.contents);
}
for (const k in node) {
const v = node[k];
if (v && typeof v === _0x7ac1(44)) scan(v, depth + 1);
}
}
function handleResponseText(text) {
if (!text || text.length > 8_000_000) return;
let found = false;
if (text.includes(_0x7ac1(45))) {
for (const line of text.split(/\r?\n/)) {
const t = line.trim();
if (!t.startsWith(_0x7ac1(46))) continue;
try { scan(JSON.parse(t.slice(5).trim())); found = true; } catch (_) {}
}
}
if (!found) {
try { scan(JSON.parse(text)); } catch (_) {}
}
scheduleCheck();
}
const originalFetch = window.fetch;
window.fetch = async function (...args) {
const response = await originalFetch.apply(this, args);
try {
const url = typeof args[0] === _0x7ac1(47) ? args[0] : (args[0]?.url || _0x7ac1(48));
if (url.includes(_0x7ac1(49))) {
response.clone().text().then(handleResponseText).catch(() => {});
}
} catch (_) {}
return response;
};
const xOpen = XMLHttpRequest.prototype.open;
const xSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.open = function (method, url, ...rest) {
this._zetaUrl = String(url || _0x7ac1(50));
return xOpen.call(this, method, url, ...rest);
};
XMLHttpRequest.prototype.send = function (...a) {
if (this._zetaUrl && this._zetaUrl.includes(_0x7ac1(51))) {
this.addEventListener(_0x7ac1(52), () => {
try {
if (this.responseType === _0x7ac1(53) || this.responseType === _0x7ac1(54)) {
handleResponseText(this.responseText);
}
} catch (_) {}
});
}
return xSend.apply(this, a);
};
const CACHE_KEY = _0x7ac1(55);
const CACHE_MAX = 200;
try { [_0x7ac1(56), _0x7ac1(57), _0x7ac1(58), _0x7ac1(59), _0x7ac1(60)].forEach(k => localStorage.removeItem(k)); } catch (_) {}
let cache = {};
try { cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {}; } catch (_) { cache = {}; }
function saveCache(key, raw) {
if (cache[key]?.r === raw) return;
cache[key] = { r: raw, t: Date.now() };
const keys = Object.keys(cache);
if (keys.length > CACHE_MAX) {
keys.sort((a, b) => cache[a].t - cache[b].t)
.slice(0, keys.length - CACHE_MAX)
.forEach(k => delete cache[k]);
}
try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (_) {}
}
function domText(body) {
let el = body;
if (body.querySelector(_0x7ac1(61))) {
el = body.cloneNode(true);
el.querySelectorAll(_0x7ac1(62)).forEach(x => x.remove());
}
return norm(el.textContent);
}
function isAIBody(body) {
const hasAI = body.querySelector(
_0x7ac1(63) +
_0x7ac1(64) +
_0x7ac1(65)
);
const hasUser = body.querySelector(_0x7ac1(66));
return !!hasAI && !hasUser;
}
function indexOf(body) {
return Number(body.closest(_0x7ac1(67))?.getAttribute(_0x7ac1(68))) || 0;
}
function getLatestAIBody() {
const ai = Array.from(document.querySelectorAll(SEL_BODY)).filter(isAIBody);
if (!ai.length) return null;
ai.sort((a, b) => indexOf(b) - indexOf(a));
const outer = ai[0].closest(_0x7ac1(69));
const body = outer ? visibleBodyIn(outer) : (isVisible(ai[0]) ? ai[0] : null);
return body && isAIBody(body) ? body : null;
}
function outerOf(body) {
return body.closest(_0x7ac1(70)) || body;
}
function getCounter(body) {
return outerOf(body).querySelector(_0x7ac1(71));
}
function findActionBar(body) {
const buttons = Array.from(outerOf(body).querySelectorAll(_0x7ac1(72)));
const bodyBottom = body.getBoundingClientRect().bottom;
const bottomButtons = buttons.filter(btn => {
if (btn.closest(_0x7ac1(73))) return false;
if (btn.closest(_0x7ac1(74))) return false;
if (btn.closest(_0x7ac1(75))) return false;
const r = btn.getBoundingClientRect();
return r.width > 0 && r.height > 0 && r.top >= bodyBottom - 10;
});
const counts = new Map();
for (const btn of bottomButtons) {
const p = btn.parentElement;
if (p) counts.set(p, (counts.get(p) || 0) + 1);
}
let best = null;
let bestCount = 0;
for (const [p, n] of counts) {
if (n > bestCount) { best = p; bestCount = n; }
}
return best;
}
const DEFAULT_ICON = _0x7ac1(76);
const ICON_KEY = _0x7ac1(77);
function getIcon() {
try { return localStorage.getItem(ICON_KEY) || DEFAULT_ICON; } catch (_) { return DEFAULT_ICON; }
}
function applyIcon(button, icon) {
const target = button.querySelector(_0x7ac1(78)) || button;
target.textContent = icon;
const size = button._zetaSize || 32;
const len = Array.from(icon).length;
target.style.lineHeight = _0x7ac1(79);
target.style.whiteSpace = _0x7ac1(80);
if (len <= 2) {
button.style.width = size + _0x7ac1(81);
button.style.minWidth = _0x7ac1(82);
button.style.paddingLeft = button.style.paddingRight = _0x7ac1(83);
target.style.fontSize = Math.round(size * 0.4) + _0x7ac1(84);
} else {
button.style.width = _0x7ac1(85);
button.style.minWidth = size + _0x7ac1(86);
button.style.paddingLeft = button.style.paddingRight = Math.round(size * 0.3) + _0x7ac1(87);
target.style.fontSize = Math.round(size * 0.36) + _0x7ac1(88);
}
}
function cloneLook(template) {
const btn = template.cloneNode(true);
for (const attr of Array.from(btn.attributes)) {
if (attr.name !== _0x7ac1(89) && attr.name !== _0x7ac1(90)) btn.removeAttribute(attr.name);
}
btn.querySelectorAll(_0x7ac1(91)).forEach(el => el.removeAttribute(_0x7ac1(92)));
const icon = document.createElement(_0x7ac1(93));
icon.className = _0x7ac1(94);
const svg = btn.querySelector(_0x7ac1(95));
if (svg) {
svg.replaceWith(icon);
btn.querySelectorAll(_0x7ac1(96)).forEach(el => el.remove());
} else {
btn.textContent = _0x7ac1(97);
btn.appendChild(icon);
}
return btn;
}
function askNewIcon() {
const input = prompt(
_0x7ac1(98),
getIcon()
);
if (input === null) return;
const icon = Array.from(input.trim()).slice(0, 20).join(_0x7ac1(99)) || DEFAULT_ICON;
try {
if (icon === DEFAULT_ICON) localStorage.removeItem(ICON_KEY);
else localStorage.setItem(ICON_KEY, icon);
} catch (_) {}
document.querySelectorAll(_0x7ac1(100)).forEach(btn => applyIcon(btn, icon));
renderFloat();
}
function createCounterButton(template) {
const wrap = document.createElement(_0x7ac1(101));
wrap.className = _0x7ac1(102);
wrap.style.cssText = `
            position: relative; display: flex; align-items: center;
            justify-content: center; flex-shrink: 0;
        `;
let button;
if (template) {
button = cloneLook(template);
button._zetaSize = Math.round(template.getBoundingClientRect().height) || 32;
button.style.flexShrink = _0x7ac1(103);
} else {
button = document.createElement(_0x7ac1(104));
button.style.cssText = `
                height: 32px; display: flex; align-items: center;
                justify-content: center; padding: 0; margin: 0; border: 0;
                border-radius: 9999px; background: rgba(40,40,46,.92);
                color: rgba(255,255,255,.82); cursor: pointer; flex-shrink: 0;
            `;
}
button.type = _0x7ac1(105);
button.classList.add(_0x7ac1(106));
button.title = _0x7ac1(107);
button.setAttribute(_0x7ac1(108), _0x7ac1(109));
applyIcon(button, getIcon());
button.addEventListener(_0x7ac1(110), e => {
e.preventDefault();
e.stopPropagation();
openMenu(e.clientX, e.clientY, button);
});
const popup = document.createElement(_0x7ac1(111));
popup.className = _0x7ac1(112);
popup.style.cssText = `
            display: none; position: absolute; left: 0; bottom: 44px;
            z-index: 99999; min-width: 150px; padding: 8px 10px;
            border-radius: 10px; background: rgba(24,24,27,.97); color: #fff;
            font-size: 12px; line-height: 1.6; white-space: nowrap;
            box-shadow: 0 4px 18px rgba(0,0,0,.38); pointer-events: none;
        `;
button.addEventListener(_0x7ac1(113), e => {
e.preventDefault();
e.stopPropagation();
popup.style.display = popup.style.display === _0x7ac1(114) ? _0x7ac1(115) : _0x7ac1(116);
});
wrap.appendChild(button);
wrap.appendChild(popup);
return wrap;
}
let menuEl = null;
function closeMenu() {
menuEl?.remove();
menuEl = null;
}
function openMenu(x, y, sourceButton) {
closeMenu();
const pos = getPos();
const floating = pos.mode === _0x7ac1(117);
const items = [
{ label: _0x7ac1(118), on: true, run: askNewIcon },
{ label: floating && !pos.locked ? _0x7ac1(119) : _0x7ac1(120),
on: !(floating && !pos.locked), run: () => startMove(sourceButton) },
{ label: _0x7ac1(121), on: floating && !pos.locked, run: lockPos },
{ label: _0x7ac1(122), on: floating, run: resetPos }
];
menuEl = document.createElement(_0x7ac1(123));
menuEl.className = _0x7ac1(124);
menuEl.style.cssText = `
            position: fixed; z-index: 100000; min-width: 150px; padding: 5px;
            border-radius: 10px; background: rgba(24,24,27,.98);
            box-shadow: 0 6px 22px rgba(0,0,0,.45); font-size: 13px;
        `;
for (const item of items) {
const btn = document.createElement(_0x7ac1(125));
btn.type = _0x7ac1(126);
btn.textContent = item.label;
btn.disabled = !item.on;
btn.style.cssText = `
                display: block; width: 100%; padding: 8px 10px; border: 0;
                border-radius: 7px; background: transparent; text-align: left;
                color: ${item.on ? _0x7ac1(127) : _0x7ac1(128)};
                cursor: ${item.on ? _0x7ac1(129) : _0x7ac1(130)}; font-size: 13px;
            `;
if (item.on) {
btn.addEventListener(_0x7ac1(131), () => { btn.style.background = _0x7ac1(132); });
btn.addEventListener(_0x7ac1(133), () => { btn.style.background = _0x7ac1(134); });
btn.addEventListener(_0x7ac1(135), e => {
e.preventDefault();
e.stopPropagation();
closeMenu();
item.run();
});
}
menuEl.appendChild(btn);
}
document.body.appendChild(menuEl);
const r = menuEl.getBoundingClientRect();
menuEl.style.left = Math.min(x, window.innerWidth - r.width - 6) + _0x7ac1(136);
menuEl.style.top = Math.min(y, window.innerHeight - r.height - 6) + _0x7ac1(137);
}
document.addEventListener(_0x7ac1(138), e => {
if (menuEl && !menuEl.contains(e.target)) closeMenu();
}, true);
document.addEventListener(_0x7ac1(139), e => { if (e.key === _0x7ac1(140)) closeMenu(); }, true);
window.addEventListener(_0x7ac1(141), closeMenu, true);
function toast(msg) {
const t = document.createElement(_0x7ac1(142));
t.textContent = msg;
t.style.cssText = `
            position: fixed; left: 50%; bottom: 90px; transform: translateX(-50%);
            z-index: 100001; padding: 9px 14px; border-radius: 10px;
            background: rgba(24,24,27,.97); color: #fff; font-size: 13px;
            box-shadow: 0 4px 18px rgba(0,0,0,.4); pointer-events: none;
        `;
document.body.appendChild(t);
setTimeout(() => t.remove(), 3500);
}
const POS_KEY = _0x7ac1(143);
let floatEl = null;
let lastTemplate = null;
let drag = null;
let suppressClick = false;
function getPos() {
try { return JSON.parse(localStorage.getItem(POS_KEY)) || { mode: _0x7ac1(144) }; }
catch (_) { return { mode: _0x7ac1(145) }; }
}
function savePos(pos) {
try {
if (pos.mode === _0x7ac1(146)) localStorage.removeItem(POS_KEY);
else localStorage.setItem(POS_KEY, JSON.stringify(pos));
} catch (_) {}
}
function startMove(sourceButton) {
const pos = getPos();
if (pos.mode === _0x7ac1(147)) {
savePos({ ...pos, locked: false });
} else {
const r = sourceButton?.getBoundingClientRect();
const left = r ? r.left : window.innerWidth - 80;
const top = r ? r.top : window.innerHeight - 160;
savePos({ mode: _0x7ac1(148), x: left / window.innerWidth, y: top / window.innerHeight, locked: false });
}
renderFloat();
toast(_0x7ac1(149));
}
function lockPos() {
savePos({ ...getPos(), locked: true });
renderFloat();
toast(_0x7ac1(150));
}
function resetPos() {
savePos({ mode: _0x7ac1(151) });
renderFloat();
toast(_0x7ac1(152));
}
function clamp(v, min, max) {
return Math.max(min, Math.min(max, v));
}
function placeFloat(left, top) {
const w = floatEl.offsetWidth || 36;
const h = floatEl.offsetHeight || 36;
left = clamp(left, 4, window.innerWidth - w - 4);
top = clamp(top, 4, window.innerHeight - h - 4);
floatEl.style.left = left + _0x7ac1(153);
floatEl.style.top = top + _0x7ac1(154);
const popup = floatEl.querySelector(_0x7ac1(155));
if (top < 90) { popup.style.top = _0x7ac1(156); popup.style.bottom = _0x7ac1(157); }
else { popup.style.bottom = _0x7ac1(158); popup.style.top = _0x7ac1(159); }
if (left > window.innerWidth - 180) { popup.style.right = _0x7ac1(160); popup.style.left = _0x7ac1(161); }
else { popup.style.left = _0x7ac1(162); popup.style.right = _0x7ac1(163); }
}
function createFloat() {
const template = lastTemplate?.isConnected ? lastTemplate : null;
const el = createCounterButton(template);
el._zetaPlain = !template;
el.className = _0x7ac1(164);
el.style.position = _0x7ac1(165);
el.style.zIndex = _0x7ac1(166);
const btn = el.querySelector(_0x7ac1(167));
btn.addEventListener(_0x7ac1(168), e => {
if (e.button !== 0 || getPos().locked) return;
const r = el.getBoundingClientRect();
drag = { sx: e.clientX, sy: e.clientY, ox: r.left, oy: r.top, moved: false };
btn.setPointerCapture(e.pointerId);
});
btn.addEventListener(_0x7ac1(169), e => {
if (!drag) return;
const dx = e.clientX - drag.sx;
const dy = e.clientY - drag.sy;
if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
if (drag.moved) placeFloat(drag.ox + dx, drag.oy + dy);
});
btn.addEventListener(_0x7ac1(170), () => {
if (!drag) return;
if (drag.moved) {
const r = el.getBoundingClientRect();
savePos({ ...getPos(), x: r.left / window.innerWidth, y: r.top / window.innerHeight });
suppressClick = true;
}
drag = null;
});
btn.addEventListener(_0x7ac1(171), e => {
if (suppressClick) {
suppressClick = false;
e.preventDefault();
e.stopImmediatePropagation();
}
}, true);
document.body.appendChild(el);
return el;
}
function getLatestRaw() {
const body = getLatestAIBody();
const wrap = body && getCounter(body);
return wrap ? wrap._zetaRaw ?? null : null;
}
function renderFloat() {
if (!document.body) return;
const pos = getPos();
if (pos.mode !== _0x7ac1(172)) {
floatEl?.remove();
floatEl = null;
document.documentElement.classList.remove(_0x7ac1(173));
return;
}
document.documentElement.classList.add(_0x7ac1(174));
if (floatEl && floatEl._zetaPlain && lastTemplate?.isConnected) {
floatEl.remove();
floatEl = null;
}
if (!floatEl || !floatEl.isConnected) floatEl = createFloat();
const btn = floatEl.querySelector(_0x7ac1(175));
btn.style.outline = pos.locked ? _0x7ac1(176) : _0x7ac1(177);
btn.style.cursor = pos.locked ? _0x7ac1(178) : _0x7ac1(179);
btn.style.touchAction = pos.locked ? _0x7ac1(180) : _0x7ac1(181);
if (!drag) placeFloat(pos.x * window.innerWidth, pos.y * window.innerHeight);
const raw = getLatestRaw();
if (raw != null) {
setCounterRaw(floatEl, raw);
} else if (floatEl._zetaShown !== _0x7ac1(182)) {
floatEl._zetaShown = _0x7ac1(183);
floatEl.querySelector(_0x7ac1(184)).textContent = _0x7ac1(185);
}
}
window.addEventListener(_0x7ac1(186), () => { closeMenu(); renderFloat(); });
function setCounterRaw(wrap, raw) {
wrap._zetaRaw = raw;
const c = countRaw(raw);
const html =
`공백 포함 <b>${c.withSpaces.toLocaleString()}</b>자<br>` +
`공백 제외 <b>${c.withoutSpaces.toLocaleString()}</b>자`;
if (wrap._zetaShown !== html) {
wrap._zetaShown = html;
wrap.querySelector(_0x7ac1(187)).innerHTML = html;
}
}
function putCounter(body, raw) {
let wrap = getCounter(body);
if (!wrap) {
const bar = findActionBar(body);
if (!bar) return false;
const neighbor = Array.from(bar.querySelectorAll(_0x7ac1(188)))
.find(b => !b.closest(_0x7ac1(189)) && b.getBoundingClientRect().width > 0);
if (neighbor) lastTemplate = neighbor;
wrap = createCounterButton(neighbor);
bar.insertBefore(wrap, bar.firstChild);
}
setCounterRaw(wrap, raw);
const all = outerOf(body).querySelectorAll(SEL_BODY);
if (all.length > 1) {
console.log(TAG, `이 자리에 버전 ${all.length}개 → ${Array.from(all).indexOf(body) + 1}번째(보이는 것) 사용`,
Array.from(all).map(b => Math.round(visibleRatio(b) * 100) + _0x7ac1(190)).join(_0x7ac1(191)));
}
const key = hash(domText(body));
wrap._zetaKey = key;
saveCache(key, raw);
return true;
}
let pendingEdit = null;
function findEditedBody(target) {
if (!target) return null;
for (const attr of [_0x7ac1(192), _0x7ac1(193)]) {
const val = attr === _0x7ac1(194) ? target.key : target.index;
if (val == null) continue;
for (const w of document.querySelectorAll(`[${attr}]`)) {
if (w.getAttribute(attr) === val) {
const body = visibleBodyIn(w);
if (body) return body;
}
}
}
return null;
}
function pendingFor(body) {
if (!pendingEdit) return null;
if (Date.now() > pendingEdit.until) { pendingEdit = null; return null; }
if (pendingEdit.body?.isConnected) return pendingEdit.body === body ? pendingEdit.raw : null;
return findEditedBody(pendingEdit.target) === body ? pendingEdit.raw : null;
}
function resolveRaw(body, text, key) {
const p = pendingFor(body);
if (p != null) return p;
if (cache[key]) return cache[key].r;
const c = findCandidate(text);
if (c) console.log(TAG, _0x7ac1(195), countRaw(c.raw));
return c ? c.raw : null;
}
function check() {
syncEditMode();
if (editing) return;
if (pendingEdit) {
const body = findEditedBody(pendingEdit.target);
if (body && isAIBody(body) && pendingFor(body) != null) putCounter(body, pendingEdit.raw);
}
for (const wrap of document.querySelectorAll(_0x7ac1(196))) {
const outer = wrap.closest(_0x7ac1(197));
const body = outer && visibleBodyIn(outer);
if (!body) continue;
const text = domText(body);
const key = hash(text);
if (wrap._zetaKey === key) continue;
const raw = resolveRaw(body, text, key);
if (raw == null) {
wrap.remove();
continue;
}
setCounterRaw(wrap, raw);
wrap._zetaKey = key;
saveCache(key, raw);
}
const latest = getLatestAIBody();
if (latest && !getCounter(latest)) {
const text = domText(latest);
const raw = resolveRaw(latest, text, hash(text));
if (raw != null) putCounter(latest, raw);
}
renderFloat();
}
let checkTimer = null;
function scheduleCheck(delay = 200) {
if (checkTimer) return;
checkTimer = setTimeout(() => {
checkTimer = null;
try { check(); } catch (e) { console.warn(TAG, e); }
}, delay);
}
let editing = null;
let clickedTarget = null;
document.addEventListener(_0x7ac1(198), e => {
const el = e.target instanceof Element ? e.target : null;
if (!el) return;
const editBtn = el.closest(_0x7ac1(199));
if (editBtn) {
const w = editBtn.closest(_0x7ac1(200));
clickedTarget = w ? { key: w.getAttribute(_0x7ac1(201)), index: w.getAttribute(_0x7ac1(202)) } : null;
return;
}
if (pendingEdit && el.closest(_0x7ac1(203)) &&
!el.closest(_0x7ac1(204))) {
pendingEdit = null;
}
if (el.closest(_0x7ac1(205)) && editing) {
const body = editing.body || findEditedBody(editing.target);
if (body && isAIBody(body)) {
try { putCounter(body, editing.textarea.value ?? _0x7ac1(206)); } catch (_) {}
}
}
if (el.closest(_0x7ac1(207)) && editing) {
editing.cancelled = true;
}
}, true);
function getEditTextarea() {
const panel = document.querySelector(_0x7ac1(208));
if (!panel) return null;
if (!panel.querySelector(_0x7ac1(209))) return null;
if (!panel.querySelector(_0x7ac1(210))) return null;
return panel.querySelector(_0x7ac1(211));
}
function createEditCounter(textarea) {
const panel = textarea.closest(_0x7ac1(212));
const cancelBtn = panel?.querySelector(_0x7ac1(213));
if (!cancelBtn) return null;
const el = document.createElement(_0x7ac1(214));
el.className = _0x7ac1(215);
el.style.cssText = `
            display: flex; align-items: center; min-height: 32px; padding: 0 9px;
            border-radius: 9999px; background: rgba(255,255,255,.06);
            color: rgba(255,255,255,.78); font-size: 11px; line-height: 1;
            white-space: nowrap; user-select: none; pointer-events: none; flex-shrink: 0;
        `;
cancelBtn.insertAdjacentElement(_0x7ac1(216), el);
return el;
}
function logDiff(guess, real) {
const a = cleanRaw(guess);
const b = cleanRaw(real);
let i = 0;
while (i < a.length && i < b.length && a[i] === b[i]) i++;
console.log(
TAG, `바깥 숫자 보정: ${a.length}자 → ${b.length}자 (위치 ${i}부터 다름)`,
_0x7ac1(217), JSON.stringify(a.slice(Math.max(0, i - 20), i + 20)),
_0x7ac1(218), JSON.stringify(b.slice(Math.max(0, i - 20), i + 20)),
_0x7ac1(219), JSON.stringify(a),
_0x7ac1(220), JSON.stringify(b)
);
const src = candidates.find(c => c.raw === guess);
if (src) console.log(TAG, _0x7ac1(221), JSON.stringify(src.contents));
}
function onEditOpened(value) {
editing.initialRaw = value;
const body = findEditedBody(editing.target);
if (!body || !isAIBody(body)) return;
editing.body = body;
const wrap = getCounter(body);
if (wrap && wrap._zetaRaw != null && cleanRaw(wrap._zetaRaw) !== cleanRaw(value)) {
logDiff(wrap._zetaRaw, value);
}
putCounter(body, value);
}
function updateEdit() {
if (!editing) return;
const ta = editing.textarea;
const value = ta.value ?? _0x7ac1(222);
if (editing.initialRaw == null && value !== _0x7ac1(223)) onEditOpened(value);
editing.lastRaw = value;
if (!editing.el || !editing.el.isConnected) {
editing.el = createEditCounter(ta);
editing.shown = null;
if (!editing.el) return;
}
if (editing.shown === value) return;
editing.shown = value;
const c = countRaw(value);
editing.el.innerHTML =
`수정 중 · 공백 포함 <b style="margin-left:3px;">${c.withSpaces.toLocaleString()}</b>자` +
`&nbsp;&nbsp;·&nbsp;&nbsp;` +
`공백 제외 <b style="margin-left:3px;">${c.withoutSpaces.toLocaleString()}</b>자`;
}
function startEdit(textarea) {
editing = {
textarea,
el: createEditCounter(textarea),
target: clickedTarget,
initialRaw: null,
lastRaw: textarea.value,
cancelled: false,
shown: null
};
clickedTarget = null;
editing.onInput = () => updateEdit();
textarea.addEventListener(_0x7ac1(224), editing.onInput);
editing.timer = setInterval(syncEditMode, 150);
updateEdit();
console.log(TAG, _0x7ac1(225));
}
function endEdit() {
const ed = editing;
editing = null;
clearInterval(ed.timer);
ed.textarea.removeEventListener(_0x7ac1(226), ed.onInput);
ed.el?.remove();
const raw = ed.cancelled ? ed.initialRaw : (ed.textarea.value ?? ed.lastRaw);
if (!ed.cancelled && ed.target && raw != null) {
pendingEdit = { target: ed.target, body: ed.body || null, raw, until: Date.now() + 5000 };
[300, 1000, 2500, 4500].forEach(ms => setTimeout(() => scheduleCheck(0), ms));
}
console.log(TAG, ed.cancelled ? _0x7ac1(227) : _0x7ac1(228), countRaw(raw));
scheduleCheck(0);
}
function syncEditMode() {
const ta = getEditTextarea();
if (ta && (!editing || editing.textarea !== ta)) {
if (editing) endEdit();
startEdit(ta);
} else if (!ta && editing) {
endEdit();
} else if (editing) {
updateEdit();
}
}
function start() {
const style = document.createElement(_0x7ac1(229));
style.textContent = _0x7ac1(230);
document.head.appendChild(style);
new MutationObserver(() => scheduleCheck()).observe(document.documentElement, {
childList: true,
subtree: true
});
setInterval(() => scheduleCheck(0), 1500);
scheduleCheck(0);
}
if (document.readyState === _0x7ac1(231)) {
document.addEventListener(_0x7ac1(232), start, { once: true });
} else {
start();
}
})();
