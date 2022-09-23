class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="row list_mobil">
      <div class="card col-lg-3 card_1" >
        <img src="${this.image}" alt="" class="">
        <p>${this.model}/${this.manufacture}</p>
        <p class="fw-bold fs-6">Rp${this.rentPerDay}</p>
        <p>${this.description}</p>
        <p><span><img src="images/fi_users.png"></span>&emsp;${this.capacity} Orang</p>
        <p><span><img src="images/fi_settings.png"></span>&emsp;${this.transmission}</p>
        <p><span><img src="images/fi_calendar.png"></span>&emsp;${this.year}</p>
        <div class="text-center">
          <button class="btn button-order">Pilih Mobil</button>
        </div>
      </div>
      <div class="card col-lg-3 card_2">
        <img src="${this.image}" alt="" class="">
        <p>${this.model}/${this.manufacture}</p>
        <p class="fw-bold fs-6">Rp${this.rentPerDay}</p>
        <p>${this.description}</p>
        <p><span><img src="images/fi_users.png"></span>&emsp;${this.capacity} Orang</p>
        <p><span><img src="images/fi_settings.png"></span>&emsp;${this.transmission}</p>
        <p><span><img src="images/fi_calendar.png"></span>&emsp;${this.year}</p>
        <div class="text-center">
          <button class="btn button-order">Pilih Mobil</button>
        </div>
      </div>
      <div class="card col-lg-3 card_3">
        <img src="${this.image}" alt="" class="">
        <p>${this.model}/${this.manufacture}</p>
        <p class="fw-bold fs-6">Rp${this.rentPerDay}</p>
        <p>${this.description}</p>
        <p><span><img src="images/fi_users.png"></span>&emsp;${this.capacity} Orang</p>
        <p><span><img src="images/fi_settings.png"></span>&emsp;${this.transmission}</p>
        <p><span><img src="images/fi_calendar.png"></span>&emsp;${this.year}</p>
        <div class="text-center">
          <button class="btn button-order">Pilih Mobil</button>
        </div>
      </div>
    </div>
    `;
  }
}
