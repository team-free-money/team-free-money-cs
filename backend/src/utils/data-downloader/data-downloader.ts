import {v1 as uuid} from 'uuid';

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
                                scholarshipAmount: result.Amount,
                                scholarshipCriteria: result.Criteria,
                                scholarshipDeadline: new Date(result.date_time),
                                scholarshipDescription: result.Description,
                                scholarshipLink: result.Link,
                                scholarshipName: result.Name,
                                scholarshipCategoryName: result.CategoryName

                            }
                            const reply = await insertScholarship(scholarship)
                            console.log(reply)
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