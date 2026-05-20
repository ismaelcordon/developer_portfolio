import { BlogPost } from "../types/BlogPost";

export const blogPosts: BlogPost[] = [
    {
        slug: "building-modern-android-apps-with-jetpack-compose",
        title: "Building Modern Android Apps with Jetpack Compose",
        description:
            "Learn how to leverage Jetpack Compose to build beautiful and performant Android applications with declarative UI",
        tag: "Android",
        date: "2026-02-14",
    },
    {
        slug: "managing-textfields-focus-in-jetpack-compose",
        title: "Managing textfields focus in Jetpack Compose",
        description:
            "Learn how to manage in a good way interactions and focus movements on textfields in Jetpack Compose",
        tag: "Android",
        date: "2026-03-23",
    },
    {
        slug: "what-a-xcconfig-is-and-how-to-use-it",
        title: "What a xcconfig is and how to use it",
        description:
            "Moving API keys and sensitive information to a better place in order to hide it",
        tag: "iOS",
        date: "2026-03-26",
    },
    {
        slug: "state-management-in-jetpack-compose",
        title: "State management in Jetpack Compose",
        description:
            "A practical guide to remember, rememberSaveable, and hoisting state in your Compose hierarchy",
        tag: "Android",
        date: "2026-04-02",
    },
    {
        slug: "writing-custom-modifiers-in-compose",
        title: "Writing custom modifiers in Compose",
        description:
            "How to extend the Modifier API with reusable behaviour using Modifier.Node and composed",
        tag: "Android",
        date: "2026-03-30",
    },
    {
        slug: "animations-in-jetpack-compose",
        title: "Animations in Jetpack Compose",
        description:
            "From animateAsState to AnimatedContent: choosing the right animation API for each scenario",
        tag: "Android",
        date: "2026-03-18",
    },
    {
        slug: "side-effects-in-compose",
        title: "Side effects in Compose",
        description:
            "Understanding LaunchedEffect, DisposableEffect, and SideEffect to keep your composables predictable",
        tag: "Android",
        date: "2026-03-11",
    },
    {
        slug: "compositionlocal-explained",
        title: "CompositionLocal explained",
        description:
            "When to reach for CompositionLocal and why it should not become your application's service locator",
        tag: "Android",
        date: "2026-03-05",
    },
    {
        slug: "performance-optimization-in-compose",
        title: "Performance optimization in Compose",
        description:
            "Stability, skippability, and recomposition counts: practical patterns to keep your UI fast",
        tag: "Android",
        date: "2026-02-27",
    },
    {
        slug: "testing-compose-ui-with-semantics",
        title: "Testing Compose UI with semantics",
        description:
            "Writing reliable UI tests that survive refactors by leveraging the semantics tree",
        tag: "Android",
        date: "2026-02-21",
    },
    {
        slug: "material-3-theming-guide",
        title: "Material 3 theming guide",
        description:
            "Building a cohesive theme in Compose with dynamic color, typography, and shape tokens",
        tag: "Android",
        date: "2026-02-09",
    },
    {
        slug: "lazycolumn-deep-dive",
        title: "LazyColumn deep dive",
        description:
            "Keys, contentType, and item layouts: getting the most out of Compose's lazy lists",
        tag: "Android",
        date: "2026-02-03",
    },
    {
        slug: "custom-layouts-in-compose",
        title: "Custom layouts in Compose",
        description:
            "Implementing your own Layout composable when Row, Column, and Box are not enough",
        tag: "Android",
        date: "2026-01-28",
    },
    {
        slug: "constraintlayout-in-compose",
        title: "ConstraintLayout in Compose",
        description:
            "Mapping ConstraintLayout concepts to Compose and when it actually pays off",
        tag: "Android",
        date: "2026-01-22",
    },
    {
        slug: "type-safe-navigation-compose",
        title: "Type-safe Navigation Compose",
        description:
            "Using Kotlin serialization and route objects to remove stringly typed navigation arguments",
        tag: "Android",
        date: "2026-01-15",
    },
    {
        slug: "nested-navigation-graphs",
        title: "Nested navigation graphs",
        description:
            "Structuring multi-feature apps with nested graphs and clean cross-feature transitions",
        tag: "Android",
        date: "2026-01-09",
    },
    {
        slug: "snapshot-system-in-compose",
        title: "The snapshot system in Compose",
        description:
            "How Compose tracks state changes under the hood and what that means for your code",
        tag: "Android",
        date: "2026-01-02",
    },
    {
        slug: "accessibility-in-compose",
        title: "Accessibility in Compose",
        description:
            "Content descriptions, merge semantics, and TalkBack: shipping inclusive Android apps",
        tag: "Android",
        date: "2025-12-22",
    },
    {
        slug: "building-a-design-system-in-compose",
        title: "Building a design system in Compose",
        description:
            "Tokens, primitives, and components: a layered approach to a maintainable design system",
        tag: "Android",
        date: "2025-12-15",
    },
    {
        slug: "bottom-sheets-in-compose",
        title: "Bottom sheets in Compose",
        description:
            "Modal versus standard bottom sheets and how to drive them from your ViewModel",
        tag: "Android",
        date: "2025-12-08",
    },
    {
        slug: "drawing-on-canvas-with-compose",
        title: "Drawing on Canvas with Compose",
        description:
            "Custom drawings, gradients, and gestures combined to build delightful visual experiences",
        tag: "Android",
        date: "2025-12-01",
    },
    {
        slug: "slot-apis-in-compose",
        title: "Slot APIs in Compose",
        description:
            "Designing flexible composables with slot parameters that adapt to many use cases",
        tag: "Android",
        date: "2025-11-24",
    },
    {
        slug: "mvi-architecture-in-android",
        title: "MVI architecture in Android",
        description:
            "State, Action, and Event: a pragmatic MVI setup tailored for Compose-based apps",
        tag: "Android",
        date: "2025-11-17",
    },
    {
        slug: "clean-architecture-for-android",
        title: "Clean Architecture for Android",
        description:
            "How to apply Clean Architecture without drowning in boilerplate or premature abstractions",
        tag: "Android",
        date: "2025-11-10",
    },
    {
        slug: "repository-pattern-in-android",
        title: "The repository pattern in Android",
        description:
            "Boundaries, single sources of truth, and the difference between data sources and repositories",
        tag: "Android",
        date: "2025-11-03",
    },
    {
        slug: "use-cases-explained",
        title: "Use cases explained",
        description:
            "When use cases earn their keep and when they just add a layer of indirection",
        tag: "Android",
        date: "2025-10-27",
    },
    {
        slug: "koin-dependency-injection",
        title: "Koin dependency injection",
        description:
            "Setting up Koin modules per layer and wiring everything together in your Application",
        tag: "Android",
        date: "2025-10-20",
    },
    {
        slug: "hilt-vs-koin",
        title: "Hilt vs Koin",
        description:
            "An honest comparison of the two most popular DI solutions for modern Android",
        tag: "Android",
        date: "2025-10-13",
    },
    {
        slug: "layer-mappers-in-android",
        title: "Layer mappers in Android",
        description:
            "Why DTOs, domain models, and UI models should not be the same data class",
        tag: "Android",
        date: "2025-10-06",
    },
    {
        slug: "error-handling-with-sealed-classes",
        title: "Error handling with sealed classes",
        description:
            "Modeling failures as data with sealed hierarchies and exhaustive when expressions",
        tag: "Android",
        date: "2025-09-29",
    },
    {
        slug: "result-wrappers-in-kotlin",
        title: "Result wrappers in Kotlin",
        description:
            "Designing your own Result<T, E> type to keep error paths explicit and typed",
        tag: "Android",
        date: "2025-09-22",
    },
    {
        slug: "domain-modeling-in-android",
        title: "Domain modeling in Android",
        description:
            "Making invalid states unrepresentable with Kotlin's type system",
        tag: "Android",
        date: "2025-09-15",
    },
    {
        slug: "kotlin-coroutines-basics",
        title: "Kotlin coroutines basics",
        description:
            "Suspending functions, scopes, and jobs explained from first principles",
        tag: "Android",
        date: "2025-09-08",
    },
    {
        slug: "kotlin-flow-guide",
        title: "Kotlin Flow guide",
        description:
            "Cold versus hot streams, operators, and back pressure with Kotlin Flow",
        tag: "Android",
        date: "2025-09-01",
    },
    {
        slug: "stateflow-vs-sharedflow",
        title: "StateFlow vs SharedFlow",
        description:
            "Choosing between StateFlow and SharedFlow in your ViewModel and beyond",
        tag: "Android",
        date: "2025-08-25",
    },
    {
        slug: "channel-vs-flow",
        title: "Channel vs Flow",
        description:
            "When events warrant a Channel and when a Flow is the better tool for the job",
        tag: "Android",
        date: "2025-08-18",
    },
    {
        slug: "coroutine-dispatchers",
        title: "Coroutine dispatchers",
        description:
            "Default, IO, Main, and Unconfined: choosing the right dispatcher for each workload",
        tag: "Android",
        date: "2025-08-11",
    },
    {
        slug: "structured-concurrency",
        title: "Structured concurrency",
        description:
            "Why parent-child relationships between coroutines make leaks much harder to write",
        tag: "Android",
        date: "2025-08-04",
    },
    {
        slug: "inline-functions-in-kotlin",
        title: "Inline functions in Kotlin",
        description:
            "Reified types, non-local returns, and the cost of inlining considered honestly",
        tag: "Android",
        date: "2025-07-28",
    },
    {
        slug: "sealed-classes-and-interfaces",
        title: "Sealed classes and interfaces",
        description:
            "Designing closed hierarchies that play nicely with when expressions and serialization",
        tag: "Android",
        date: "2025-07-21",
    },
    {
        slug: "value-classes-in-kotlin",
        title: "Value classes in Kotlin",
        description:
            "Squeezing zero-cost domain types out of value classes with @JvmInline",
        tag: "Android",
        date: "2025-07-14",
    },
    {
        slug: "type-safe-builders-in-kotlin",
        title: "Type-safe builders in Kotlin",
        description:
            "Building expressive DSLs with lambdas with receivers and @DslMarker",
        tag: "Android",
        date: "2025-07-07",
    },
    {
        slug: "unit-testing-viewmodels",
        title: "Unit testing ViewModels",
        description:
            "A repeatable pattern for testing Compose ViewModels with Turbine and fake repositories",
        tag: "Android",
        date: "2025-06-30",
    },
    {
        slug: "turbine-for-flow-testing",
        title: "Turbine for Flow testing",
        description:
            "Asserting on hot and cold flows without sleeps, polling, or flaky tests",
        tag: "Android",
        date: "2025-06-23",
    },
    {
        slug: "faking-repositories-in-tests",
        title: "Faking repositories in tests",
        description:
            "Why hand-written fakes are usually a better tool than mocking libraries",
        tag: "Android",
        date: "2025-06-16",
    },
    {
        slug: "junit-5-in-android",
        title: "JUnit 5 in Android",
        description:
            "Migrating from JUnit 4 to JUnit 5 and using its lifecycle to write cleaner tests",
        tag: "Android",
        date: "2025-06-09",
    },
    {
        slug: "compose-ui-testing",
        title: "Compose UI testing",
        description:
            "ComposeTestRule, isolation, and synchronization patterns for stable Compose UI tests",
        tag: "Android",
        date: "2025-06-02",
    },
    {
        slug: "end-to-end-testing-with-maestro",
        title: "End-to-end testing with Maestro",
        description:
            "Setting up Maestro flows for critical user journeys and running them in CI",
        tag: "Android",
        date: "2025-05-26",
    },
    {
        slug: "kotlin-multiplatform-fundamentals",
        title: "Kotlin Multiplatform fundamentals",
        description:
            "What KMP actually shares, what it does not, and how the build model fits together",
        tag: "Android",
        date: "2025-05-19",
    },
    {
        slug: "sharing-code-with-kmp",
        title: "Sharing code with KMP",
        description:
            "Choosing what to share between Android and iOS to maximize value without overreach",
        tag: "Android",
        date: "2025-05-12",
    },
    {
        slug: "expect-actual-declarations",
        title: "expect/actual declarations",
        description:
            "Bridging platform-specific APIs in Kotlin Multiplatform with the expect/actual mechanism",
        tag: "Android",
        date: "2025-05-05",
    },
    {
        slug: "kmp-networking-with-ktor",
        title: "KMP networking with Ktor",
        description:
            "Configuring a shared Ktor HttpClient with serialization, logging, and auth across platforms",
        tag: "Android",
        date: "2025-04-28",
    },
    {
        slug: "sqldelight-in-kmp",
        title: "SQLDelight in KMP",
        description:
            "Generating type-safe database access from SQL files in a multiplatform module",
        tag: "Android",
        date: "2025-04-21",
    },
    {
        slug: "compose-multiplatform-intro",
        title: "Compose Multiplatform intro",
        description:
            "Sharing UI code between Android, iOS, and desktop with Compose Multiplatform",
        tag: "Android",
        date: "2025-04-14",
    },
    {
        slug: "swiftui-fundamentals",
        title: "SwiftUI fundamentals",
        description:
            "Views, modifiers, and the declarative mental model behind SwiftUI",
        tag: "iOS",
        date: "2025-04-07",
    },
    {
        slug: "state-binding-observedobject-in-swiftui",
        title: "State, Binding, ObservedObject in SwiftUI",
        description:
            "Picking the right property wrapper for each piece of state in your view hierarchy",
        tag: "iOS",
        date: "2025-03-31",
    },
    {
        slug: "swiftui-navigation",
        title: "SwiftUI navigation",
        description:
            "NavigationStack, paths, and value-driven navigation in modern SwiftUI",
        tag: "iOS",
        date: "2025-03-24",
    },
    {
        slug: "custom-view-modifiers",
        title: "Custom view modifiers in SwiftUI",
        description:
            "Encapsulating reusable styling and behavior into ViewModifier types",
        tag: "iOS",
        date: "2025-03-17",
    },
    {
        slug: "animations-in-swiftui",
        title: "Animations in SwiftUI",
        description:
            "Implicit, explicit, and matchedGeometryEffect: a tour of SwiftUI's animation toolbox",
        tag: "iOS",
        date: "2025-03-10",
    },
    {
        slug: "swiftui-environment-values",
        title: "SwiftUI environment values",
        description:
            "Using @Environment to propagate context without prop-drilling through every view",
        tag: "iOS",
        date: "2025-03-03",
    },
    {
        slug: "preferencekey-explained",
        title: "PreferenceKey explained",
        description:
            "Sending data up the view tree with PreferenceKey and a few real-world examples",
        tag: "iOS",
        date: "2025-02-24",
    },
    {
        slug: "swiftui-lazy-stacks",
        title: "SwiftUI lazy stacks",
        description:
            "LazyVStack, LazyHStack, and List: choosing the right container for long content",
        tag: "iOS",
        date: "2025-02-17",
    },
    {
        slug: "swiftui-canvas",
        title: "SwiftUI Canvas",
        description:
            "Custom drawing with Canvas and TimelineView for visualizations and effects",
        tag: "iOS",
        date: "2025-02-10",
    },
    {
        slug: "async-await-in-swiftui",
        title: "Async/await in SwiftUI",
        description:
            "Driving SwiftUI views from async functions with task and refreshable",
        tag: "iOS",
        date: "2025-02-03",
    },
    {
        slug: "swift-concurrency",
        title: "Swift concurrency",
        description:
            "Tasks, task groups, and cancellation in the modern Swift concurrency model",
        tag: "iOS",
        date: "2025-01-27",
    },
    {
        slug: "actors-in-swift",
        title: "Actors in Swift",
        description:
            "Protecting mutable state with actors and understanding actor reentrancy",
        tag: "iOS",
        date: "2025-01-20",
    },
    {
        slug: "sendable-in-swift",
        title: "Sendable in Swift",
        description:
            "Sendable conformance, isolation domains, and the strict concurrency checking story",
        tag: "iOS",
        date: "2025-01-13",
    },
    {
        slug: "property-wrappers-in-swift",
        title: "Property wrappers in Swift",
        description:
            "How property wrappers work under the hood and when to write your own",
        tag: "iOS",
        date: "2025-01-06",
    },
    {
        slug: "result-builders-in-swift",
        title: "Result builders in Swift",
        description:
            "The mechanism that powers SwiftUI explained with a small DSL of your own",
        tag: "iOS",
        date: "2024-12-30",
    },
    {
        slug: "generics-in-swift",
        title: "Generics in Swift",
        description:
            "Some, any, and primary associated types in modern Swift generics",
        tag: "iOS",
        date: "2024-12-23",
    },
    {
        slug: "protocol-oriented-programming",
        title: "Protocol-oriented programming",
        description:
            "Composing behavior with protocols and protocol extensions in real-world code",
        tag: "iOS",
        date: "2024-12-16",
    },
    {
        slug: "error-handling-patterns-in-swift",
        title: "Error handling patterns in Swift",
        description:
            "Throwing functions, Result, and typed throws weighed up against each other",
        tag: "iOS",
        date: "2024-12-09",
    },
    {
        slug: "combine-framework-basics",
        title: "Combine framework basics",
        description:
            "Publishers, subscribers, and operators with practical Combine recipes",
        tag: "iOS",
        date: "2024-12-02",
    },
    {
        slug: "codable-deep-dive",
        title: "Codable deep dive",
        description:
            "Custom encoding, decoding strategies, and tips for messy real-world JSON",
        tag: "iOS",
        date: "2024-11-25",
    },
    {
        slug: "xcode-build-settings",
        title: "Xcode build settings",
        description:
            "Demystifying build settings, configurations, and how xcconfig files fit in",
        tag: "iOS",
        date: "2024-11-18",
    },
    {
        slug: "provisioning-profiles",
        title: "Provisioning profiles",
        description:
            "Certificates, identifiers, and profiles explained without the usual hand-waving",
        tag: "iOS",
        date: "2024-11-11",
    },
    {
        slug: "app-store-submission",
        title: "App Store submission",
        description:
            "A checklist for shipping your iOS app through App Store Connect with confidence",
        tag: "iOS",
        date: "2024-11-04",
    },
    {
        slug: "testflight-workflow",
        title: "TestFlight workflow",
        description:
            "Internal versus external testers, build expirations, and feedback loops in TestFlight",
        tag: "iOS",
        date: "2024-10-28",
    },
    {
        slug: "crashlytics-integration",
        title: "Crashlytics integration",
        description:
            "Capturing crashes and non-fatals on iOS and Android with consistent metadata",
        tag: "iOS",
        date: "2024-10-21",
    },
    {
        slug: "push-notifications-setup",
        title: "Push notifications setup",
        description:
            "APNs, FCM, and tokens: a full walkthrough for production push notifications",
        tag: "iOS",
        date: "2024-10-14",
    },
    {
        slug: "git-workflows-for-teams",
        title: "Git workflows for teams",
        description:
            "Trunk-based, GitFlow, and stacked branches compared from a mobile team's perspective",
        tag: "Utils",
        date: "2024-10-07",
    },
    {
        slug: "conventional-commits",
        title: "Conventional commits",
        description:
            "Adopting conventional commits to drive changelogs and semantic versioning",
        tag: "Utils",
        date: "2024-09-30",
    },
    {
        slug: "github-actions-ci-cd",
        title: "GitHub Actions CI/CD",
        description:
            "Workflows, matrix builds, and reusable actions for mobile delivery pipelines",
        tag: "Utils",
        date: "2024-09-23",
    },
    {
        slug: "fastlane-for-ios-deployments",
        title: "Fastlane for iOS deployments",
        description:
            "Automating signing, builds, and uploads with Fastlane lanes for iOS",
        tag: "Utils",
        date: "2024-09-16",
    },
    {
        slug: "gradle-build-optimization",
        title: "Gradle build optimization",
        description:
            "Configuration cache, build cache, and isolated projects: making Gradle quick again",
        tag: "Utils",
        date: "2024-09-09",
    },
    {
        slug: "self-hosted-ci-runners",
        title: "Self-hosted CI runners",
        description:
            "Running GitHub Actions on your own hardware to speed up Android and iOS builds",
        tag: "Utils",
        date: "2024-09-02",
    },
    {
        slug: "productive-dev-environment",
        title: "Productive dev environment",
        description:
            "Dotfiles, shell setup, and small tools that compound into real productivity gains",
        tag: "Utils",
        date: "2024-08-26",
    },
    {
        slug: "terminal-customization",
        title: "Terminal customization",
        description:
            "Shells, prompts, and multiplexers: a setup that stays out of your way",
        tag: "Utils",
        date: "2024-08-19",
    },
    {
        slug: "vim-for-mobile-devs",
        title: "Vim for mobile devs",
        description:
            "Adopting Vim motions inside Android Studio, Xcode, and your editor of choice",
        tag: "Utils",
        date: "2024-08-12",
    },
    {
        slug: "vs-code-shortcuts-for-mobile",
        title: "VS Code shortcuts for mobile devs",
        description:
            "A focused subset of shortcuts that pay off when navigating cross-platform repos",
        tag: "Utils",
        date: "2024-08-05",
    },
    {
        slug: "memory-leaks-in-android",
        title: "Memory leaks in Android",
        description:
            "Common leak sources in Compose apps and how to detect them with LeakCanary",
        tag: "Android",
        date: "2024-07-29",
    },
    {
        slug: "profiling-android-apps",
        title: "Profiling Android apps",
        description:
            "Using the Android Studio profiler and Perfetto to find real performance bottlenecks",
        tag: "Android",
        date: "2024-07-22",
    },
    {
        slug: "app-startup-optimization",
        title: "App startup optimization",
        description:
            "Cold start metrics, the App Startup library, and lazy initialization strategies",
        tag: "Android",
        date: "2024-07-15",
    },
    {
        slug: "baseline-profiles",
        title: "Baseline profiles",
        description:
            "Generating and shipping baseline profiles to make critical paths fast on first launch",
        tag: "Android",
        date: "2024-07-08",
    },
    {
        slug: "macrobenchmark-in-android",
        title: "Macrobenchmark in Android",
        description:
            "Writing reliable startup, scrolling, and frame timing benchmarks with Macrobenchmark",
        tag: "Android",
        date: "2024-07-01",
    },
    {
        slug: "r8-and-code-shrinking",
        title: "R8 and code shrinking",
        description:
            "Understanding what R8 does to your bytecode and how to debug shrunk builds",
        tag: "Android",
        date: "2024-06-24",
    },
    {
        slug: "proguard-rules-survival-guide",
        title: "ProGuard rules survival guide",
        description:
            "Reading, writing, and trimming ProGuard rules without breaking reflection",
        tag: "Android",
        date: "2024-06-17",
    },
    {
        slug: "apk-size-optimization",
        title: "APK size optimization",
        description:
            "Resource shrinking, density splits, and asset packs to keep download size in check",
        tag: "Android",
        date: "2024-06-10",
    },
    {
        slug: "app-bundle-deep-dive",
        title: "App Bundle deep dive",
        description:
            "How AAB delivers smaller, targeted APKs and what that means for your build setup",
        tag: "Android",
        date: "2024-06-03",
    },
    {
        slug: "dynamic-feature-modules",
        title: "Dynamic feature modules",
        description:
            "On-demand delivery of features with Play Feature Delivery and SplitInstallManager",
        tag: "Android",
        date: "2024-05-27",
    },
    {
        slug: "kotlin-dsl-for-gradle",
        title: "Kotlin DSL for Gradle",
        description:
            "Migrating from Groovy to Kotlin DSL build scripts and what you gain in return",
        tag: "Utils",
        date: "2024-05-20",
    },
    {
        slug: "version-catalogs-in-gradle",
        title: "Version catalogs in Gradle",
        description:
            "Centralizing dependency versions with version catalogs across multimodule projects",
        tag: "Utils",
        date: "2024-05-13",
    },
    {
        slug: "convention-plugins",
        title: "Convention plugins",
        description:
            "Building reusable Gradle convention plugins for consistent module configuration",
        tag: "Utils",
        date: "2024-05-06",
    },
    {
        slug: "multimodule-android-projects",
        title: "Multimodule Android projects",
        description:
            "Splitting an Android project into modules without paying for it in build times",
        tag: "Android",
        date: "2024-04-29",
    },
    {
        slug: "module-dependency-rules",
        title: "Module dependency rules",
        description:
            "Enforcing architectural boundaries between modules with Gradle and ArchUnit",
        tag: "Android",
        date: "2024-04-22",
    },
    {
        slug: "ksp-vs-kapt",
        title: "KSP vs KAPT",
        description:
            "Why KSP exists, how it differs from KAPT, and a migration story from a real project",
        tag: "Android",
        date: "2024-04-15",
    },
    {
        slug: "annotation-processing-in-kotlin",
        title: "Annotation processing in Kotlin",
        description:
            "Writing your first KSP processor to generate boilerplate at compile time",
        tag: "Android",
        date: "2024-04-08",
    },
    {
        slug: "from-viewbinding-to-compose",
        title: "From ViewBinding to Compose",
        description:
            "An incremental path to migrating XML-based screens to Jetpack Compose",
        tag: "Android",
        date: "2024-04-01",
    },
    {
        slug: "migrating-from-xml",
        title: "Migrating from XML to Compose",
        description:
            "Strategies, interop tools, and pitfalls when porting legacy UI to Compose",
        tag: "Android",
        date: "2024-03-25",
    },
    {
        slug: "strict-mode-in-android",
        title: "Strict mode in Android",
        description:
            "Catching disk I/O on the main thread and other classics with StrictMode policies",
        tag: "Android",
        date: "2024-03-18",
    },
    {
        slug: "workmanager-basics",
        title: "WorkManager basics",
        description:
            "Constraints, chaining, and unique work for reliable background tasks",
        tag: "Android",
        date: "2024-03-11",
    },
    {
        slug: "background-tasks-in-android",
        title: "Background tasks in Android",
        description:
            "Choosing between WorkManager, JobScheduler, and foreground services for your use case",
        tag: "Android",
        date: "2024-03-04",
    },
    {
        slug: "foreground-services-best-practices",
        title: "Foreground services best practices",
        description:
            "Notification requirements, types, and surviving Android's tightening restrictions",
        tag: "Android",
        date: "2024-02-26",
    },
    {
        slug: "notification-channels",
        title: "Notification channels",
        description:
            "Designing channels, importance levels, and grouping for a respectful notification UX",
        tag: "Android",
        date: "2024-02-19",
    },
    {
        slug: "datastore-migration",
        title: "DataStore migration",
        description:
            "Moving from SharedPreferences to Preferences DataStore without losing user data",
        tag: "Android",
        date: "2024-02-12",
    },
    {
        slug: "room-database-tips",
        title: "Room database tips",
        description:
            "Migrations, indexing, and Flow-based queries for a smooth Room experience",
        tag: "Android",
        date: "2024-02-05",
    },
    {
        slug: "sqldelight-vs-room",
        title: "SQLDelight vs Room",
        description:
            "Comparing the two main local persistence libraries from the perspective of an Android team",
        tag: "Android",
        date: "2024-01-29",
    },
    {
        slug: "network-caching-strategies",
        title: "Network caching strategies",
        description:
            "HTTP caching, in-memory caches, and offline-first patterns for mobile clients",
        tag: "Android",
        date: "2024-01-22",
    },
    {
        slug: "retrofit-best-practices",
        title: "Retrofit best practices",
        description:
            "Configuring Retrofit and OkHttp for production: timeouts, retries, and observability",
        tag: "Android",
        date: "2024-01-15",
    },
    {
        slug: "ktor-client-deep-dive",
        title: "Ktor client deep dive",
        description:
            "Plugins, content negotiation, and engine selection in the Ktor HTTP client",
        tag: "Android",
        date: "2024-01-08",
    },
    {
        slug: "okhttp-interceptors",
        title: "OkHttp interceptors",
        description:
            "Application versus network interceptors and patterns for auth, logging, and caching",
        tag: "Android",
        date: "2024-01-02",
    },
    {
        slug: "token-refresh-patterns",
        title: "Token refresh patterns",
        description:
            "A robust authentication refresh pipeline that survives concurrent requests",
        tag: "Android",
        date: "2023-12-26",
    },
    {
        slug: "secure-storage-on-android",
        title: "Secure storage on Android",
        description:
            "EncryptedSharedPreferences, the Keystore, and what is actually safe on a rooted device",
        tag: "Android",
        date: "2023-12-19",
    },
    {
        slug: "keystore-and-biometrics",
        title: "Keystore and biometrics",
        description:
            "Gating sensitive operations behind biometric prompts using the Android Keystore",
        tag: "Android",
        date: "2023-12-12",
    },
    {
        slug: "certificate-pinning",
        title: "Certificate pinning",
        description:
            "Pinning certificates and public keys without painting yourself into a corner",
        tag: "Android",
        date: "2023-12-05",
    },
    {
        slug: "network-security-configuration",
        title: "Network security configuration",
        description:
            "Locking down cleartext traffic and trust anchors with the Network Security Configuration",
        tag: "Android",
        date: "2023-11-28",
    },
    {
        slug: "deep-linking-in-android",
        title: "Deep linking in Android",
        description:
            "App links, intent filters, and a sensible deep link router for Compose apps",
        tag: "Android",
        date: "2023-11-21",
    },
    {
        slug: "app-shortcuts",
        title: "App shortcuts",
        description:
            "Static, dynamic, and pinned shortcuts to surface key actions from the launcher",
        tag: "Android",
        date: "2023-11-14",
    },
    {
        slug: "app-widgets-in-android",
        title: "App widgets in Android",
        description:
            "Modern app widgets with size classes, configuration activities, and data updates",
        tag: "Android",
        date: "2023-11-07",
    },
    {
        slug: "glance-widgets-with-compose",
        title: "Glance widgets with Compose",
        description:
            "Building home screen widgets in a Compose-flavored API with Jetpack Glance",
        tag: "Android",
        date: "2023-10-31",
    },
];
