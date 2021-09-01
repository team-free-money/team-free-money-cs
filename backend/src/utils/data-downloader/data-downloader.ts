import {v1 as uuid} from 'uuid';
import {Scholarship} from "../interfaces/Scholarship";
import {Category} from "../interfaces/Category";
import {ScholarshipCategory} from "../interfaces/ScholarshipCategory";
import {insertCategory} from "../category/insertCategory";
import {insertScholarshipCategory} from "../scholarshipCategory/insertScholarshipCat";
import {insertScholarship} from "../scholarship/insertScholarship";
const fs = require('fs')
const csv = require('csv-parser')

function scholarshipDataDownloader(): Promise<any>{
    async function main() {
        try {
            await downloadScholarship()

        } catch (error) {
            console.error(error)
        }

    }

    return main()

    async function downloadScholarship() {
        try {
           const categories: Category[] = [{categoryId: uuid(), categoryName: 'General'},
                {categoryId: uuid(), categoryName: 'Veteran'},
                {categoryId: uuid(), categoryName: 'Hispanic'},
                {categoryId: uuid(), categoryName: 'Native-American'},
                {categoryId: uuid(), categoryName: 'Women'}
            ]
            for (let category of categories) {

            const replyCategory = await insertCategory (category)
            console.log(replyCategory)

            }
            const results: any = [];
            fs.createReadStream('./capstone.csv')
                .pipe(csv())
                .on('data', (data: any) => results.push(data))
                .on('end', async () => {
                    try {
                        for (let result of results) {
                            const {scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName, scholarshipCategoryName
                            } = result
                            const scholarship: Scholarship = {
                                scholarshipId: uuid(),
                                scholarshipAmount: scholarshipAmount,
                                scholarshipCriteria: scholarshipCriteria,
                                scholarshipDeadline: scholarshipDeadline,
                                scholarshipDescription: scholarshipDescription,
                                scholarshipLink: scholarshipLink,
                                scholarshipName: scholarshipName

                            }

                            const reply = await insertScholarship(scholarship)
                            console.log(reply)
                            const arrayOfCategoryNames:[] = scholarshipCategoryName.split(' ')
                            for (let categoryName of arrayOfCategoryNames){
                                for (let category of categories){
                                    if (category.categoryName === categoryName){
                                        const scholarshipCategory : ScholarshipCategory = {
                                            scholarshipCategoryCategoryId : category.categoryId,
                                            scholarshipCategoryScholarshipId : scholarship.scholarshipId
                                        }
                                        const replyCategoryName = await insertScholarshipCategory(scholarshipCategory)
                                        console.log(replyCategoryName)
                                    }
                                }


                            }


                        }
                    } catch (error) {
                        throw error
                    }
                });

        } catch (error) {
            throw error
        }
    };
};

scholarshipDataDownloader()
    .then(finished => {
        console.log("finished")
    }).catch(error => {
    console.error(error)
})