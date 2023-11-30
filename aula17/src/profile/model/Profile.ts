import { BaseDomain } from "../../shared/domain/BaseDomain";

interface ProfileProps {
   fullname: string;
   title: string;
   bio: string;
   currentOccupation: string;
   education: string;
   certifications: string;
   status: "open to work" | "closed" | "hiring";
}

export class Profile extends BaseDomain {
   fullname: string;
   title: string;
   bio: string;
   currentOccupation: string;
   education: string;
   certifications: string;
   status: string;

   constructor(data: ProfileProps) {
      super();
      this.fullname = data.fullname;
      this.title = data.title;
      this.bio = data.bio;
      this.currentOccupation = data.currentOccupation;
      this.education = data.education;
      this.certifications = data.certifications;
      this.status = data.status;
   }
}
