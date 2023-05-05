import {proxy } from "valtio";
import { Project } from "../model/APIProjectResponse";
interface ProjectStoreType {
    pro: Project[];
  }
export const proStore = proxy<ProjectStoreType>({
    pro: [],
  });
