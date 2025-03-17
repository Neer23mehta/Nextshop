import { API_BASE_URL } from "./config/constant";

export default function Home() {
  console.log("env-variable",process.env.NODE_ENV)
  console.log("password",        process.env.SERVER_PASSWORD 
  )
  
  return (
    <div>
      {
        process.env.NODE_ENV == "development"?
        <h1>You Are Currently on Dev Mode</h1>:
        <h1>You Are Currently on Build Mode</h1>
      }
      
      {API_BASE_URL}
      <h1>Hello to the Environment Variable</h1>
    </div>
  );
} 
