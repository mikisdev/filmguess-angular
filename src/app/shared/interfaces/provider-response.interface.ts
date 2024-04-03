export interface MovieProvidersResponse {
  id:      number;
  results: { [key: string]: Result };
}

export interface Result {
  link:      string;
  rent:      Provider[];
  buy:       Provider[];
  flatrate?: Provider[];
}

export interface Provider {
  logo_path:        string;
  provider_id:      number;
  provider_name:    string;
  display_priority: number;
}
