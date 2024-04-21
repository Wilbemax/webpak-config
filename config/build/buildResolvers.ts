import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function builResolver(options: BuildOptions): Configuration['resolve'] { 
    return{
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.path.src
        }
    }
}