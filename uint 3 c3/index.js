
async function getdata() 


{
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/hotels/search?city=goa`
    );
    let data = await res.json();
    append(data.hotels);
    console.log(data.hotels);
  }
  
  



  function append(data) {
    let container = document.getElementById('hotels_list');
    container.innerHTML = null;
  
    data.forEach(function (ele) {
      let div = document.createElement('div');
  
      let image = document.createElement('Image');
      let title = document.createElement('p');
      let price = document.createElement('p');
      let rating = document.createElement('p');
      let acnon = document.createElement('p');
      let button = document.createElement('Button');

  
      div.setAttribute('id', 'Hotel');
  
      image.src = ele.Images.one;
      title.innerText = ele.Title;
      price.innerText = ele.Price;
      rating.innerText = ele.Rating;
      acnon.innerText = ele.Ac;
      button.innerText = 'book';
  
      button.addEventListener("click", function () {
        
        buy(ele);

      })
  
      div.append(image, title, price, rating, acnon, button);
      container.append(div);


    });
  }
  
  
  
  