import { User } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
}

const TeamMember = ({ name, role }: TeamMemberProps) => {
  return (
    <div className="text-center group">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
        <User className="text-primary" size={40} />
      </div>
      <h4 className="font-semibold text-foreground mb-1">{name}</h4>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
};

export default TeamMember;
