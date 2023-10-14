const pHeroYouTube = async () => {
      const responsive = await fetch('https://openapi.programming-hero.com/api/videos/categories');
      const data = await responsive.json();


      const tabContainer = document.getElementById('tab_container');

      data.data.slice(0, 4).forEach((Button) => {
            const div = document.createElement("div");
            div.innerHTML = `
            <button onclick="handleVideoCategory('${Button.category_id}')"class="rounded py-3 px-3 md:py-3 md:px-7 bg-red-700 text-white font-semibold ">${Button.category}</button>

            `
            tabContainer.appendChild(div);
      });
      // console.log(data.data);
}
const handleVideoCategory = async (video_id) => {
      const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${video_id}`);
      const data = await res.json();

      const videoData = data.data
      console.log(videoData);

      const errorMassage = document.getElementById('error-massage');
      errorMassage.innerHTML=''

      let massage = data?.data
      if( massage.length === 0 ){
            errorMassage.innerHTML = `
            <h1 class="text-center text-5xl font-extrabold mt-14">Oops!! Sorry, There is no content here <br>
            📵❓</h1>
            `;
      }
      else{
            " "
      }


      const videoCardContainer = document.getElementById('video_card_container');
      videoCardContainer.innerHTML = '';
      
      videoData.forEach((video) => {
            console.log(video)
            videoDiv = document.createElement('div')
            videoDiv.innerHTML = `
            <div class="" >
                  <div class="pb-5 ">
                        <img class=" rounded-lg w-[400px] h-[220px] mt-5" src="${video?.thumbnail}" alt="">
                        
                  </div>
                  <div class="flex gap-3">
                        <div>
                              <img class=" rounded-full w-[30px] h-[30px]" src="${video?.authors[0]?.profile_picture}" alt="">
                        </div>
                        <div>
                              <h1 class="text-xl font-family font-bold">${video?.title}</h1>
                              <div class="flex gap-1 items-center justify-start">
                              <p class="text-[#171717b3] text-lg font-bold">${video?.authors[0]?.profile_name}</p>
                              <small class="">${video?.authors[0]?.verified ? "✅" : ""}</small>
                              </div>
                              <p  id="total-views" class="text-[#171717b3] text-base font-medium">total views:${video?.others?.views}</p>
                        </div>
                  </div>
            </div>

            `
            videoCardContainer.appendChild(videoDiv)
      })
}

handleVideoCategory('1000')
pHeroYouTube()