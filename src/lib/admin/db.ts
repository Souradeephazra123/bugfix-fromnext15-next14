import type {
  Content,
  ContentVersion,
  Media,
  User,
  Category,
  Tag,
} from "./types";

// Mock database for demonstration purposes
// In a real application, you would use a database like PostgreSQL, MongoDB, etc.
class Database {
  private users: User[] = [
    {
      id: "1",
      email: "admin@schapira.com",
      name: "Admin User",
      role: "admin",
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-01"),
    },
    {
      id: "2",
      email: "editor@schapira.com",
      name: "Editor User",
      role: "editor",
      createdAt: new Date("2023-01-02"),
      updatedAt: new Date("2023-01-02"),
    },
    {
      id: "3",
      email: "author@schapira.com",
      name: "Author User",
      role: "author",
      createdAt: new Date("2023-01-03"),
      updatedAt: new Date("2023-01-03"),
    },
  ];

  private contents: Content[] = [
    {
      id: "1",
      title: "Manufacturing Financial Success",
      slug: "manufacturing-financial-success",
      description: "Learn how to optimize your manufacturing finances",
      content:
        "<h1>Manufacturing Financial Success</h1><p>This is a sample content.</p>",
      status: "published",
      authorId: "1",
      categoryIds: ["1"],
      tagIds: ["1", "2"],
      metaTitle: "Manufacturing Financial Success | Schapira CPA",
      metaDescription:
        "Learn how to optimize your manufacturing finances with Schapira CPA",
      keywords: ["manufacturing", "finance", "optimization"],
      publishedAt: new Date("2023-02-01"),
      createdAt: new Date("2023-01-15"),
      updatedAt: new Date("2023-01-30"),
    },
    {
      id: "2",
      title: "Tax Planning for Manufacturers",
      slug: "tax-planning-manufacturers",
      description: "Strategic tax planning for manufacturing businesses",
      content:
        "<h1>Tax Planning for Manufacturers</h1><p>This is a sample content about tax planning.</p>",
      status: "draft",
      authorId: "2",
      categoryIds: ["1", "2"],
      tagIds: ["2", "3"],
      createdAt: new Date("2023-03-01"),
      updatedAt: new Date("2023-03-05"),
    },
    {
      id: "3",
      title: "Cost Reduction Strategies",
      slug: "cost-reduction-strategies",
      description: "Effective strategies to reduce costs in manufacturing",
      content:
        "<h1>Cost Reduction Strategies</h1><p>This is a sample content about cost reduction.</p>",
      status: "scheduled",
      authorId: "3",
      categoryIds: ["2"],
      tagIds: ["1", "3"],
      scheduledAt: new Date("2023-04-15"),
      createdAt: new Date("2023-03-20"),
      updatedAt: new Date("2023-03-25"),
    },
  ];

  private contentVersions: ContentVersion[] = [
    {
      id: "1",
      contentId: "1",
      versionNumber: 1,
      content: "<h1>Manufacturing Financial Success</h1><p>Initial draft.</p>",
      authorId: "1",
      createdAt: new Date("2023-01-15"),
    },
    {
      id: "2",
      contentId: "1",
      versionNumber: 2,
      content:
        "<h1>Manufacturing Financial Success</h1><p>This is a sample content.</p>",
      authorId: "1",
      createdAt: new Date("2023-01-30"),
    },
  ];

  private categories: Category[] = [
    {
      id: "1",
      name: "Financial Strategies",
      slug: "financial-strategies",
      description: "Strategies for financial success",
    },
    {
      id: "2",
      name: "Tax Planning",
      slug: "tax-planning",
      description: "Tax planning and optimization",
    },
  ];

  private tags: Tag[] = [
    {
      id: "1",
      name: "Manufacturing",
      slug: "manufacturing",
    },
    {
      id: "2",
      name: "Finance",
      slug: "finance",
    },
    {
      id: "3",
      name: "Tax",
      slug: "tax",
    },
  ];

  private media: Media[] = [
    {
      id: "1",
      filename: "manufacturing-image.jpg",
      originalFilename: "manufacturing.jpg",
      mimeType: "image/jpeg",
      size: 1024000,
      url: "/placeholder.svg?height=600&width=800",
      width: 800,
      height: 600,
      alt: "Manufacturing process",
      authorId: "1",
      createdAt: new Date("2023-01-10"),
      updatedAt: new Date("2023-01-10"),
    },
    {
      id: "2",
      filename: "tax-planning.jpg",
      originalFilename: "tax.jpg",
      mimeType: "image/jpeg",
      size: 512000,
      url: "/placeholder.svg?height=400&width=600",
      width: 600,
      height: 400,
      alt: "Tax planning",
      authorId: "2",
      createdAt: new Date("2023-02-15"),
      updatedAt: new Date("2023-02-15"),
    },
  ];

  // User methods
  async getUsers(): Promise<User[]> {
    return [...this.users];
  }

  async getUserById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  async createUser(
    user: Omit<User, "id" | "createdAt" | "updatedAt">,
  ): Promise<User> {
    const newUser: User = {
      ...user,
      id: (this.users.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  async updateUser(
    id: string,
    data: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>,
  ): Promise<User | null> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return null;

    const updatedUser: User = {
      ...this.users[index],
      ...data,
      updatedAt: new Date(),
    };
    this.users[index] = updatedUser;
    return updatedUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }

  // Content methods
  async getContents(filters?: Partial<Content>): Promise<Content[]> {
    let filteredContents = [...this.contents];

    if (filters) {
      if (filters.status) {
        filteredContents = filteredContents.filter(
          (content) => content.status === filters.status,
        );
      }
      if (filters.authorId) {
        filteredContents = filteredContents.filter(
          (content) => content.authorId === filters.authorId,
        );
      }
      // Add more filters as needed
    }

    return filteredContents;
  }

  async getContentById(id: string): Promise<Content | null> {
    return this.contents.find((content) => content.id === id) || null;
  }

  async getContentBySlug(slug: string): Promise<Content | null> {
    return this.contents.find((content) => content.slug === slug) || null;
  }

  async createContent(
    content: Omit<Content, "id" | "createdAt" | "updatedAt">,
  ): Promise<Content> {
    const newContent: Content = {
      ...content,
      id: (this.contents.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.contents.push(newContent);
    return newContent;
  }

  async updateContent(
    id: string,
    data: Partial<Omit<Content, "id" | "createdAt">>,
  ): Promise<Content | null> {
    const index = this.contents.findIndex((content) => content.id === id);
    if (index === -1) return null;

    const updatedContent: Content = {
      ...this.contents[index],
      ...data,
      updatedAt: new Date(),
    };
    this.contents[index] = updatedContent;
    return updatedContent;
  }

  async deleteContent(id: string): Promise<boolean> {
    const index = this.contents.findIndex((content) => content.id === id);
    if (index === -1) return false;

    this.contents.splice(index, 1);
    return true;
  }

  // Content version methods
  async getContentVersions(contentId: string): Promise<ContentVersion[]> {
    return this.contentVersions
      .filter((version) => version.contentId === contentId)
      .sort((a, b) => b.versionNumber - a.versionNumber);
  }

  async createContentVersion(
    version: Omit<ContentVersion, "id" | "createdAt">,
  ): Promise<ContentVersion> {
    const newVersion: ContentVersion = {
      ...version,
      id: (this.contentVersions.length + 1).toString(),
      createdAt: new Date(),
    };
    this.contentVersions.push(newVersion);
    return newVersion;
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    return [...this.categories];
  }

  async getCategoryById(id: string): Promise<Category | null> {
    return this.categories.find((category) => category.id === id) || null;
  }

  async createCategory(category: Omit<Category, "id">): Promise<Category> {
    const newCategory: Category = {
      ...category,
      id: (this.categories.length + 1).toString(),
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async updateCategory(
    id: string,
    data: Partial<Omit<Category, "id">>,
  ): Promise<Category | null> {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) return null;

    const updatedCategory: Category = {
      ...this.categories[index],
      ...data,
    };
    this.categories[index] = updatedCategory;
    return updatedCategory;
  }

  async deleteCategory(id: string): Promise<boolean> {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) return false;

    this.categories.splice(index, 1);
    return true;
  }

  // Tag methods
  async getTags(): Promise<Tag[]> {
    return [...this.tags];
  }

  async getTagById(id: string): Promise<Tag | null> {
    return this.tags.find((tag) => tag.id === id) || null;
  }

  async createTag(tag: Omit<Tag, "id">): Promise<Tag> {
    const newTag: Tag = {
      ...tag,
      id: (this.tags.length + 1).toString(),
    };
    this.tags.push(newTag);
    return newTag;
  }

  async updateTag(
    id: string,
    data: Partial<Omit<Tag, "id">>,
  ): Promise<Tag | null> {
    const index = this.tags.findIndex((tag) => tag.id === id);
    if (index === -1) return null;

    const updatedTag: Tag = {
      ...this.tags[index],
      ...data,
    };
    this.tags[index] = updatedTag;
    return updatedTag;
  }

  async deleteTag(id: string): Promise<boolean> {
    const index = this.tags.findIndex((tag) => tag.id === id);
    if (index === -1) return false;

    this.tags.splice(index, 1);
    return true;
  }

  // Media methods
  async getMedia(): Promise<Media[]> {
    return [...this.media];
  }

  async getMediaById(id: string): Promise<Media | null> {
    return this.media.find((media) => media.id === id) || null;
  }

  async createMedia(
    media: Omit<Media, "id" | "createdAt" | "updatedAt">,
  ): Promise<Media> {
    const newMedia: Media = {
      ...media,
      id: (this.media.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.media.push(newMedia);
    return newMedia;
  }

  async updateMedia(
    id: string,
    data: Partial<Omit<Media, "id" | "createdAt" | "updatedAt">>,
  ): Promise<Media | null> {
    const index = this.media.findIndex((media) => media.id === id);
    if (index === -1) return null;

    const updatedMedia: Media = {
      ...this.media[index],
      ...data,
      updatedAt: new Date(),
    };
    this.media[index] = updatedMedia;
    return updatedMedia;
  }

  async deleteMedia(id: string): Promise<boolean> {
    const index = this.media.findIndex((media) => media.id === id);
    if (index === -1) return false;

    this.media.splice(index, 1);
    return true;
  }
}

// Export a singleton instance
export const db = new Database();
