"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Lock,
  Shield,
  Database,
  GitBranch,
  FlaskConical,
  Cpu,
  Network,
} from "lucide-react";

const features = [
  {
    icon: Network,
    title: "REST API Design",
    desc: "Building versioned, documented REST APIs following OpenAPI 3.0 standards. Richardson Maturity Model Level 3 with HATEOAS, proper HTTP semantics, and Swagger/Scalar documentation.",
    code: `[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class OrdersController : ControllerBase
{
    [HttpGet("{id}")]
    [ProducesResponseType<OrderDto>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetById(Guid id)
        => Ok(await _mediator.Send(new GetOrderQuery(id)));
}`,
    tags: ["OpenAPI 3.0", "Versioning", "HATEOAS", "Swagger"],
  },
  {
    icon: Cpu,
    title: ".NET 8 Web API",
    desc: "Production-grade ASP.NET Core APIs with minimal APIs, CQRS/MediatR pattern, FluentValidation, global error handling middleware, and structured logging with Serilog.",
    code: `var builder = WebApplication.CreateBuilder(args);
builder.Services
    .AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly))
    .AddFluentValidationAutoValidation()
    .AddSerilog()
    .AddOpenTelemetry();`,
    tags: [".NET 8", "Minimal APIs", "MediatR", "CQRS", "Serilog"],
  },
  {
    icon: Lock,
    title: "JWT / OAuth2 / OIDC Auth",
    desc: "Implementing robust authentication with JWT bearer tokens, OAuth2 authorization code flow with PKCE, OpenID Connect for SSO, and token refresh handling.",
    code: `builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.Authority = config["Keycloak:Authority"];
        options.TokenValidationParameters = new()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ClockSkew = TimeSpan.Zero
        };
    });`,
    tags: ["JWT", "OAuth2", "OIDC", "PKCE", "Keycloak"],
  },
  {
    icon: Shield,
    title: "RBAC & Claims-Based AuthZ",
    desc: "Fine-grained authorization using ASP.NET Core policy engine, custom requirement handlers, claims transformation, and attribute-based access control (ABAC) patterns.",
    code: `services.AddAuthorization(options => {
    options.AddPolicy("CanManageOrders", policy =>
        policy.RequireClaim("permission", "orders:write")
              .RequireAuthenticatedUser());
});

[Authorize(Policy = "CanManageOrders")]
[HttpPost]
public async Task<IActionResult> Create(...)`,
    tags: ["RBAC", "Policies", "Claims", "ABAC"],
  },
  {
    icon: Database,
    title: "EF Core & Dapper",
    desc: "Strategic use of EF Core with Code-First migrations, owned entities, and value objects for complex domain models. Dapper for high-performance read queries and raw SQL optimizations.",
    code: `// EF Core: Write model
await context.Orders
    .Include(o => o.Items)
    .Where(o => o.CustomerId == id)
    .ExecuteUpdateAsync(...);

// Dapper: Read model (high perf)
return await connection.QueryAsync<OrderSummaryDto>(
    sql, new { CustomerId = id }, commandTimeout: 30);`,
    tags: ["EF Core", "Dapper", "Code-First", "Repository Pattern"],
  },
  {
    icon: Code2,
    title: "SQL Server & PostgreSQL",
    desc: "Designing normalized schemas, writing efficient stored procedures, CTEs, window functions, and execution plan analysis. Managing migrations and zero-downtime schema changes.",
    code: `-- Optimized reporting query
WITH RankedOrders AS (
    SELECT *, ROW_NUMBER() OVER (
        PARTITION BY CustomerId ORDER BY CreatedAt DESC
    ) AS rn
    FROM Orders WHERE Status = 'Completed'
)
SELECT * FROM RankedOrders WHERE rn <= 10;`,
    tags: ["SQL Server", "PostgreSQL", "CTEs", "Indexing", "Optimization"],
  },
  {
    icon: FlaskConical,
    title: "Unit & Integration Testing",
    desc: "TDD with xUnit, Moq/NSubstitute for mocking dependencies, FluentAssertions for readable tests, and integration testing with WebApplicationFactory and TestContainers.",
    code: `[Fact]
public async Task CreateOrder_ValidRequest_ReturnsCreated()
{
    // Arrange
    var request = new CreateOrderCommand(customerId, items);
    _mockRepo.Setup(r => r.AddAsync(It.IsAny<Order>())).ReturnsAsync(order);

    // Act & Assert
    var result = await _handler.Handle(request, CancellationToken.None);
    result.Should().BeOfType<CreatedResult>();
}`,
    tags: ["xUnit", "Moq", "FluentAssertions", "TDD", "TestContainers"],
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    desc: "Multi-stage pipelines with GitHub Actions and Azure DevOps. Build → Test → Security scan → Docker build → push to ACR → deploy to AKS with blue-green deployments.",
    code: `# GitHub Actions pipeline
jobs:
  build-and-deploy:
    steps:
      - name: Build & Test
        run: dotnet test --configuration Release
      - name: Docker Build & Push
        uses: docker/build-push-action@v5
      - name: Deploy to AKS
        uses: azure/aks-set-context@v3`,
    tags: ["GitHub Actions", "Azure DevOps", "Docker", "AKS", "Blue-Green"],
  },
];

export default function BackendEngineering() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="backend" ref={ref} className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent-purple uppercase tracking-widest mb-3">
            // Backend Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Server-Side Expertise
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Deep .NET engineering experience — from API design patterns to authentication
            architecture, database optimization, and production-grade CI/CD.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-2xl overflow-hidden glass-hover group"
            >
              <div className="p-6 border-b border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-accent-purple/20 flex-shrink-0">
                    <feat.icon className="h-5 w-5 text-accent-purple" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-text-primary mb-1.5">{feat.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {feat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent-purple/8 border border-accent-purple/15 text-accent-purple"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Code snippet */}
              <div className="relative bg-[#080812] p-4">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-xs text-text-muted font-mono">snippet.cs</span>
                </div>
                <pre className="text-xs font-mono text-text-muted overflow-x-auto leading-relaxed whitespace-pre-wrap">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: feat.code
                        .replace(/\/\/.*/g, '<span style="color:#475569">$&</span>')
                        .replace(/(await|var|new|async|public|private|return|string|int|bool|void|class|using|options|services|builder|policy)\b/g, '<span style="color:#a855f7">$1</span>')
                        .replace(/(&lt;|&gt;|"[^"]*")/g, '<span style="color:#22d3ee">$&</span>'),
                    }}
                  />
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
