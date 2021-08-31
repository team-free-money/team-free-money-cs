"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var uuid_1 = require("uuid");
var fs = require('fs');
var csv = require('csv-parser');
function scholarshipDataDownloader() {
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, downloadScholarship()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return main();
    function downloadScholarship() {
        return __awaiter(this, void 0, void 0, function () {
            var categories_2, _i, categories_1, category, results_1;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    categories_2 = [{ categoryId: uuid_1.v1(), categoryName: 'General' },
                        { categoryId: uuid_1.v1(), categoryName: 'Veteran' },
                        { categoryId: uuid_1.v1(), categoryName: 'Hispanic' },
                        { categoryId: uuid_1.v1(), categoryName: 'Native-American' },
                        { categoryId: uuid_1.v1(), categoryName: 'Women' }
                    ];
                    for (_i = 0, categories_1 = categories_2; _i < categories_1.length; _i++) {
                        category = categories_1[_i];
                        // const replyCategory = await insertCategory (category)
                        // console.log(replyCategory)
                    }
                    results_1 = [];
                    fs.createReadStream('./capstone.csv')
                        .pipe(csv())
                        .on('data', function (data) { return results_1.push(data); })
                        .on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                        var _i, results_2, result, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName, scholarshipCategoryName, scholarship, arrayOfCategoryNames, _a, arrayOfCategoryNames_1, categoryName, _b, categories_3, category, scholarshipCategory;
                        return __generator(this, function (_c) {
                            try {
                                console.log(results_1);
                                for (_i = 0, results_2 = results_1; _i < results_2.length; _i++) {
                                    result = results_2[_i];
                                    scholarshipAmount = result.scholarshipAmount, scholarshipCriteria = result.scholarshipCriteria, scholarshipDeadline = result.scholarshipDeadline, scholarshipDescription = result.scholarshipDescription, scholarshipLink = result.scholarshipLink, scholarshipName = result.scholarshipName, scholarshipCategoryName = result.scholarshipCategoryName;
                                    scholarship = {
                                        scholarshipId: uuid_1.v1(),
                                        scholarshipAmount: scholarshipAmount,
                                        scholarshipCriteria: scholarshipCriteria,
                                        scholarshipDeadline: scholarshipDeadline,
                                        scholarshipDescription: scholarshipDescription,
                                        scholarshipLink: scholarshipLink,
                                        scholarshipName: scholarshipName
                                    };
                                    // console.log(scholarship)
                                    console.log(scholarshipCategoryName);
                                    arrayOfCategoryNames = scholarshipCategoryName.split(' ');
                                    for (_a = 0, arrayOfCategoryNames_1 = arrayOfCategoryNames; _a < arrayOfCategoryNames_1.length; _a++) {
                                        categoryName = arrayOfCategoryNames_1[_a];
                                        console.log(categoryName);
                                        for (_b = 0, categories_3 = categories_2; _b < categories_3.length; _b++) {
                                            category = categories_3[_b];
                                            if (category.categoryName === categoryName) {
                                                scholarshipCategory = {
                                                    scholarshipCategoryCategoryId: category.categoryId,
                                                    scholarshipCategoryScholarshipId: scholarship.scholarshipId
                                                };
                                                // const replyCategoryName = await insertScholarshipCategory(scholarshipCategory)
                                                // console.log(replyCategoryName)
                                                console.log(scholarshipCategory);
                                            }
                                        }
                                    }
                                }
                            }
                            catch (error) {
                                throw error;
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    }
    ;
}
;
scholarshipDataDownloader()
    .then(function (finished) {
    console.log("finished");
})["catch"](function (error) {
    console.error(error);
});
