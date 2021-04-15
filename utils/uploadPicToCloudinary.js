import axios from 'axios';

const uploadPic = async media  => {
    try {
        const data = new FormData();
        data.append("file", media );
        data.append("upload_preset", "gato_social");
        data.append("cloud_name", "dvizwdhso");

        const res = await axios.post(process.env.CLOUDINARY_URL, data);
        return res.data.url;
    } catch (error) {
        return;
    }
}

export default uploadPic;