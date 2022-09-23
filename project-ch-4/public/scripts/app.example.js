class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.tgl = document.getElementById('tanggal');
    this.wkt = document.getElementById('waktu');
    this.driverType = document.getElementById('pilih-driver');
    this.penumpang = document.getElementById('jumlahPenumpang')
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    let driver = this.driverType.value == 'dengan_driver' ? true : false;
    let dateTime = this.tgl.value + "T" + this.wkt.value;
    let formatData = Date.parse(dateTime)
    
    Car.list.forEach((car) => {
      let waktu = Date.parse(car.availableAt);
      let penumpang = this.penumpang.value;
     
      if(car.available == driver && waktu >= formatData 
          && car.capacity >= penumpang){
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
