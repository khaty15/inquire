interface Position {
  lat: number;
  lon: number;
}

interface TripInfo {
  statusId: string;
  tripId: string;
  vehicleId: string;
  position: Position;
  batteryLevel: number;
  distance: number;
  timestamp: string;
}

interface PassengerInfo {
  name: string;
  street: string;
}

interface KafkaSettings {
  topics: string[];
  clientId: string;
  brokers: (string | undefined)[];
  ssl: boolean; // Uncomment for Confluent Cloud
  sasl: SASLSetting | null; // Uncomment for Confluent Cloud
  connectionTimeout: number;
  authenticationTimeout: number;
  reauthenticationThreshold: number;
}

interface SASLSetting {
  username: string;
  password: string;
  mechanism: string;
}

