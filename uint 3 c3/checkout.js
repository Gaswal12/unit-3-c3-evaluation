async function getdata() 

{
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/hotels/search?city=goa`
    );
    let data = await res.json();
    append(data.hotels);
    console.log(data.hotels);


  }
  
  getdata();
  
  function append(data) {
    let container = document.getElementById('hotel_details');
    container.innerHTML = null;
  
    data.forEach(function (ele) {
      let div = document.createElement('div');
  
      let image = document.createElement('Image');
      let title = document.createElement('p');
      let price = document.createElement('p');
      let rating = document.createElement('p');
      let acnon = document.createElement('p');
  
      image.src = ele.Images.one;
      title.innerText = ele.Title;
      price.innerText = ele.Price;
      rating.innerText = ele.Rating;
      acnon.innerText = ele.Ac;
  
      div.append(image, title, price, rating, acnon);
      container.append(div);
    });
  }
  
  function book1() {
    let name = document.querySelector('#user_name').value;
    setTimeout(function () {
      alert(`${name} Your booking is successful!`);
    }, 5000);
  }
  