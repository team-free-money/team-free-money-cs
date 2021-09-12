// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { ImageDropZone } from '../shared/components/ImageDropZone'
// import { FormDebugger } from '../shared/components/FormDebugger'
// export const EditUserFormContent = (props) => {
//     const {
//         setFieldValue,
//         status,
//         values,
//         errors,
//         touched,
//         dirty,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         handleReset
//     } = props;
//     console.log(values)
//
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 {/*controlId must match what is passed to the initialValues prop*/}
//                 <div className="form-group">
//                     <label htmlFor="userEmail">Email Address</label>
//                     <div className="input-group">
//                         <div className="input-group-prepend">
//                             <div className="input-group-text">
//                                 <FontAwesomeIcon icon="envelope"/>
//                             </div>
//                         </div>
//                         <input
//                             className="form-control"
//                             name="userEmail"
//                             type="email"
//                             value={values.userEmail}
//                             placeholder="Enter email"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//
//                         />
//                     </div>
//                     {
//                         errors.userEmail && touched.userEmail && (
//                             <div className="alert alert-danger">
//                                 {errors.userEmail}
//                             </div>
//                         )
//                     }
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="userName">User Name</label>
//                     <div className="input-group">
//                         <div className="input-group-prepend">
//                             <div className="input-group-text">
//                                 <FontAwesomeIcon icon="dove"/>
//                             </div>
//                         </div>
//                         <input
//                             className="form-control"
//                             name="userName"
//                             type="text"
//                             value={values.userName}
//                             placeholder="Enter User Name"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//
//                         />
//                     </div>
//                     {
//                         errors.userName && touched.userName && (
//                             <div className="alert alert-danger">
//                                 {errors.userName}
//                             </div>
//                         )
//                     }
//                 </div>
//                 <div className="form-group">
//                     <button className="btn btn-primary mb-2" type="submit">Submit</button>
//                     <button
//                         className="btn btn-danger mb-2"
//                         onClick={handleReset}
//                         disabled={!dirty || isSubmitting}
//                     >Reset
//                     </button>
//                 </div>
//                 <FormDebugger {...props} />
//             </form>
//
//             {
//                 status && (<div className={status.type}>{status.message}</div>)
//             }
//         </>
//
//
//     )
// };