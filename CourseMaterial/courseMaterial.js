let current_video_index=JSON.parse(localStorage.getItem("current_video_index"));
let current_video=document.getElementById("current_video");
let list_of_videos=document.getElementById("list_of_videos");


on_course_page_load=async ()=>{

const res=    await fetch("http://localhost:3000/course/get_course",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        // body:JSON.stringify({
        //     course_id:localStorage.getItem("course_id")
        // })    
    })
    const data=await res.json();
    console.log(data);
}
