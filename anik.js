const handleVideoCategory = async () => {
      const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
      const data = await response.json()
  
      /* load category done*/
      const videoTabContainer = document.getElementById('video-tab-container');
      data.data.forEach((tab) => {
          const div = document.createElement('div');
          div.innerHTML = `
          <a onclick="videoLoad('${tab.category_id}')" class="tab tab-active">${tab.category}</a> 
          `;
          videoTabContainer.appendChild(div);
      });
      // console.log(data);
      
  };
  
  const videoLoad = async (videoId) => {
      const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${videoId}`)
      const data = await response.json()
      
  
      const errorMassage = document.getElementById('error-massage');
      errorMassage.innerHTML = "";
  
      let msg = data?.data;
  
          if (msg.length === 0) {
              errorMassage.innerHTML = `
          Oops!! Sorry, There is no content here 
          
                      📵❓`;
        }          
          else{
              " "
          }
  
      
  
          
      const videoCardContainer = document.getElementById('video-card-container');
      videoCardContainer.innerHTML = "";
      data.data.forEach((card) => {
          console.log(card)
          
          const div = document.createElement('div');
          div.innerHTML = `
          <div class="card w-auto bg-base-100 shadow-xl">
            <figure>
                <img class="w-[350px] h-[220px] mt-5" src="${card?.thumbnail}"alt="Shoes" />
                
            </figure>
            <div class="card-body">
                <div class="card-footer flex justify-between mt-8">
                    <div class="flex">
                        <div>
                            <div class="avatar online">
                                <div class="w-14 rounded-full">
                                    <img
                                        src="${card?.authors[0]?.profile_picture}" />
                                </div>
                            </div>
                        </div>
                        <div class="ml-3">
                            <h2 class="text-base font-bold">${card?.title}</h2>
                            <small class="mt-3">${card?.authors[0]?.profile_name}</small>
                            <small class="mt-3">${card?.authors[0]?.verified ? "✅" : ""}</small>
                            <br>
                            <small class="mt-3">${card.others?.views}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          `;
          videoCardContainer.appendChild(div);
      })
      // console.log(data);
      // const c = data?.data?.others.sort((a,b) =>{
      //     return a.views - b.views;
      // })
      // console.log(c);
  };
  
  
  
  videoLoad('1000')
  
  
  handleVideoCategory();
  
  
  const b = () =>{
      let a = 10 ;
      if(a === 10){
          window.location.href = 'http://127.0.0.1:5500/page/blog.html'
      }
      else{
          alert('Tui passsword vule gesos !! Toke ami teijjo sontan gosona korlam')
      }
  }
  
  // const c = (a,b) =>{
  //     console.log("anik");
      
  // };
  
  