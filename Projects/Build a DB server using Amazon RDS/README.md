# Hosting a Static Website in Amazon S3

![Amazon S3](./pics/websites3.png)

## Project Description
This project demonstrates how to set up a simple static website using Amazon S3 (Simple Storage Service). The goal is to showcase the basic use of AWS services, including S3 for web hosting and making a website publicly accessible.

### Set up an S3 Bucket

![Amazon S3](./pics/createbucket.png) 

![Amazon S3](./pics/bucketname.png) 

![Amazon S3](./pics/createdbucket.png) 

### Upload Your Website Files
![Amazon S3](./pics/uploadwebdocs.png)

### Enable Static Website Hosting
![Amazon S3](./pics/disablestatic.png)
![Amazon S3](./pics/enablestatic.png)

### Set Bucket Policy for Public Access
![Amazon S3](./pics/genpolicy1.png)
![Amazon S3](./pics/genpolicy2.png)
![Amazon S3](./pics/succespolicy.png)

### Access Your Static Website
![Amazon S3](./pics/bucketendpoint.png)
![Amazon S3](./pics/websitesucess.png)


## Conclusion
In this project, I successfully hosted a static website on Amazon S3, providing a simple yet effective way to share content online. 

## Key Learnings 💡
*S3 Website Hosting* : Amazon S3 is a powerful and easy-to-use tool for hosting static websites. With its simple file upload and permission settings, it’s an excellent choice for anyone looking to host personal or professional content.

*File Structure and Permissions*: Understanding how S3 handles public access and file organization is crucial for ensuring the website functions correctly.

*Debugging*: Using full S3 URLs for images and testing the website via a browser made it easier to debug path-related issues.