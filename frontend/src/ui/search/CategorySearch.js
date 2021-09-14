import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllScholarships} from "../../store/scholarships";
import {fetchScholarshipByCategoryName, fetchScholarshipsByCategoryAndLikes} from "../../store/scholarshipCategory";
import {SearchCard} from "../shared/SearchCard";
import {Container} from "react-bootstrap";


export const CategorySearch = (props) => {
    const {match} = props
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchScholarshipsByCategoryAndLikes(match.params.categoryName))
    }
    React.useEffect(initialEffects, [match.params.categoryName, dispatch])
    console.log(match.params.categoryName)

    const scholarshipCategory = useSelector(state => state.scholarshipCategory ? state.scholarshipCategory : [])
    console.log(scholarshipCategory)
    return (
        <>
            <Container fluid>
                {scholarshipCategory.map(scholarship => <SearchCard key ={scholarship.scholarshipId} scholarship = {scholarship} match = {match}/>)}
            </Container>
        </>
    )
}