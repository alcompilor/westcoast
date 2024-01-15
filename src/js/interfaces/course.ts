interface Course {
    id?: string;
    courseTitle: string;
    courseCode: string;
    desc: string;
    details: string;
    durationInDays: number;
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
    price: number;
    [key: string]: string | object | boolean | number | undefined;
}

export default Course;
