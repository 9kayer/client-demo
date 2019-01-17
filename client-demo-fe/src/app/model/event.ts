export class EventModel {

  id: string;
  name: string;
  startDate: any;
  endDate: any;
  location: string;
  city: string;
  country: string;
  field: string;

  constructor(id: string, name: string, startDate: any, endDate: any, city: string, country: string, location: string, field: string) {
    this.id = id;
    this.name = name;
    this.endDate = endDate;
    this.startDate = startDate;
    this.city = city;
    this.country = country;
    this.location = location;
    this.field = field;
  }
}
