document.querySelector("button").addEventListener("click", (e) => {
    var imagelink =
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tokyo_Sky_Tree_2012_%E2%85%A5.JPG",
      downloadSize = 10375374,
      time_start,
      time_end,
      downloadSrc = new Image();
    time_start = new Date().getTime();
    var cacheImg = "?nn" + time_start;
    downloadSrc.src = imagelink + cacheImg;
    // console.log(downloadSrc);
    downloadSrc.onload = () => {
      time_end = new Date().getTime();
      var TimeDuration = (time_end - time_start) / 1000;
      // console.log(TimeDuration);
      loadedByte = downloadSize * 8;
      totalSpeed = (loadedByte / TimeDuration / 1024 / 1024).toFixed(2);
      // console.log('totalSpeed', totalSpeed);
      let i = 0,
        SpeedOut;
      const animate = () => {
        if (i < totalSpeed) {
          document.querySelector(".content").innerHTML =
            i.toFixed(2) + `<small>Mbps</small>`;
          setTimeout(animate, 20);
          i += 1.02;
        } else {
          document.querySelector(".content").innerHTML =
            totalSpeed + `<small>Mbps</small>`;
        }
      };
      animate();
      // document.querySelector(".loader-content").classList.remove("hide");
      // document.querySelector(".loader-content").classList.add("result");
      // document.querySelector(".loader").classList.add("hide");
      // document.querySelector(".content").classList.remove("hide");
      e.target.innerHTML = "CHECK AGAIN";
    };
  });