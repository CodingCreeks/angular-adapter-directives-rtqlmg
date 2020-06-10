import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemAccountsService implements InMemoryDbService {
  createDb() {
    const accounts = [
      {
        id: "350e5ee4-3062-4ede-a796-d0e229e821e2",
        company: "Tellifly",
        balance: 2196.26
      },
      {
        id: "ff4f870e-010b-4513-99f8-ae42760f48ba",
        company: "Terragen",
        balance: 1080.26
      },
      {
        id: "9cf79d72-affe-47ae-ab69-d73991b1be0c",
        company: "Uncorp",
        balance: 1154.88
      },
      {
        id: "fb1a4a29-aa47-4a5b-b679-29ec3f7cc277",
        company: "Uniworld",
        balance: 3764.4
      },
      {
        id: "071979da-ce54-4685-8b31-ef1ae0884d53",
        company: "Enjola",
        balance: 3951.78
      },
      {
        id: "3a9682c9-c2df-4f9e-8222-6702a68530ab",
        company: "Miraclis",
        balance: 2579.07
      },
      {
        id: "d63d149c-fa0c-48a7-8918-62c2be2aef4e",
        company: "Idego",
        balance: 1431.58
      },
      {
        id: "ac652443-18d7-4ee8-96f1-cf5e82259f9c",
        company: "Microluxe",
        balance: 3970.55
      },
      {
        id: "b36a4872-f6a8-4d8f-8eec-a9695cb13bb6",
        company: "Twiggery",
        balance: 1713.53
      },
      {
        id: "03597411-75ff-4093-9e56-0d4933f2a000",
        company: "Rocklogic",
        balance: 1912.46
      },
      {
        id: "faed2259-bb71-4f97-a1a7-75aa4281db15",
        company: "Gynk",
        balance: 2970.48
      },
      {
        id: "66eab321-6ca3-457f-bd01-fb8ed7dd181f",
        company: "Xyqag",
        balance: 3055.29
      },
      {
        id: "a0bb45b4-70ca-4a51-beaa-412669d0773a",
        company: "Centrexin",
        balance: 2197.0
      },
      {
        id: "8ea04592-6526-4872-923d-9801e535a003",
        company: "Bleendot",
        balance: 1698.1
      },
      {
        id: "a0c1414a-4310-46b9-a7d0-1fc4eeb13dcd",
        company: "Tasmania",
        balance: 1593.21
      },
      {
        id: "69239e5d-fbfc-4370-9a56-2c9902a356ea",
        company: "Isologica",
        balance: 1550.23
      },
      {
        id: "f60f4bc5-1c61-4d7a-8945-a01e55af34e2",
        company: "Toyletry",
        balance: 1864.59
      },
      {
        id: "804bf478-506b-4edf-ad79-b5a914068cde",
        company: "Tsunamia",
        balance: 3623.65
      }
    ];

    return { accounts };
  }
}
