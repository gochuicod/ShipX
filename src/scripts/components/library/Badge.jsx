import { Badge } from "../../../styles/badge";

export default function BadgeShowcase() {
  return (
    <div className="flex flex-col gap-4 p-10 border border-dashed border-purple-400 rounded-lg w-fit">
      {/* 1. Solid Pink "NEW" */}
      <Badge variant="new" size="default">
        NEW
      </Badge>

      {/* 2. Light Purple "lorem ipsum" */}
      <Badge variant="secondary" size="default">
        lorem ipsum
      </Badge>

      {/* 3. Toolkit */}
      <Badge variant="toolkit" size="default">
        Trade and Logistics Toolkit
      </Badge>

      {/* 4. International Express (Solid Dark Blue) */}
      <Badge variant="default" size="default">
        International Express Delivery
      </Badge>

      {/* 5. Outline "NEW" */}
      <Badge variant="outline" size="default">
        NEW
      </Badge>
    </div>
  );
}
