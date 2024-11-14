// @/components/ui/table.js

import * as React from "react";
import { cn } from "@/lib/utils";

// Table Component
const Table = React.forwardRef(({ className, ...props }, ref) => (
    <div className="w-full overflow-auto">
        <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
));
Table.displayName = "Table";

// TableHeader Component
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

// TableRow Component
const TableRow = React.forwardRef(({ className, ...props }, ref) => (
    <tr ref={ref} className={cn("border-b transition-colors hover:bg-muted/50", className)} {...props} />
));
TableRow.displayName = "TableRow";

// TableHead Component
const TableHead = React.forwardRef(({ className, ...props }, ref) => (
    <th ref={ref} className={cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground", className)} {...props} />
));
TableHead.displayName = "TableHead";

// TableCell Component
const TableCell = React.forwardRef(({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle", className)} {...props} />
));
TableCell.displayName = "TableCell";

// TableBody Component
const TableBody = React.forwardRef(({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

// TableFooter Component
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("bg-primary font-medium text-primary-foreground", className)} {...props} />
));
TableFooter.displayName = "TableFooter";

// TableCaption Component
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";

// Exporting components
export {
    Table,
    TableHeader,
    TableRow,
    TableHead,   // Make sure this is exported
    TableCell,
    TableBody,
    TableFooter,
    TableCaption,
};
