// import { useEffect, useState } from "react";
// import "../../assets/css/checkBox.css";
// import MenuIcon from "@mui/icons-material/Menu";
// const CheckBox = ({
//   isLandMarksChecked,
//   // handleCheckboxChange,
//   isSchoolsMarkChecked,
//   handleSchoolMarkChange,
//   isMallsMarkChecked,
//   handleMallMarkChange,
//   isHospitalMarkChecked,
//   handleHospitalMarkChange,
//   handleSocietiesMarkChange,
//   isSocietiesMarkChecked,
//   societiesListSocieties
// }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   useEffect(() => {
//     // Listen for orientation changes
//     window.addEventListener("resize", () => {
//       let screenWidth = window.visualViewport.width;
//       if (screenWidth >= "935") {
//         setIsOpen(true);
//       } else {
//         setIsOpen(false);
//       }
//     });
//   }, []);

//   console.log(societiesListSocieties, "societiesListSocieties222")

//   const handleClicked = (e) => {
//     e.preventDefault
//   }



//   // Test

//   const [checkedStates, setCheckedStates] = useState(new Array(societiesListSocieties.length).fill(false));

//   const handleCheckboxChange = (index) => {
//     const updatedCheckedStates = [...checkedStates];
//     updatedCheckedStates[index] = !updatedCheckedStates[index];
//     setCheckedStates(updatedCheckedStates);
//   };



//   console.log(checkedStates, "checkedStates")
//   // Test

//   return (
//     <div className="check-container" dir="rtl">
//       <div className="checkMenuIcon" onClick={() => setIsOpen((prev) => !prev)}>
//         <MenuIcon />
//       </div>
//       {isOpen && (
//         <div className="checkBoxes-con">
//           <h3>اختيارات الخريطة</h3>

//           <div className="markCheckCon">
//             {/* {societiesListSocieties?.map((society, index) => (
//               <div
//                 key={index}
//                 className="markCheck"
//                 style={{
//                   background: isLandMarksChecked ? "#fff" : "transparent",
//                 }}
//               >
//                 <input
//                   type="checkbox"
//                   id="show"
//                   checked={isLandMarksChecked}
//                   hidden
//                   onChange={handleCheckboxChange}
//                 />
//                 <label htmlFor="show">
//                   <span>{society.name}</span>
//                   <span style={{ width: "23px", height: "23px" }}>
//                     <svg
//                       viewBox="0 0 18 17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M9.30957 0C4.6089 0 0.80957 3.79933 0.80957 8.5C0.80957 13.2007 4.6089 17 9.30957 17C14.0102 17 17.8096 13.2007 17.8096 8.5C17.8096 3.79933 14.0102 0 9.30957 0Z"
//                         fill={isLandMarksChecked ? "black" : "#C2BFB2"}
//                       ></path>
//                       <path
//                         d="M4.39596 7.21096C4.33975 7.15506 4.28353 7.09916 4.20483 7.00972C4.62953 6.94939 5.04648 6.8852 5.45729 6.82196C6.03611 6.73286 6.60273 6.64563 7.16166 6.5737C7.54391 6.52898 7.76877 6.39482 7.93741 6.02588C8.30947 5.2159 8.70852 4.43275 9.12651 3.61243C9.17584 3.51561 9.22544 3.41827 9.27529 3.32031C9.29065 3.34705 9.3047 3.36988 9.31744 3.39057C9.34199 3.43044 9.36167 3.46239 9.37647 3.49919C9.60132 3.96316 9.8318 4.42434 10.0623 4.88552C10.2927 5.34669 10.5232 5.80787 10.7481 6.27184C10.8268 6.42836 10.9167 6.49544 11.0966 6.5178C11.9556 6.63594 12.7998 6.76146 13.6532 6.88837C13.8497 6.91759 14.0468 6.94689 14.2446 6.97618C14.2614 6.98177 14.2783 6.98457 14.2951 6.98736C14.312 6.99016 14.3289 6.99295 14.3457 6.99854C14.357 7.00972 14.3682 7.0237 14.3795 7.03767C14.3907 7.05165 14.402 7.06562 14.4132 7.0768C14.3968 7.08379 14.3804 7.0903 14.3642 7.09672C14.3027 7.12112 14.2441 7.14436 14.1996 7.1886C13.8286 7.54078 13.4632 7.89575 13.0978 8.25071C12.7324 8.60568 12.367 8.96064 11.996 9.31281C11.8723 9.42461 11.8386 9.53641 11.8723 9.70411C11.9998 10.3824 12.1172 11.0606 12.2346 11.7389C12.2933 12.078 12.352 12.4171 12.412 12.7563C12.4192 12.785 12.4172 12.8229 12.4148 12.8671C12.4134 12.8918 12.412 12.9183 12.412 12.9463C12.3604 12.9271 12.3163 12.9042 12.2732 12.8818C12.241 12.8652 12.2095 12.8488 12.1759 12.8345C11.2767 12.3651 10.3768 11.8953 9.46641 11.4147C9.34274 11.3476 9.24156 11.3476 9.11789 11.4147C8.20725 11.8842 7.29661 12.3649 6.38597 12.8457C6.34971 12.8697 6.31014 12.8873 6.26563 12.9071C6.22735 12.9242 6.18537 12.9428 6.13858 12.9687C6.19478 12.6557 6.23975 12.3762 6.28472 12.0967C6.40189 11.3879 6.52756 10.6874 6.65433 9.98079C6.67352 9.87381 6.69274 9.7667 6.71195 9.65939C6.74568 9.53641 6.71195 9.45815 6.62201 9.36871C5.87999 8.65319 5.13798 7.93767 4.39596 7.21096Z"
//                         fill="#ECE7DC"
//                       ></path>
//                     </svg>


//                   </span>
//                 </label>
//               </div>

//             ))} */}


//             {societiesListSocieties.map((society, index) => (
//               <div
//                 key={index}
//                 className="markCheck"
//                 onClick={() => handleCheckboxChange(index)} // Toggle this specific society's checkbox
//                 style={{
//                   background: checkedStates[index] ? "#fff" : "transparent", // Background based on specific index
//                 }}
//               >
//                 <input
//                   type="checkbox"
//                   id={`show-${index}`} // Unique ID for each checkbox
//                   checked={checkedStates[index]} // Checked state based on specific index
//                   hidden
//                   onChange={() => handleCheckboxChange(index)}
//                 />
//                 <label htmlFor={`show-${index}`}>
//                   <span>{society.name}</span>
//                   <span style={{ width: "23px", height: "23px" }}>
//                     <svg
//                       viewBox="0 0 18 17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M9.30957 0C4.6089 0 0.80957 3.79933 0.80957 8.5C0.80957 13.2007 4.6089 17 9.30957 17C14.0102 17 17.8096 13.2007 17.8096 8.5C17.8096 3.79933 14.0102 0 9.30957 0Z"
//                         fill={checkedStates[index] ? "black" : "#C2BFB2"} // Fill color based on specific index
//                       ></path>
//                       <path
//                         d="M4.39596 7.21096C4.33975 7.15506 4.28353 7.09916 4.20483 7.00972C4.62953 6.94939 5.04648 6.8852 5.45729 6.82196C6.03611 6.73286 6.60273 6.64563 7.16166 6.5737C7.54391 6.52898 7.76877 6.39482 7.93741 6.02588C8.30947 5.2159 8.70852 4.43275 9.12651 3.61243C9.17584 3.51561 9.22544 3.41827 9.27529 3.32031C9.29065 3.34705 9.3047 3.36988 9.31744 3.39057C9.34199 3.43044 9.36167 3.46239 9.37647 3.49919C9.60132 3.96316 9.8318 4.42434 10.0623 4.88552C10.2927 5.34669 10.5232 5.80787 10.7481 6.27184C10.8268 6.42836 10.9167 6.49544 11.0966 6.5178C11.9556 6.63594 12.7998 6.76146 13.6532 6.88837C13.8497 6.91759 14.0468 6.94689 14.2446 6.97618C14.2614 6.98177 14.2783 6.98457 14.2951 6.98736C14.312 6.99016 14.3289 6.99295 14.3457 6.99854C14.357 7.00972 14.3682 7.0237 14.3795 7.03767C14.3907 7.05165 14.402 7.06562 14.4132 7.0768C14.3968 7.08379 14.3804 7.0903 14.3642 7.09672C14.3027 7.12112 14.2441 7.14436 14.1996 7.1886C13.8286 7.54078 13.4632 7.89575 13.0978 8.25071C12.7324 8.60568 12.367 8.96064 11.996 9.31281C11.8723 9.42461 11.8386 9.53641 11.8723 9.70411C11.9998 10.3824 12.1172 11.0606 12.2346 11.7389C12.2933 12.078 12.352 12.4171 12.412 12.7563C12.4192 12.785 12.4172 12.8229 12.4148 12.8671C12.4134 12.8918 12.412 12.9183 12.412 12.9463C12.3604 12.9271 12.3163 12.9042 12.2732 12.8818C12.241 12.8652 12.2095 12.8488 12.1759 12.8345C11.2767 12.3651 10.3768 11.8953 9.46641 11.4147C9.34274 11.3476 9.24156 11.3476 9.11789 11.4147C8.20725 11.8842 7.29661 12.3649 6.38597 12.8457C6.34971 12.8697 6.31014 12.8873 6.26563 12.9071C6.22735 12.9242 6.18537 12.9428 6.13858 12.9687C6.19478 12.6557 6.23975 12.3762 6.28472 12.0967C6.40189 11.3879 6.52756 10.6874 6.65433 9.98079C6.67352 9.87381 6.69274 9.7667 6.71195 9.65939C6.74568 9.53641 6.71195 9.45815 6.62201 9.36871C5.87999 8.65319 5.13798 7.93767 4.39596 7.21096Z"
//                         fill="#ECE7DC"
//                       ></path>
//                     </svg>
//                   </span>
//                 </label>
//               </div>
//             ))}

//             {/* 
//             <div
//               className="markCheck"
//               style={{
//                 background: isSchoolsMarkChecked ? "#fff" : "transparent",
//               }}
//             >
//               <input
//                 type="checkbox"
//                 id="school"
//                 checked={isSchoolsMarkChecked}
//                 hidden
//                 onChange={handleSchoolMarkChange}
//               />
//               <label htmlFor="school">
//                 <span>المدارس</span>
//                 <span style={{ width: "25px", height: "25px" }}>
//                   <svg
//                     viewBox="0 0 25 25"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle
//                       cx="12"
//                       cy="12.1616"
//                       r="11.5"
//                       fill={isSchoolsMarkChecked ? "#8A95EF" : "#b8b8b8"}
//                       stroke="white"
//                     ></circle>
//                     <path
//                       d="M12.0526 6.50391L4.52521 10.5185L12.0526 14.6334L17.5727 11.6225V16.2394L17.2716 17.9455H18.7771L18.476 16.2394V11.2211L19.58 10.6188L12.0526 6.50391ZM7.43582 13.128V15.9382C7.43582 17.243 9.54346 18.2466 12.0526 18.347C14.6621 18.4474 16.569 17.243 16.6694 15.9382V13.128L12.0526 15.6371L7.43582 13.128Z"
//                       fill="white"
//                     ></path>
//                   </svg>
//                 </span>
//               </label>
//             </div>
//             <div
//               className="markCheck"
//               style={{
//                 background: isMallsMarkChecked ? "#fff" : "transparent",
//               }}
//             >
//               <input
//                 type="checkbox"
//                 id="malls"
//                 checked={isMallsMarkChecked}
//                 hidden
//                 onChange={handleMallMarkChange}
//               />
//               <label htmlFor="malls">
//                 <span>مجمعات تجارية</span>
//                 <span style={{ width: "25px", height: "25px" }}>
//                   <svg
//                     viewBox="0 0 25 25"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle
//                       cx="12"
//                       cy="12.1616"
//                       r="11.5"
//                       fill={isMallsMarkChecked ? "#FCB270" : "#b8b8b8"}
//                       stroke="white"
//                     ></circle>
//                     <path
//                       d="M17.2495 8.42451H15.3225C15.0816 6.65809 13.7166 5.21289 12.1108 5.21289C10.505 5.21289 9.13999 6.5778 8.89911 8.42451H6.97212L5.92828 17.899H18.2933L17.2495 8.42451ZM12.1108 6.01574C13.3152 6.01574 14.3589 6.97931 14.5195 8.34427H9.70202C9.94289 7.0596 10.9064 6.01574 12.1108 6.01574ZM15.3225 10.1107C15.3332 10.5325 15.2606 10.9523 15.109 11.346C14.9574 11.7398 14.7297 12.0997 14.4389 12.4054C14.148 12.7111 13.7999 12.9565 13.4142 13.1276C13.0285 13.2987 12.6129 13.3922 12.1911 13.4026H12.1108C11.259 13.4026 10.4421 13.0642 9.83979 12.4619C9.23748 11.8596 8.89911 11.0427 8.89911 10.1909V9.95008H9.70202V10.1107C9.70202 11.4757 10.8261 12.5997 12.1108 12.5997C13.3955 12.5997 14.5195 11.4757 14.5195 10.1107V9.95008H15.3225V10.1107Z"
//                       fill="white"
//                     ></path>
//                   </svg>
//                 </span>
//               </label>
//             </div>
//             <div
//               className="markCheck"
//               style={{
//                 background: isHospitalMarkChecked ? "#fff" : "transparent",
//               }}
//             >
//               <input
//                 type="checkbox"
//                 id="hospitals"
//                 checked={isHospitalMarkChecked}
//                 hidden
//                 onChange={handleHospitalMarkChange}
//               />
//               <label htmlFor="hospitals">
//                 <span>مستشفيات</span>
//                 <span style={{ width: "25px", height: "25px" }}>
//                   <svg
//                     viewBox="0 0 18 18"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M17.1765 8.70214C17.1765 13.3966 13.3709 17.2021 8.67651 17.2021C3.98209 17.2021 0.176514 13.3966 0.176514 8.70214C0.176514 4.00772 3.98209 0.202148 8.67651 0.202148C13.3709 0.202148 17.1765 4.00772 17.1765 8.70214Z"
//                       fill={isHospitalMarkChecked ? "#EB7979" : "#b8b8b8"}
//                     ></path>
//                     <path
//                       d="M11.9873 12.959H10.1161L10.0463 9.45749H7.29966V12.8892L7.24257 12.9463H5.3713L5.31421 12.8892V4.51608L5.3713 4.45898H7.24257L7.29966 4.51608V7.94778H10.059V4.51608L10.1161 4.45898H11.9873L12.0444 4.51608V12.9019L11.9873 12.959Z"
//                       fill="white"
//                     ></path>
//                   </svg>
//                 </span>
//               </label>
//             </div>
//             <div
//               className="markCheck"
//               style={{
//                 background: isHospitalMarkChecked ? "#fff" : "transparent",
//               }}
//             >
//               <input
//                 type="checkbox"
//                 id="hospitals"
//                 checked={isSocietiesMarkChecked}
//                 hidden
//                 onChange={handleSocietiesMarkChange}
//               />
//               <label htmlFor="hospitals">
//                 <span>جمعيات الرياض</span>
//                 <span style={{ width: "25px", height: "25px" }}>
//                   <svg
//                     viewBox="0 0 18 18"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M17.1765 8.70214C17.1765 13.3966 13.3709 17.2021 8.67651 17.2021C3.98209 17.2021 0.176514 13.3966 0.176514 8.70214C0.176514 4.00772 3.98209 0.202148 8.67651 0.202148C13.3709 0.202148 17.1765 4.00772 17.1765 8.70214Z"
//                       fill={isHospitalMarkChecked ? "#EB7979" : "#b8b8b8"}
//                     ></path>
//                     <path
//                       d="M11.9873 12.959H10.1161L10.0463 9.45749H7.29966V12.8892L7.24257 12.9463H5.3713L5.31421 12.8892V4.51608L5.3713 4.45898H7.24257L7.29966 4.51608V7.94778H10.059V4.51608L10.1161 4.45898H11.9873L12.0444 4.51608V12.9019L11.9873 12.959Z"
//                       fill="white"
//                     ></path>
//                   </svg>
//                 </span>
//               </label>
//             </div> */}

//           </div>

//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckBox;


// +++++++++++++++++++++++++++++++++++++++++++++++++++


// import { useEffect, useState } from "react";
// import "../../assets/css/checkBox.css";
// import MenuIcon from "@mui/icons-material/Menu";

// const CheckBox = ({ societiesListSocieties }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [checkedStates, setCheckedStates] = useState([]);

//   useEffect(() => {
//     // Listen for orientation changes
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     // Initialize the checkedStates array only after societiesListSocieties is available and has length
//     if (societiesListSocieties && societiesListSocieties.length > 0) {
//       setCheckedStates(new Array(societiesListSocieties.length).fill(false));
//     }
//   }, [societiesListSocieties]);  // Dependency on societiesListSocieties

//   const handleResize = () => {
//     let screenWidth = window.visualViewport.width;
//     if (screenWidth >= 935) {  // Fixed comparison to be numerical
//       setIsOpen(true);
//     } else {
//       setIsOpen(false);
//     }
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedCheckedStates = [...checkedStates];
//     updatedCheckedStates[index] = !updatedCheckedStates[index];
//     setCheckedStates(updatedCheckedStates);
//   };

//   return (
//     <div className="check-container" dir="rtl">
//       <div className="checkMenuIcon" onClick={() => setIsOpen((prev) => !prev)}>
//         <MenuIcon />
//       </div>
//       {isOpen && (
//         <div className="checkBoxes-con">
//           <h3>اختيارات الخريطة</h3>
//           <div className="markCheckCon">
//             {societiesListSocieties && societiesListSocieties.map((society, index) => (
//               <div
//                 key={index}
//                 className="markCheck"
//                 onClick={() => handleCheckboxChange(index)}
//                 style={{
//                   background: checkedStates[index] ? "#fff" : "transparent",
//                 }}
//               >

//                 <input
//                   type="checkbox"
//                   id={`show-${index}`} // Unique ID for each checkbox
//                   checked={checkedStates[index]} // Checked state based on specific index
//                   hidden
//                   onChange={() => handleCheckboxChange(index)}
//                 />
//                 <label htmlFor={`show-${index}`}>
//                   <span>{society.name}</span>
//                   <span style={{ width: "23px", height: "23px" }}>
//                     <svg
//                       viewBox="0 0 18 17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M9.30957 0C4.6089 0 0.80957 3.79933 0.80957 8.5C0.80957 13.2007 4.6089 17 9.30957 17C14.0102 17 17.8096 13.2007 17.8096 8.5C17.8096 3.79933 14.0102 0 9.30957 0Z"
//                         fill={checkedStates[index] ? "black" : "#C2BFB2"} // Fill color based on specific index
//                       ></path>
//                       <path
//                         d="M4.39596 7.21096C4.33975 7.15506 4.28353 7.09916 4.20483 7.00972C4.62953 6.94939 5.04648 6.8852 5.45729 6.82196C6.03611 6.73286 6.60273 6.64563 7.16166 6.5737C7.54391 6.52898 7.76877 6.39482 7.93741 6.02588C8.30947 5.2159 8.70852 4.43275 9.12651 3.61243C9.17584 3.51561 9.22544 3.41827 9.27529 3.32031C9.29065 3.34705 9.3047 3.36988 9.31744 3.39057C9.34199 3.43044 9.36167 3.46239 9.37647 3.49919C9.60132 3.96316 9.8318 4.42434 10.0623 4.88552C10.2927 5.34669 10.5232 5.80787 10.7481 6.27184C10.8268 6.42836 10.9167 6.49544 11.0966 6.5178C11.9556 6.63594 12.7998 6.76146 13.6532 6.88837C13.8497 6.91759 14.0468 6.94689 14.2446 6.97618C14.2614 6.98177 14.2783 6.98457 14.2951 6.98736C14.312 6.99016 14.3289 6.99295 14.3457 6.99854C14.357 7.00972 14.3682 7.0237 14.3795 7.03767C14.3907 7.05165 14.402 7.06562 14.4132 7.0768C14.3968 7.08379 14.3804 7.0903 14.3642 7.09672C14.3027 7.12112 14.2441 7.14436 14.1996 7.1886C13.8286 7.54078 13.4632 7.89575 13.0978 8.25071C12.7324 8.60568 12.367 8.96064 11.996 9.31281C11.8723 9.42461 11.8386 9.53641 11.8723 9.70411C11.9998 10.3824 12.1172 11.0606 12.2346 11.7389C12.2933 12.078 12.352 12.4171 12.412 12.7563C12.4192 12.785 12.4172 12.8229 12.4148 12.8671C12.4134 12.8918 12.412 12.9183 12.412 12.9463C12.3604 12.9271 12.3163 12.9042 12.2732 12.8818C12.241 12.8652 12.2095 12.8488 12.1759 12.8345C11.2767 12.3651 10.3768 11.8953 9.46641 11.4147C9.34274 11.3476 9.24156 11.3476 9.11789 11.4147C8.20725 11.8842 7.29661 12.3649 6.38597 12.8457C6.34971 12.8697 6.31014 12.8873 6.26563 12.9071C6.22735 12.9242 6.18537 12.9428 6.13858 12.9687C6.19478 12.6557 6.23975 12.3762 6.28472 12.0967C6.40189 11.3879 6.52756 10.6874 6.65433 9.98079C6.67352 9.87381 6.69274 9.7667 6.71195 9.65939C6.74568 9.53641 6.71195 9.45815 6.62201 9.36871C5.87999 8.65319 5.13798 7.93767 4.39596 7.21096Z"
//                         fill="#ECE7DC"
//                       ></path>
//                     </svg>
//                   </span>
//                 </label>

//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckBox;


// ++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++

// import { useEffect, useState } from "react";
// import "../../assets/css/checkBox.css";
// import MenuIcon from "@mui/icons-material/Menu";

// const CheckBox = ({ societiesListSocieties }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [checkedStates, setCheckedStates] = useState([]);

//   useEffect(() => {
//     // Listen for orientation changes
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     // Initialize the checkedStates array only after societiesListSocieties is available and has length
//     if (societiesListSocieties && societiesListSocieties.length > 0) {
//       setCheckedStates(new Array(societiesListSocieties.length).fill(false));
//     }
//   }, [societiesListSocieties]);  // Dependency on societiesListSocieties

//   const handleResize = () => {
//     let screenWidth = window.visualViewport.width;
//     setIsOpen(screenWidth >= 935);
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedCheckedStates = [...checkedStates];
//     updatedCheckedStates[index] = !updatedCheckedStates[index];
//     setCheckedStates(index);
//     console.log(index, 'checkedStates')
//     console.log(updatedCheckedStates, "checkedStates")

//   };

//   return (
//     <div className="check-container" dir="rtl">
//       <div className="checkMenuIcon" onClick={() => setIsOpen((prev) => !prev)}>
//         <MenuIcon />
//       </div>
//       {isOpen && (
//         <div className="checkBoxes-con">
//           <h3>اختيارات الخريطة</h3>
//           <div className="markCheckCon">
//             {societiesListSocieties && societiesListSocieties.map((society, index) => (
//               <div
//                 key={index}
//                 className="markCheck"
//                 style={{
//                   background: checkedStates === index ? "#fff" : "transparent",
//                 }}
//               >
//                 <input
//                   type="checkbox"
//                   id={`show-${index}`}
//                   checked={checkedStates === index ? true : false}
//                   onChange={() => handleCheckboxChange(index)}
//                   hidden
//                 />
//                 <label htmlFor={`show-${index}`} onClick={() => handleCheckboxChange(index)}>
//                   <span>{society.name}</span>
//                   <span style={{ width: "23px", height: "23px" }}>
//                     <svg
//                       viewBox="0 0 18 17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M9.30957 0C4.6089 0 0.80957 3.79933 0.80957 8.5C0.80957 13.2007 4.6089 17 9.30957 17C14.0102 17 17.8096 13.2007 17.8096 8.5C17.8096 3.79933 14.0102 0 9.30957 0Z"
//                         fill={checkedStates === index ? "black" : "#C2BFB2"} // Fill color based on specific index
//                       ></path>
//                       <path
//                         d="M4.39596 7.21096C4.33975 7.15506 4.28353 7.09916 4.20483 7.00972C4.62953 6.94939 5.04648 6.8852 5.45729 6.82196C6.03611 6.73286 6.60273 6.64563 7.16166 6.5737C7.54391 6.52898 7.76877 6.39482 7.93741 6.02588C8.30947 5.2159 8.70852 4.43275 9.12651 3.61243C9.17584 3.51561 9.22544 3.41827 9.27529 3.32031C9.29065 3.34705 9.3047 3.36988 9.31744 3.39057C9.34199 3.43044 9.36167 3.46239 9.37647 3.49919C9.60132 3.96316 9.8318 4.42434 10.0623 4.88552C10.2927 5.34669 10.5232 5.80787 10.7481 6.27184C10.8268 6.42836 10.9167 6.49544 11.0966 6.5178C11.9556 6.63594 12.7998 6.76146 13.6532 6.88837C13.8497 6.91759 14.0468 6.94689 14.2446 6.97618C14.2614 6.98177 14.2783 6.98457 14.2951 6.98736C14.312 6.99016 14.3289 6.99295 14.3457 6.99854C14.357 7.00972 14.3682 7.0237 14.3795 7.03767C14.3907 7.05165 14.402 7.06562 14.4132 7.0768C14.3968 7.08379 14.3804 7.0903 14.3642 7.09672C14.3027 7.12112 14.2441 7.14436 14.1996 7.1886C13.8286 7.54078 13.4632 7.89575 13.0978 8.25071C12.7324 8.60568 12.367 8.96064 11.996 9.31281C11.8723 9.42461 11.8386 9.53641 11.8723 9.70411C11.9998 10.3824 12.1172 11.0606 12.2346 11.7389C12.2933 12.078 12.352 12.4171 12.412 12.7563C12.4192 12.785 12.4172 12.8229 12.4148 12.8671C12.4134 12.8918 12.412 12.9183 12.412 12.9463C12.3604 12.9271 12.3163 12.9042 12.2732 12.8818C12.241 12.8652 12.2095 12.8488 12.1759 12.8345C11.2767 12.3651 10.3768 11.8953 9.46641 11.4147C9.34274 11.3476 9.24156 11.3476 9.11789 11.4147C8.20725 11.8842 7.29661 12.3649 6.38597 12.8457C6.34971 12.8697 6.31014 12.8873 6.26563 12.9071C6.22735 12.9242 6.18537 12.9428 6.13858 12.9687C6.19478 12.6557 6.23975 12.3762 6.28472 12.0967C6.40189 11.3879 6.52756 10.6874 6.65433 9.98079C6.67352 9.87381 6.69274 9.7667 6.71195 9.65939C6.74568 9.53641 6.71195 9.45815 6.62201 9.36871C5.87999 8.65319 5.13798 7.93767 4.39596 7.21096Z"
//                         fill="#ECE7DC"
//                       ></path>
//                     </svg>
//                   </span>
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckBox;
// ++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++ ++++++++++




// ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++

// import { useEffect, useState } from "react";
// import "../../assets/css/checkBox.css";
// import MenuIcon from "@mui/icons-material/Menu";

// const CheckBox = ({ societiesListSocieties }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [checkedStates, setCheckedStates] = useState([]);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (societiesListSocieties && societiesListSocieties.length > 0) {
//       setCheckedStates(new Array(societiesListSocieties.length).fill(false));
//     }
//   }, [societiesListSocieties]);

//   const handleResize = () => {
//     let screenWidth = window.visualViewport.width;
//     setIsOpen(screenWidth >= 935);
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedCheckedStates = [...checkedStates];
//     updatedCheckedStates[index] = !updatedCheckedStates[index];
//     setCheckedStates(updatedCheckedStates);
//   };

//   return (
//     <div className="check-container" dir="rtl">
//       <div className="checkMenuIcon" onClick={() => setIsOpen((prev) => !prev)}>
//         <MenuIcon />
//       </div>
//       {isOpen && (
//         <div className="checkBoxes-con">
//           <h3>اختيارات الخريطة</h3>
//           <div className="markCheckCon">
//             {societiesListSocieties && societiesListSocieties.map((society, index) => (
//               <div
//                 key={index}
//                 className="markCheck"
//                 onClick={() => handleCheckboxChange(index)}
//                 style={{
//                   background: checkedStates[index] ? "#fff" : "transparent",
//                 }}
//               >
//                 <label htmlFor={`show-${index}`} style={{ width: "100%" }}>
//                   <span>{society.name}</span>
//                   <span style={{ width: "23px", height: "23px" }}>
//                     <svg
//                       viewBox="0 0 18 17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M9.30957 0C4.6089 0 0.80957 3.79933 0.80957 8.5C0.80957 13.2007 4.6089 17 9.30957 17C14.0102 17 17.8096 13.2007 17.8096 8.5C17.8096 3.79933 14.0102 0 9.30957 0Z"
//                         fill={checkedStates[index] ? "black" : "#C2BFB2"} // Fill color based on specific index
//                       ></path>
//                       <path
//                         d="M4.39596 7.21096C4.33975 7.15506 4.28353 7.09916 4.20483 7.00972C4.62953 6.94939 5.04648 6.8852 5.45729 6.82196C6.03611 6.73286 6.60273 6.64563 7.16166 6.5737C7.54391 6.52898 7.76877 6.39482 7.93741 6.02588C8.30947 5.2159 8.70852 4.43275 9.12651 3.61243C9.17584 3.51561 9.22544 3.41827 9.27529 3.32031C9.29065 3.34705 9.3047 3.36988 9.31744 3.39057C9.34199 3.43044 9.36167 3.46239 9.37647 3.49919C9.60132 3.96316 9.8318 4.42434 10.0623 4.88552C10.2927 5.34669 10.5232 5.80787 10.7481 6.27184C10.8268 6.42836 10.9167 6.49544 11.0966 6.5178C11.9556 6.63594 12.7998 6.76146 13.6532 6.88837C13.8497 6.91759 14.0468 6.94689 14.2446 6.97618C14.2614 6.98177 14.2783 6.98457 14.2951 6.98736C14.312 6.99016 14.3289 6.99295 14.3457 6.99854C14.357 7.00972 14.3682 7.0237 14.3795 7.03767C14.3907 7.05165 14.402 7.06562 14.4132 7.0768C14.3968 7.08379 14.3804 7.0903 14.3642 7.09672C14.3027 7.12112 14.2441 7.14436 14.1996 7.1886C13.8286 7.54078 13.4632 7.89575 13.0978 8.25071C12.7324 8.60568 12.367 8.96064 11.996 9.31281C11.8723 9.42461 11.8386 9.53641 11.8723 9.70411C11.9998 10.3824 12.1172 11.0606 12.2346 11.7389C12.2933 12.078 12.352 12.4171 12.412 12.7563C12.4192 12.785 12.4172 12.8229 12.4148 12.8671C12.4134 12.8918 12.412 12.9183 12.412 12.9463C12.3604 12.9271 12.3163 12.9042 12.2732 12.8818C12.241 12.8652 12.2095 12.8488 12.1759 12.8345C11.2767 12.3651 10.3768 11.8953 9.46641 11.4147C9.34274 11.3476 9.24156 11.3476 9.11789 11.4147C8.20725 11.8842 7.29661 12.3649 6.38597 12.8457C6.34971 12.8697 6.31014 12.8873 6.26563 12.9071C6.22735 12.9242 6.18537 12.9428 6.13858 12.9687C6.19478 12.6557 6.23975 12.3762 6.28472 12.0967C6.40189 11.3879 6.52756 10.6874 6.65433 9.98079C6.67352 9.87381 6.69274 9.7667 6.71195 9.65939C6.74568 9.53641 6.71195 9.45815 6.62201 9.36871C5.87999 8.65319 5.13798 7.93767 4.39596 7.21096Z"
//                         fill="#ECE7DC"
//                       ></path>
//                     </svg>
//                   </span>
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckBox;

// ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++ 4 ++++++++++




import { useEffect, useState } from "react";
import "../../assets/css/checkBox.css";
import MenuIcon from "@mui/icons-material/Menu";

const CheckBox = ({ societiesListSocieties, selectedSocietiesData,
  setSelectedSocietiesData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [checkedStates, setCheckedStates] = useState([]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (societiesListSocieties && societiesListSocieties.length > 0) {
      setCheckedStates(new Array(societiesListSocieties.length).fill(false));
    }
  }, [societiesListSocieties]);

  const handleResize = () => {
    let screenWidth = window.visualViewport.width;
    setIsOpen(screenWidth >= 935);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedStates = [...checkedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setCheckedStates(updatedCheckedStates);

    const societyData = societiesListSocieties[index].societies;
    if (updatedCheckedStates[index]) {
      // If checkbox is checked, add the society's data to the state
      setSelectedSocietiesData([...selectedSocietiesData, ...societyData]);
    } else {
      // If checkbox is unchecked, remove the society's data from the state
      const newData = selectedSocietiesData.filter(item => !societyData.includes(item));
      setSelectedSocietiesData(newData);
    }
  };


  console.log(selectedSocietiesData, "selectedSocietiesData")
  return (
    <div className="check-container" dir="rtl">
      <div className="checkMenuIcon" onClick={() => setIsOpen((prev) => !prev)}>
        <MenuIcon />
      </div>

      {isOpen && (
        <div className="checkBoxes-con">
          <h3>اختيارات الخريطة</h3>
          <div className="markCheckCon">
            {societiesListSocieties && societiesListSocieties.map((society, index) => (
              <div
                key={index}
                className="markCheck"
                onClick={() => handleCheckboxChange(index)}
                style={{
                  background: checkedStates[index] ? "#fff" : "transparent",
                }}
              >
                <label htmlFor={`show-${index}`} style={{ width: "100%" }}>
                  <span>{society.name}</span>
                  <span style={{ width: "23px", height: "23px" }}>
                    <svg
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.30957 0C4.6089 0 0.80957 3.79933 0.80957 8.5C0.80957 13.2007 4.6089 17 9.30957 17C14.0102 17 17.8096 13.2007 17.8096 8.5C17.8096 3.79933 14.0102 0 9.30957 0Z"
                        fill={checkedStates[index] ? "black" : "#C2BFB2"} // Fill color based on specific index
                      ></path>
                      <path
                        d="M4.39596 7.21096C4.33975 7.15506 4.28353 7.09916 4.20483 7.00972C4.62953 6.94939 5.04648 6.8852 5.45729 6.82196C6.03611 6.73286 6.60273 6.64563 7.16166 6.5737C7.54391 6.52898 7.76877 6.39482 7.93741 6.02588C8.30947 5.2159 8.70852 4.43275 9.12651 3.61243C9.17584 3.51561 9.22544 3.41827 9.27529 3.32031C9.29065 3.34705 9.3047 3.36988 9.31744 3.39057C9.34199 3.43044 9.36167 3.46239 9.37647 3.49919C9.60132 3.96316 9.8318 4.42434 10.0623 4.88552C10.2927 5.34669 10.5232 5.80787 10.7481 6.27184C10.8268 6.42836 10.9167 6.49544 11.0966 6.5178C11.9556 6.63594 12.7998 6.76146 13.6532 6.88837C13.8497 6.91759 14.0468 6.94689 14.2446 6.97618C14.2614 6.98177 14.2783 6.98457 14.2951 6.98736C14.312 6.99016 14.3289 6.99295 14.3457 6.99854C14.357 7.00972 14.3682 7.0237 14.3795 7.03767C14.3907 7.05165 14.402 7.06562 14.4132 7.0768C14.3968 7.08379 14.3804 7.0903 14.3642 7.09672C14.3027 7.12112 14.2441 7.14436 14.1996 7.1886C13.8286 7.54078 13.4632 7.89575 13.0978 8.25071C12.7324 8.60568 12.367 8.96064 11.996 9.31281C11.8723 9.42461 11.8386 9.53641 11.8723 9.70411C11.9998 10.3824 12.1172 11.0606 12.2346 11.7389C12.2933 12.078 12.352 12.4171 12.412 12.7563C12.4192 12.785 12.4172 12.8229 12.4148 12.8671C12.4134 12.8918 12.412 12.9183 12.412 12.9463C12.3604 12.9271 12.3163 12.9042 12.2732 12.8818C12.241 12.8652 12.2095 12.8488 12.1759 12.8345C11.2767 12.3651 10.3768 11.8953 9.46641 11.4147C9.34274 11.3476 9.24156 11.3476 9.11789 11.4147C8.20725 11.8842 7.29661 12.3649 6.38597 12.8457C6.34971 12.8697 6.31014 12.8873 6.26563 12.9071C6.22735 12.9242 6.18537 12.9428 6.13858 12.9687C6.19478 12.6557 6.23975 12.3762 6.28472 12.0967C6.40189 11.3879 6.52756 10.6874 6.65433 9.98079C6.67352 9.87381 6.69274 9.7667 6.71195 9.65939C6.74568 9.53641 6.71195 9.45815 6.62201 9.36871C5.87999 8.65319 5.13798 7.93767 4.39596 7.21096Z"
                        fill="#ECE7DC"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckBox;
