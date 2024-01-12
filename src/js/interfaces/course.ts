interface Course {
    id: Number;
    courseTitle: string;
    courseCode: string;
    desc: string;
    details: string;
    durationInDays: Number;
    availability: {
        classroom: boolean;
        online: boolean;
        [key: string]: boolean;
    };
    image: {
        url: string;
        desc: string;
    };
    scheduledDate: string;
    bookingOptions: {
        classroom: boolean;
        online: boolean;
    };
    featured: boolean;
    [key: string]: string | object | boolean;
}

export default Course;
