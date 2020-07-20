import axios from 'axios';
 
export default axios.create({
    baseURL: `http://${process.env.PORT || 'localhost:8080'}/api`
});
