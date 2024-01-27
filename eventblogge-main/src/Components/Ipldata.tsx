export interface Data{
    id:number;
    team: string;
    captain:string;  
    }

export interface ColumnData {
        dataKey: keyof Data;
        label: string;
        numeric?: boolean;
        width: number;
      }
    
    