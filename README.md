# DrugOn
This is an embark-status application for TADHACK 2018

We propose an electronic health system based on blockchain where doctors’ medical prescriptions are stored in such a way that pharmacies can verify them. These prescriptions are encrypted and based on the patient’s identity and doctor’s credentials. 

In the mobile application, users have access to these prescriptions, which are retrieved directly from the blockchain. They can add their desired products to the shopping cart (called first-aid kit), and place their order. They can choose to receive it immediately or at a time of their convenience. 

The pharmacy will verify that the patient is allowed to receive the requested medication thanks to the blockchain. Once done, a drone carrying the products will be sent to the user’s location. The user will receive an SMS when the drone is getting closer to its destination and he hill need to how the QR code generated for his order, which will be validated by the drone. Finally, the user can get his medication. Morover, he may call his pharmacist if he has any doubt regarding his prescription.


## Install

```
npm -g install embark
```

## Start

```
embark run
```
This will start a development server for the React Application

## Build for production

```
embark build
```
This will build the React Application for production

## Build Mobile Application
```
./build.sh
```
This will create a file named dist.zip which can be uploaded to PhoneGap and turned into a mobile application for iOS or Android.


