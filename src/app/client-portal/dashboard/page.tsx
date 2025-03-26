"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpDown,
  Calendar,
  Download,
  FileText,
  Filter,
  MessageSquare,
  Plus,
  Search,
  Upload,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Mock data for documents
const documents = [
  {
    id: 1,
    name: "2023 Tax Return.pdf",
    type: "Tax Return",
    date: "Apr 15, 2023",
    size: "3.2 MB",
    status: "Final",
  },
  {
    id: 2,
    name: "Q1 2024 Financial Statement.xlsx",
    type: "Financial Statement",
    date: "Mar 31, 2024",
    size: "1.8 MB",
    status: "Final",
  },
  {
    id: 3,
    name: "Business Valuation Report.pdf",
    type: "Valuation",
    date: "Feb 10, 2024",
    size: "5.4 MB",
    status: "Draft",
  },
  {
    id: 4,
    name: "Cash Flow Projection.xlsx",
    type: "Projection",
    date: "Jan 15, 2024",
    size: "2.1 MB",
    status: "Final",
  },
  {
    id: 5,
    name: "R&D Tax Credit Analysis.pdf",
    type: "Tax Credit",
    date: "Dec 20, 2023",
    size: "4.7 MB",
    status: "Final",
  },
];

// Mock data for messages
const messages = [
  {
    id: 1,
    from: "David Schapira",
    avatar: "/placeholder.svg?height=40&width=40",
    subject: "Tax Return Review",
    preview: "I've reviewed your tax return and have a few questions...",
    date: "Today, 2:30 PM",
    unread: true,
  },
  {
    id: 2,
    from: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    subject: "Financial Statement Analysis",
    preview: "Here are my thoughts on your Q1 financial statements...",
    date: "Yesterday, 10:15 AM",
    unread: false,
  },
  {
    id: 3,
    from: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    subject: "R&D Credit Documentation",
    preview:
      "We need the following additional documentation for your R&D credit claim...",
    date: "Mar 28, 2024",
    unread: false,
  },
];

// Mock data for upcoming appointments
const appointments = [
  {
    id: 1,
    title: "Quarterly Business Review",
    date: "Apr 15, 2024",
    time: "10:00 AM - 11:30 AM",
    with: "David Schapira",
  },
  {
    id: 2,
    title: "Tax Planning Session",
    date: "Apr 22, 2024",
    time: "2:00 PM - 3:00 PM",
    with: "Sarah Johnson",
  },
];

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter documents based on search term
  const filteredDocuments = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/client-portal">Client Portal</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Client Portal Dashboard</h1>
        <Button asChild variant="outline">
          <Link href="/client-portal/account">
            <User className="h-4 w-4 mr-2" />
            My Account
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Documents</CardTitle>
            <CardDescription>
              Your financial documents and tax returns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{documents.length}</div>
            <p className="text-sm text-gray-500">Total documents</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Messages</CardTitle>
            <CardDescription>
              Communication with your financial team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {messages.filter((m) => m.unread).length}
            </div>
            <p className="text-sm text-gray-500">Unread messages</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Appointments</CardTitle>
            <CardDescription>
              Upcoming meetings and consultations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{appointments.length}</div>
            <p className="text-sm text-gray-500">Scheduled appointments</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="space-y-4">
        <TabsList>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search documents..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ArrowUpDown className="h-4 w-4" />
              </Button>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-md border">
            <div className="grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-gray-500">
              <div className="col-span-5">Name</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-1">Size</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1"></div>
            </div>

            {filteredDocuments.length > 0 ? (
              <div className="divide-y">
                {filteredDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50"
                  >
                    <div className="col-span-5 flex items-center gap-3">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <span className="font-medium">{doc.name}</span>
                    </div>
                    <div className="col-span-2 text-gray-600">{doc.type}</div>
                    <div className="col-span-2 text-gray-600">{doc.date}</div>
                    <div className="col-span-1 text-gray-600">{doc.size}</div>
                    <div className="col-span-1">
                      <Badge
                        variant={
                          doc.status === "Final" ? "default" : "secondary"
                        }
                      >
                        {doc.status}
                      </Badge>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-more-horizontal"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="19" cy="12" r="1" />
                              <circle cx="5" cy="12" r="1" />
                            </svg>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Discuss
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">
                  No documents found matching your search.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Messages</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </div>

          <div className="space-y-4">
            {messages.map((message) => (
              <Card
                key={message.id}
                className={message.unread ? "border-primary/50" : ""}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={message.avatar} alt={message.from} />
                      <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{message.from}</h3>
                        <span className="text-sm text-gray-500">
                          {message.date}
                        </span>
                      </div>
                      <p className="font-medium">{message.subject}</p>
                      <p className="text-sm text-gray-600">{message.preview}</p>
                    </div>
                  </div>
                  {message.unread && (
                    <Badge className="mt-2" variant="outline">
                      Unread
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Meeting
            </Button>
          </div>

          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{appointment.title}</h3>
                      <p className="text-sm text-gray-600">
                        With: {appointment.with}
                      </p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {appointment.date}, {appointment.time}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Join Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
