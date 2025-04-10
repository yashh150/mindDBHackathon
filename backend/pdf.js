// CREATE MODEL openai_modelans
// PREDICT answer
// USING
//     engine = 'openai_engine',
//     prompt_template = 'Generate five multiple-choice questions with correct answer to assess a candidates knowledge in deep tech areas in their area of interest and experience based on their resume. Ensure the questions cover a range of topics and difficulty levels. Examples may include concepts related to specific programming languages, tools, frameworks, and best practices in these domains.
//  text:{{text}}',
//     max_tokens = 500,
//     temperature = 0.3,
//     api_key = '<openai-api-key>';

//     SELECT text, answer
//     FROM openai_modelans
//     WHERE text='Area of Interest
//     Software Development, Information Security, Robotics, DevOps,
//      Education
//     Year Degree/Examination Institution/Board CGPA/
//     Percentage 
//     2023 B.T ech. 2nd Year Indian Institute of T echnology, Roorkee 7.351
//     2020 Intermediate (Class XII) Ashoka Hall Junior & High School(CBSE) 95.00 % 
//     2018 Matriculate (Class X) Ashoka Hall Junior & High School(CBSE) 87.00 % 
//      Internships
//     Software Engineering Intern  | Cloud Defense 
//     Experience with AWS Lambda Functions: Proficiently developed, deployed, and optimized serverless applications using
//     AWS Lambda, leveraging its scalability and cost-effectiveness.
//     Integrated Lambda Functions with AWS Services: Successfully integrated Lambda functions with AWS services such as S3,
//     EC2, and API Gateway, ensuring seamless functionality and efficient data processing.
//     Performance Optimization and Security: Emphasized performance optimization by fine-tuning Lambda function
//     configurations and employing best practices. Implemented secure access controls through IAM roles, ensuring robust
//     security for serverless applications.
//     Google Summer Of Code  | OWASP - OWTF 
//     Implemented a secure authentication solution in React using local storage to maintain user authentication across page
//     reloads, ensuring a seamless and protected user experience.
//     Streamlined the Docker file to simplify installation on various platforms and improve the installation process of Python
//     dependencies, enhancing development efficiency and ease of deployment.
//     Developed a plugin to assess access control configurations and identify potential vulnerabilities in cloud storage systems,
//     with a specific focus on identifying misconfigured Amazon S3 buckets.
//      Projects
//     GroupGo  | IIT Roorkee 
//     Developed and implemented a Group Buying feature, enabling users to form groups and make collective purchases.
//     Resulting in increased sales and customer satisfaction.
//     Integrated a secure crypto-currency transaction portal using Solana modules, expanding user payment options and
//     enhancing the shopping experience.
//     Deployed the website on Replit, ensuring easy accessibility and continuous deployment and collaborated with cross-
//     functional teams to deliver a high-quality end product.
//     T ech Stack: ReactJS, TypeScript, Solana.
//     Robotic Arm Simulation  | IIT Roorkee 
//     Developed a simulation of a Robotic Arm in a Gazebo Environment, utilizing a 3-D model created with SolidWorks. The
//     simulation provided a virtual environment to test and visualize the arms movement and functionality.
//     Implemented ROS (Robot Operating System) to control the movement of the robotic arm. Leveraged the MoveIt
//     framework, a widely-used motion planning framework in ROS, to enable efficient path planning and control of the arms
//     motion.
//     T ech Stack: ROS, MoveIt Framework.
//     Restaurant of the future  | IIT Roorkee 
//     Developed and deployed an innovative autonomous restaurant service bot, revolutionizing the dining experience with its
//     ability to handle plates and take customer orders independently.
//     Leveraged LiDAR and Depth Cameras to enable precise navigation and obstacle avoidance for the bot, ensuring seamless
//     movement within the environment and enhancing safety for both customers and the bot.
//     Demonstrated expertise in integrating LiDAR and Depth Cameras into the bots system, harnessing advanced algorithms
//     to achieve reliable navigation and real-time obstacle detection.
//     Geomatics Survey Camp  | IIT Roorkee 
//     Utilized QGIS and ERDAS software to create a digitized map of Haridwar District, showcasing expertise in GIS tools.
//     Gathered precise latitude, longitude, and orthometric heights of utilities marked on the digitized map, ensuring accurate
//     spatial information.
//     Conducted thorough pre-processing of collected data, implementing quality control measures to minimize human-induced
//     errors and enhance data reliability.
//      Awards / Scholarships / Academic Achievements
//      Aviral Jain
//     UG (III Year I Semester)
//     B.T ech. (Civil Engineering)
//     Contact No: 6263091964
//     Email: a_jain@ce.iitr.ac.in
//     Registration No: 21113032/2024 VERIFIED  Indian Institute of
//     T echnology
//     Roorkee';
    


//import MindsDB from 'mindsdb-js-sdk';
const MindsDB = require("mindsdb-js-sdk").default; // alternative for CommonJS syntax
const fs = require('fs');
const pdf = require('pdf-parse');

async function connectToMindsDB() {
    try {
        // No authentication needed for self-hosting
        await MindsDB.connect({
            host: 'http://127.0.0.1:47334'
        });
        console.log('Connected to MindsDB');
    } catch (error) {
        // Failed to connect to the local instance
        console.error('Error connecting to MindsDB:', error);
    }
}

async function qdb(sanitizedText) {
    try {
        const query = `
            SELECT answer
            FROM openai_model
            WHERE text='${sanitizedText}'
        `;

        const queryResult = await MindsDB.SQL.runQuery(query);
        console.log(queryResult);
    } catch (error) {
        console.log(error);
    }
}

async function processPDF() {
    try {
        let dataBuffer = fs.readFileSync('/home/phineas/Documents/21113032_Default Resume_2023-10-31_19_03_01.pdf');
        const data = await pdf(dataBuffer);
        
        // Sanitize the text to prevent SQL injection
        data.text = data.text.replace(/[\u2018\u2019']/g, '');

    // Sanitize data.text to prevent SQL injection (assuming you're using a simple string comparison)
    const sanitizedText = data.text.replace(/'/g, "''");


        console.log(sanitizedText);

        // Call the asynchronous function to connect
        await connectToMindsDB();

        // Call the function to run the query
        await qdb(sanitizedText);
    } catch (error) {
        console.error('Error processing PDF:', error);
    }
}

// Call the function to start processing the PDF
processPDF();
