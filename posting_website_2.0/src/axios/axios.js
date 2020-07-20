import axios from 'axios';
 
export default axios.create({
    baseURL: `http://${process.env.PORT || 'localhost:5000'}/api`
});
