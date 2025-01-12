# AyudaCo

A digital platform bridging barangay residents with LGU services for efficient access to subsidies, cash assistance, and aid programs.

## Overview

AyudaCo is a web application designed to streamline the distribution and management of barangay assistance programs at the barangay level. It provides a direct digital channel between residents and barangay government officials, making the process of requesting and receiving aid more transparent, efficient, and accessible.

## Features

- **Direct Communication Channel**: Residents can directly submit assistance requests to barangay officials
- **Real-time Status Tracking**: Track the progress of assistance applications
- **Digital Documentation**: Easy upload and management of required documents
- **Notification System**: Automated updates on application status and available programs
- **User Dashboard**: Personalized interface for both residents and government officials

## Technology Stack

### Frontend
- **React + Vite**: Modern frontend framework for building user interfaces
  - Utilizes Fast Refresh for enhanced development experience
  - Optimized build process for production deployment
- **TailwindCSS**: Utility-first CSS framework for responsive design
- **Shadcn UI**: High-quality, accessible component library

### Backend & Infrastructure
- **Firebase**
  - Authentication
  - Realtime Database
  - Cloud Storage
  - Hosting

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/devmaniel/innOlympics-Ayuda.gi
cd innOlympics-Ayuda
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Fill in your Firebase configuration details in the `.env` file.

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## Contributing

We welcome contributions to BrgyConnect! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- Mobile application development
- Integration with other government services like [eGovPH.](https://e.gov.ph/).
- Multi-language support
- Analytics dashboard for program effectiveness
- Blockchain integration for transparency

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.txt](LICENSE.txt) file for details.

## Acknowledgments

- Shadcn UI components (Apache License 2.0)
- Firebase team for their excellent documentation
- All contributors who participated in this hackathon project

## Contact

Project Link: [https://github.com/devmaniel/innOlympics-Ayuda](https://github.com/devmaniel/innOlympics-Ayuda)
