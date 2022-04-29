const USER_ID = 91344;


module.exports = {
  getUser() {
    return {
      id: 91344,
      first_name:"Kyle",
      last_name: "Picard",
      email: "jeanluc2@enterprise.fed",
    };
  },
  getSchedule() {
    return {
      id: 11344,
      user_id: USER_ID,
      date_time: "2022-05-03 12:00:00"
    };
  },
  getEvent() {
    return {
      id: 45555,
      description: "Moog Voyager Syntesizer",
      event_name:"Yoooo festival",
      date_time: "2022-05-03 12:00:00",
    };
  }
};
