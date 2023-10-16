import Divider from "@/components/parallax/divider";
import ColumnContainer from "@/components/parallax/column-container";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Parallax() {
  return (
    <div>
      <div className="h-screen w-full p-6 bg-slate-50 flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold text-slate-950">
          Architectural firm
        </h1>
        <p className="text-lg font-medium text-slate-700">
          We create the designs you need for any project
        </p>
        <Divider />
      </div>
      <ColumnContainer />
    </div>
  );
}