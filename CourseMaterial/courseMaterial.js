let current_video_index=localStorage.getItem("current_video_index");
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
    if(!current_video_index){
        current_video_index=0;
        localStorage.setItem('current_video_index',current_video_index)
    }
    let video_url = data['items'][current_video_index]['snippet']['resourceId']['videoId'];
    // console.log(video_url)
    const docu = `<iframe width="100%" height="100%"
        src="https://www.youtube.com/embed/${video_url}">
    </iframe>`
    current_video.innerHTML=docu;
}
