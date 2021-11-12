import Books_api from "../../books_api"; 

const handler = (request,response) => {
    response.status(200).json(Books_api)
}

export default handler; 