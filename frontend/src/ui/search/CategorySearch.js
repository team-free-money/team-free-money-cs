import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllScholarships} from "../../store/scholarships";
import {fetchScholarshipByCategoryName} from "../../store/scholarshipCategory";

export const CategorySearch = (props) => {
    const dispatch = useDispatch
    const initialEffects = () => {
        dispatch(fetchScholarshipByCategoryName())
    }


    const {keyword} = props
    // const categoryGeneral = useSelector((state) => state.category.categoryId ? state.category.categoryId : [])
    // const categoryNativeAmerican = useSelector((state) => state.category.categoryId ? state.category.categoryId : [])
    // const categoryHispanic = useSelector((state) => state.category.categoryId ? state.category.categoryId : [])
    // const categoryWomen = useSelector((state) => state.category.categoryId ? state.category.categoryId : [])
    // const categoryVeteran = useSelector((state) => state.category.categoryId ? state.category.categoryId : [])
    // console.log(categoryGeneral, categoryGeneral, categoryGeneral, categoryGeneral, categoryGeneral);
    // const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    return (
        <>
        it's alive
        </>
    )
}